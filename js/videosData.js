/**
 * Centralized Video Database
 * =========================================================================
 * روابط الفيديوهات الخاصة ببورتفوليو صانع المحتوى
 */

export const INITIAL_VIDEOS = [
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

export const CATEGORIES = [
  { id: "all", label: "🔥 جميع الأعمال" },
  { id: "social", label: "📱 فيس بوك وسوشيال" },
  { id: "commercial", label: "⚽ الزمالك وفيوري" },
  { id: "showreel", label: "🎬 شو ريل (Showreels)" },
  { id: "vlog", label: "📸 مشاريع سينمائية" },
  { id: "tutorials", label: "📜 فيديوهات تاريخية" }
];
