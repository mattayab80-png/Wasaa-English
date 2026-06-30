/* ============================================================================
   EXERCISES.JS — Moteur de rendu et de validation des exercices interactifs.
   Chaque type d'exercice (mcq, fill, match, order) sait :
     1. se rendre dans le DOM (render)
     2. déterminer si la réponse actuelle de l'élève est correcte (isCorrect)
     3. afficher l'état correct/incorrect visuellement (revealAnswer)
   Le contrôleur (app.js) orchestre l'avancement entre exercices.
   ========================================================================== */

const ExerciseEngine = {

  /* État interne de l'exercice actuellement affiché */
  _state: null,

  /* Point d'entrée : rend un exercice dans le conteneur donné */
  render(exercise, container) {
    this._state = { exercise, answered: false, userAnswer: null, correct: null };
    container.innerHTML = "";

    const kicker = document.createElement("div");
    kicker.className = "exercise-kicker";
    kicker.innerHTML = `${getIcon(this._kickerIcon(exercise.type))} ${this._kickerLabel(exercise.type)}`;
    container.appendChild(kicker);

    const q = document.createElement("div");
    q.className = "exercise-question";
    q.textContent = exercise.question;
    container.appendChild(q);

    const body = document.createElement("div");
    body.id = "exerciseBody";
    container.appendChild(body);

    switch (exercise.type) {
      case "mcq": this._renderMcq(exercise, body); break;
      case "fill": this._renderFill(exercise, body); break;
      case "match": this._renderMatch(exercise, body); break;
      case "order": this._renderOrder(exercise, body); break;
      default: body.textContent = "Type d'exercice non pris en charge.";
    }
  },

  _kickerIcon(type) {
    return { mcq: "check", fill: "spark", match: "puzzle", order: "layers" }[type] || "star";
  },
  _kickerLabel(type) {
    return {
      mcq: "Choix multiple",
      fill: "Complète la phrase",
      match: "Associe les mots",
      order: "Reconstitue la phrase"
    }[type] || "Exercice";
  },

  /* Indique si on peut déjà soumettre une réponse */
  canSubmit() {
    if (!this._state) return false;
    const { exercise, userAnswer } = this._state;
    if (exercise.type === "mcq") return userAnswer !== null && userAnswer !== undefined;
    if (exercise.type === "fill") return typeof userAnswer === "string" && userAnswer.trim().length > 0;
    if (exercise.type === "match") return userAnswer && userAnswer.length === exercise.pairs.length;
    if (exercise.type === "order") return userAnswer && userAnswer.length === exercise.answer.length;
    return false;
  },

  /* Vérifie la réponse, met à jour l'état visuel, renvoie {correct: bool} */
  checkAnswer() {
    const { exercise } = this._state;
    let correct = false;

    if (exercise.type === "mcq") {
      correct = this._state.userAnswer === exercise.answer;
      this._revealMcq(exercise, this._state.userAnswer, correct);
    } else if (exercise.type === "fill") {
      const normalize = s => s.trim().toLowerCase().replace(/\s+/g, " ");
      const userVal = normalize(this._state.userAnswer);
      correct = exercise.answer.some(a => normalize(a) === userVal);
      this._revealFill(correct);
    } else if (exercise.type === "match") {
      // déjà validé pair par pair en direct ; correct = toutes les paires bonnes
      correct = this._state.matchAllCorrect === true;
    } else if (exercise.type === "order") {
      const userSeq = this._state.userAnswer.join("|");
      const correctSeq = exercise.answer.join("|");
      correct = userSeq === correctSeq;
      this._revealOrder(correct);
    }

    this._state.answered = true;
    this._state.correct = correct;
    return { correct, explanation: exercise.explanation || null };
  },

  /* ---------------- MCQ ---------------- */
  _renderMcq(exercise, body) {
    const list = document.createElement("div");
    list.className = "options-list";
    const letters = ["A", "B", "C", "D", "E"];

    exercise.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => {
        if (this._state.answered) return;
        this._state.userAnswer = idx;
        list.querySelectorAll(".option-btn").forEach(b => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
        window.dispatchEvent(new CustomEvent("exercise:answerChanged"));
      });
      list.appendChild(btn);
    });
    body.appendChild(list);
  },

  _revealMcq(exercise, selectedIdx, correct) {
    const list = document.querySelector("#exerciseBody .options-list");
    if (!list) return;
    const buttons = list.querySelectorAll(".option-btn");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === exercise.answer) b.classList.add("is-correct");
      if (idx === selectedIdx && idx !== exercise.answer) b.classList.add("is-incorrect");
    });
  },

  /* ---------------- FILL IN THE BLANK ---------------- */
  _renderFill(exercise, body) {
    const row = document.createElement("div");
    row.className = "fill-input-row";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "fill-input";
    input.placeholder = "Écris ta réponse en anglais...";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.addEventListener("input", () => {
      if (this._state.answered) return;
      this._state.userAnswer = input.value;
      window.dispatchEvent(new CustomEvent("exercise:answerChanged"));
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") window.dispatchEvent(new CustomEvent("exercise:enterPressed"));
    });
    row.appendChild(input);
    body.appendChild(row);
    setTimeout(() => input.focus(), 50);
  },

  _revealFill(correct) {
    const input = document.querySelector("#exerciseBody .fill-input");
    if (!input) return;
    input.disabled = true;
    input.classList.add(correct ? "is-correct" : "is-incorrect");
  },

  /* ---------------- MATCH (association) ---------------- */
  _renderMatch(exercise, body) {
    const left = exercise.pairs.map((p, i) => ({ text: p[0], idx: i }));
    const right = exercise.pairs.map((p, i) => ({ text: p[1], idx: i }));
    // mélange visuel de la colonne droite
    const shuffledRight = [...right].sort(() => Math.random() - 0.5);

    this._state.matchedCount = 0;
    this._state.matchAllCorrect = false;
    this._state.selectedLeft = null;
    this._state.userAnswer = [];

    const grid = document.createElement("div");
    grid.className = "match-grid";

    const colLeft = document.createElement("div");
    colLeft.className = "match-col";
    const colRight = document.createElement("div");
    colRight.className = "match-col";

    left.forEach(item => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "match-chip";
      chip.textContent = item.text;
      chip.dataset.idx = item.idx;
      chip.addEventListener("click", () => {
        if (chip.classList.contains("is-matched") || this._state.answered) return;
        colLeft.querySelectorAll(".match-chip").forEach(c => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        this._state.selectedLeft = item.idx;
      });
      colLeft.appendChild(chip);
    });

    shuffledRight.forEach(item => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "match-chip";
      chip.textContent = item.text;
      chip.dataset.idx = item.idx;
      chip.addEventListener("click", () => {
        if (chip.classList.contains("is-matched") || this._state.answered) return;
        if (this._state.selectedLeft === null) return;

        const leftChip = colLeft.querySelector(`.match-chip[data-idx="${this._state.selectedLeft}"]`);
        if (item.idx === this._state.selectedLeft) {
          chip.classList.add("is-matched");
          leftChip.classList.add("is-matched");
          leftChip.classList.remove("is-selected");
          this._state.matchedCount++;
          this._state.userAnswer.push(item.idx);
          this._state.selectedLeft = null;
          if (this._state.matchedCount === exercise.pairs.length) {
            this._state.matchAllCorrect = true;
            window.dispatchEvent(new CustomEvent("exercise:answerChanged"));
            window.dispatchEvent(new CustomEvent("exercise:matchComplete"));
          }
        } else {
          chip.classList.add("is-wrong");
          leftChip.classList.add("is-wrong");
          setTimeout(() => {
            chip.classList.remove("is-wrong");
            leftChip.classList.remove("is-wrong", "is-selected");
          }, 420);
          this._state.selectedLeft = null;
        }
      });
      colRight.appendChild(chip);
    });

    grid.appendChild(colLeft);
    grid.appendChild(colRight);
    body.appendChild(grid);

    const hint = document.createElement("p");
    hint.style.cssText = "margin-top:16px; font-size:0.85rem; color:var(--color-ink-soft);";
    hint.textContent = "Clique sur un mot à gauche, puis sur sa traduction à droite.";
    body.appendChild(hint);
  },

  /* ---------------- ORDER (reconstitution de phrase) ---------------- */
  _renderOrder(exercise, body) {
    const words = [...exercise.answer];
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    this._state.userAnswer = [];

    const answerZone = document.createElement("div");
    answerZone.className = "order-answer";
    answerZone.id = "orderAnswerZone";

    const bank = document.createElement("div");
    bank.className = "order-bank";
    bank.id = "orderBankZone";

    const makeChip = (word, originIdx) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip";
      chip.textContent = word;
      chip.dataset.origin = originIdx;
      chip.addEventListener("click", () => {
        if (this._state.answered) return;
        if (chip.parentElement === bank) {
          bank.removeChild(chip);
          answerZone.appendChild(chip);
          this._state.userAnswer.push(word);
        } else {
          answerZone.removeChild(chip);
          bank.appendChild(chip);
          const i = this._state.userAnswer.indexOf(word);
          if (i > -1) this._state.userAnswer.splice(i, 1);
        }
        window.dispatchEvent(new CustomEvent("exercise:answerChanged"));
      });
      return chip;
    };

    shuffled.forEach((w, i) => bank.appendChild(makeChip(w, i)));

    body.appendChild(answerZone);
    body.appendChild(bank);
  },

  _revealOrder(correct) {
    const zone = document.getElementById("orderAnswerZone");
    if (!zone) return;
    zone.classList.add(correct ? "is-correct" : "is-incorrect");
    zone.querySelectorAll(".word-chip").forEach(c => c.disabled = true);
    document.querySelectorAll("#orderBankZone .word-chip").forEach(c => c.disabled = true);
  }
};

window.ExerciseEngine = ExerciseEngine;
