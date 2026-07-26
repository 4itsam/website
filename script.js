// Ali Miri — portfolio
// i18n toggle + enhanced scroll reveal with stagger.

const i18n = {
  fa: {
    "nav.about": "درباره",
    "nav.work": "کارها",
    "nav.contact": "تماس",
    "hero.badge": "توسعه‌دهنده اپلیکیشن",
    "hero.line1": "طراحی،",
    "hero.mark": "کدنویسی",
    "hero.line2": "، انتشار.",
    "hero.lede": "ساخت اپلیکیشن‌های اندرویدی با فلاتر — از طراحی رابط کاربری تا انتشار در مایکت.",
    "hero.cta": "مشاهده کارها",
    "hero.contact": "ارتباط با من",
    "hero.stat1": "اپلیکیشن",
    "hero.stat2": "تکنولوژی",
    "hero.stat3": "پروژه",
    "about.eyebrow": "درباره من",
    "about.bio": "علی میری هستم، توسعه‌دهنده اپلیکیشن‌های اندرویدی. علاقه‌مند به ساخت تجربه‌های کاربری بهتر با فلاتر. دو اپلیکیشن فارسی‌زبان — کاغذ، ابزاری برای مدیریت کلاس معلم‌ها، و آرتیلو، پلتفرمی برای هنر، موسیقی و پادکست — روی مایکت منتشر شده.",
    "work.eyebrow": "پروژه‌ها",
    "work.title": "اپلیکیشن‌های من",
    "work.kaghaz.tag": "مدیریت کلاس برای معلم‌ها",
    "work.kaghaz.desc": "ابزاری برای معلم‌ها که حضور و غیاب، نمرات و ابزارهای کلاس (قرعه‌کشی دانش‌آموز، تایمر کلاس، گروه‌بندی) را یک‌جا مدیریت می‌کند. با ریوردپاد و معماری تمیز ساخته شده و روی مایکت منتشر شده.",
    "work.kaghaz.feature1": "حضور و غیاب",
    "work.kaghaz.feature2": "مدیریت نمرات",
    "work.kaghaz.feature3": "ابزارهای کلاسی",
    "work.artilo.tag": "هنر، موسیقی و پادکست",
    "work.artilo.desc": "پلتفرمی برای شنیدن موسیقی، پادکست و محتوای ویدیویی فارسی، با پلیر اختصاصی و طراحی سرشار از جزئیات. روی مایکت منتشر شده.",
    "work.artilo.feature1": "موسیقی و پادکست",
    "work.artilo.feature2": "پلیر اختصاصی",
    "work.artilo.feature3": "محتوای ویدیویی",
    "app.download": "دانلود",
    "contact.eyebrow": "ارتباط",
    "contact.title": "بیا گپ بزنیم",
    "contact.lede": "برای همکاری، پیشنهاد یا فقط یه سلام، از این‌جا در دسترسم.",
    "footer.desc": "توسعه‌دهنده اپلیکیشن‌های اندرویدی با فلاتر.",
    "footer.links": "لینک‌ها",
    "footer.apps": "اپلیکیشن‌ها",
    "footer.social": "شبکه‌ها",
    "footer.copy": "© ۲۰۲۴ علی میری. تمامی حقوق محفوظ است.",
    "footer.note": "ساخته‌شده با فلاتر و خطِ قرمز."
  },
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "hero.badge": "App Developer",
    "hero.line1": "Design,",
    "hero.mark": "develop",
    "hero.line2": ", ship.",
    "hero.lede": "Building Android apps with Flutter — from UI design to Play Store release.",
    "hero.cta": "View Projects",
    "hero.contact": "Get in Touch",
    "hero.stat1": "Apps",
    "hero.stat2": "Tech",
    "hero.stat3": "Projects",
    "about.eyebrow": "About Me",
    "about.bio": "I'm Ali Miri, an Android app developer. Passionate about building better user experiences with Flutter. Two Persian-language apps — Kaghaz, a classroom management tool for teachers, and Artilo, a platform for art, music, and podcasts — published on Myket.",
    "work.eyebrow": "Projects",
    "work.title": "My Apps",
    "work.kaghaz.tag": "Classroom management for teachers",
    "work.kaghaz.desc": "Lets teachers manage attendance, grades, and classroom tools — a student picker, class timer, group maker — in one place. Built with Riverpod and Clean Architecture, shipped on Myket.",
    "work.kaghaz.feature1": "Attendance",
    "work.kaghaz.feature2": "Grade tracking",
    "work.kaghaz.feature3": "Class tools",
    "work.artilo.tag": "Art, music & podcasts",
    "work.artilo.desc": "A platform for Persian music, podcasts, and video, with a custom audio player and detail-heavy design. Published on Myket.",
    "work.artilo.feature1": "Music & podcasts",
    "work.artilo.feature2": "Custom player",
    "work.artilo.feature3": "Video content",
    "app.download": "Download",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Talk",
    "contact.lede": "For collaborations, offers, or just to say hi — reach me here.",
    "footer.desc": "Android app developer with Flutter.",
    "footer.links": "Links",
    "footer.apps": "Apps",
    "footer.social": "Social",
    "footer.copy": "© 2024 Ali Miri. All rights reserved.",
    "footer.note": "Built with Flutter and a red pen."
  }
};

const html = document.documentElement;
const buttons = document.querySelectorAll(".lang-toggle button");

function applyLang(lang) {
  html.lang = lang;
  html.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  document.title = "علی میری";

  try { localStorage.setItem("preferredLang", lang); } catch (e) { /* ignore */ }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

let initialLang = "fa";
try {
  const saved = localStorage.getItem("preferredLang");
  if (saved === "fa" || saved === "en") initialLang = saved;
} catch (e) { /* ignore */ }
applyLang(initialLang);

// Enhanced scroll reveal with stagger effect
if ("IntersectionObserver" in window) {
  const revealElements = document.querySelectorAll('.reveal, .screenshot, .contact-link');
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.children).filter(child =>
          child.classList.contains('screenshot') ||
          child.classList.contains('contact-link')
        );
        const index = siblings.indexOf(entry.target);
        const delay = index >= 0 ? index * 100 : 0;

        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal, .screenshot, .contact-link').forEach(el => {
    el.classList.add('is-visible');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
