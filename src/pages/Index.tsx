import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/abec777b-70b9-4259-ab2d-a334b15e08b5/files/6c8844d9-b027-417f-9dcc-e568686b26df.jpg";

const NAV_ITEMS = [
  { id: "about", label: "Обо мне" },
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "skills", label: "Навыки" },
  { id: "blog", label: "Блог" },
  { id: "contact", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "TrendingUp",
    title: "CPA-маркетинг",
    desc: "Настройка и оптимизация партнёрских программ. Подбор офферов, тестирование связок, масштабирование прибыльных кампаний.",
  },
  {
    icon: "Send",
    title: "Telegram-маркетинг",
    desc: "Продвижение в Telegram: закупка рекламы, рост подписчиков, создание воронок и монетизация каналов.",
  },
  {
    icon: "Users",
    title: "Лидогенерация",
    desc: "Выстраивание системы привлечения клиентов под ваш бизнес. Квалификация лидов и работа с целевой аудиторией.",
  },
  {
    icon: "BarChart2",
    title: "Управление трафиком",
    desc: "Закупка и оптимизация трафика из различных источников. Аналитика, A/B-тесты, снижение стоимости заявки.",
  },
  {
    icon: "Globe",
    title: "Аффилиат-маркетинг",
    desc: "Работа с партнёрскими сетями, подключение к CPA-платформам, развитие собственной партнёрской базы.",
  },
  {
    icon: "Target",
    title: "Развитие онлайн-проектов",
    desc: "Стратегия продвижения, выстраивание воронок продаж, аналитика ключевых метрик и масштабирование.",
  },
];

const CASES = [
  {
    tag: "Telegram",
    title: "Рост Telegram-канала с 0 до 12 000 подписчиков",
    desc: "Разработана стратегия органического и платного продвижения. Настроена воронка монетизации через партнёрские программы.",
    metrics: [
      { label: "Подписчиков", value: "12 000+" },
      { label: "Срок", value: "4 мес." },
      { label: "ROI", value: "280%" },
    ],
  },
  {
    tag: "CPA",
    title: "Партнёрская кампания в нише финансовых офферов",
    desc: "Подобраны и протестированы рекламные связки. Оптимизированы источники трафика под целевые KPI партнёрской сети.",
    metrics: [
      { label: "Лидов в месяц", value: "800+" },
      { label: "CR", value: "6.4%" },
      { label: "EPC", value: "×2.1" },
    ],
  },
  {
    tag: "Lead Gen",
    title: "Система лидогенерации для B2B-компании",
    desc: "Выстроена комплексная система привлечения клиентов: таргет, Telegram, SEO-воронки. Настроена сквозная аналитика.",
    metrics: [
      { label: "Заявок в месяц", value: "150+" },
      { label: "Стоимость лида", value: "−45%" },
      { label: "Конверсия", value: "12%" },
    ],
  },
];

const SKILLS = [
  { name: "CPA-маркетинг", level: 92 },
  { name: "Telegram Ads", level: 88 },
  { name: "Управление трафиком", level: 85 },
  { name: "Лидогенерация", level: 82 },
  { name: "Аналитика и A/B-тесты", level: 78 },
  { name: "Аффилиат-стратегия", level: 80 },
];

