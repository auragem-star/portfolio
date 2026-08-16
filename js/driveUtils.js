/**
 * Utility module for parsing, converting, and embedding Google Drive, Facebook & Media Links.
 */

export function extractDriveFileId(url) {
  if (!url) return null;

  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  if (/^[a-zA-Z0-9_-]{25,}$/.test(url.trim())) {
    return url.trim();
  }

  return null;
}

export function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function isFacebookUrl(url) {
  if (!url) return false;
  return url.includes('facebook.com') || url.includes('fb.watch');
}

export function getEmbedUrl(rawUrl) {
  if (!rawUrl) return '';

  // Handle Facebook Video Links
  if (isFacebookUrl(rawUrl)) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(rawUrl)}&show_text=false&autoplay=true`;
  }

  // Handle YouTube Channel Links
  if (rawUrl.includes('youtube.com/@') || rawUrl.includes('youtube.com/channel/')) {
    return rawUrl;
  }

  // Check if standard YouTube video
  const youtubeId = extractYouTubeId(rawUrl);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  }

  // Check if Google Drive
  const driveId = extractDriveFileId(rawUrl);
  if (driveId) {
    return `https://drive.google.com/file/d/${driveId}/preview`;
  }

  return rawUrl;
}

export function getThumbnailUrl(rawUrl, customThumb) {
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

export function generatePlaceholderSvg(title = 'فيديو ممتاز') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#090a0f;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#1e253b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1877f2;stop-opacity:0.6" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#grad)"/>
    <circle cx="400" cy="225" r="55" fill="#1877f2" opacity="0.3"/>
    <polygon points="390,200 390,250 425,225" fill="#ffffff"/>
    <text x="400" y="325" font-family="Cairo, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">${title}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
