/**
 * Standalone Unified Video Portfolio Script
 * Direct link redirect on video click - 100% Instant & Reliable!
 */

// --------------------------------------------------------------------------
// 1. VIDEOS DATABASE
// --------------------------------------------------------------------------
const INITIAL_VIDEOS = [
  {
    id: "v000",
    title: "حين كانت القاهرة تتكلم 🏛️",
    description: "فيديو وثائقي سينمائي مميز يستعرض تاريخ وسحر مدينة القاهرة بأسلوب إخراجي ومونتاج ساحر.",
    category: "showreel",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1B9EZiVjc0REyzNVqe_h124RmPPT2xdDT/view?usp=drive_link",
    thumbnail: "",
    duration: "02:20",
    views: "جديد",
    date: "أغسطس 2026",
    tags: ["القاهرة", "وثائقي", "حين_كانت_القاهرة_تتكلم"],
    featured: true
  },
  {
    id: "v00",
    title: "ماذا لو كنت آخر إنسان على وجه الأرض؟ 🌍",
    description: "فيديو فكري وتخيلي مشوق يستعرض سيناريو ماذا سيحدث لو أصبحت آخر إنسان يعيش على كوكب الأرض.",
    category: "social",
    type: "facebook",
    driveUrl: "https://www.facebook.com/share/v/1Bfmod6zeJ/",
    thumbnail: "",
    duration: "02:10",
    views: "48.9K",
    date: "أغسطس 2026",
    tags: ["فيس_بوك", "ماذا_لو", "خيال_علمي", "فيديو_مشوق"],
    featured: true
  },
  {
    id: "v0",
    title: "كم مرة مررنا بجانب شخص... دون أن نعرف أنه يحتاج مجرد لفتة بسيطة؟ 👌",
    description: "فيديو مؤثر عن المواقف الإنسانية واللفتات البسيطة التي قد تغير حياة الآخرين كلياً.",
    category: "social",
    type: "facebook",
    driveUrl: "https://www.facebook.com/share/v/1BFAbUUZnv/",
    thumbnail: "",
    duration: "01:45",
    views: "34.2K",
    date: "أغسطس 2026",
    tags: ["فيس_بوك", "مواقف_إنسانية", "فيديو_مؤثر"],
    featured: true
  },
  {
    id: "v1",
    title: "فيديو وثائقي سينمائي - نادي الزمالك",
    description: "إنتاج ومونتاج فيديو خاص بنادي الزمالك يتضمن لقطات حماسية ومؤثرات صوتية وبصرية عالية الجودة.",
    category: "commercial",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1eCG9X-RhSxcX4_bE4xTT9f6J3Qr_n60I/view",
    thumbnail: "",
    duration: "02:30",
    views: "25.4K",
    date: "أغسطس 2026",
    tags: ["نادي_الزمالك", "مونتاج_رياضي", "Zamalek"],
    featured: true
  },
  {
    id: "v2",
    title: "إعلان تجاري - فيوري راعي نادي الزمالك",
    description: "فيديو إعلاني وترويجي لشركة Fiuri راعي نادي الزمالك بأسلوب إخراجي وديناميكي حديث.",
    category: "commercial",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1T00mAnzTmJibJX-8O0i62G0EEIiRiBo4/view",
    thumbnail: "",
    duration: "01:45",
    views: "19.8K",
    date: "أغسطس 2026",
    tags: ["فيوري", "Fiuri", "إعلان_تجاري"],
    featured: true
  },
  {
    id: "v3",
    title: "فيديو استعراضي سينمائي احترافي #1",
    description: "عمل إبداعي ومونتاج احترافي مع ضبط ألوان سينمائي وتزامن صوتي متميز لمشروع خاص.",
    category: "showreel",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1QdZoNjFEApfSRS9-ANJyNPM_MeR7DA_R/view?usp=drive_link",
    thumbnail: "",
    duration: "02:15",
    views: "14.2K",
    date: "يوليو 2026",
    tags: ["Showreel", "Cinema", "ColorGrading"],
    featured: true
  },
  {
    id: "v4",
    title: "فيديو مونتاج وإخراج سينمائي #2",
    description: "فيديو مميز يستعرض مهارات قص المشاهد وإضافة الانتقالات السريعة والمؤثرات البصرية الممتازة.",
    category: "showreel",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1ijNoaDrFE3di5RiUYSc0F76JbjM3OIeF/view?usp=drive_link",
    thumbnail: "",
    duration: "03:10",
    views: "11.5K",
    date: "يوليو 2026",
    tags: ["VFX", "Montage", "Creative"],
    featured: false
  },
  {
    id: "v5",
    title: "مشروع فيديو إبداعي وثائقي #3",
    description: "مونتاج سينمائي متكامل مع مؤشرات بصرية وتحريك نيون تفاعلي لمحتوى متميز.",
    category: "vlog",
    type: "drive",
    driveUrl: "https://drive.google.com/file/d/1GWEH8r7CvonudBE5AwiTDc7CntwRbcbs/view",
    thumbnail: "",
    duration: "02:50",
    views: "8.9K",
    date: "يونيو 2026",
    tags: ["Documentary", "Visuals", "Motion"],
    featured: false
  },
  {
    id: "v6",
    title: "فيديوهات تاريخية - قناة The Best Story",
    description: "سلسلة الفيديوهات والقصص التاريخية المؤثرة والمصممة بأسلوب روائي وسينمائي تشويقي رائع.",
    category: "tutorials",
    type: "youtube",
    driveUrl: "https://www.youtube.com/@thebeststory11",
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80",
    duration: "قناة كاملة",
    views: "50.0K",
    date: "2026",
    tags: ["فيديوهات_تاريخية", "قصص", "TheBestStory"],
    featured: true
  }
];

