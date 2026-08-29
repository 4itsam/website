// Dakto (داکتو) Portfolio & App Showcase Engine
// Client-side i18n, mobile drawer, lightbox, scroll animations.

const i18n = {
  fa: {
    "nav.home": "خانه",
    "nav.apps": "محصولات",
    "nav.about": "توسعه‌دهنده",
    "nav.contact": "تماس",
    "nav.kaghaz": "کاغذ",
    "nav.artilo": "آرتیلو",
    "nav.danak": "دانک",
    "nav.shakhes": "شاخص",
    "nav.modam": "مدام",

    "hero.badge": "استودیو داکتو — توسعه‌دهنده فلاتر و اندروید",
    "hero.title1": "خلق اپلیکیشن‌های",
    "hero.titleMark": "کاربردی و مدرن",
    "hero.subtitle": "طراحی، کدنویسی و انتشار اپلیکیشن‌های اندرویدی با معماری تمیز و فلاتر. تمرکز روی تجربه کاربری بی‌نقص و عملکرد فوق‌العاده.",
    "hero.ctaPrimary": "مشاهده اپلیکیشن‌ها",
    "hero.ctaSecondary": "ارتباط با من",
    "hero.stat1Val": "۵+",
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
    "preview.danakTitle": "دانک (Danak)",
    "preview.danakDesc": "یادگیری مدیریت، تئوری‌ها و بزرگان مدیریت",
    "preview.danakTag": "آموزشی",
    "preview.shakhesTitle": "شاخص (Shakhes)",
    "preview.shakhesDesc": "بازی کوییز آفلاین با ۱۸+ کتگوری و گیم‌مودهای جذاب",
    "preview.shakhesTag": "بازی",
    "preview.modamTitle": "مدام (Modam)",
    "preview.modamDesc": "مطالعه و برنامه‌ریزی درسی با زنجیره‌ی پیشرفت",
    "preview.modamTag": "آموزشی",

    "apps.eyebrow": "محصولات منتشرشده",
    "apps.title": "اپلیکیشن‌های من",
    "apps.desc": "پنج اپلیکیشن مستقل با معماری تمیز و فلاتر که در مارکت مایکت منتشر شده‌اند.",

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

    "danak.title": "دانک — یادگیری مدیریت",
    "danak.tagline": "تئوری‌ها، تاریخ و بزرگان مدیریت",
    "danak.desc": "دانک اپلیکیشنی آموزشی برای یادگیری مفاهیم مدیریتی است. در این اپلیکیشن با تئوری‌های کلاسیک و مدرن مدیریت، تاریخچه مدیریت و بزرگانی همچون پیتر دراکر، هنری فایول و تیلور آشنا می‌شوید. منابع جامع و طبقه‌بندی‌شده برای دانشجویان و علاقه‌مندان حوزه مدیریت.",
    "danak.pill1": "تئوری‌های مدیریتی",
    "danak.pill2": "تاریخچه مدیریت",
    "danak.pill3": "بزرگان مدیریت",
    "danak.pill4": "محتوای طبقه‌بندی‌شده",

    "shakhes.title": "شاخص — بازی کوییز هوشمند",
    "shakhes.tagline": "بیش از ۱۸ کتگوری مختلف با گیم‌مودهای جذاب",
    "shakhes.desc": "شاخص یک بازی کوییز آفلاین است که با بیش از ۱۸ کتگوری متنوع از علوم تا تاریخ و ورزش، تجربه‌ای سرگرم‌کننده و چالشی را ارائه می‌دهد. با گیم‌مودهای مختلف، رتبه‌بندی و قابلیت بازی بدون اینترنت، شاخص می‌تواند ساعت‌ها شما را سرگرم کند.",
    "shakhes.pill1": "۱۸+ کتگوری متنوع",
    "shakhes.pill2": "گیم‌مودهای جذاب",
    "shakhes.pill3": "بازی کاملاً آفلاین",
    "shakhes.pill4": "رتبه‌بندی و چالش",

    "modam.title": "مدام — مطالعه و برنامه‌ریزی درسی",
    "modam.tagline": "روتین مطالعه را به عادت پایدار تبدیل کن",
    "modam.desc": "مدام روتین مطالعه را از یک تصمیم زودگذر به یک عادت پایدار تبدیل می‌کند؛ با ثبت ساده‌ی روزانه، زنجیره‌ی پیشرفت (استریک) و نشان‌هایی که خواستنِ ادامه دادن را در تو بیدار می‌کنند.",
    "modam.pill1": "استریک و زنجیره‌ی روزانه",
    "modam.pill2": "تایمر مطالعه با حلقه‌ی پیشرفت",
    "modam.pill3": "۱۵ نشان دستاورد + امتیاز XP",
    "modam.pill4": "برنامه‌ریزی هفتگی شمسی",

    "app.details": "جزئیات کامل",

    "about.eyebrow": "درباره من",
    "about.title": "علی میری — توسعه‌دهنده اپلیکیشن (استودیو داکتو)",
    "about.bio": "من علی میری هستم، توسعه‌دهنده نرم‌افزار متمرکز بر اکوسیستم فلاتر و اندروید. با اشتیاق زیاد به ایجاد برنامه‌های کاربردی، بهینه‌سازی عملکرد، و پیاده‌سازی معماری تمیز (Clean Architecture) فعالیت می‌کنم. پنج اپلیکیشن منتشر شده من (کاغذ، آرتیلو، دانک، شاخص و مدام) با استقبال خوب کاربران در مارکت مایکت مواجه شده‌اند.",

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

    "danakPage.heroBadge": "اپلیکیشن آموزش مدیریت",
    "danakPage.title": "دانک (Danak)",
    "danakPage.subtitle": "یادگیری جامع تئوری‌ها، تاریخچه و بزرگان علم مدیریت در قالب اپلیکیشنی زیبا و کاربردی.",
    "danakPage.spec1Title": "تئوری‌های مدیریتی جامع",
    "danakPage.spec1Desc": "آشنایی کامل با تئوری‌های کلاسیک و مدرن مدیریت از جمله مدیریت علمی، روابط انسانی و مدیریت استراتژیک.",
    "danakPage.spec2Title": "تاریخچه مدیریت",
    "danakPage.spec2Desc": "سفر در تاریخ علم مدیریت از دوران باستان تا رویکردهای معاصر و درک تحولات این حوزه.",
    "danakPage.spec3Title": "بزرگان مدیریت",
    "danakPage.spec3Desc": "معرفی و بررسی اندیشه‌های بزرگانی مانند پیتر دراکر، هنری فایول، Frederick Taylor و آبراهام مزلو.",
    "danakPage.spec4Title": "محتوای ساختاریافته",
    "danakPage.spec4Desc": "محتوای طبقه‌بندی‌شده و دسته‌بندی منظم برای دسترسی سریع دانشجویان و علاقه‌مندان مدیریت.",

    "shakhesPage.heroBadge": "بازی کوییز و سرگرمی",
    "shakhesPage.title": "شاخص (Shakhes)",
    "shakhesPage.subtitle": "بازی کوییز آفلاین با بیش از ۱۸ کتگوری متنوع، گیم‌مودهای چالشی و تجربه‌ای واقعاً سرگرم‌کننده.",
    "shakhesPage.spec1Title": "بیش از ۱۸ کتگوری",
    "shakhesPage.spec1Desc": "کتگوری‌های متنوع از علوم، تاریخ، جغرافیا، ورزش، هنر، سینما و فناوری گرفته تا سرگرمی عمومی.",
    "shakhesPage.spec2Title": "گیم‌مودهای جذاب",
    "shakhesPage.spec2Desc": "حالت‌های مختلف بازی شامل کلاسیک، زمان‌دار، حذف تدریجی و رقابتی برای تجربه‌ای متفاوت.",
    "shakhesPage.spec3Title": "بازی کاملاً آفلاین",
    "shakhesPage.spec3Desc": "بدون نیاز به اینترنت، در هر زمان و مکانی قابل بازی. مناسب برای سفرها و لحظات بیکاری.",
    "shakhesPage.spec4Title": "رتبه‌بندی و پیشرفت",
    "shakhesPage.spec4Desc": "سیستم رتبه‌بندی، ردیابی پیشرفت و چالش‌های روزانه برای ایجاد انگیزه و رقابت سالم.",

    "modamPage.heroBadge": "اپلیکیشن مطالعه و برنامه‌ریزی درسی",
    "modamPage.title": "مدام (Modam)",
    "modamPage.subtitle": "روتین مطالعه‌ات را با زنجیره‌ی روزانه، تایمر پیشرفت و برنامه‌ریزی هفتگی شمسی به یک عادت پایدار تبدیل کن.",
    "modamPage.spec1Title": "زنجیره‌ی روزانه (استریک)",
    "modamPage.spec1Desc": "هر روز که به هدف مطالعه‌ات برسی، زنجیره‌ات بلندتر می‌شود. هر ۷ روز موفقیت یک ژتون «انجماد» می‌گیری تا یک روز جاافتاده را جبران کنی و زنجیره‌ات نشکند.",
    "modamPage.spec2Title": "تایمر مطالعه با حلقه‌ی پیشرفت",
    "modamPage.spec2Desc": "تمرکز شو، زمان‌سنج را روشن کن و پیشرفت لحظه‌به‌لحظه‌ات را روی حلقه‌ی رنگی مخصوص هر درس ببین. پایان هر جلسه، حالِ خوبِ مطالعه و یک یادداشت برایت ثبت می‌شود.",
    "modamPage.spec3Title": "۱۵ نشان دستاورد + امتیاز XP",
    "modamPage.spec3Desc": "با عبور از رکوردهای زمانی، حفظ زنجیره و پیشرفت در هر درس، نشان‌های مخفی و ویژه باز می‌شوند — همراه انیمیشن جشن و کاغذرنگی.",
    "modamPage.spec4Title": "برنامه‌ریزی هفتگی شمسی",
    "modamPage.spec4Desc": "تقویم جلالی با تاریخ‌های فارسی، برنامه‌ریزی جلسات هفتگی و «برنامه‌ساز خودکار» که قبل از امتحان هر درس، بلوک‌های مطالعه را برایت می‌چیند.",

    "contact.eyebrow": "ارتباط با من",
    "contact.title": "آغاز یک همکاری یا پروژه جدید",
    "contact.desc": "برای پیشنهاد همکاری، مشاوره‌های نرم‌افزاری یا صحبت درباره پروژه‌ها می‌توانید از طریق راه‌های زیر با من در ارتباط باشید.",

    "footer.desc": "توسعه‌دهنده اپلیکیشن‌های موبایل با فلاتر و اندروید.",
    "footer.col1": "ناوبری",
    "footer.col2": "اپلیکیشن‌ها",
    "footer.col3": "شبکه‌ها",
    "footer.copy": "© ۲۰۲۵ داکتو (Dakto). تمامی حقوق محفوظ است.",
    "footer.note": "طراحی‌شده با فلاتر و استانداردهای وب مدرن."
  },
  en: {
    "nav.home": "Home",
    "nav.apps": "Apps",
    "nav.about": "Developer",
    "nav.contact": "Contact",
    "nav.kaghaz": "Kaghaz",
    "nav.artilo": "Artilo",
    "nav.danak": "Danak",
    "nav.shakhes": "Shakhes",
    "nav.modam": "Modam",

    "hero.badge": "Dakto Studio — Flutter & Android Developer",
    "hero.title1": "Crafting High Quality",
    "hero.titleMark": "Mobile Apps",
    "hero.subtitle": "Designing, building, and shipping production-ready Android apps with Clean Architecture & Flutter. Focused on sleek UX and performance.",
    "hero.ctaPrimary": "Explore Apps",
    "hero.ctaSecondary": "Get in Touch",
    "hero.stat1Val": "5+",
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
    "preview.danakTitle": "Danak",
    "preview.danakDesc": "Management theories, history & great thinkers",
    "preview.danakTag": "Education",
    "preview.shakhesTitle": "Shakhes",
    "preview.shakhesDesc": "Offline quiz game with 18+ categories & fun modes",
    "preview.shakhesTag": "Game",
    "preview.modamTitle": "Modam",
    "preview.modamDesc": "Study & lesson planning with a progress streak",
    "preview.modamTag": "Education",

    "apps.eyebrow": "Shipped Products",
    "apps.title": "My Apps",
    "apps.desc": "Five standalone apps built with Clean Architecture & Flutter, published on Myket.",

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

    "danak.title": "Danak — Learn Management",
    "danak.tagline": "Theories, history & great management thinkers",
    "danak.desc": "Danak is an educational app for learning management concepts. Explore classic and modern management theories, the history of management science, and great thinkers like Peter Drucker, Henri Fayol, and Frederick Taylor. A comprehensive resource for students and management enthusiasts.",
    "danak.pill1": "Management Theories",
    "danak.pill2": "Management History",
    "danak.pill3": "Great Thinkers",
    "danak.pill4": "Structured Content",

    "shakhes.title": "Shakhes — Smart Quiz Game",
    "shakhes.tagline": "18+ diverse categories with fun game modes",
    "shakhes.desc": "Shakhes is an offline quiz game featuring over 18 diverse categories from science and history to sports and arts, offering a challenging and entertaining experience. With multiple game modes, ranking system, and offline play, Shakhes can keep you engaged for hours.",
    "shakhes.pill1": "18+ Categories",
    "shakhes.pill2": "Fun Game Modes",
    "shakhes.pill3": "Fully Offline",
    "shakhes.pill4": "Ranking & Challenges",

    "modam.title": "Modam — Study & Lesson Planning",
    "modam.tagline": "Turn your study routine into a lasting habit",
    "modam.desc": "Modam turns a study routine from a passing decision into a lasting habit — with simple daily logging, a progress streak, and achievements that make you want to keep going.",
    "modam.pill1": "Daily Streak",
    "modam.pill2": "Study Timer with Progress Ring",
    "modam.pill3": "15 Achievement Badges + XP",
    "modam.pill4": "Jalali Weekly Planning",

    "app.details": "Full Details",

    "about.eyebrow": "About Developer",
    "about.title": "Ali Miri — Mobile App Engineer (Dakto Studio)",
    "about.bio": "I am Ali Miri, a software developer specialized in the Flutter & Android ecosystem. Passionate about building intuitive mobile apps, optimizing UI performance, and implementing Clean Architecture. My five published apps (Kaghaz, Artilo, Danak, Shakhes, and Modam) have earned great user feedback on the Myket store.",

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

    "danakPage.heroBadge": "Management Learning App",
    "danakPage.title": "Danak",
    "danakPage.subtitle": "Comprehensive learning of management theories, history, and great thinkers in a beautiful and practical app.",
    "danakPage.spec1Title": "Comprehensive Management Theories",
    "danakPage.spec1Desc": "Complete coverage of classical and modern management theories including scientific management, human relations, and strategic management.",
    "danakPage.spec2Title": "History of Management",
    "danakPage.spec2Desc": "Journey through the history of management science from ancient times to contemporary approaches.",
    "danakPage.spec3Title": "Great Management Thinkers",
    "danakPage.spec3Desc": "Introduction to the ideas of Peter Drucker, Henri Fayol, Frederick Taylor, Abraham Maslow and other management pioneers.",
    "danakPage.spec4Title": "Structured Content",
    "danakPage.spec4Desc": "Well-organized and categorized content for quick access by students and management enthusiasts.",

    "shakhesPage.heroBadge": "Quiz & Entertainment Game",
    "shakhesPage.title": "Shakhes",
    "shakhesPage.subtitle": "Offline quiz game with 18+ diverse categories, challenging game modes, and a truly entertaining experience.",
    "shakhesPage.spec1Title": "18+ Diverse Categories",
    "shakhesPage.spec1Desc": "Categories ranging from science, history, geography, sports, art, and cinema to technology and general entertainment.",
    "shakhesPage.spec2Title": "Fun Game Modes",
    "shakhesPage.spec2Desc": "Various game modes including classic, timed, gradual elimination, and competitive for a different experience.",
    "shakhesPage.spec3Title": "Fully Offline Play",
    "shakhesPage.spec3Desc": "No internet needed. Play anytime, anywhere. Perfect for travel and idle moments.",
    "shakhesPage.spec4Title": "Ranking & Progress",
    "shakhesPage.spec4Desc": "Ranking system, progress tracking, and daily challenges for motivation and healthy competition.",

    "modamPage.heroBadge": "Study & Lesson Planning App",
    "modamPage.title": "Modam",
    "modamPage.subtitle": "Turn your study routine into a lasting habit with daily streaks, a progress timer, and Persian (Jalali) weekly planning.",
    "modamPage.spec1Title": "Daily Streak",
    "modamPage.spec1Desc": "Each day you hit your study target, your streak grows. Every 7 days of success you earn a \"freeze\" token to cover one missed day and keep your streak alive.",
    "modamPage.spec2Title": "Study Timer with Progress Ring",
    "modamPage.spec2Desc": "Stay focused, start the timer, and watch your live progress on a color ring unique to each subject. Each session logs a note and your study mood.",
    "modamPage.spec3Title": "15 Achievement Badges + XP",
    "modamPage.spec3Desc": "Beat time records, keep streaks, and progress in each subject to unlock hidden badges — complete with a confetti celebration animation.",
    "modamPage.spec4Title": "Jalali Weekly Planning",
    "modamPage.spec4Desc": "A Persian (Jalali) calendar with Persian dates, weekly session planning, and an auto-planner that builds your study blocks before each exam.",

    "contact.eyebrow": "Get in Touch",
    "contact.title": "Let's Start a Project or Collaboration",
    "contact.desc": "Feel free to reach out for software consulting, project offers, or collaboration inquiries.",

    "footer.desc": "Mobile application developer with Flutter & Android.",
    "footer.col1": "Navigation",
    "footer.col2": "Apps",
    "footer.col3": "Social",
    "footer.copy": "© 2025 Dakto (داکتو). All rights reserved.",
    "footer.note": "Built with Flutter and modern web standards."
  }
};

