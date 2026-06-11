import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/abec777b-70b9-4259-ab2d-a334b15e08b5/files/6c8844d9-b027-417f-9dcc-e568686b26df.jpg";

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

interface HeroAboutServicesProps {
  scrollTo: (id: string) => void;
}

export default function HeroAboutServices({ scrollTo }: HeroAboutServicesProps) {
  return (
    <>
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
    </>
  );
}
