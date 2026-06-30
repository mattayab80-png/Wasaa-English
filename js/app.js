/* ============================================================================
   APP.JS — Contrôleur principal de Wasaa English.
   Gère : la navigation entre écrans, le rendu dynamique du contenu
   (niveaux, parcours, leçons), la session d'exercices en cours, et la
   synchronisation avec ProgressStore (sauvegarde persistante).
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     0. RÉFÉRENCES DOM & ÉTAT GLOBAL DE NAVIGATION
     ------------------------------------------------------------------ */
  const screens = {
    home: document.getElementById("screen-home"),
    path: document.getElementById("screen-path"),
    lessonIntro: document.getElementById("screen-lesson-intro"),
    lesson: document.getElementById("screen-lesson"),
    result: document.getElementById("screen-result"),
    profile: document.getElementById("screen-profile"),
  };

  /* Session de leçon en cours */
  const Session = {
    levelId: null,
    unit: null,
    lesson: null,
    exerciseIndex: 0,
    correctCount: 0,
    livesLeft: 3,
    lastCheckResult: null,
  };

  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("is-active"));
    screens[name].classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    updateBottomNav(name);
  }

  function updateBottomNav(name) {
    document.querySelectorAll(".bottom-nav-item").forEach(item => {
      const target = item.dataset.nav;
      const active = (target === "home" && name === "home") || (target === "profile" && name === "profile");
      item.classList.toggle("is-active", active);
    });
  }

  /* ------------------------------------------------------------------
     1. INJECTION DES ICÔNES STATIQUES (placeholders dans le HTML)
     ------------------------------------------------------------------ */
  function injectStaticIcons() {
    const map = {
      iconCompassHolder: "compass",
      iconBoltHolder: "bolt",
      iconFlameHolder: "flame",
      iconUserHolder: "user",
      iconUserHolder2: "user",
      iconHouseHolder: "house",
      iconFlagHolder: "flag",
      iconRefreshHolder: "refresh",
      iconSparkHolder: "spark",
      iconArrowLeftHolder1: "arrowLeft",
      iconArrowLeftHolder2: "arrowLeft",
      iconCrossHolder1: "cross",
      iconCrossHolder2: "cross",
      iconBoltHolder2: "bolt",
      iconLayersHolder: "layers",
      iconTrophyHolder: "trophy",
      iconVolumeHolder: "volume",
      iconBellHolder: "bell",
      iconDownloadHolder: "download",
      iconUploadHolder: "upload",
      iconTrashHolder: "trash",
    };
    Object.entries(map).forEach(([id, icon]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = getIcon(icon);
    });
    const sparkleEl = document.getElementById("iconSparklesText");
    if (sparkleEl) sparkleEl.innerHTML = getIcon("sparkles") + " " + sparkleEl.textContent;
  }

  /* ------------------------------------------------------------------
     2. TOASTS
     ------------------------------------------------------------------ */
  function showToast(message, icon = "sparkles") {
    const stack = document.getElementById("toastStack");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `${getIcon(icon)} <span>${message}</span>`;
    stack.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("is-leaving");
      setTimeout(() => toast.remove(), 280);
    }, 3200);
  }

  /* ------------------------------------------------------------------
     3. EN-TETE GLOBAL : XP & STREAK (mis à jour partout)
     ------------------------------------------------------------------ */
  function refreshGlobalStats() {
    const p = ProgressStore.profile;
    const xpEl = document.getElementById("homeXpDisplay");
    const streakEl = document.getElementById("homeStreakDisplay");
    if (xpEl) xpEl.textContent = `${p.totalXp} XP`;
    if (streakEl) streakEl.textContent = `${p.streak.count} jour${p.streak.count === 1 ? "" : "s"}`;
  }

  /* ------------------------------------------------------------------
     4. ECRAN ACCUEIL : rendu des niveaux + visuel hero
     ------------------------------------------------------------------ */
  const LEVEL_ICONS = { seconde: "leaf", premiere: "compass", terminale: "graduation" };
  const LEVEL_LABELS = { seconde: "2nd", premiere: "1ère", terminale: "Tle" };

  function renderLevelsGrid() {
    const grid = document.getElementById("levelsGrid");
    grid.innerHTML = "";

    LEVEL_ORDER.forEach((levelId, index) => {
      const level = CURRICULUM[levelId];
      const unlocked = ProgressStore.isLevelUnlocked(levelId);
      const progress = ProgressStore.levelProgress(level);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "level-card" + (unlocked ? "" : " is-locked");
      card.disabled = !unlocked;

      card.innerHTML = `
        <div class="level-card-top">
          <div class="level-card-icon" style="background:${level.color}">${getIcon(LEVEL_ICONS[levelId])}</div>
          ${unlocked
            ? `<span class="pill-badge" style="background:${level.color}22; color:${level.color}">${LEVEL_LABELS[levelId]}</span>`
            : `<span class="level-card-lock">${getIcon("lock")} Verrouillé</span>`}
        </div>
        <h3>${level.title}</h3>
        <span class="level-subtitle">${level.subtitle}</span>
        <div class="level-progress-track">
          <div class="level-progress-fill" style="width:${progress.percent}%; background:${level.color}"></div>
        </div>
        <div class="level-card-footer">
          <span>${progress.done} / ${progress.total} leçons</span>
          <span>${progress.percent}%</span>
        </div>
      `;

      if (unlocked) {
        card.addEventListener("click", () => openPath(levelId));
      }
      grid.appendChild(card);
    });
  }

  /* Visuel "sentier" dans le hero — illustration statique animée au survol */
  function renderHeroVisual() {
    const holder = document.getElementById("heroPathVisual");
    holder.innerHTML = `
      <svg class="hero-path-svg" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 290 C 60 230, 160 230, 160 170 C 160 110, 60 110, 60 60" stroke="rgba(255,255,255,0.25)" stroke-width="6" stroke-dasharray="2 14" fill="none" stroke-linecap="round"/>
        <path d="M160 170 C 160 230, 280 230, 280 170 C 280 110, 200 110, 200 60" stroke="rgba(255,255,255,0.25)" stroke-width="6" stroke-dasharray="2 14" fill="none" stroke-linecap="round"/>
        <g class="hero-path-node">
          <circle cx="60" cy="290" r="26" fill="#16A085"/>
          <foreignObject x="44" y="274" width="32" height="32">${getIcon("check")}</foreignObject>
        </g>
        <g class="hero-path-node">
          <circle cx="160" cy="170" r="26" fill="#E8702A"/>
          <foreignObject x="144" y="154" width="32" height="32">${getIcon("bolt")}</foreignObject>
        </g>
        <g class="hero-path-node">
          <circle cx="280" cy="170" r="24" fill="#2A1F4D" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
          <foreignObject x="266" y="156" width="28" height="28">${getIcon("lock")}</foreignObject>
        </g>
        <g class="hero-path-node">
          <circle cx="200" cy="60" r="24" fill="#2A1F4D" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
          <foreignObject x="186" y="46" width="28" height="28">${getIcon("star")}</foreignObject>
        </g>
      </svg>
      <p style="text-align:center; color:rgba(255,255,255,0.6); font-size:0.85rem; margin-top:8px;">Ton parcours personnel, leçon après leçon</p>
    `;
    holder.querySelectorAll(".hero-path-node foreignObject").forEach(fo => {
      fo.firstElementChild && (fo.firstElementChild.style.color = "white");
    });
  }

  /* ------------------------------------------------------------------
     5. ECRAN PARCOURS (Path) : rendu du sentier sinueux par unité
     ------------------------------------------------------------------ */
  function openPath(levelId) {
    Session.levelId = levelId;
    ProgressStore.setCurrentLevel(levelId);
    const level = CURRICULUM[levelId];

    document.getElementById("pathLevelTitle").textContent = level.title;
    document.getElementById("pathLevelSubtitle").textContent = level.subtitle;
    document.getElementById("pathHeaderBg").style.background =
      `linear-gradient(160deg, ${level.color}, ${shadeColor(level.color, -25)})`;

    renderPathProgressRing(level);
    renderPathUnits(level);

    showScreen("path");
  }

  function shadeColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) + Math.round(2.55 * percent);
    let g = ((num >> 8) & 0x00FF) + Math.round(2.55 * percent);
    let b = (num & 0x0000FF) + Math.round(2.55 * percent);
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  function renderPathProgressRing(level) {
    const progress = ProgressStore.levelProgress(level);
    const circle = document.getElementById("pathProgressRingFg");
    const circumference = 2 * Math.PI * 26;
    circle.setAttribute("stroke-dasharray", circumference);
    circle.setAttribute("stroke-dashoffset", circumference * (1 - progress.percent / 100));
    document.getElementById("pathProgressPercent").textContent = `${progress.percent}%`;
    document.getElementById("pathProgressCount").textContent = `${progress.done} / ${progress.total} leçons`;
  }

  function renderPathUnits(level) {
    const container = document.getElementById("pathUnitsContainer");
    container.innerHTML = "";

    let previousLessonsCompleted = true; // la 1ère leçon du niveau est toujours disponible

    level.units.forEach((unit, unitIndex) => {
      const unitProgress = ProgressStore.unitProgress(unit);

      const block = document.createElement("div");
      block.className = "unit-block";

      block.innerHTML = `
        <div class="unit-block-header">
          <div class="unit-icon" style="background:${level.color}">${getIcon(unit.icon)}</div>
          <div>
            <h2>${unit.title}</h2>
            <span class="unit-theme">${unit.theme}</span>
          </div>
          <span class="unit-count">${unitProgress.done}/${unitProgress.total}</span>
        </div>
      `;

      const track = document.createElement("div");
      track.className = "path-track";

      const aligns = ["align-left", "align-center", "align-right"];

      unit.lessons.forEach((lesson, lessonIndex) => {
        const completed = ProgressStore.isLessonCompleted(lesson.id);
        const available = previousLessonsCompleted; // débloqué si la précédente leçon globale est faite
        const state = completed ? "completed" : (available ? "available" : "locked");

        const row = document.createElement("div");
        row.className = `path-node-row ${aligns[lessonIndex % aligns.length]}`;

        const score = ProgressStore.getLessonScore(lesson.id);

        const node = document.createElement("button");
        node.type = "button";
        node.className = "lesson-node";
        node.disabled = state === "locked";
        node.innerHTML = `
          <div class="lesson-node-circle state-${state}">
            ${getIcon(state === "locked" ? "lock" : (state === "completed" ? "check" : lessonTypeIcon(lesson.type)))}
            ${score !== null ? `<span class="lesson-node-score">${score}%</span>` : ""}
          </div>
          <span class="lesson-node-label">${lesson.title}</span>
          <span class="lesson-node-xp">${getIcon("bolt")} ${lesson.xp} XP</span>
        `;

        if (state !== "locked") {
          node.addEventListener("click", () => openLessonIntro(level.id, unit, lesson));
        }

        row.appendChild(node);
        track.appendChild(row);

        previousLessonsCompleted = completed; // la leçon suivante ne se débloque que si celle-ci est faite
      });

      block.appendChild(track);
      container.appendChild(block);
    });

    // Bannière de déblocage du niveau suivant si ce niveau est terminé
    const levelIdx = LEVEL_ORDER.indexOf(level.id);
    const isFullyDone = ProgressStore.levelProgress(level).percent === 100;
    if (isFullyDone && levelIdx < LEVEL_ORDER.length - 1) {
      const nextLevelId = LEVEL_ORDER[levelIdx + 1];
      if (!ProgressStore.isLevelUnlocked(nextLevelId)) {
        ProgressStore.unlockLevel(nextLevelId);
        showToast(`Niveau ${CURRICULUM[nextLevelId].title} débloqué !`, "star");
      }
      const banner = document.createElement("div");
      banner.className = "level-unlock-banner";
      banner.innerHTML = `
        <h3>🎉 Niveau ${level.title} terminé !</h3>
        <p>Tu as débloqué le niveau ${CURRICULUM[nextLevelId].title}. Prêt à continuer ?</p>
        <button class="btn btn-primary" id="btnGoNextLevel">Aller en ${CURRICULUM[nextLevelId].title}</button>
      `;
      container.appendChild(banner);
      setTimeout(() => {
        const btn = document.getElementById("btnGoNextLevel");
        if (btn) btn.addEventListener("click", () => openPath(nextLevelId));
      }, 0);
    }
  }

  function lessonTypeIcon(type) {
    return { grammar: "bolt", vocabulary: "book", function: "speech" }[type] || "star";
  }

  /* ------------------------------------------------------------------
     6. ECRAN INTRODUCTION DE LECON
     ------------------------------------------------------------------ */
  function openLessonIntro(levelId, unit, lesson) {
    Session.levelId = levelId;
    Session.unit = unit;
    Session.lesson = lesson;

    document.getElementById("lessonIntroIcon").innerHTML = getIcon(lessonTypeIcon(lesson.type));
    document.getElementById("lessonIntroTitle").textContent = lesson.title;
    document.getElementById("lessonIntroText").textContent = lesson.intro;
    document.getElementById("lessonIntroXp").textContent = `${lesson.xp} XP`;
    document.getElementById("lessonIntroCount").textContent = `${lesson.exercises.length} exercices`;

    showScreen("lessonIntro");
  }

  /* ------------------------------------------------------------------
     7. ECRAN LECON : boucle d'exercices
     ------------------------------------------------------------------ */
  function startLessonSession() {
    Session.exerciseIndex = 0;
    Session.correctCount = 0;
    Session.livesLeft = 3;
    Session.lastCheckResult = null;
    renderHearts();
    renderCurrentExercise();
    showScreen("lesson");
  }

  function renderHearts() {
    const holder = document.getElementById("lessonHearts");
    holder.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const span = document.createElement("span");
      span.innerHTML = getIcon("heart", i < Session.livesLeft ? "" : "is-lost");
      holder.appendChild(span);
    }
  }

  function renderCurrentExercise() {
    const lesson = Session.lesson;
    const exercise = lesson.exercises[Session.exerciseIndex];
    const card = document.getElementById("exerciseCard");

    ExerciseEngine.render(exercise, card);

    const fill = document.getElementById("lessonProgressFill");
    fill.style.width = `${Math.round((Session.exerciseIndex / lesson.exercises.length) * 100)}%`;

    // reset footer
    const feedback = document.getElementById("feedbackBanner");
    feedback.classList.remove("is-visible", "correct", "incorrect");
    const checkBtn = document.getElementById("btnCheckOrContinue");
    checkBtn.textContent = "Vérifier";
    checkBtn.disabled = true;
    checkBtn.dataset.mode = "check";
  }

  function handleAnswerChanged() {
    const checkBtn = document.getElementById("btnCheckOrContinue");
    if (checkBtn.dataset.mode !== "check") return;
    checkBtn.disabled = !ExerciseEngine.canSubmit();
  }

  function handleCheckOrContinue() {
    const checkBtn = document.getElementById("btnCheckOrContinue");

    if (checkBtn.dataset.mode === "check") {
      const result = ExerciseEngine.checkAnswer();
      Session.lastCheckResult = result;
      if (result.correct) Session.correctCount++;
      else Session.livesLeft = Math.max(0, Session.livesLeft - 1);

      renderHearts();
      showFeedback(result);

      checkBtn.textContent = Session.exerciseIndex < Session.lesson.exercises.length - 1 ? "Continuer" : "Voir mes résultats";
      checkBtn.dataset.mode = "continue";
      checkBtn.disabled = false;
    } else {
      goToNextExercise();
    }
  }

  function showFeedback(result) {
    const banner = document.getElementById("feedbackBanner");
    const icon = document.getElementById("feedbackIcon");
    const title = document.getElementById("feedbackTitle");
    const explanation = document.getElementById("feedbackExplanation");

    banner.classList.add("is-visible", result.correct ? "correct" : "incorrect");
    icon.innerHTML = getIcon(result.correct ? "check" : "cross");
    title.textContent = result.correct
      ? ["Excellent !", "Parfait !", "Très bien !", "Bravo !"][Math.floor(Math.random() * 4)]
      : "Pas tout à fait...";
    explanation.textContent = result.explanation || "";
  }

  function goToNextExercise() {
    Session.exerciseIndex++;
    if (Session.exerciseIndex >= Session.lesson.exercises.length) {
      finishLesson();
    } else {
      renderCurrentExercise();
    }
  }

  /* ------------------------------------------------------------------
     8. FIN DE LECON : calcul du score, sauvegarde, écran de résultat
     ------------------------------------------------------------------ */
  function finishLesson() {
    const total = Session.lesson.exercises.length;
    const scorePercent = Math.round((Session.correctCount / total) * 100);
    const { isFirstTime, xpGained } = ProgressStore.completeLesson(Session.lesson.id, scorePercent, Session.lesson.xp);

    document.getElementById("resultScore").textContent = `${scorePercent}%`;
    document.getElementById("resultXp").textContent = `+${xpGained}`;
    document.getElementById("resultStreak").textContent = `${ProgressStore.profile.streak.count}`;

    const title = document.getElementById("resultTitle");
    const sub = document.getElementById("resultSubtitle");
    if (scorePercent >= 80) {
      title.textContent = "Leçon maîtrisée !";
      sub.textContent = isFirstTime ? "Excellent travail, continue ainsi." : "Bravo, tu progresses encore !";
      launchConfetti();
    } else if (scorePercent >= 50) {
      title.textContent = "Leçon terminée";
      sub.textContent = "Bon effort ! Une petite révision t'aiderait à consolider.";
    } else {
      title.textContent = "Continue de t'entraîner";
      sub.textContent = "Ce n'est pas grave, refais cette leçon pour bien ancrer la notion.";
    }

    refreshGlobalStats();
    showScreen("result");
  }

  function launchConfetti() {
    const colors = ["#E8702A", "#F2C14E", "#16A085", "#1B1336"];
    const layer = document.createElement("div");
    layer.className = "confetti-layer";
    document.body.appendChild(layer);
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2 + Math.random() * 1.5) + "s";
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      layer.appendChild(piece);
    }
    setTimeout(() => layer.remove(), 3600);
  }

  /* ------------------------------------------------------------------
     9. ECRAN PROFIL
     ------------------------------------------------------------------ */
  const BADGE_DEFS = [
    { id: "first-lesson", label: "Premier pas", icon: "seed" },
    { id: "five-lessons", label: "Apprenti assidu", icon: "spark" },
    { id: "ten-lessons", label: "Linguiste en herbe", icon: "leaf" },
    { id: "twenty-lessons", label: "Maître des mots", icon: "star" },
    { id: "xp-500", label: "500 XP atteints", icon: "medal" },
    { id: "streak-3", label: "3 jours de suite", icon: "flame" },
    { id: "streak-7", label: "Une semaine complète", icon: "flame" },
  ];

  function openProfile() {
    const p = ProgressStore.profile;
    document.getElementById("profileXp").textContent = p.totalXp;
    document.getElementById("profileStreak").textContent = p.streak.count;
    document.getElementById("profileLessons").textContent = Object.keys(p.completedLessons).length;
    document.getElementById("profileBadgesCount").textContent = p.badges.length;

    const memberDate = new Date(p.createdAt);
    document.getElementById("profileMemberSince").textContent =
      `Apprenant depuis le ${memberDate.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}`;

    renderProfileLevels();
    renderProfileBadges();
    syncSettingsToggles();

    showScreen("profile");
  }

  function renderProfileLevels() {
    const holder = document.getElementById("profileLevelsOverview");
    holder.innerHTML = "";
    LEVEL_ORDER.forEach(levelId => {
      const level = CURRICULUM[levelId];
      const progress = ProgressStore.levelProgress(level);
      const card = document.createElement("div");
      card.className = "level-overview-card";
      card.innerHTML = `
        <div class="lvl-name"><span class="lvl-dot" style="background:${level.color}"></span>${level.title}</div>
        <div class="level-progress-track"><div class="level-progress-fill" style="width:${progress.percent}%; background:${level.color}"></div></div>
        <span class="lvl-pct">${progress.done}/${progress.total} leçons · ${progress.percent}%</span>
      `;
      holder.appendChild(card);
    });
  }

  function renderProfileBadges() {
    const holder = document.getElementById("profileBadgesGrid");
    holder.innerHTML = "";
    const earnedIds = ProgressStore.profile.badges.map(b => b.id);
    BADGE_DEFS.forEach(def => {
      const earned = earnedIds.includes(def.id);
      const card = document.createElement("div");
      card.className = "badge-card" + (earned ? "" : " is-locked");
      card.innerHTML = `<div class="badge-icon">${getIcon(def.icon)}</div><span>${def.label}</span>`;
      holder.appendChild(card);
    });
  }

  function syncSettingsToggles() {
    const settings = ProgressStore.profile.settings;
    document.getElementById("toggleSound").classList.toggle("is-on", settings.sound);
    document.getElementById("toggleReduceMotion").classList.toggle("is-on", settings.reduceMotion);
  }

  /* ------------------------------------------------------------------
     10. EVENT LISTENERS — câblage de toute l'interface
     ------------------------------------------------------------------ */
  function wireEvents() {
    document.getElementById("btnStartLearning").addEventListener("click", () => {
      document.getElementById("levelsSection").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("btnHowItWorks").addEventListener("click", () => {
      document.querySelector(".why-section").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("btnGoProfile").addEventListener("click", openProfile);

    document.getElementById("btnBackToHome").addEventListener("click", () => showScreen("home"));
    document.getElementById("btnBackToHomeFromProfile").addEventListener("click", () => showScreen("home"));

    document.getElementById("btnCloseLessonIntro").addEventListener("click", () => showScreen("path"));
    document.getElementById("btnStartLesson").addEventListener("click", startLessonSession);

    document.getElementById("btnCloseLesson").addEventListener("click", () => {
      if (confirm("Veux-tu vraiment quitter cette leçon ? Ta progression sur cette leçon ne sera pas sauvegardée.")) {
        showScreen("path");
        renderPathUnits(CURRICULUM[Session.levelId]);
        renderPathProgressRing(CURRICULUM[Session.levelId]);
      }
    });

    document.getElementById("btnCheckOrContinue").addEventListener("click", handleCheckOrContinue);
    window.addEventListener("exercise:answerChanged", handleAnswerChanged);
    window.addEventListener("exercise:matchComplete", () => {
      // auto-validation pour le matching dès que toutes les paires sont faites
      setTimeout(() => handleCheckOrContinue(), 300);
    });

    document.getElementById("btnContinuePath").addEventListener("click", () => {
      openPath(Session.levelId);
    });
    document.getElementById("btnRetryLesson").addEventListener("click", startLessonSession);

    // Navigation basse (mobile)
    document.querySelectorAll(".bottom-nav-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (item.dataset.nav === "home") showScreen("home");
        if (item.dataset.nav === "profile") openProfile();
      });
    });

    // Paramètres
    document.getElementById("toggleSound").addEventListener("click", () => {
      const s = ProgressStore.profile.settings;
      s.sound = !s.sound;
      ProgressStore.save();
      syncSettingsToggles();
    });
    document.getElementById("toggleReduceMotion").addEventListener("click", () => {
      const s = ProgressStore.profile.settings;
      s.reduceMotion = !s.reduceMotion;
      ProgressStore.save();
      syncSettingsToggles();
      document.documentElement.style.setProperty("--transition-fast", s.reduceMotion ? "0ms" : "160ms ease-out");
    });

    document.getElementById("btnExportData").addEventListener("click", exportProgressFile);
    document.getElementById("btnImportData").addEventListener("click", () => {
      document.getElementById("importFileInput").click();
    });
    document.getElementById("importFileInput").addEventListener("change", handleImportFile);

    document.getElementById("btnResetProgress").addEventListener("click", () => {
      if (confirm("Es-tu sûr de vouloir réinitialiser TOUTE ta progression ? Cette action est définitive.")) {
        ProgressStore.reset();
        showToast("Progression réinitialisée.", "refresh");
        refreshGlobalStats();
        renderLevelsGrid();
        openProfile();
      }
    });
  }

  function exportProgressFile() {
    const data = ProgressStore.exportData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wasaa-english-progression-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Sauvegarde exportée avec succès.", "download");
  }

  function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const ok = ProgressStore.importData(evt.target.result);
      if (ok) {
        showToast("Progression importée avec succès.", "upload");
        refreshGlobalStats();
        renderLevelsGrid();
        openProfile();
      } else {
        showToast("Le fichier n'est pas une sauvegarde valide.", "cross");
      }
      e.target.value = "";
    };
    reader.readAsText(file);
  }

  /* ------------------------------------------------------------------
     11. INITIALISATION
     ------------------------------------------------------------------ */
  function init() {
    ProgressStore.load();
    injectStaticIcons();
    refreshGlobalStats();
    renderHeroVisual();
    renderLevelsGrid();
    wireEvents();
    showScreen("home");

    // Avatar profil basé sur l'initiale (générique, pas de compte requis)
    document.getElementById("profileAvatarInitial").textContent = "🇳🇪";
  }

  document.addEventListener("DOMContentLoaded", init);
})();