const html = document.documentElement;

// Theme Toggle (Vintage CRT dark / Beige light)
const themeToggle = document.querySelector(".theme-toggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("app_theme", theme);
  } catch (e) { /* ignore storage errors */ }
}

let initialTheme = "dark";
try {
  const savedTheme = localStorage.getItem("app_theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    initialTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    initialTheme = "light";
  }
} catch (e) { /* ignore */ }
setTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
}

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
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "fa" || urlLang === "en") {
    initialLang = urlLang;
  } else {
    const saved = localStorage.getItem("app_lang");
    if (saved === "fa" || saved === "en") initialLang = saved;
  }
} catch (e) {
  /* ignore */
}
setLanguage(initialLang);

// Mobile Nav Toggle
const closeNavMenu = () => {
  navMenu.classList.remove("open");
  mobileToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-locked");
};

// Close button inside the full-screen mobile menu
const navMenuClose = document.querySelector(".nav-menu-close");
if (navMenuClose) {
  navMenuClose.addEventListener("click", closeNavMenu);
}

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-locked", isOpen);
    if (isOpen && navMenuClose) navMenuClose.focus();
  });

  // Close menu on link click
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNavMenu);
  });

  // Close on outside click (kept as a safety net; the full-screen overlay
  // covers the viewport while open, so the real close paths are the
  // close button, link taps, and Esc), and when resizing back to desktop
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      closeNavMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNavMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeNavMenu();
  });
}

// Topbar shadow on scroll
const topbar = document.querySelector(".topbar");
if (topbar) {
  const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
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

  document.querySelectorAll(".reveal-on-scroll, .preview-card, .app-card-featured, .spec-card, .timeline-card-item, .skill-category-card, .screenshot-item").forEach((el) => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
} else {
  document.querySelectorAll(".reveal-on-scroll, .preview-card, .app-card-featured, .spec-card, .timeline-card-item, .skill-category-card, .screenshot-item").forEach((el) => {
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
