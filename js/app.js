// MARVEL UNITED: MAXIMUM MUTATION — APP CONTROLLER
// Lógica de Interfaz, Navegación, Companion en Mesa y Gestión de Partida

document.addEventListener('DOMContentLoaded', () => {
  // Estado local de la partida activa en curso (Modo 2 Jugadores fijos + 1 Opcional)
  const activeMatch = {
    chapterId: 1,
    heroSlot1: 'spider_man',   // Jorge (Jugador 1)
    heroSlot2: 'wolverine',    // Esposa (Jugadora 2)
    heroSlot3: null,           // 3er Héroe Opcional de Apoyo
    villainHp: 15,
    villainMaxHp: 15,
    civiliansSaved: 0,
    thugsDefeated: 0,
    threatsCleared: 0,
    exposureTokens: 0,
    getSelectedHeroes() {
      const list = [this.heroSlot1, this.heroSlot2];
      if (this.heroSlot3) list.push(this.heroSlot3);
      return list;
    }
  };

  // Referencias DOM
  const navItems = document.querySelectorAll('.nav-item');
  const viewSections = document.querySelectorAll('.view-section');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const eventModal = document.getElementById('eventModal');
  const outcomeModal = document.getElementById('outcomeModal');
  const heroDetailModal = document.getElementById('heroDetailModal');
  const slotPickerModal = document.getElementById('slotPickerModal');

  // Inicialización de Sonido
  updateSoundButtonUI();
  soundToggleBtn.addEventListener('click', () => {
    const isMuted = soundFX.toggleMute();
    updateSoundButtonUI();
  });

  function updateSoundButtonUI() {
    soundToggleBtn.textContent = soundFX.isMuted() ? '🔇' : '🔊';
  }

  // Navegación por Pestañas
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.dataset.view;
      switchTab(targetView);
      soundFX.playClick();
    });
  });

  function switchTab(viewId) {
    navItems.forEach(nav => {
      nav.classList.toggle('active', nav.dataset.view === viewId);
    });
    viewSections.forEach(section => {
      section.classList.toggle('active', section.id === `view-${viewId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Renderizar vistas según pestaña
    if (viewId === 'timeline') renderTimeline();
    if (viewId === 'match') renderActiveMatch();
    if (viewId === 'roster') renderRoster();
    if (viewId === 'perks') renderPerks();
    if (viewId === 'history') renderHistory();
  }

  // =========================================================================
  // 1. TIMELINE & MAPA DE CAMPAÑA
  // =========================================================================
  function renderTimeline() {
    const container = document.getElementById('timelineNodesContainer');
    if (!container) return;

    container.innerHTML = '';
    const currentId = campaignStorage.state.currentChapterId;

    CAMPAIGN_CHAPTERS.forEach(chapter => {
      const isCurrent = chapter.id === currentId;
      const historyItem = campaignStorage.state.history.find(h => h.chapterId === chapter.id);
      const isCompleted = !!historyItem;
      const isWin = historyItem && historyItem.result === 'win';
      const isLoss = historyItem && historyItem.result === 'loss';
      const isLocked = chapter.id > currentId && !isCompleted;

      const card = document.createElement('div');
      let statusClass = 'locked';
      if (isCurrent) statusClass = 'current';
      else if (isWin) statusClass = 'completed-win';
      else if (isLoss) statusClass = 'completed-loss';

      card.className = `node-card ${statusClass}`;

      const villain = CAMPAIGN_VILLAINS[chapter.villainId] || {};
      const hero1 = CAMPAIGN_HEROES[chapter.assignedHeroSlot1] || CAMPAIGN_HEROES['cyclops'];
      const hero2 = CAMPAIGN_HEROES[chapter.assignedHeroSlot2] || CAMPAIGN_HEROES['miles_morales'];
      const hero3 = chapter.assignedHeroSlot3 ? CAMPAIGN_HEROES[chapter.assignedHeroSlot3] : null;

      card.innerHTML = `
        <div class="node-badge">${isWin ? '✓' : isLoss ? '✕' : chapter.id}</div>
        <div class="node-header">
          <span class="node-act">${chapter.actTitle}</span>
          <span class="node-villain-tag">😈 ${villain.name || 'Jefe'}</span>
        </div>
        <h3 class="node-title">${chapter.title}</h3>
        <div style="font-size:0.75rem;color:var(--comic-yellow);font-weight:bold;margin:4px 0 6px 0;line-height:1.2;">
          👥 <strong>Héroes Asignados:</strong> <span style="color:#fff;">${hero1.name} & ${hero2.name}</span>
          ${hero3 ? `<span style="font-size:0.68rem;color:#c4b5fd;display:block;">⭐ 3er Héroe (José / Apoyo): ${hero3.name}</span>` : ''}
        </div>
        <p class="node-summary">${chapter.synopsis.slice(0, 115)}...</p>
        <div class="node-footer">
          <span>${isWin ? '<strong style="color:var(--success-green)">✓ VICTORIA REGISTRADA</strong>' : isLoss ? '<strong style="color:var(--marvel-red)">✕ DERROTA (SUPERADA)</strong>' : isCurrent ? '<strong style="color:var(--comic-yellow)">▶ CAPÍTULO ACTIVO</strong>' : '🔒 Bloqueado'}</span>
          <span>${isCurrent ? '<button class="badge badge-yellow" style="cursor:pointer">JUGAR EN MESA ➔</button>' : ''}</span>
        </div>
      `;

      if (!isLocked) {
        card.addEventListener('click', () => {
          loadChapterIntoMatch(chapter.id);
          switchTab('match');
        });
      }

      container.appendChild(card);
    });
  }

  // =========================================================================
  // 2. COMPANION EN MESA: PARTIDA ACTIVA
  // =========================================================================
  function loadChapterIntoMatch(chapterId) {
    activeMatch.chapterId = chapterId;
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === chapterId) || CAMPAIGN_CHAPTERS[0];
    const villain = CAMPAIGN_VILLAINS[chapter.villainId];

    // Asignación automática y obligatoria de la patrulla del capítulo
    if (chapter.assignedHeroSlot1) {
      activeMatch.heroSlot1 = chapter.assignedHeroSlot1;
      if (!campaignStorage.state.unlockedHeroes.includes(chapter.assignedHeroSlot1)) {
        campaignStorage.state.unlockedHeroes.push(chapter.assignedHeroSlot1);
      }
    }
    if (chapter.assignedHeroSlot2) {
      activeMatch.heroSlot2 = chapter.assignedHeroSlot2;
      if (!campaignStorage.state.unlockedHeroes.includes(chapter.assignedHeroSlot2)) {
        campaignStorage.state.unlockedHeroes.push(chapter.assignedHeroSlot2);
      }
    }
    if (chapter.assignedHeroSlot3 && !campaignStorage.state.unlockedHeroes.includes(chapter.assignedHeroSlot3)) {
      campaignStorage.state.unlockedHeroes.push(chapter.assignedHeroSlot3);
    }
    if (activeMatch.heroSlot3) {
      activeMatch.heroSlot3 = chapter.assignedHeroSlot3 || null;
    }
    campaignStorage.saveState();

    // Calcular HP del villano según héroes activos usando la ficha física oficial
    const numHeroes = activeMatch.getSelectedHeroes().length;
    if (villain && villain.hpByHeroes) {
      activeMatch.villainMaxHp = villain.hpByHeroes[numHeroes] || villain.hpByHeroes[2] || 5;
    } else {
      activeMatch.villainMaxHp = 5;
    }
    activeMatch.villainHp = activeMatch.villainMaxHp;
    activeMatch.civiliansSaved = 0;
    activeMatch.thugsDefeated = 0;
    activeMatch.threatsCleared = 0;
    activeMatch.exposureTokens = 0;

    renderActiveMatch();
  }

  function recalculateVillainHp() {
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId) || CAMPAIGN_CHAPTERS[0];
    const villain = CAMPAIGN_VILLAINS[chapter.villainId];
    const numHeroes = activeMatch.getSelectedHeroes().length;
    const oldMax = activeMatch.villainMaxHp;

    if (villain && villain.hpByHeroes) {
      activeMatch.villainMaxHp = villain.hpByHeroes[numHeroes] || villain.hpByHeroes[2] || 5;
    } else {
      activeMatch.villainMaxHp = 5;
    }

    const diff = activeMatch.villainMaxHp - oldMax;
    activeMatch.villainHp = Math.max(1, activeMatch.villainHp + diff);
    updateTrackersUI();
  }

  function renderActiveMatch() {
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId) || CAMPAIGN_CHAPTERS[0];
    const villain = CAMPAIGN_VILLAINS[chapter.villainId] || {};

    // Header info
    document.getElementById('matchChapterAct').textContent = chapter.actTitle;
    document.getElementById('matchChapterTitle').textContent = chapter.title;
    document.getElementById('matchVillainName').textContent = villain.name;
    document.getElementById('matchVillainSubtitle').textContent = villain.subtitle;
    document.getElementById('matchVillainAvatar').src = villain.avatar;

    // Synopsis & Comic Reference
    const comicRefEl = document.getElementById('matchComicRefBadge');
    if (comicRefEl) {
      comicRefEl.innerHTML = chapter.comicReference ? `📖 <strong>Inspiración de Cómic:</strong> ${chapter.comicReference}` : '';
      comicRefEl.style.display = chapter.comicReference ? 'block' : 'none';
    }
    document.getElementById('matchSynopsis').textContent = chapter.synopsis;

    // Setup notes checklist
    const setupList = document.getElementById('matchSetupList');
    setupList.innerHTML = '';
    chapter.setupNotes.forEach(note => {
      const li = document.createElement('li');
      li.textContent = note;
      setupList.appendChild(li);
    });

    // Special Rules
    document.getElementById('matchSpecialRules').textContent = chapter.specialRules;

    // Locations Strip
    const locationsStrip = document.getElementById('matchLocationsStrip');
    locationsStrip.innerHTML = '';
    chapter.locations.forEach(loc => {
      const locCard = document.createElement('div');
      locCard.className = 'location-mini-card';
      locCard.innerHTML = `
        <img src="${loc.img}" alt="${loc.name}">
        <p>${loc.name}</p>
      `;
      locationsStrip.appendChild(locCard);
    });

    // Active Heroes in match (Ranuras de 2 Jugadores + 1 Opcional)
    renderMatchHeroTeam();

    // Trackers
    updateTrackersUI();
  }

  let currentPickerSlot = 1;

  function openSlotPicker(slotIndex = 1) {
    currentPickerSlot = slotIndex;
    renderSlotPickerModal();
    slotPickerModal?.classList.add('active');
    soundFX.playClick();
  }

  function renderSlotPickerModal() {
    const titleEl = document.getElementById('slotPickerTitle');
    const subtitleEl = document.getElementById('slotPickerSubtitle');
    const grid = document.getElementById('slotPickerGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const slotLabels = {
      1: '👤 Jorge (J1)',
      2: '🌸 Esposa (J2)',
      3: '⭐ 3er Héroe (José / Apoyo)'
    };

    if (titleEl) {
      titleEl.innerHTML = `Elegir Héroe: <span style="color:#fff;">${slotLabels[currentPickerSlot]}</span>`;
    }

    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId) || CAMPAIGN_CHAPTERS[0];
    const squad = chapter.squadOptions || ['cyclops', 'miles_morales', 'black_cat', 'spider_man'];

    if (subtitleEl) {
      subtitleEl.innerHTML = `
        <div style="display:flex;gap:6px;margin-bottom:8px;">
          <button id="pickerTabSlot1" style="flex:1;padding:6px;border-radius:6px;font-size:0.75rem;font-weight:bold;cursor:pointer;border:1px solid ${currentPickerSlot === 1 ? '#3b82f6' : '#334155'};background:${currentPickerSlot === 1 ? '#1d4ed8' : '#1e293b'};color:#fff;">👤 Jorge</button>
          <button id="pickerTabSlot2" style="flex:1;padding:6px;border-radius:6px;font-size:0.75rem;font-weight:bold;cursor:pointer;border:1px solid ${currentPickerSlot === 2 ? '#ec4899' : '#334155'};background:${currentPickerSlot === 2 ? '#be185d' : '#1e293b'};color:#fff;">🌸 Esposa</button>
          <button id="pickerTabSlot3" style="flex:1;padding:6px;border-radius:6px;font-size:0.75rem;font-weight:bold;cursor:pointer;border:1px solid ${currentPickerSlot === 3 ? '#a855f7' : '#334155'};background:${currentPickerSlot === 3 ? '#7e22ce' : '#1e293b'};color:#fff;">⭐ Apoyo</button>
        </div>
        <div style="font-size:0.72rem;color:var(--comic-yellow);font-weight:bold;margin-bottom:6px;">
          ⭐ PATRULLA DE LA MISIÓN (${squad.length} OPCIONES RECOMENDADAS):
        </div>
      `;

      document.getElementById('pickerTabSlot1')?.addEventListener('click', () => {
        currentPickerSlot = 1;
        renderSlotPickerModal();
      });
      document.getElementById('pickerTabSlot2')?.addEventListener('click', () => {
        currentPickerSlot = 2;
        renderSlotPickerModal();
      });
      document.getElementById('pickerTabSlot3')?.addEventListener('click', () => {
        currentPickerSlot = 3;
        renderSlotPickerModal();
      });
    }

    // 1. Mostrar únicamente las 4 opciones recomendadas de la misión
    squad.forEach(heroId => {
      const hero = CAMPAIGN_HEROES[heroId];
      if (!hero) return;

      const isCurrentInSlot = (currentPickerSlot === 1 && activeMatch.heroSlot1 === heroId) ||
                              (currentPickerSlot === 2 && activeMatch.heroSlot2 === heroId) ||
                              (currentPickerSlot === 3 && activeMatch.heroSlot3 === heroId);

      let slotTag = '';
      if (activeMatch.heroSlot1 === heroId) slotTag = '<span style="font-size:0.6rem;background:#1d4ed8;color:#fff;padding:2px 6px;border-radius:4px;">Jorge (J1)</span>';
      else if (activeMatch.heroSlot2 === heroId) slotTag = '<span style="font-size:0.6rem;background:#be185d;color:#fff;padding:2px 6px;border-radius:4px;">Esposa (J2)</span>';
      else if (activeMatch.heroSlot3 === heroId) slotTag = '<span style="font-size:0.6rem;background:#7e22ce;color:#fff;padding:2px 6px;border-radius:4px;">Apoyo (J3)</span>';

      const card = document.createElement('div');
      card.style.cssText = `background:${isCurrentInSlot ? '#1e293b' : '#111827'};border:2px solid ${isCurrentInSlot ? 'var(--comic-yellow)' : '#2563eb'};border-radius:8px;padding:8px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;cursor:pointer;position:relative;`;
      card.innerHTML = `
        <span style="position:absolute;top:4px;left:6px;font-size:0.6rem;color:var(--comic-yellow);font-weight:bold;">★ Misión</span>
        <img src="${hero.avatar}" style="width:46px;height:46px;border-radius:50%;object-fit:cover;border:2px solid ${isCurrentInSlot ? 'var(--comic-yellow)' : '#3b82f6'};margin-top:6px;">
        <div>
          <strong style="font-size:0.78rem;display:block;color:#fff;line-height:1.1;">${hero.name}</strong>
          <span style="font-size:0.65rem;color:var(--text-muted);display:block;">${hero.alterEgo}</span>
        </div>
        <div>${slotTag}</div>
        ${isCurrentInSlot ? '<span style="font-size:0.65rem;color:var(--comic-yellow);font-weight:bold;">✓ Asignado</span>' : ''}
      `;

      card.addEventListener('click', () => {
        assignHeroToCurrentSlot(heroId);
      });

      grid.appendChild(card);
    });

    // 2. Opción para expandir otros héroes si el jugador lo desea
    const otherHeroes = campaignStorage.state.unlockedHeroes.filter(h => !squad.includes(h));
    if (otherHeroes.length > 0) {
      const moreBtn = document.createElement('button');
      moreBtn.style.cssText = 'grid-column: 1 / -1;background:#0f172a;border:1px dashed #475569;color:#94a3b8;padding:8px;border-radius:6px;font-size:0.72rem;cursor:pointer;margin-top:6px;';
      moreBtn.innerHTML = `<span>+ Ver otros ${otherHeroes.length} héroes desbloqueados</span>`;
      
      const extraContainer = document.createElement('div');
      extraContainer.style.cssText = 'grid-column: 1 / -1;display:none;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px;';
      
      otherHeroes.forEach(heroId => {
        const hero = CAMPAIGN_HEROES[heroId];
        if (!hero) return;
        const isCurrentInSlot = (currentPickerSlot === 1 && activeMatch.heroSlot1 === heroId) ||
                                (currentPickerSlot === 2 && activeMatch.heroSlot2 === heroId) ||
                                (currentPickerSlot === 3 && activeMatch.heroSlot3 === heroId);
        const card = document.createElement('div');
        card.style.cssText = `background:#111827;border:1px solid #374151;border-radius:8px;padding:8px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;cursor:pointer;`;
        card.innerHTML = `
          <img src="${hero.avatar}" style="width:38px;height:38px;border-radius:50%;object-fit:cover;">
          <strong style="font-size:0.75rem;color:#fff;">${hero.name}</strong>
        `;
        card.addEventListener('click', () => {
          assignHeroToCurrentSlot(heroId);
        });
        extraContainer.appendChild(card);
      });

      moreBtn.addEventListener('click', () => {
        if (extraContainer.style.display === 'none') {
          extraContainer.style.display = 'grid';
          moreBtn.textContent = '▲ Ocultar otros héroes';
        } else {
          extraContainer.style.display = 'none';
          moreBtn.innerHTML = `<span>+ Ver otros ${otherHeroes.length} héroes desbloqueados</span>`;
        }
      });

      grid.appendChild(moreBtn);
      grid.appendChild(extraContainer);
    }
  }

  function assignHeroToCurrentSlot(heroId) {
    if (currentPickerSlot === 1) {
      if (activeMatch.heroSlot2 === heroId) activeMatch.heroSlot2 = activeMatch.heroSlot1;
      if (activeMatch.heroSlot3 === heroId) activeMatch.heroSlot3 = null;
      activeMatch.heroSlot1 = heroId;
    } else if (currentPickerSlot === 2) {
      if (activeMatch.heroSlot1 === heroId) activeMatch.heroSlot1 = activeMatch.heroSlot2;
      if (activeMatch.heroSlot3 === heroId) activeMatch.heroSlot3 = null;
      activeMatch.heroSlot2 = heroId;
    } else if (currentPickerSlot === 3) {
      if (activeMatch.heroSlot1 === heroId) activeMatch.heroSlot1 = (campaignStorage.state.unlockedHeroes.find(h => h !== heroId && h !== activeMatch.heroSlot2) || 'spider_man');
      if (activeMatch.heroSlot2 === heroId) activeMatch.heroSlot2 = (campaignStorage.state.unlockedHeroes.find(h => h !== heroId && h !== activeMatch.heroSlot1) || 'wolverine');
      activeMatch.heroSlot3 = heroId;
      recalculateVillainHp();
    }
    soundFX.playClick();
    renderMatchHeroTeam();
    slotPickerModal?.classList.remove('active');
  }

  document.getElementById('btnChangeTeamDirect')?.addEventListener('click', () => {
    openSlotPicker(1);
  });

  document.getElementById('closeSlotPickerBtn')?.addEventListener('click', () => {
    slotPickerModal?.classList.remove('active');
    soundFX.playClick();
  });

  slotPickerModal?.addEventListener('click', (e) => {
    if (e.target === slotPickerModal) {
      slotPickerModal.classList.remove('active');
    }
  });

  function renderMatchHeroTeam() {
    const slotsGrid = document.getElementById('matchSlotsGrid');
    const slot3Container = document.getElementById('matchSlot3Container');
    const modeBadge = document.getElementById('playerModeBadge');
    if (!slotsGrid || !slot3Container) return;

    slotsGrid.innerHTML = '';
    slot3Container.innerHTML = '';

    const hero1 = CAMPAIGN_HEROES[activeMatch.heroSlot1] || CAMPAIGN_HEROES['spider_man'];
    const hero2 = CAMPAIGN_HEROES[activeMatch.heroSlot2] || CAMPAIGN_HEROES['wolverine'];

    // Ranura 1: Jorge
    const slot1Card = document.createElement('div');
    slot1Card.style.cssText = 'background:#131c2e;border:1px solid #2563eb;border-radius:8px;padding:8px;display:flex;align-items:center;gap:8px;cursor:pointer;';
    slot1Card.innerHTML = `
      <img src="${hero1.avatar}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid #2563eb;">
      <div style="overflow:hidden;flex:1;">
        <span style="font-size:0.6rem;color:#93c5fd;font-weight:800;text-transform:uppercase;display:block;">👤 Jorge (J1) ✎</span>
        <strong style="font-size:0.8rem;white-space:nowrap;color:#fff;">${hero1.name}</strong>
      </div>
    `;
    slot1Card.addEventListener('click', () => {
      openSlotPicker(1);
    });
    slotsGrid.appendChild(slot1Card);

    // Ranura 2: Esposa
    const slot2Card = document.createElement('div');
    slot2Card.style.cssText = 'background:#241624;border:1px solid #db2777;border-radius:8px;padding:8px;display:flex;align-items:center;gap:8px;cursor:pointer;';
    slot2Card.innerHTML = `
      <img src="${hero2.avatar}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid #db2777;">
      <div style="overflow:hidden;flex:1;">
        <span style="font-size:0.6rem;color:#fbcfe8;font-weight:800;text-transform:uppercase;display:block;">🌸 Esposa (J2) ✎</span>
        <strong style="font-size:0.8rem;white-space:nowrap;color:#fff;">${hero2.name}</strong>
      </div>
    `;
    slot2Card.addEventListener('click', () => {
      openSlotPicker(2);
    });
    slotsGrid.appendChild(slot2Card);

    // Ranura 3: Apoyo Opcional
    if (activeMatch.heroSlot3) {
      if (modeBadge) {
        modeBadge.textContent = '3 Héroes (2 Jugadores + 1 Apoyo)';
        modeBadge.className = 'badge badge-purple';
      }

      const hero3 = CAMPAIGN_HEROES[activeMatch.heroSlot3] || CAMPAIGN_HEROES['cyclops'];
      const slot3Card = document.createElement('div');
      slot3Card.style.cssText = 'background:#1f1936;border:1px solid #7c3aed;border-radius:8px;padding:8px 12px;display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;';
      slot3Card.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;" id="slot3HeroInfo">
          <img src="${hero3.avatar}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid #7c3aed;">
          <div>
            <span style="font-size:0.6rem;color:#c4b5fd;font-weight:800;text-transform:uppercase;display:block;">⭐ 3er Héroe de Apoyo ✎</span>
            <strong style="font-size:0.8rem;color:#fff;">${hero3.name}</strong>
          </div>
        </div>
        <button id="btnRemoveSlot3" style="background:#3b1e3b;border:1px solid #ef4444;color:#fca5a5;padding:4px 8px;border-radius:4px;font-size:0.68rem;cursor:pointer;font-weight:bold;">✕ Quitar (Jugar 2)</button>
      `;
      slot3Container.appendChild(slot3Card);

      document.getElementById('slot3HeroInfo')?.addEventListener('click', () => {
        openSlotPicker(3);
      });

      document.getElementById('btnRemoveSlot3')?.addEventListener('click', (e) => {
        e.stopPropagation();
        activeMatch.heroSlot3 = null;
        soundFX.playClick();
        recalculateVillainHp();
        renderMatchHeroTeam();
      });
    } else {
      if (modeBadge) {
        modeBadge.textContent = '2 Héroes (Tú y Esposa)';
        modeBadge.className = 'badge badge-blue';
      }

      const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId) || CAMPAIGN_CHAPTERS[0];
      const hero3Data = chapter.assignedHeroSlot3 ? CAMPAIGN_HEROES[chapter.assignedHeroSlot3] : null;
      const hero3Label = hero3Data ? hero3Data.name : 'Apoyo';

      const addBtn = document.createElement('button');
      addBtn.style.cssText = 'width:100%;background:#182030;border:1px dashed #64748b;color:#94a3b8;border-radius:8px;padding:8px;font-size:0.75rem;cursor:pointer;font-weight:bold;display:flex;align-items:center;justify-content:center;gap:6px;';
      addBtn.innerHTML = `<span>➕</span> Activar 3er Héroe de la Misión: <strong style="color:#c4b5fd;">${hero3Label}</strong>`;
      addBtn.addEventListener('click', () => {
        activeMatch.heroSlot3 = chapter.assignedHeroSlot3 || 'black_cat';
        soundFX.playUnlock();
        recalculateVillainHp();
        renderMatchHeroTeam();
      });
      slot3Container.appendChild(addBtn);
    }
  }

  function updateTrackersUI() {
    document.getElementById('trackerVillainHp').textContent = activeMatch.villainHp;
    document.getElementById('trackerVillainMaxHp').textContent = `/ ${activeMatch.villainMaxHp} PS`;
    document.getElementById('trackerCivilians').textContent = `${activeMatch.civiliansSaved} / 9`;
    document.getElementById('trackerThugs').textContent = `${activeMatch.thugsDefeated} / 9`;
    document.getElementById('trackerThreats').textContent = `${activeMatch.threatsCleared} / 4`;
    
    const expCountEl = document.getElementById('trackerExposure');
    expCountEl.textContent = activeMatch.exposureTokens;
    if (activeMatch.exposureTokens >= 3) {
      expCountEl.style.color = 'var(--marvel-red)';
      document.getElementById('exposureAlertBadge').style.display = 'inline-block';
    } else {
      expCountEl.style.color = 'var(--comic-yellow)';
      document.getElementById('exposureAlertBadge').style.display = 'none';
    }
  }

  // Tracker Buttons Event Listeners
  document.getElementById('btnDamageVillainMinus')?.addEventListener('click', () => {
    if (activeMatch.villainHp > 0) {
      activeMatch.villainHp--;
      soundFX.playBam();
      updateTrackersUI();
    }
  });

  document.getElementById('btnDamageVillainPlus')?.addEventListener('click', () => {
    if (activeMatch.villainHp < activeMatch.villainMaxHp) {
      activeMatch.villainHp++;
      soundFX.playClick();
      updateTrackersUI();
    }
  });

  document.getElementById('btnCivilianPlus')?.addEventListener('click', () => {
    activeMatch.civiliansSaved++;
    soundFX.playClick();
    updateTrackersUI();
  });

  document.getElementById('btnCivilianMinus')?.addEventListener('click', () => {
    if (activeMatch.civiliansSaved > 0) {
      activeMatch.civiliansSaved--;
      soundFX.playClick();
      updateTrackersUI();
    }
  });

  document.getElementById('btnThugPlus')?.addEventListener('click', () => {
    activeMatch.thugsDefeated++;
    soundFX.playBam();
    updateTrackersUI();
  });

  document.getElementById('btnThugMinus')?.addEventListener('click', () => {
    if (activeMatch.thugsDefeated > 0) {
      activeMatch.thugsDefeated--;
      soundFX.playClick();
      updateTrackersUI();
    }
  });

  document.getElementById('btnThreatPlus')?.addEventListener('click', () => {
    activeMatch.threatsCleared++;
    soundFX.playClick();
    updateTrackersUI();
  });

  document.getElementById('btnThreatMinus')?.addEventListener('click', () => {
    if (activeMatch.threatsCleared > 0) {
      activeMatch.threatsCleared--;
      soundFX.playClick();
      updateTrackersUI();
    }
  });

  document.getElementById('btnExposurePlus')?.addEventListener('click', () => {
    activeMatch.exposureTokens++;
    soundFX.playClick();
    updateTrackersUI();
  });

  document.getElementById('btnExposureMinus')?.addEventListener('click', () => {
    if (activeMatch.exposureTokens > 0) {
      activeMatch.exposureTokens--;
      soundFX.playClick();
      updateTrackersUI();
    }
  });

  // Digital Event Cards Triggering
  document.getElementById('btnEventInitial')?.addEventListener('click', () => {
    triggerEventCard('initial');
  });

  document.getElementById('btnEventUnderPressure')?.addEventListener('click', () => {
    triggerEventCard('underPressure');
  });

  document.getElementById('btnEventAccelerated')?.addEventListener('click', () => {
    triggerEventCard('accelerated');
  });

  document.getElementById('btnEventCrisis')?.addEventListener('click', () => {
    triggerEventCard('crisis');
  });

  function triggerEventCard(eventType) {
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId) || CAMPAIGN_CHAPTERS[0];
    let eventData = chapter.events[eventType];

    if (!eventData && eventType === 'crisis') {
      const dynamicTwists = [
        {
          title: '¡DESCARGA DE ADRENALINA!',
          type: 'Giro Heroico de Cómic',
          badge: '¡Momento Épico!',
          text: '¡La determinación de la pareja de héroes se enciende ante el peligro! <strong>Cada Héroe gana inmediatamente 1 Ficha de Ataque y 1 Ficha de Movimiento gratis.</strong>',
          flavor: '"¡No nos rendiremos jamás mientras esta ciudad nos necesite!"'
        },
        {
          title: '¡PARAMÉDICO EN EL LUGAR!',
          type: 'Giro de Rescate',
          badge: 'Ayuda Civil',
          text: 'Un civil rescatado asiste a los héroes con primeros auxilios: <strong>Cada Héroe recupera 1 carta de su pila de descarte a su mano.</strong>',
          flavor: '"¡Tengan vendas y antiséptico, sigan luchando por nosotros!"'
        },
        {
          title: '¡INSPIRACIÓN HEROICA!',
          type: 'Sinergia de Equipo',
          badge: 'Unión Heroica',
          text: '¡Un momento de sincronización perfecta! <strong>Cada Héroe roba 1 carta adicional de su mazo y puede mover a un compañero 1 espacio gratis.</strong>',
          flavor: 'Una mirada de complicidad basta para coordinar el siguiente movimiento.'
        },
        {
          title: '¡FLASH DEL DAILY BUGLE!',
          type: 'Incidente con la Prensa',
          badge: 'Prensa Hostil',
          text: 'Un reportero toma una foto sorpresa: <strong>Ganan 1 Ficha de Exposición, PERO la indignación les da fuerzas: cada héroe gana 1 Ficha Heroica.</strong>',
          flavor: '"¡Sigan peleando, esto va directo a la portada!" — Periodista'
        }
      ];
      eventData = dynamicTwists[Math.floor(Math.random() * dynamicTwists.length)];
    }

    if (!eventData) return;

    soundFX.playCardFlip();

    const flipper = document.getElementById('cardFlipper');
    const frontEl = document.getElementById('comicCardFront');
    
    // Configurar clase y contenido
    frontEl.className = `comic-card-front event-${eventType}`;
    document.getElementById('eventCardTypeBadge').textContent = eventData.badge || eventData.type;
    document.getElementById('eventCardTitle').textContent = eventData.title;
    document.getElementById('eventCardRule').innerHTML = eventData.text;
    document.getElementById('eventCardFlavor').textContent = eventData.flavor || '';
    document.getElementById('eventCardFooterSeries').textContent = `${chapter.actTitle} • CAP. ${chapter.id}`;

    // Reset y abrir modal
    flipper.classList.remove('flipped');
    eventModal.classList.add('active');

    // Auto flip con delay para efecto dramático
    setTimeout(() => {
      flipper.classList.add('flipped');
    }, 200);
  }

  // Tap to flip manual
  document.getElementById('cardFlipper')?.addEventListener('click', () => {
    soundFX.playCardFlip();
    document.getElementById('cardFlipper').classList.toggle('flipped');
  });

  document.getElementById('closeEventModalBtn')?.addEventListener('click', () => {
    eventModal.classList.remove('active');
    soundFX.playClick();
  });

  // Match Outcome Buttons
  document.getElementById('btnDeclareWin')?.addEventListener('click', () => {
    handleMatchResult('win');
  });

  document.getElementById('btnDeclareLoss')?.addEventListener('click', () => {
    handleMatchResult('loss');
  });

  function handleMatchResult(result) {
    const chapter = CAMPAIGN_CHAPTERS.find(c => c.id === activeMatch.chapterId);
    if (!chapter) return;

    const outcome = result === 'win' ? chapter.winOutcome : chapter.lossOutcome;
    
    // Guardar en Storage
    campaignStorage.recordGameResult(chapter.id, result, activeMatch.getSelectedHeroes());

    // Sonido
    if (result === 'win') {
      soundFX.playVictory();
    } else {
      soundFX.playDefeat();
    }

    // Modal de desenlace
    const retryBtn = document.getElementById('btnRetryOutcomeModal');
    const closeBtn = document.getElementById('closeOutcomeModalBtn');

    document.getElementById('outcomeBadge').textContent = result === 'win' ? '¡VICTORIA ÉPICA!' : 'DERROTA TÁCTICA';
    document.getElementById('outcomeBadge').className = `badge ${result === 'win' ? 'badge-green' : 'badge-red'}`;
    document.getElementById('outcomeTitle').textContent = outcome.title;
    document.getElementById('outcomeEpilogue').textContent = outcome.epilogue;
    document.getElementById('outcomeBonus').textContent = outcome.bonusText || outcome.penalties || '';

    if (result === 'win') {
      if (retryBtn) retryBtn.style.display = 'none';
      if (closeBtn) {
        closeBtn.textContent = 'Continuar al Siguiente Capítulo ➔';
        closeBtn.className = 'btn-primary';
      }
    } else {
      if (retryBtn) retryBtn.style.display = 'block';
      if (closeBtn) {
        closeBtn.textContent = 'Aceptar Derrota y Continuar Historia ➔';
        closeBtn.className = 'btn-secondary';
      }
    }

    // Desbloqueos visuales en el modal
    const unlocksContainer = document.getElementById('outcomeUnlocksContainer');
    unlocksContainer.innerHTML = '';

    if (result === 'win' && outcome.unlockedHeroes && outcome.unlockedHeroes.length > 0) {
      outcome.unlockedHeroes.forEach(heroId => {
        const hero = CAMPAIGN_HEROES[heroId];
        if (!hero) return;
        const div = document.createElement('div');
        div.style.cssText = 'background:var(--bg-card);border:2px solid var(--comic-yellow);border-radius:8px;padding:8px;display:flex;align-items:center;gap:10px;margin-top:6px;';
        div.innerHTML = `
          <img src="${hero.avatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
          <div>
            <strong style="color:var(--comic-yellow);font-size:0.85rem">¡HÉROE DESBLOQUEADO!</strong>
            <p style="font-size:0.75rem">${hero.name} (${hero.alterEgo})</p>
          </div>
        `;
        unlocksContainer.appendChild(div);
      });
      setTimeout(() => soundFX.playUnlock(), 600);
    }

    outcomeModal.classList.add('active');
  }

  document.getElementById('closeOutcomeModalBtn')?.addEventListener('click', () => {
    outcomeModal.classList.remove('active');
    soundFX.playClick();
    // Volver a cargar la siguiente misión o volver al timeline
    loadChapterIntoMatch(campaignStorage.state.currentChapterId);
    switchTab('timeline');
  });

  document.getElementById('btnRetryOutcomeModal')?.addEventListener('click', () => {
    outcomeModal.classList.remove('active');
    soundFX.playClick();
    // Restaurar capítulo actual para la revancha y resetear partida
    campaignStorage.state.currentChapterId = activeMatch.chapterId;
    campaignStorage.saveState();
    loadChapterIntoMatch(activeMatch.chapterId);
    switchTab('match');
  });

  // =========================================================================
  // 3. ROSTER / CATÁLOGO DE HÉROES
  // =========================================================================
  let currentRosterFilter = 'all';

  function renderRoster() {
    const grid = document.getElementById('rosterGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const heroEntries = Object.values(CAMPAIGN_HEROES);

    const filtered = heroEntries.filter(hero => {
      const isUnlocked = campaignStorage.isHeroUnlocked(hero.id);
      if (currentRosterFilter === 'unlocked') return isUnlocked;
      if (currentRosterFilter === 'locked') return !isUnlocked;
      if (currentRosterFilter === 'antihero') return hero.isAntiHero;
      if (currentRosterFilter === 'xmen') return hero.originBox.includes('X-Men');
      if (currentRosterFilter === 'spider') return hero.originBox.includes('Spider');
      return true;
    });

    filtered.forEach(hero => {
      const isUnlocked = campaignStorage.isHeroUnlocked(hero.id);
      const isSelected = activeMatch.getSelectedHeroes().includes(hero.id);

      const card = document.createElement('div');
      card.className = `hero-card ${isUnlocked ? '' : 'locked'} ${isSelected ? 'selected' : ''}`;

      card.innerHTML = `
        <div class="hero-img-wrap">
          <img src="${hero.avatar}" alt="${hero.name}">
          ${hero.isAntiHero ? '<span class="hero-badge-tag badge-purple">ANTI-HÉROE</span>' : ''}
          ${isSelected ? '<span class="hero-badge-tag badge-yellow" style="left:6px;right:auto">EN EQUIPO</span>' : ''}
          ${!isUnlocked ? '<span class="hero-badge-tag badge-red">BLOQUEADO</span>' : ''}
        </div>
        <div class="hero-meta-body">
          <div class="hero-name">${hero.name}</div>
          <div class="hero-alter">${hero.alterEgo}</div>
          <div class="hero-role">${hero.role}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        openHeroDetail(hero, isUnlocked, isSelected);
      });

      grid.appendChild(card);
    });
  }

  // Filtros del Roster
  document.querySelectorAll('.roster-filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.roster-filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRosterFilter = btn.dataset.filter;
      soundFX.playClick();
      renderRoster();
    });
  });

  function openHeroDetail(hero, isUnlocked, isSelected) {
    document.getElementById('modalHeroAvatar').src = hero.avatar;
    document.getElementById('modalHeroName').textContent = hero.name;
    document.getElementById('modalHeroAlter').textContent = hero.alterEgo;
    document.getElementById('modalHeroBox').textContent = hero.originBox;
    document.getElementById('modalHeroRole').textContent = hero.role;
    document.getElementById('modalHeroTrait').textContent = hero.trait;
    document.getElementById('modalHeroDesc').textContent = hero.description;
    
    // Stats
    document.getElementById('statMov').textContent = hero.stats.mov;
    document.getElementById('statAtk').textContent = hero.stats.atk;
    document.getElementById('statHer').textContent = hero.stats.her;
    document.getElementById('statWild').textContent = hero.stats.wild;

    // Unlock Condition Box
    const unlockBox = document.getElementById('modalHeroUnlockCond');
    const assignContainer = document.getElementById('heroAssignContainer');

    if (!isUnlocked) {
      unlockBox.style.display = 'block';
      unlockBox.innerHTML = `<strong>Condición de Desbloqueo:</strong><br>${hero.unlockCondition || 'Avanza en la campaña'}`;
      if (assignContainer) assignContainer.style.display = 'none';
    } else {
      unlockBox.style.display = 'none';
      if (assignContainer) assignContainer.style.display = 'flex';

      const btn1 = document.getElementById('btnAssignSlot1');
      const btn2 = document.getElementById('btnAssignSlot2');
      const btn3 = document.getElementById('btnAssignSlot3');

      if (btn1) {
        btn1.textContent = activeMatch.heroSlot1 === hero.id ? '✓ Asignado a Jorge (J1)' : '👤 Asignar a Jorge (Jugador 1)';
        btn1.onclick = () => {
          if (activeMatch.heroSlot2 === hero.id) activeMatch.heroSlot2 = activeMatch.heroSlot1;
          if (activeMatch.heroSlot3 === hero.id) activeMatch.heroSlot3 = null;
          activeMatch.heroSlot1 = hero.id;
          soundFX.playClick();
          heroDetailModal.classList.remove('active');
          renderRoster();
          renderMatchHeroTeam();
        };
      }

      if (btn2) {
        btn2.textContent = activeMatch.heroSlot2 === hero.id ? '✓ Asignada a Esposa (J2)' : '🌸 Asignar a Esposa (Jugadora 2)';
        btn2.onclick = () => {
          if (activeMatch.heroSlot1 === hero.id) activeMatch.heroSlot1 = activeMatch.heroSlot2;
          if (activeMatch.heroSlot3 === hero.id) activeMatch.heroSlot3 = null;
          activeMatch.heroSlot2 = hero.id;
          soundFX.playClick();
          heroDetailModal.classList.remove('active');
          renderRoster();
          renderMatchHeroTeam();
        };
      }

      if (btn3) {
        btn3.textContent = activeMatch.heroSlot3 === hero.id ? '✓ Asignado como 3er Héroe' : '⭐ Asignar como 3er Héroe (Apoyo Opcional)';
        btn3.onclick = () => {
          if (activeMatch.heroSlot1 === hero.id) activeMatch.heroSlot1 = (campaignStorage.state.unlockedHeroes.find(h => h !== hero.id && h !== activeMatch.heroSlot2) || 'spider_man');
          if (activeMatch.heroSlot2 === hero.id) activeMatch.heroSlot2 = (campaignStorage.state.unlockedHeroes.find(h => h !== hero.id && h !== activeMatch.heroSlot1) || 'wolverine');
          activeMatch.heroSlot3 = hero.id;
          soundFX.playUnlock();
          recalculateVillainHp();
          heroDetailModal.classList.remove('active');
          renderRoster();
          renderMatchHeroTeam();
        };
      }
    }

    heroDetailModal.classList.add('active');
    soundFX.playClick();
  }

  document.getElementById('closeHeroModalBtn')?.addEventListener('click', () => {
    heroDetailModal.classList.remove('active');
    soundFX.playClick();
  });

  // =========================================================================
  // 4. PERKS & ARSENAL
  // =========================================================================
  function renderPerks() {
    const list = document.getElementById('perksListContainer');
    if (!list) return;
    list.innerHTML = '';

    const perkEntries = Object.values(CAMPAIGN_PERKS);

    perkEntries.forEach(perk => {
      const isUnlocked = campaignStorage.state.unlockedPerks.includes(perk.id);
      const isActive = campaignStorage.state.activePerks.includes(perk.id);

      const item = document.createElement('div');
      item.className = `history-card ${isActive ? 'win' : ''}`;
      item.style.cursor = isUnlocked ? 'pointer' : 'default';
      item.style.opacity = isUnlocked ? '1' : '0.55';

      item.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.4rem">${perk.icon}</span>
            <strong style="font-family:var(--font-comic);font-size:1rem;color:${isActive ? 'var(--comic-yellow)' : 'var(--text-main)'}">${perk.name}</strong>
          </div>
          <div>
            ${isActive ? '<span class="badge badge-yellow">EQUIPADO</span>' : isUnlocked ? '<span class="badge badge-blue">DISPONIBLE</span>' : '<span class="badge badge-red">BLOQUEADO</span>'}
          </div>
        </div>
        <p style="font-size:0.78rem;color:#cbd5e1;margin-bottom:4px;">${perk.description}</p>
        <div style="font-size:0.7rem;color:var(--text-muted);display:flex;justify-content:space-between;">
          <span>Origen: Capítulo ${perk.sourceChapter}</span>
          <span>${isUnlocked ? (isActive ? 'Toca para desequipar' : 'Toca para equipar en la partida') : 'Se obtiene ganando el capítulo'}</span>
        </div>
      `;

      if (isUnlocked) {
        item.addEventListener('click', () => {
          campaignStorage.toggleActivePerk(perk.id);
          soundFX.playClick();
          renderPerks();
        });
      }

      list.appendChild(item);
    });
  }

  // =========================================================================
  // 5. HISTORIAL & ESTADÍSTICAS
  // =========================================================================
  function renderHistory() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;
    container.innerHTML = '';

    // Stats
    document.getElementById('statTotalWins').textContent = campaignStorage.state.gameStats.totalWins;
    document.getElementById('statTotalLosses').textContent = campaignStorage.state.gameStats.totalLosses;
    document.getElementById('statHeroesUnlocked').textContent = `${campaignStorage.state.unlockedHeroes.length} / 15`;

    if (campaignStorage.state.history.length === 0) {
      container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:20px;">Aún no se ha librado ninguna batalla en la campaña. ¡Comienza jugando el Capítulo 1 en la mesa!</p>';
      return;
    }

    campaignStorage.state.history.slice().reverse().forEach((entry, idx) => {
      const card = document.createElement('div');
      const isWin = entry.result === 'win';
      card.className = `history-card ${isWin ? 'win' : ''}`;

      const dateStr = new Date(entry.timestamp).toLocaleDateString();

      card.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <strong style="color:${isWin ? 'var(--success-green)' : 'var(--marvel-red)'}">${isWin ? '✓ VICTORIA' : '✕ DERROTA'} — ${entry.chapterTitle}</strong>
          <span style="font-size:0.7rem;color:var(--text-muted)">${dateStr}</span>
        </div>
        <p style="font-size:0.75rem;color:#cbd5e1">Héroes participantes: ${entry.selectedHeroes.map(h => CAMPAIGN_HEROES[h]?.name || h).join(', ')}</p>
      `;

      container.appendChild(card);
    });
  }

  // Exportar / Importar / Reiniciar
  document.getElementById('btnExportCampaign')?.addEventListener('click', () => {
    const json = campaignStorage.exportJson();
    navigator.clipboard.writeText(json).then(() => {
      alert('¡Progreso de la campaña copiado al portapapeles en formato JSON!');
    }).catch(() => {
      prompt('Copia este código de respaldo de tu campaña:', json);
    });
  });

  document.getElementById('btnImportCampaign')?.addEventListener('click', () => {
    const input = prompt('Pega el código JSON de tu campaña respaldada:');
    if (input) {
      if (campaignStorage.importJson(input)) {
        alert('¡Campaña restaurada exitosamente!');
        switchTab('timeline');
      } else {
        alert('Error: El formato de datos no es válido.');
      }
    }
  });

  document.getElementById('btnResetCampaign')?.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas reiniciar toda la campaña? Perderás los héroes desbloqueados y el historial actual.')) {
      campaignStorage.resetCampaign();
      loadChapterIntoMatch(1);
      switchTab('timeline');
      alert('Campaña reiniciada al Capítulo 1.');
    }
  });

  // Inicialización
  loadChapterIntoMatch(campaignStorage.state.currentChapterId);
  renderTimeline();

  // Registro del Service Worker para PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('[PWA] Service Worker registrado exitosamente:', reg.scope);
      }).catch(err => {
        console.log('[PWA] Error registrando Service Worker:', err);
      });
    });
  }
});
