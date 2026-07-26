// Ali Miri Portfolio & App Showcase Engine
// Client-side i18n, mobile drawer, lightbox, scroll animations.

const i18n = {
  fa: {
    "nav.home": "خانه",
    "nav.kaghaz": "کاغذ",
    "nav.artilo": "آرتیلو",
    "nav.about": "توسعه‌دهنده",
    "nav.contact": "تماس",

    "hero.badge": "توسعه‌دهنده فلاتر و اندروید",
    "hero.title1": "خلق اپلیکیشن‌های",
    "hero.titleMark": "کاربردی و مدرن",
    "hero.subtitle": "طراحی، کدنویسی و انتشار اپلیکیشن‌های اندرویدی با معماری تمیز و فلاتر. تمرکز روی تجربه کاربری بی‌نقص و عملکرد فوق‌العاده.",
    "hero.ctaPrimary": "مشاهده اپلیکیشن‌ها",
    "hero.ctaSecondary": "ارتباط با من",
    "hero.stat1Val": "۲+",
    "hero.stat1Lbl": "اپلیکیشن منتشرشده",
    "hero.stat2Val": "۱۰۰٪",
    "hero.stat2Lbl": "رضایت و کیفیت",
    "hero.stat3Val": "Flutter",
    "hero.stat3Lbl": "تکنولوژی اصلی",

    "preview.kaghazTitle": "کاغذ (Kaghaz)",
    "preview.kaghazDesc": "مدیریت کلاس، حضور و غیاب و نمرات معلمان",
    "preview.kaghazTag": "آموزشی",
    "preview.artiloTitle": "آرتیلو (Artilo)",
    "preview.artiloDesc": "پلتفرم هنر، موسیقی و پادکست‌های صوتی",
    "preview.artiloTag": "رسانه و سرگرمی",

    "apps.eyebrow": "محصولات منتشرشده",
    "apps.title": "اپلیکیشن‌های من در مایکت",
    "apps.desc": "محصولات نرم‌افزاری مستقل که با معماری تمیز و فلاتر پیاده‌سازی شده و در دسترس کاربران قرار گرفته‌اند.",

    "kaghaz.title": "کاغذ — دستیار هوشمند معلمان",
    "kaghaz.tagline": "مدیریت کلاس، حضور و غیاب و ثبت نمرات",
    "kaghaz.desc": "کاغذ یک اپلیکیشن تخصصی برای معلم‌هاست که تمام نیازهای کلاسی اعم از ثبت حضور و غیاب، مدیریت نمرات مستمر و پایانی، و ابزارهای کاربردی مثل تایمر کلاس، گروه‌بندی تصادفی و قرعه‌کشی را در قالبی ساده و شکیل فراهم می‌کند.",
    "kaghaz.pill1": "حضور و غیاب هوشمند",
    "kaghaz.pill2": "ثبت و تحلیل نمرات",
    "kaghaz.pill3": "تایمر و قرعه‌کشی کلاسی",
    "kaghaz.pill4": "معماری Riverpod + Clean",

    "artilo.title": "آرتیلو — دنیای هنر، موسیقی و پادکست",
    "artilo.tagline": "پلتفرم شنیداری و تصویری محتوای هنری",
    "artilo.desc": "آرتیلو محیطی لذت‌بخش برای علاقه مندان به هنر، موسیقی و پادکست‌های فارسی است. با پلیر اختصاصی، پخش صوتی باکیفیت، آرشیو برنامه‌ها و طراحی مینیمال و جذاب جهت تجربه کاربری متفاوت.",
    "artilo.pill1": "پلیر صوتی اختصاصی",
    "artilo.pill2": "پادکست‌ها و مصاحبه‌ها",
    "artilo.pill3": "پخش ویدیو و موزیک",
    "artilo.pill4": "طراحی تاریک و مدرن",

    "app.details": "جزئیات کامل",
    "app.download": "دانلود مستقیم از مایکت",

    "about.eyebrow": "درباره من",
    "about.title": "علی میری — توسعه‌دهنده اپلیکیشن",
    "about.bio": "من علی میری هستم، توسعه‌دهنده نرم‌افزار متمرکز بر اکوسیستم فلاتر و اندروید. با اشتیاق زیاد به ایجاد برنامه‌های کاربردی، بهینه‌سازی عملکرد، و پیاده‌سازی معماری تمیز (Clean Architecture) فعالیت می‌کنم. دو اپلیکیشن منتشر شده من با استقبال خوب کاربران در مارکت مایکت مواجه شده‌اند.",

    "kaghazPage.heroBadge": "اپلیکیشن آموزشی معلمان",
    "kaghazPage.title": "کاغذ (Kaghaz)",
    "kaghazPage.subtitle": "سامانه مدیریت کلاس، حضور و غیاب و ارزیابی دانش‌آموزان با معماری مدرن فلاتر.",
    "kaghazPage.spec1Title": "مدیریت ساده و سریع کلاس",
    "kaghazPage.spec1Desc": "ثبت وضعیت حضور، غیاب و تأخیر دانش‌آموزان تنها با چند لمس سریع بدون اتلاف وقت کلاس.",
    "kaghazPage.spec2Title": "ارزیابی و نمره‌دهی جامع",
    "kaghazPage.spec2Desc": "قابلیت تعریف عناوین ارزیابی گوناگون، محاسبه خودکار میانگین‌ها و خروجی گزارش تحصیلی.",
    "kaghazPage.spec3Title": "ابزارهای تعاملی کلاس",
    "kaghazPage.spec3Desc": "دارای ابزار قرعه‌کشی خودکار بین دانش‌آموزان، گروه‌بندی تصادفی و تایمر معکوس برای آزمون‌ها.",
    "kaghazPage.spec4Title": "فناوری و معماری",
    "kaghazPage.spec4Desc": "توسعه‌یافته با Flutter، مدیریت استیت Riverpod، دیتابیس لوکال سریع و اصول Clean Architecture.",

    "artiloPage.heroBadge": "پلتفرم هنر و صدا",
    "artiloPage.title": "آرتیلو (Artilo)",
    "artiloPage.subtitle": "پلتفرم تخصصی شنیدن موسیقی، پادکست‌های هنری و تماشای ویدیو با پلیر پیشرفته.",
    "artiloPage.spec1Title": "پلیر اختصاصی حرفه‌ای",
    "artiloPage.spec1Desc": "کنترل کامل بر پخش صوت، تنظیم سرعت، مدیریت صف پخش و یادآوری آخرین زمان شنیده شده.",
    "artiloPage.spec2Title": "آرشیو پادکست و موزیک",
    "artiloPage.spec2Desc": "دسته‌بندی منظم پادکست‌های هنری، اپیزودها، برنامه‌های ویدیویی و موزیک‌های برگزیده.",
    "artiloPage.spec3Title": "طراحی رابط کاربری چشم‌نواز",
    "artiloPage.spec3Desc": "تم تاریک و مدرن، انیمیشن‌های روان و انتقال‌های سریع جهت استفاده طولانی‌مدت بدون خستگی چشم.",
    "artiloPage.spec4Title": "عملکرد بالا و بهینه",
    "artiloPage.spec4Desc": "کشینگ هوشمند محتوای صوتی، لودینگ سریع و مدیریت بهینه حافظه رم در سیستم‌عامل اندروید.",

    "contact.eyebrow": "ارتباط با من",
    "contact.title": "آغاز یک همکاری یا پروژه جدید",
    "contact.desc": "برای پیشنهاد همکاری، مشاوره‌های نرم‌افزاری یا صحبت درباره پروژه‌ها می‌توانید از طریق راه‌های زیر با من در ارتباط باشید.",

    "footer.desc": "توسعه‌دهنده اپلیکیشن‌های موبایل با فلاتر و اندروید.",
    "footer.col1": "ناوبری",
    "footer.col2": "اپلیکیشن‌ها",
    "footer.col3": "شبکه‌ها",
    "footer.copy": "© ۲۰۲۴ علی میری. تمامی حقوق محفوظ است.",
    "footer.note": "طراحی‌شده با فلاتر و استانداردهای وب مدرن."
  },
  en: {
    "nav.home": "Home",
    "nav.kaghaz": "Kaghaz",
    "nav.artilo": "Artilo",
    "nav.about": "Developer",
    "nav.contact": "Contact",

    "hero.badge": "Flutter & Android Developer",
    "hero.title1": "Crafting High Quality",
    "hero.titleMark": "Mobile Apps",
    "hero.subtitle": "Designing, building, and shipping production-ready Android apps with Clean Architecture & Flutter. Focused on sleek UX and performance.",
    "hero.ctaPrimary": "Explore Apps",
    "hero.ctaSecondary": "Get in Touch",
    "hero.stat1Val": "2+",
    "hero.stat1Lbl": "Shipped Apps",
    "hero.stat2Val": "100%",
    "hero.stat2Lbl": "Quality Focus",
    "hero.stat3Val": "Flutter",
    "hero.stat3Lbl": "Core Tech",

    "preview.kaghazTitle": "Kaghaz",
    "preview.kaghazDesc": "Classroom management & gradebook for teachers",
    "preview.kaghazTag": "Education",
    "preview.artiloTitle": "Artilo",
    "preview.artiloDesc": "Art, Persian music & podcast streaming platform",
    "preview.artiloTag": "Media & Entertainment",

    "apps.eyebrow": "Shipped Products",
    "apps.title": "My Apps on Myket Store",
    "apps.desc": "Standalone mobile software products built with Clean Architecture and Flutter, published and actively used.",

    "kaghaz.title": "Kaghaz — Smart Assistant for Teachers",
    "kaghaz.tagline": "Classroom management, attendance & grade tracking",
    "kaghaz.desc": "Kaghaz is a specialized tool for teachers to manage attendance, track grades, and utilize classroom tools such as a student picker, class timer, and auto-grouping in a sleek interface.",
    "kaghaz.pill1": "Smart Attendance",
    "kaghaz.pill2": "Grade Tracking & Analytics",
    "kaghaz.pill3": "Class Timer & Picker",
    "kaghaz.pill4": "Riverpod + Clean Architecture",

    "artilo.title": "Artilo — Art, Music & Podcasts",
    "artilo.tagline": "Audio & visual media streaming platform",
    "artilo.desc": "Artilo offers an immersive experience for Persian music, podcasts, and video shows. Features a custom audio player, playback speed control, rich archives, and a modern dark UI.",
    "artilo.pill1": "Custom Audio Player",
    "artilo.pill2": "Podcasts & Interviews",
    "artilo.pill3": "Music & Video Streaming",
    "artilo.pill4": "Modern Dark UX",

    "app.details": "Full Details",
    "app.download": "Download on Myket",

    "about.eyebrow": "About Developer",
    "about.title": "Ali Miri — Mobile App Engineer",
    "about.bio": "I am Ali Miri, a software developer specialized in the Flutter & Android ecosystem. Passionate about building intuitive mobile apps, optimizing UI performance, and implementing Clean Architecture. My published apps have earned great user feedback on the Myket store.",

    "kaghazPage.heroBadge": "Educational App for Teachers",
    "kaghazPage.title": "Kaghaz",
    "kaghazPage.subtitle": "Comprehensive classroom management, attendance, and student evaluation app powered by Flutter.",
    "kaghazPage.spec1Title": "Fast & Simple Attendance",
    "kaghazPage.spec1Desc": "Record student presence, absence, and tardiness in seconds without taking away class time.",
    "kaghazPage.spec2Title": "Comprehensive Gradebook",
    "kaghazPage.spec2Desc": "Define custom assessment criteria, auto-calculate grade averages, and generate student reports.",
    "kaghazPage.spec3Title": "Interactive Class Tools",
    "kaghazPage.spec3Desc": "Includes a random student picker wheel, student group maker, and exam countdown timer.",
    "kaghazPage.spec4Title": "Tech & Architecture",
    "kaghazPage.spec4Desc": "Built with Flutter, Riverpod state management, fast local DB storage, and Clean Architecture principles.",

    "artiloPage.heroBadge": "Art & Media Platform",
    "artiloPage.title": "Artilo",
    "artiloPage.subtitle": "Platform for Persian music, specialized art podcasts, and video streaming with a custom player.",
    "artiloPage.spec1Title": "Custom Audio Engine",
    "artiloPage.spec1Desc": "Full playback control, playback speed adjustment, queue management, and resume playback.",
    "artiloPage.spec2Title": "Podcast & Music Archive",
    "artiloPage.spec2Desc": "Well-organized categories for art podcasts, interviews, video shows, and curated music playlists.",
    "artiloPage.spec3Title": "Stunning Dark Interface",
    "artiloPage.spec3Desc": "Sleek dark theme, fluid animations, and comfortable typography for extended viewing without eye fatigue.",
    "artiloPage.spec4Title": "Optimized Performance",
    "artiloPage.spec4Desc": "Smart audio caching, rapid asset loading, and optimized memory usage across Android devices.",

    "contact.eyebrow": "Get in Touch",
    "contact.title": "Let's Start a Project or Collaboration",
    "contact.desc": "Feel free to reach out for software consulting, project offers, or collaboration inquiries.",

    "footer.desc": "Mobile application developer with Flutter & Android.",
    "footer.col1": "Navigation",
    "footer.col2": "Apps",
    "footer.col3": "Social",
    "footer.copy": "© 2024 Ali Miri. All rights reserved.",
    "footer.note": "Built with Flutter and modern web standards."
  }
};

