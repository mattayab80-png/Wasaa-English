/* ============================================================================
   PROGRESS.JS
   Gestion de la progression de l'élève : sauvegarde locale persistante,
   calcul des XP, niveaux débloqués, séries (streak), badges.
   ----------------------------------------------------------------------------
   Le progrès est stocké dans localStorage sous la clé STORAGE_KEY.
   Le webapp fonctionne donc 100% côté client, sans serveur : l'élève
   retrouve sa progression à chaque visite sur le même navigateur/appareil.
   ========================================================================== */

const STORAGE_KEY = "wasaa_english_progress_v1";

/* Structure par défaut du profil élève */
function createDefaultProfile() {
  return {
    createdAt: Date.now(),
    lastVisit: Date.now(),
    totalXp: 0,
    streak: { count: 0, lastDay: null },
    completedLessons: {},     // { lessonId: { score, attempts, bestScore, completedAt } }
    unlockedLevels: ["seconde"],
    currentLevel: "seconde",
    badges: [],
    settings: { sound: true, reduceMotion: false }
  };
}

const ProgressStore = {

  _profile: null,

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this._profile = JSON.parse(raw);
        this._migrate();
      } else {
        this._profile = createDefaultProfile();
      }
    } catch (e) {
      console.warn("Impossible de lire la progression sauvegardée, réinitialisation.", e);
      this._profile = createDefaultProfile();
    }
    this._updateStreak();
    this.save();
    return this._profile;
  },

  _migrate() {
    const defaults = createDefaultProfile();
    this._profile = Object.assign({}, defaults, this._profile);
    this._profile.completedLessons = this._profile.completedLessons || {};
    this._profile.unlockedLevels = this._profile.unlockedLevels || ["seconde"];
    this._profile.badges = this._profile.badges || [];
    this._profile.settings = Object.assign({}, defaults.settings, this._profile.settings || {});
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._profile));
    } catch (e) {
      console.warn("Impossible de sauvegarder la progression (stockage plein ou bloqué).", e);
    }
  },

  get profile() {
    if (!this._profile) this.load();
    return this._profile;
  },

  _updateStreak() {
    const today = new Date().toDateString();
    const streak = this._profile.streak;
    if (streak.lastDay === today) return; // déjà compté aujourd'hui

    if (streak.lastDay) {
      const last = new Date(streak.lastDay);
      const diffDays = Math.round((new Date(today) - last) / 86400000);
      if (diffDays === 1) {
        streak.count += 1;
      } else if (diffDays > 1) {
        streak.count = 1;
      }
    } else {
      streak.count = 1;
    }
    streak.lastDay = today;
    this._profile.lastVisit = Date.now();
  },

  /* Enregistre la complétion d'une leçon avec son score (0-100) */
  completeLesson(lessonId, scorePercent, xpEarned) {
    const p = this.profile;
    const prev = p.completedLessons[lessonId];
    const isFirstTime = !prev;

    p.completedLessons[lessonId] = {
      score: scorePercent,
      bestScore: prev ? Math.max(prev.bestScore, scorePercent) : scorePercent,
      attempts: prev ? prev.attempts + 1 : 1,
      completedAt: Date.now()
    };

    // XP gagné uniquement la première fois (ou un bonus réduit en révision)
    const gained = isFirstTime ? xpEarned : Math.round(xpEarned * 0.2);
    p.totalXp += gained;

    this._checkBadges();
    this.save();
    return { isFirstTime, xpGained: gained, totalXp: p.totalXp };
  },

  isLessonCompleted(lessonId) {
    return !!this.profile.completedLessons[lessonId];
  },

  getLessonScore(lessonId) {
    const c = this.profile.completedLessons[lessonId];
    return c ? c.bestScore : null;
  },

  /* Calcule le nombre de leçons complétées dans une unité */
  unitProgress(unit) {
    const total = unit.lessons.length;
    const done = unit.lessons.filter(l => this.isLessonCompleted(l.id)).length;
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  },

  /* Calcule le pourcentage global pour un niveau (seconde/premiere/terminale) */
  levelProgress(level) {
    let total = 0, done = 0;
    level.units.forEach(u => {
      total += u.lessons.length;
      done += u.lessons.filter(l => this.isLessonCompleted(l.id)).length;
    });
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  },

  unlockLevel(levelId) {
    const p = this.profile;
    if (!p.unlockedLevels.includes(levelId)) {
      p.unlockedLevels.push(levelId);
      this.save();
    }
  },

  isLevelUnlocked(levelId) {
    return this.profile.unlockedLevels.includes(levelId);
  },

  setCurrentLevel(levelId) {
    this.profile.currentLevel = levelId;
    this.save();
  },

  _checkBadges() {
    const p = this.profile;
    const totalDone = Object.keys(p.completedLessons).length;
    const award = (id, label, icon) => {
      if (!p.badges.find(b => b.id === id)) {
        p.badges.push({ id, label, icon, earnedAt: Date.now() });
      }
    };
    if (totalDone >= 1) award("first-lesson", "Premier pas", "seed");
    if (totalDone >= 5) award("five-lessons", "Apprenti assidu", "spark");
    if (totalDone >= 10) award("ten-lessons", "Linguiste en herbe", "leaf");
    if (totalDone >= 20) award("twenty-lessons", "Maître des mots", "star");
    if (p.totalXp >= 500) award("xp-500", "500 XP atteints", "medal");
    if (p.streak.count >= 3) award("streak-3", "3 jours de suite", "flame");
    if (p.streak.count >= 7) award("streak-7", "Une semaine complète", "fire");
  },

  /* Réinitialisation complète (avec confirmation gérée côté UI) */
  reset() {
    this._profile = createDefaultProfile();
    this.save();
  },

  /* Export JSON pour sauvegarde manuelle / transfert d'appareil */
  exportData() {
    return JSON.stringify(this._profile, null, 2);
  },

  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      this._profile = parsed;
      this._migrate();
      this.save();
      return true;
    } catch (e) {
      console.error("Fichier de sauvegarde invalide.", e);
      return false;
    }
  }
};

window.ProgressStore = ProgressStore;
