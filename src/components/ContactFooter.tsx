import Icon from "@/components/ui/icon";

export default function ContactFooter() {
  return (
    <>
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
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--dark-border)")}
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
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--dark-border)")}
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
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--dark-border)")}
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
    </>
  );
}