const html = document.documentElement;
const langBtns = document.querySelectorAll(".lang-btn");
const mobileToggle = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");

// Set Language Function
function setLanguage(lang) {
  html.lang = lang;
  html.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  langBtns.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem("app_lang", lang);
  } catch (e) {
    /* ignore storage errors */
  }
}

// Bind Language Toggle Buttons
langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// Initial Language Preference Check
let initialLang = "fa";
try {
  const saved = localStorage.getItem("app_lang");
  if (saved === "fa" || saved === "en") initialLang = saved;
} catch (e) {
  /* ignore */
}
setLanguage(initialLang);

// Mobile Nav Toggle
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Close menu on link click
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// Intersection Observer for Smooth Scroll Reveal
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal-on-scroll, .preview-card, .app-card-featured, .spec-card, .timeline-card-item, .skill-category-card").forEach((el) => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
} else {
  document.querySelectorAll(".reveal-on-scroll, .preview-card, .app-card-featured, .spec-card, .timeline-card-item, .skill-category-card").forEach((el) => {
    el.classList.add("visible");
  });
}

// Lightbox Modal for Screenshots
const modal = document.createElement("div");
modal.className = "lightbox-modal";
modal.innerHTML = `
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <img class="lightbox-content" src="" alt="Screenshot Zoom">
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector(".lightbox-content");
const modalClose = modal.querySelector(".lightbox-close");

document.querySelectorAll(".screenshot-item img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
