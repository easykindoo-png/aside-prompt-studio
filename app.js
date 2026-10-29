/**
 * Aside Prompt Studio - Main Application Logic
 * Full interactive prompt management, real-time variable replacer, and safe automation hub.
 */

(function () {
  'use strict';

  // --- State ---
  const STORAGE_KEY = 'aside_prompts_data_v1';
  const FAVORITES_KEY = 'aside_favorites_v1';
  const THEME_KEY = 'aside_theme_v1';

  let prompts = [];
  let favorites = new Set();
  let currentCategory = '전체';
  let searchQuery = '';
  let activeModalPrompt = null;
  let editingPromptId = null;

  // --- DOM Elements ---
  const promptGrid = document.getElementById('promptGrid');
  const categoryChips = document.getElementById('categoryChips');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const totalCountEl = document.getElementById('totalCount');
  const matchCountEl = document.getElementById('matchCount');
  const emptyStateEl = document.getElementById('emptyState');
  const toastContainer = document.getElementById('toastContainer');

  // Modals
  const detailModal = document.getElementById('detailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const editModal = document.getElementById('editModal');
  const editModalCloseBtn = document.getElementById('editModalCloseBtn');
  const btnCancelEdit = document.getElementById('btnCancelEdit');

  // Detail Modal Elements
  const modalId = document.getElementById('modalId');
  const modalStatus = document.getElementById('modalStatus');
  const modalGroup = document.getElementById('modalGroup');
  const modalTitle = document.getElementById('modalTitle');
  const modalWhy = document.getElementById('modalWhy');
  const modalStop = document.getElementById('modalStop');
  const variableInputsContainer = document.getElementById('variableInputsContainer');
  const modalPromptPreview = document.getElementById('modalPromptPreview');
  const btnFillSample = document.getElementById('btnFillSample');
  const btnCopyPrompt = document.getElementById('btnCopyPrompt');
  const btnCopyCli = document.getElementById('btnCopyCli');
  const btnEditCurrent = document.getElementById('btnEditCurrent');
  const btnDeleteCurrent = document.getElementById('btnDeleteCurrent');

  // Edit Modal Inputs
  const editModalTitle = document.getElementById('editModalTitle');
  const inputGroup = document.getElementById('inputGroup');
  const inputTitle = document.getElementById('inputTitle');
  const inputWhy = document.getElementById('inputWhy');
  const inputStop = document.getElementById('inputStop');
  const inputPrompt = document.getElementById('inputPrompt');
  const inputSites = document.getElementById('inputSites');
  const inputTags = document.getElementById('inputTags');
  const btnSavePrompt = document.getElementById('btnSavePrompt');

  // Action Buttons
  const btnNewPrompt = document.getElementById('btnNewPrompt');
  const btnExport = document.getElementById('btnExport');
  const btnImport = document.getElementById('btnImport');
  const fileInput = document.getElementById('fileInput');
  const btnResetData = document.getElementById('btnResetData');
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const themeIconDark = document.getElementById('themeIconDark');
  const themeIconLight = document.getElementById('themeIconLight');

  // --- Initialization ---
  function init() {
    loadTheme();
    loadFavorites();
    loadPrompts();
    renderChips();
    renderPrompts();
    bindEvents();
  }

  // --- Data Loading & Persistence ---
  function loadPrompts() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        prompts = JSON.parse(stored);
      } else {
        prompts = [...DEFAULT_PROMPTS];
        savePrompts();
      }
    } catch (e) {
      console.error('Failed to load prompts from storage', e);
      prompts = [...DEFAULT_PROMPTS];
    }
  }

  function savePrompts() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
    } catch (e) {
      console.error('Failed to save prompts to storage', e);
    }
  }

  function loadFavorites() {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        favorites = new Set(JSON.parse(stored));
      }
    } catch (e) {
      favorites = new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }

  function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    if (favorites.has(id)) {
      favorites.delete(id);
      showToast('즐겨찾기에서 제거되었습니다.');
    } else {
      favorites.add(id);
      showToast('⭐ 즐겨찾기에 등록되었습니다.');
    }
    saveFavorites();
    renderPrompts();
  }

  // --- Theme Management ---
  function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIconDark.style.display = 'block';
      themeIconLight.style.display = 'none';
    } else {
      themeIconDark.style.display = 'none';
      themeIconLight.style.display = 'block';
    }
  }

  // --- Rendering Functions ---
  function getUniqueGroups() {
    const set = new Set();
    prompts.forEach((p) => {
      if (p.group) set.add(p.group);
    });
    return Array.from(set);
  }

  function renderChips() {
    categoryChips.innerHTML = '';

    const groups = ['전체', '⭐ 즐겨찾기', ...getUniqueGroups()];
    // Check if user has custom prompts
    const hasCustom = prompts.some((p) => p.isCustom);
    if (hasCustom && !groups.includes('✏️ 내가 만든 프롬프트')) {
      groups.push('✏️ 내가 만든 프롬프트');
    }

    groups.forEach((group) => {
      const btn = document.createElement('button');
      btn.className = `chip ${group === currentCategory ? 'active' : ''}`;
      btn.textContent = group;
      btn.addEventListener('click', () => {
        currentCategory = group;
        document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
        btn.classList.add('active');
        renderPrompts();
      });
      categoryChips.appendChild(btn);
    });
  }

  function getFilteredPrompts() {
    return prompts.filter((item) => {
      // Category filter
      if (currentCategory === '⭐ 즐겨찾기') {
        if (!favorites.has(item.id)) return false;
      } else if (currentCategory === '✏️ 내가 만든 프롬프트') {
        if (!item.isCustom) return false;
      } else if (currentCategory !== '전체') {
        if (item.group !== currentCategory) return false;
      }

      // Search filter
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchWhy = (item.why || '').toLowerCase().includes(q);
      const matchPrompt = (item.prompt || '').toLowerCase().includes(q);
      const matchStop = (item.stop || '').toLowerCase().includes(q);
      const matchTags = (item.tags || []).some((t) => t.toLowerCase().includes(q));
      const matchSites = (item.sites || []).some((s) => s.toLowerCase().includes(q));

      return matchTitle || matchWhy || matchPrompt || matchStop || matchTags || matchSites;
    });
  }

  function renderPrompts() {
    const filtered = getFilteredPrompts();

    totalCountEl.textContent = prompts.length;
    matchCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      promptGrid.innerHTML = '';
      emptyStateEl.style.display = 'block';
      return;
    }

    emptyStateEl.style.display = 'none';
    promptGrid.innerHTML = '';

    filtered.forEach((item) => {
      const isFav = favorites.has(item.id);
      const card = document.createElement('div');
      card.className = 'card';
      card.addEventListener('click', () => openDetailModal(item));

      const sitesHtml = (item.sites || [])
        .map((s) => `<span class="tag tag-site">${escapeHtml(s)}</span>`)
        .join('');
      const tagsHtml = (item.tags || [])
        .slice(0, 3)
        .map((t) => `<span class="tag">#${escapeHtml(t)}</span>`)
        .join('');

      card.innerHTML = `
        <div>
          <div class="card-top">
            <div class="card-id-group">
              <span class="card-id">${escapeHtml(item.id)}</span>
              <span class="card-group">${escapeHtml(item.group || '일반')}</span>
            </div>
            <button class="favorite-btn ${isFav ? 'active' : ''}" title="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}" data-id="${item.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>

          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-why">${escapeHtml(item.why || '')}</p>

          ${
            item.stop
              ? `<div class="card-stop-rule">
                  <span style="font-weight: 700;">🛑</span>
                  <span>${escapeHtml(item.stop)}</span>
                </div>`
              : ''
          }

          <div class="card-meta">
            <span class="tag tag-status">${escapeHtml(item.status || '준비됨')}</span>
            ${sitesHtml}
            ${tagsHtml}
          </div>
        </div>

        <div class="card-footer">
          <span class="hint">클릭하여 변수 입력 &amp; 맞춤 생성</span>
          <button class="btn btn-sm copy-btn" title="프롬프트 원문 복사" data-id="${item.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            복사
          </button>
        </div>
      `;

      // Card Events
      const favBtn = card.querySelector('.favorite-btn');
      favBtn.addEventListener('click', (e) => toggleFavorite(item.id, e));

      const quickCopyBtn = card.querySelector('.copy-btn');
      quickCopyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(item.prompt, `"${item.title}" 프롬프트가 복사되었습니다!`);
      });

      promptGrid.appendChild(card);
    });
  }

  // --- Interactive Variable Replacer & Detail Modal ---
  function openDetailModal(item) {
    activeModalPrompt = item;

    modalId.textContent = `#${item.id}`;
    modalStatus.textContent = item.status || '실전 검증됨';
    modalGroup.textContent = item.group || '일반';
    modalTitle.textContent = item.title;
    modalWhy.textContent = item.why || '등록된 설명이 없습니다.';

    if (item.stop) {
      modalStop.textContent = item.stop;
      document.getElementById('modalStopWrapper').style.display = 'flex';
    } else {
      document.getElementById('modalStopWrapper').style.display = 'none';
    }

    // Extract Variables like {{변수명}}
    const variables = extractVariables(item.prompt);
    buildVariableInputs(variables, item.sampleValues || {});
    updateLivePromptPreview();

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    detailModal.classList.remove('open');
    document.body.style.overflow = '';
    activeModalPrompt = null;
  }

  function extractVariables(text) {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    return matches;
  }

  function buildVariableInputs(variables, sampleValues) {
    variableInputsContainer.innerHTML = '';

    if (variables.length === 0) {
      variableInputsContainer.innerHTML =
        '<p style="color: var(--text-muted); font-size: 0.85rem;">치환할 변수({{...}})가 없는 일반 프롬프트입니다.</p>';
      btnFillSample.style.display = 'none';
      return;
    }

    btnFillSample.style.display = 'inline-flex';

    variables.forEach((varName) => {
      const group = document.createElement('div');
      group.className = 'var-input-group';

      const label = document.createElement('label');
      label.textContent = `{{${varName}}}`;

      const input = document.createElement('input');
      input.type = 'text';
      input.dataset.var = varName;
      input.placeholder = sampleValues[varName] ? `예: ${sampleValues[varName]}` : `${varName} 입력`;

      input.addEventListener('input', () => {
        updateLivePromptPreview();
      });

      group.appendChild(label);
      group.appendChild(input);
      variableInputsContainer.appendChild(group);
    });
  }

  function fillSampleValues() {
    if (!activeModalPrompt) return;
    const sampleValues = activeModalPrompt.sampleValues || {};
    const inputs = variableInputsContainer.querySelectorAll('input[data-var]');
    inputs.forEach((input) => {
      const varName = input.dataset.var;
      if (sampleValues[varName]) {
        input.value = sampleValues[varName];
      }
    });
    updateLivePromptPreview();
    showToast('💡 기본 예시값이 입력되었습니다.');
  }

  function getReplacedPromptText() {
    if (!activeModalPrompt) return '';
    let text = activeModalPrompt.prompt;
    const inputs = variableInputsContainer.querySelectorAll('input[data-var]');

    inputs.forEach((input) => {
      const varName = input.dataset.var;
      const value = input.value.trim();
      const targetRegex = new RegExp(`\\{\\{${escapeRegExp(varName)}\\}\\}`, 'g');
      if (value) {
        text = text.replace(targetRegex, value);
      }
    });
    return text;
  }

  function updateLivePromptPreview() {
    if (!activeModalPrompt) return;
    let html = escapeHtml(activeModalPrompt.prompt);
    const inputs = variableInputsContainer.querySelectorAll('input[data-var]');

    inputs.forEach((input) => {
      const varName = input.dataset.var;
      const value = input.value.trim();
      const targetStr = `{{${varName}}}`;
      const escapedTarget = escapeHtml(targetStr);

      if (value) {
        // Highlight replaced value
        html = html.split(escapedTarget).join(`<span class="ph">${escapeHtml(value)}</span>`);
      } else {
        // Highlight placeholder
        html = html.split(escapedTarget).join(`<span class="ph">{{${escapeHtml(varName)}}}</span>`);
      }
    });

    modalPromptPreview.innerHTML = html;
  }

  // --- CRUD: Create / Edit Prompt Modal ---
  function openEditModal(promptToEdit = null) {
    if (promptToEdit) {
      editingPromptId = promptToEdit.id;
      editModalTitle.textContent = `프롬프트 수정 (${promptToEdit.id})`;
      inputGroup.value = promptToEdit.group || '';
      inputTitle.value = promptToEdit.title || '';
      inputWhy.value = promptToEdit.why || '';
      inputStop.value = promptToEdit.stop || '';
      inputPrompt.value = promptToEdit.prompt || '';
      inputSites.value = (promptToEdit.sites || []).join(', ');
      inputTags.value = (promptToEdit.tags || []).join(', ');
    } else {
      editingPromptId = null;
      editModalTitle.textContent = '새 프롬프트 추가';
      inputGroup.value = currentCategory.startsWith('⭐') || currentCategory === '전체' ? '업무 자동화 & RPA' : currentCategory;
      inputTitle.value = '';
      inputWhy.value = '';
      inputStop.value = '';
      inputPrompt.value = '';
      inputSites.value = '';
      inputTags.value = '';
    }

    editModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeEditModal() {
    editModal.classList.remove('open');
    document.body.style.overflow = '';
    editingPromptId = null;
  }

  function saveCurrentPrompt() {
    const title = inputTitle.value.trim();
    const promptText = inputPrompt.value.trim();
    if (!title || !promptText) {
      alert('제목과 프롬프트 본문은 필수 입력 사항입니다.');
      return;
    }

    const group = inputGroup.value.trim() || '기타';
    const why = inputWhy.value.trim();
    const stop = inputStop.value.trim();
    const sites = inputSites.value
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const tags = inputTags.value
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingPromptId) {
      // Update existing
      const idx = prompts.findIndex((p) => p.id === editingPromptId);
      if (idx !== -1) {
        prompts[idx] = {
          ...prompts[idx],
          group,
          title,
          why,
          stop,
          prompt: promptText,
          sites,
          tags
        };
        showToast('프롬프트가 수정되었습니다.');
      }
    } else {
      // Create new
      const nextIdNumber = prompts.length + 1;
      const nextId = `C${String(nextIdNumber).padStart(2, '0')}`;
      const newPrompt = {
        id: nextId,
        group,
        title,
        why,
        stop,
        prompt: promptText,
        status: '나만의 프롬프트',
        sites,
        tags,
        isCustom: true,
        sampleValues: {}
      };
      prompts.unshift(newPrompt);
      showToast('새 프롬프트가 성공적으로 추가되었습니다!');
    }

    savePrompts();
    renderChips();
    renderPrompts();
    closeEditModal();

    if (activeModalPrompt && editingPromptId === activeModalPrompt.id) {
      const updated = prompts.find((p) => p.id === editingPromptId);
      if (updated) openDetailModal(updated);
    }
  }

  function deletePrompt(id) {
    if (!confirm(`'${id}' 프롬프트를 정말 삭제하시겠습니까?`)) return;
    prompts = prompts.filter((p) => p.id !== id);
    favorites.delete(id);
    savePrompts();
    saveFavorites();
    renderChips();
    renderPrompts();
    closeDetailModal();
    showToast('프롬프트가 삭제되었습니다.');
  }

  // --- Export & Import ---
  function exportData() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(prompts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `aside_prompts_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('💾 프롬프트 백업 파일이 다운로드되었습니다.');
  }

  function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          prompts = imported;
          savePrompts();
          renderChips();
          renderPrompts();
          showToast(`✅ ${imported.length}개의 프롬프트가 복원되었습니다!`);
        } else {
          alert('올바른 JSON 프롬프트 배열 형식이 아닙니다.');
        }
      } catch (err) {
        alert('JSON 파일을 파싱하는 데 실패했습니다: ' + err.message);
      }
      fileInput.value = '';
    };
    reader.readAsText(file);
  }

  function resetToDefault() {
    if (confirm('모든 프롬프트를 기본 초기 상태로 복원하시겠습니까? (직접 추가한 항목이 삭제될 수 있습니다)')) {
      prompts = [...DEFAULT_PROMPTS];
      savePrompts();
      renderChips();
      renderPrompts();
      showToast('초기 기본 데이터로 복원되었습니다.');
    }
  }

  // --- Utilities ---
  function copyToClipboard(text, successMessage = '클립보드에 복사되었습니다!') {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast(`📋 ${successMessage}`);
      })
      .catch((err) => {
        console.error('Copy failed', err);
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        showToast(`📋 ${successMessage}`);
      });
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(16px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // --- Event Bindings ---
  function bindEvents() {
    // Search
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      searchClear.classList.toggle('visible', searchQuery.length > 0);
      renderPrompts();
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      renderPrompts();
      searchInput.focus();
    });

    // Theme Toggle
    btnThemeToggle.addEventListener('click', toggleTheme);

    // Modals Close Events
    modalCloseBtn.addEventListener('click', closeDetailModal);
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal();
    });

    editModalCloseBtn.addEventListener('click', closeEditModal);
    btnCancelEdit.addEventListener('click', closeEditModal);
    editModal.addEventListener('click', (e) => {
      if (e.target === editModal) closeEditModal();
    });

    // Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDetailModal();
        closeEditModal();
      }
    });

    // Detail Modal Actions
    btnFillSample.addEventListener('click', fillSampleValues);

    btnCopyPrompt.addEventListener('click', () => {
      const text = getReplacedPromptText();
      copyToClipboard(text, '완성된 맞춤 프롬프트가 복사되었습니다!');
    });

    btnCopyCli.addEventListener('click', () => {
      const text = getReplacedPromptText();
      const cliCmd = `aside ${JSON.stringify(text)}`;
      copyToClipboard(cliCmd, 'Aside CLI 명령어가 복사되었습니다!');
    });

    btnEditCurrent.addEventListener('click', () => {
      if (activeModalPrompt) {
        openEditModal(activeModalPrompt);
      }
    });

    btnDeleteCurrent.addEventListener('click', () => {
      if (activeModalPrompt) {
        deletePrompt(activeModalPrompt.id);
      }
    });

    // Edit Modal Save
    btnSavePrompt.addEventListener('click', saveCurrentPrompt);

    // Header Actions
    btnNewPrompt.addEventListener('click', () => openEditModal(null));
    btnExport.addEventListener('click', exportData);
    btnImport.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', importData);
    btnResetData.addEventListener('click', resetToDefault);
  }

  // Run App
  init();
})();