const BLOG_POSTS = [
  {
    date: "05 июня 2026",
    tag: "CPA",
    title: "Как выбрать прибыльный оффер в CPA-сети в 2026 году",
    desc: "Разбираю ключевые критерии отбора офферов: EPC, CR, апрув и сезонность. Практические советы для начинающих.",
  },
  {
    date: "28 мая 2026",
    tag: "Telegram",
    title: "Закупка рекламы в Telegram: что изменилось и как не слить бюджет",
    desc: "Актуальные стратегии закупки рекламы в каналах, работа с Telegram Ads и оценка эффективности.",
  },
  {
    date: "14 мая 2026",
    tag: "Лидогенерация",
    title: "Воронка продаж для онлайн-бизнеса: от трафика до продажи",
    desc: "Пошаговая схема построения воронки: входящий трафик, прогрев, оффер, закрытие сделки.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((n) => n.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const skillsSection = useInView(0.2);

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)", color: "#e8e4da" }}>
      <div className="noise-overlay" />

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13,15,20,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--dark-border)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-display text-lg tracking-widest text-gold uppercase">
            Александр
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm tracking-wider font-display uppercase ${
                  activeSection === item.id
                    ? "text-gold active"
                    : "text-gray-400 hover:text-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-400 hover:text-gold"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-4 flex flex-col gap-4"
            style={{ background: "rgba(13,15,20,0.99)" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-display uppercase tracking-wider text-sm text-gray-300 hover:text-gold"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D0F14 0%, #111318 60%, #0f1117 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, var(--dark-border) 60px, var(--dark-border) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, var(--dark-border) 60px, var(--dark-border) 61px)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="tag mb-6 inline-block">CPA Marketing & Traffic</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none mb-6 tracking-tight">
              Александр
            </h1>
            <div className="section-line" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Специалист по CPA-маркетингу и управлению трафиком. Строю
              рабочие системы привлечения клиентов для онлайн-проектов.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Связаться
              </button>
              <button className="btn-outline" onClick={() => scrollTo("cases")}>
                Смотреть кейсы
              </button>
            </div>
            <div className="mt-10 flex gap-8">
              {[
                { val: "5+", label: "лет опыта" },
                { val: "50+", label: "проектов" },
                { val: "18+", label: "ниш протестировано" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-gold">{val}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex justify-center md:justify-end animate-fade-in"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            <div className="relative">
              <div
                className="absolute -inset-px opacity-35"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold) 0%, transparent 60%)",
                }}
              />
              <img
                src={PHOTO_URL}
                alt="Александр — CPA маркетолог"
                className="relative w-72 h-80 md:w-80 md:h-[420px] object-cover object-top"
                style={{ filter: "grayscale(20%) contrast(1.05)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: "linear-gradient(to top, var(--dark), transparent)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40"
          style={{ animation: "bounce 2s infinite" }}
        >
          <Icon name="ChevronDown" size={20} className="text-gold" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24" style={{ background: "var(--dark-card)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="tag mb-4 inline-block">Обо мне</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                CPA-маркетолог
                <br />
                <span className="text-gold">& специалист</span>
                <br />
                по трафику
              </h2>
              <div className="section-line" />
            </div>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Меня зовут Александр. Я занимаюсь CPA-маркетингом, интернет-рекламой и
                привлечением клиентов для онлайн-проектов. Основное направление —
                работа с трафиком, рекламными источниками, Telegram-проектами и
                партнёрскими программами.
              </p>
              <p>
                За время работы изучил множество направлений интернет-заработка,
                протестировал десятки рекламных связок и получил практический опыт в
                CPA-маркетинге, Telegram-рекламе и онлайн-продвижении.
              </p>
              <p>
                Я считаю, что результат строится на дисциплине, постоянном обучении и
                ежедневных действиях. Меня интересует создание долгосрочных проектов,
                которые приносят результат на протяжении многих лет.
              </p>
              <div className="pt-4">
                <a
                  href="https://t.me/arvanalex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Icon name="Send" size={15} />
                  @arvanalex
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="tag mb-4 inline-block">Услуги</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Что я делаю
            </h2>
            <div className="section-line mt-4" />
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "var(--dark-border)" }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-8 group cursor-default transition-colors duration-200"
                style={{ background: "var(--dark)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--dark-card)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--dark)")
                }
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
                >
                  <Icon name={s.icon} size={18} fallback="Star" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide mb-3 font-semibold">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24" style={{ background: "var(--dark-card)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="tag mb-4 inline-block">Кейсы</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Результаты
            </h2>
            <div className="section-line mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <div key={c.title} className="case-card p-8">
                <div className="tag mb-5 inline-block">{c.tag}</div>
                <h3 className="font-display text-xl uppercase font-semibold mb-4 leading-snug">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{c.desc}</p>
                <div
                  className="grid grid-cols-3 gap-4 pt-6"
                  style={{ borderTop: "1px solid var(--dark-border)" }}
                >
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-xl font-bold text-gold">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-600 mt-1 uppercase tracking-wide">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto px-6" ref={skillsSection.ref}>
          <div className="mb-14">
            <div className="tag mb-4 inline-block">Навыки</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Компетенции
            </h2>
            <div className="section-line mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {SKILLS.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display text-sm uppercase tracking-widest">
                    {skill.name}
                  </span>
                  <span className="text-gold font-display text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: skillsSection.inView ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl uppercase font-semibold mb-8 text-gray-300">
              Направления работы
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "CPA Marketing",
                "Telegram Marketing",
                "Traffic Management",
                "Lead Generation",
                "Online Business Development",
                "Affiliate Marketing",
                "Digital Marketing",
                "Customer Acquisition",
                "Social Media Promotion",
                "Remote Project Management",
              ].map((d) => (
                <span key={d} className="tag">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24" style={{ background: "var(--dark-card)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="tag mb-4 inline-block">Блог</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Статьи
            </h2>
            <div className="section-line mt-4" />
          </div>
          <div className="space-y-0">
            {BLOG_POSTS.map((post, i) => (
              <div
                key={post.title}
                className="blog-card py-8 grid md:grid-cols-4 gap-4 items-start cursor-pointer group"
                style={i === 0 ? { borderTop: "1px solid var(--dark-border)" } : {}}
              >
                <div className="md:col-span-1">
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">
                    {post.date}
                  </div>
                  <span className="tag">{post.tag}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-xl uppercase font-semibold mb-2 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-xs font-display uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Читать <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="tag mb-4 inline-block">Контакты</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                Давайте
                <br />
                <span className="text-gold">работать</span>
                <br />
                вместе
              </h2>
              <div className="section-line" />
              <p className="text-gray-400 leading-relaxed mb-8">
                Я открыт к новым знакомствам, деловым предложениям и совместным
                проектам. Если есть интересная идея или предложение о сотрудничестве —
                напишите мне.
              </p>
              <div className="space-y-4">
                <a
                  href="https://t.me/arvanalex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: "1px solid var(--dark-border)", color: "var(--gold)" }}
                  >
                    <Icon name="Send" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">
                      Telegram
                    </div>
                    <div className="font-display uppercase tracking-wide text-sm group-hover:text-gold transition-colors">
                      @arvanalex
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="mt-10 p-4 text-xs text-gray-600 leading-relaxed"
                style={{ border: "1px solid var(--dark-border)" }}
              >
                Возрастное ограничение для некоторых форматов сотрудничества: 18+.
                Все условия обсуждаются индивидуально.
              </div>
            </div>

            <div
              className="p-8"
              style={{
                background: "var(--dark-card)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <h3 className="font-display text-xl uppercase font-semibold mb-6 tracking-wide">
                Написать напрямую
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-display">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none transition-colors"
                    style={{ border: "1px solid var(--dark-border)", color: "#e8e4da" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--dark-border)")
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-display">
                    Telegram / Email
                  </label>
                  <input
                    type="text"
                    placeholder="@username или email"
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none transition-colors"
                    style={{ border: "1px solid var(--dark-border)", color: "#e8e4da" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--dark-border)")
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-display">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш запрос или проект"
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none resize-none transition-colors"
                    style={{ border: "1px solid var(--dark-border)", color: "#e8e4da" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--dark-border)")
                    }
                  />
                </div>
                <button className="btn-primary w-full text-center">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8"
        style={{
          borderTop: "1px solid var(--dark-border)",
          background: "var(--dark)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm tracking-widest text-gold uppercase">
            Александр
          </span>
          <span className="text-xs text-gray-600 uppercase tracking-widest">
            CPA Marketing & Traffic Specialist
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-700">
            <Icon name="Shield" size={12} />
            <span>18+ для некоторых форматов</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
