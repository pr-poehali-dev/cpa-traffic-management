import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

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

export default function CasesSkillsBlog() {
  const skillsSection = useInView(0.2);

  return (
    <>
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
    </>
  );
}