const CATEGORIES = [
  { id: "all", label: "🔥 جميع الأعمال" },
  { id: "showreel", label: "🎬 شو ريل (Showreels)" },
  { id: "social", label: "📱 فيس بوك وسوشيال" },
  { id: "commercial", label: "⚽ الزمالك وفيوري" },
  { id: "vlog", label: "📸 مشاريع سينمائية" },
  { id: "tutorials", label: "📜 فيديوهات تاريخية" }
];

// --------------------------------------------------------------------------
// 2. DRIVE & URL UTILITIES
// --------------------------------------------------------------------------
function extractDriveFileId(url) {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  if (/^[a-zA-Z0-9_-]{25,}$/.test(url.trim())) return url.trim();
  return null;
}

function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function isFacebookUrl(url) {
  if (!url) return false;
  return url.includes('facebook.com') || url.includes('fb.watch');
}

function getThumbnailUrl(rawUrl, customThumb) {
  if (customThumb) return customThumb;

  if (isFacebookUrl(rawUrl)) {
    return generatePlaceholderSvg('فيديو فيس بوك');
  }

  const youtubeId = extractYouTubeId(rawUrl);
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }

  const driveId = extractDriveFileId(rawUrl);
  if (driveId) {
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
  }

  return generatePlaceholderSvg('فيديو معروض');
}

function generatePlaceholderSvg(title = 'فيديو ممتاز') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#090a0f;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#1e253b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:0.6" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#grad)"/>
    <circle cx="400" cy="225" r="55" fill="#00f2fe" opacity="0.25"/>
    <polygon points="390,200 390,250 425,225" fill="#ffffff"/>
    <text x="400" y="325" font-family="Cairo, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">${title}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// --------------------------------------------------------------------------
// 3. MAIN APPLICATION LOGIC
// --------------------------------------------------------------------------
let videos = [...INITIAL_VIDEOS];
let activeCategory = 'all';
let searchQuery = '';

let videoGrid, categoryPillsContainer, searchInput, toastContainer;

document.addEventListener('DOMContentLoaded', () => {
  videoGrid = document.getElementById('videoGrid');
  categoryPillsContainer = document.getElementById('categoryPills');
  searchInput = document.getElementById('searchInput');
  toastContainer = document.getElementById('toastContainer');

  renderCategories();
  renderVideos();
  setupEventListeners();
  updateStats();
});

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
        <a href="${v.driveUrl}" target="_blank" class="video-thumb-container" style="text-decoration: none;">
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
        </a>

        <div class="video-body">
          <div class="video-meta">
            <span><i class="fa-regular fa-clock"></i> ${v.date}</span>
            <span><i class="fa-regular fa-eye"></i> ${v.views}</span>
          </div>
          <a href="${v.driveUrl}" target="_blank" class="video-title" style="text-decoration: none; display: block;">${v.title}</a>
          <p class="video-desc">${v.description}</p>

          <div class="video-footer" style="flex-direction: column; gap: 0.8rem; align-items: stretch;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="tag-pill">#${v.tags[0] || 'فيديو'}</span>
            </div>
            
            <a href="${v.driveUrl}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.9rem; padding: 0.65rem 1rem; border-radius: var(--radius-md);">
              <i class="fa-solid fa-play"></i> مشاهدة الفيديو الآن ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.openVideoModal = (videoId) => {
  const v = videos.find(item => item.id === videoId);
  if (v && v.driveUrl) {
    window.open(v.driveUrl, '_blank');
  }
};

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

function setupEventListeners() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderVideos();
    });
  }
}

function updateStats() {
  const countEl = document.getElementById('statVideoCount');
  if (countEl) countEl.textContent = videos.length;
}
