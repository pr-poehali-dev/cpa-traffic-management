import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "about", label: "Обо мне" },
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "skills", label: "Навыки" },
  { id: "blog", label: "Блог" },
  { id: "contact", label: "Контакты" },
];

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({
  scrolled,
  activeSection,
  menuOpen,
  setMenuOpen,
  scrollTo,
}: NavbarProps) {
  return (
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
  );
}
