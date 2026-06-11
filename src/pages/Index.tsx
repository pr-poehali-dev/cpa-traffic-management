import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroAboutServices from "@/components/HeroAboutServices";
import CasesSkillsBlog from "@/components/CasesSkillsBlog";
import ContactFooter from "@/components/ContactFooter";

const NAV_ITEMS = [
  { id: "about" },
  { id: "services" },
  { id: "cases" },
  { id: "skills" },
  { id: "blog" },
  { id: "contact" },
];

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

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)", color: "#e8e4da" }}>
      <div className="noise-overlay" />
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroAboutServices scrollTo={scrollTo} />
      <CasesSkillsBlog />
      <ContactFooter />
    </div>
  );
}
