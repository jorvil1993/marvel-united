// Gestor de Persistencia y Estado de la Campaña (LocalStorage & JSON Backup)

const STORAGE_KEY = 'marvel_united_maximum_mutation_v1';

class CampaignStorage {
  constructor() {
    this.state = this.loadState();
  }

  getDefaultState() {
    return {
      version: 1,
      startedAt: new Date().toISOString(),
      currentChapterId: 1,
      unlockedHeroes: ['spider_man', 'miles_morales', 'wolverine', 'cyclops'],
      unlockedPerks: [],
      activePerks: [],
      exposureScore: 0,
      injuredHeroes: [],
      history: [],
      gameStats: {
        totalWins: 0,
        totalLosses: 0,
        villainsDefeated: []
      }
    };
  }

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.getDefaultState();
      const parsed = JSON.parse(raw);
      // Merge defaults in case of missing fields
      return { ...this.getDefaultState(), ...parsed };
    } catch (e) {
      console.error('Error cargando estado:', e);
      return this.getDefaultState();
    }
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Error guardando estado:', e);
    }
  }

  resetCampaign() {
    this.state = this.getDefaultState();
    this.saveState();
    return this.state;
  }

  isHeroUnlocked(heroId) {
    return this.state.unlockedHeroes.includes(heroId);
  }

  unlockHero(heroId) {
    if (!this.state.unlockedHeroes.includes(heroId)) {
      this.state.unlockedHeroes.push(heroId);
      this.saveState();
      return true;
    }
    return false;
  }

  unlockPerk(perkId) {
    if (!this.state.unlockedPerks.includes(perkId)) {
      this.state.unlockedPerks.push(perkId);
      this.saveState();
      return true;
    }
    return false;
  }

  toggleActivePerk(perkId, maxPerks = 2) {
    const idx = this.state.activePerks.indexOf(perkId);
    if (idx >= 0) {
      this.state.activePerks.splice(idx, 1);
    } else {
      if (this.state.activePerks.length >= maxPerks) {
        this.state.activePerks.shift(); // remove oldest
      }
      this.state.activePerks.push(perkId);
    }
    this.saveState();
    return this.state.activePerks;
  }

  recordGameResult(chapterId, result, selectedHeroes = [], notes = '') {
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === chapterId);
    if (!chapter) return;

    const entry = {
      chapterId,
      chapterTitle: chapter.title,
      villainId: chapter.villainId,
      result, // 'win' | 'loss'
      selectedHeroes,
      notes,
      timestamp: new Date().toISOString()
    };

    this.state.history.push(entry);

    if (result === 'win') {
      this.state.gameStats.totalWins++;
      if (!this.state.gameStats.villainsDefeated.includes(chapter.villainId)) {
        this.state.gameStats.villainsDefeated.push(chapter.villainId);
      }
      // Unlocks from chapter
      if (chapter.winOutcome.unlockedHeroes) {
        chapter.winOutcome.unlockedHeroes.forEach(h => this.unlockHero(h));
      }
      if (chapter.winOutcome.unlockedPerks) {
        chapter.winOutcome.unlockedPerks.forEach(p => this.unlockPerk(p));
      }
      if (chapter.winOutcome.nextChapter) {
        this.state.currentChapterId = chapter.winOutcome.nextChapter;
      }
    } else {
      this.state.gameStats.totalLosses++;
      // Unlocks from loss if any
      if (chapter.lossOutcome.unlockedHeroes) {
        chapter.lossOutcome.unlockedHeroes.forEach(h => this.unlockHero(h));
      }
      if (chapter.lossOutcome.unlockedPerks) {
        chapter.lossOutcome.unlockedPerks.forEach(p => this.unlockPerk(p));
      }
      if (chapter.lossOutcome.nextChapter) {
        this.state.currentChapterId = chapter.lossOutcome.nextChapter;
      }
    }

    this.saveState();
    return entry;
  }

  exportJson() {
    return JSON.stringify(this.state, null, 2);
  }

  importJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && Array.isArray(parsed.unlockedHeroes)) {
        this.state = { ...this.getDefaultState(), ...parsed };
        this.saveState();
        return true;
      }
      return false;
    } catch (e) {
      console.error('JSON inválido:', e);
      return false;
    }
  }
}

const campaignStorage = new CampaignStorage();
