/**
 * Main Application Logic & Event Controllers
 */

import { INITIAL_VIDEOS, CATEGORIES } from './videosData.js';
import { extractDriveFileId, getEmbedUrl, getThumbnailUrl, isFacebookUrl } from './driveUtils.js';

// Application State
let videos = [...INITIAL_VIDEOS];
let activeCategory = 'all';
let searchQuery = '';

// DOM Elements
const videoGrid = document.getElementById('videoGrid');
const categoryPillsContainer = document.getElementById('categoryPills');
const searchInput = document.getElementById('searchInput');
const modalOverlay = document.getElementById('videoModal');
const modalFrameContainer = document.getElementById('modalPlayerWrapper');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalDirectLink = document.getElementById('modalDirectLink');
const closeModalBtn = document.getElementById('closeModalBtn');
const toastContainer = document.getElementById('toastContainer');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderVideos();
  setupEventListeners();
  updateStats();
});

// Render Category Filter Pills
function renderCategories() {
  if (!categoryPillsContainer) return;
  categoryPillsContainer.innerHTML = CATEGORIES.map(cat => `
    <button class="category-btn ${cat.id === activeCategory ? 'active' : ''}" data-id="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = e.currentTarget.dataset.id;
      renderCategories();
      renderVideos();
    });
  });
}

// Render Video Grid with Search and Filter
function renderVideos() {
  if (!videoGrid) return;

  const filtered = videos.filter(v => {
    const matchesCategory = activeCategory === 'all' || v.category === activeCategory;
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    videoGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-film" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.4rem; font-weight: 700;">لا توجد فيديوهات مطابقة للبحث</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">جرب التغيير في فئة الفلترة أو جرب البحث بكلمات أخرى.</p>
      </div>
    `;
    return;
  }

  videoGrid.innerHTML = filtered.map(v => {
    const thumb = getThumbnailUrl(v.driveUrl, v.thumbnail);
    const isDrive = v.type === 'drive' || extractDriveFileId(v.driveUrl);
    const isFb = v.type === 'facebook' || isFacebookUrl(v.driveUrl);

    let badgeClass = 'youtube';
    let badgeIcon = 'fa-brands fa-youtube';
    let badgeText = 'YouTube';

    if (isFb) {
      badgeClass = 'facebook';
      badgeIcon = 'fa-brands fa-facebook';
      badgeText = 'Facebook';
    } else if (isDrive) {
      badgeClass = 'drive';
      badgeIcon = 'fa-brands fa-google-drive';
      badgeText = 'Google Drive';
    }

    return `
      <div class="video-card" data-id="${v.id}">
        <div class="video-thumb-container" onclick="openVideoModal('${v.id}')">
          <img src="${thumb}" alt="${v.title}" class="video-thumb" loading="lazy" onerror="this.src='${getThumbnailUrl('', '')}'">
          <div class="play-overlay">
            <div class="play-btn-circle">
              <i class="fa-solid fa-play" style="margin-right: -3px;"></i>
            </div>
          </div>
          <div class="video-badges">
            <span class="badge-source ${badgeClass}">
              <i class="${badgeIcon}"></i>
              ${badgeText}
            </span>
            <span class="badge-duration">${v.duration || '02:00'}</span>
          </div>
        </div>

        <div class="video-body">
          <div class="video-meta">
            <span><i class="fa-regular fa-clock"></i> ${v.date}</span>
            <span><i class="fa-regular fa-eye"></i> ${v.views}</span>
          </div>
          <h3 class="video-title" onclick="openVideoModal('${v.id}')" style="cursor: pointer;">${v.title}</h3>
          <p class="video-desc">${v.description}</p>

          <div class="video-footer">
            <span class="tag-pill">#${v.tags[0] || 'فيديو'}</span>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <a href="${v.driveUrl}" target="_blank" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> الرابط
              </a>
              <button class="action-icon-btn" onclick="openVideoModal('${v.id}')" title="تشغيل السينما">
                <i class="fa-solid fa-expand"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Global Modal Opener
window.openVideoModal = (videoId) => {
  const v = videos.find(item => item.id === videoId);
  if (!v) return;

  if (modalDirectLink) {
    modalDirectLink.href = v.driveUrl;
  }

  // If it's a YouTube channel URL or direct social link
  if (v.driveUrl.includes('youtube.com/@') || v.driveUrl.includes('youtube.com/channel/')) {
    window.open(v.driveUrl, '_blank');
    showToast('جاري تحويلك إلى قناة يوتيوب...', 'fa-arrow-up-right-from-square');
    return;
  }

  const embedUrl = getEmbedUrl(v.driveUrl);

  modalFrameContainer.innerHTML = `
    <iframe src="${embedUrl}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
  `;

  modalTitle.textContent = v.title;
  modalDesc.textContent = v.description;
  modalTags.innerHTML = v.tags.map(t => `<span class="tag-pill">#${t}</span>`).join(' ');

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close Modal
function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalFrameContainer.innerHTML = '';
  document.body.style.overflow = '';
}

// Toast Feedback System
window.showToast = (msg, icon = 'fa-check') => {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${msg}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
};

// Copy Link Handler
window.copyVideoLink = (url) => {
  navigator.clipboard.writeText(url).then(() => {
    showToast('تم نسخ رابط الفيديو بنجاح!', 'fa-link');
  }).catch(() => {
    showToast('تعذر نسخ الرابط', 'fa-triangle-exclamation');
  });
};

// Setup All Listeners
function setupEventListeners() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderVideos();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function updateStats() {
  const countEl = document.getElementById('statVideoCount');
  if (countEl) countEl.textContent = videos.length;
}
