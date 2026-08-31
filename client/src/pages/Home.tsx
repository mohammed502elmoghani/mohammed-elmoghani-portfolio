/* Design system: غرفة الأخبار الرقمية — editorial dark, Signal Mint #63E6BE, DM Serif Display + Manrope + IBM Plex Mono. */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDot,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  X,
} from "lucide-react";

const cases = [
  {
    number: "01",
    title: "From acres to acquisition",
    subtitle: "Agriculture growth campaign",
    category: "LEAD GENERATION",
    image: "/manus-storage/case-farm_81d1ce25.jpg",
    result: "+184%",
    resultLabel: "qualified leads",
    metrics: ["2.8x ROAS", "−37% CPL", "Meta Ads"],
    description:
      "A full-funnel Meta campaign that translated local farming demand into a predictable lead pipeline—without inflating the media budget.",
  },
  {
    number: "02",
    title: "Style that scales",
    subtitle: "Women's fashion performance",
    category: "E-COMMERCE",
    image: "/manus-storage/case-fashion_e352d79a.jpg",
    result: "+62%",
    resultLabel: "purchase rate",
    metrics: ["3.4x ROAS", "−28% CPA", "Instagram"],
    description:
      "A creative testing system for a Damietta fashion label, built around audience signals, offer clarity, and a ruthless weekly iteration rhythm.",
  },
  {
    number: "03",
    title: "Less noise. More signal.",
    subtitle: "Always-on performance system",
    category: "OPTIMIZATION",
    image: "/manus-storage/case-performance_db242c43.jpg",
    result: "−41%",
    resultLabel: "wasted spend",
    metrics: ["+29% CTR", "7-day tests", "Reporting"],
    description:
      "A practical operating system for finding the bottleneck, shifting spend with intent, and making every performance report useful for the next decision.",
  },
];

const skills = [
  { icon: MousePointer2, title: "Media buying", copy: "Campaign architecture, audience mapping, budget control, and daily optimization across Meta." },
  { icon: BarChart3, title: "Performance analysis", copy: "Turning a noisy dashboard into a short list of decisions your business can act on." },
  { icon: CircleDot, title: "Creative testing", copy: "Hooks, angles, offers, and formats tested as a system—not as one-off guesses." },
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="read-line" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Mohammed Elmoghani home">
          <img src="/manus-storage/mark-signal-mint_d1859068.png" alt="" />
          <span>MOHAMMED <b>ELMOGHANI</b></span>
        </a>
        <button className="menu-trigger" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Expertise</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="top-cta" href="mailto:hello@mohammedelmoghani.com">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media"><img src="/manus-storage/portfolio-hero_ff7a8484.jpg" alt="Abstract performance signal lines" /></div>
          <div className="hero-content wrap">
            <div className="hero-copy reveal">
              <p className="kicker"><span className="live-dot" /> Digital marketing specialist · Meta Ads</p>
              <h1>Campaigns built<br />for the <em>next</em><br />decision.</h1>
              <p className="hero-description">I build and optimize Facebook and Instagram campaigns for ambitious businesses—connecting sharp creative with the numbers that move the business forward.</p>
              <div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowUpRight size={17} /></a><a className="text-link" href="#about">How I work <ChevronDown size={16} /></a></div>
            </div>
            <aside className="hero-note reveal reveal-delay-2"><span>01 / 04</span><p>Media buying with a point of view.</p><div className="note-rule" /><small>Based in Egypt · working remotely</small></aside>
          </div>
          <div className="hero-footer wrap"><span>Scroll to explore</span><span className="scroll-arrow">↓</span><span className="hero-year">PORTFOLIO / 2026</span></div>
        </section>

        <section className="proof-strip" aria-label="Performance snapshot"><div className="wrap proof-grid"><div className="proof-label"><span>FIELD NOTES / 2026</span><strong>Proof, before promises.</strong></div><div><b>2.8x</b><span>highest ROAS</span></div><div><b>−41%</b><span>wasted spend</span></div><div><b>+184%</b><span>qualified leads</span></div><div className="proof-status"><i /> Systems built to learn</div></div></section>

        <section id="about" className="section about-section">
          <div className="wrap section-grid">
            <div className="section-index">01 <span>ABOUT</span></div>
            <div className="section-main reveal"><p className="kicker">The operator behind the account</p><h2>Good media buying is part science, part instinct.</h2><div className="about-columns"><div><p>I&apos;m Mohammed Elmoghani, a digital marketing specialist focused on Meta Ads. I care about the space between a campaign launch and the next clear business decision.</p><p>That means clean structure, disciplined testing, and reports that tell you what to do—not just what happened.</p></div><blockquote>“Show me the bottleneck.<br /><em>I&apos;ll show you the lever.</em>”</blockquote></div></div>
            <div className="facts reveal reveal-delay-2"><div><span>Focus</span><strong>Meta Ads &amp; growth</strong></div><div><span>Approach</span><strong>Test. Learn. Scale.</strong></div><div><span>Location</span><strong>Damietta, Egypt</strong></div><div><span>Availability</span><strong className="status"><i /> Open for projects</strong></div></div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="wrap section-grid">
            <div className="section-index">02 <span>EXPERTISE</span></div>
            <div className="section-main"><p className="kicker reveal">A practical growth toolkit</p><h2 className="reveal">The work behind<br /><em>the work.</em></h2><div className="skills-list">{skills.map(({ icon: Icon, title, copy }, index) => <article className="skill-row reveal" style={{ transitionDelay: `${index * 80}ms` }} key={title}><span className="skill-icon"><Icon size={20} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{copy}</p></div><span className="skill-number">0{index + 1}</span></article>)}</div><div className="learning-strip reveal"><span>Currently learning</span><b>GA4</b><b>Creative strategy</b><b>Landing page CRO</b></div></div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="wrap"><div className="work-intro"><div className="section-index">03 <span>SELECTED WORK</span></div><div className="reveal"><p className="kicker">A few signals from the field</p><h2>Results, with<br /><em>the receipts.</em></h2></div><p className="work-aside reveal">Every case study starts with a constraint and ends with a clearer way forward.</p></div><div className="case-list">{cases.map((item, index) => <article className={`case-card reveal case-${index === 0 ? "featured" : "secondary"}`} key={item.number}><div className="case-image"><img src={item.image} alt={item.title} /><span>{item.number}</span></div><div className="case-content"><div className="case-meta"><span>{item.category}</span><span>Meta Ads</span></div><p className="case-subtitle">{item.subtitle}</p><h3>{item.title}</h3><p className="case-description"><span className="constraint-label">Constraint → </span>{item.description}</p><div className="case-result"><span className="result-label">Outcome</span><strong>{item.result}</strong><span>{item.resultLabel}</span></div><div className="case-tags">{item.metrics.map((metric) => <span key={metric}><Check size={13} /> {metric}</span>)}</div><a className="case-link" href="#contact">Read the approach <ArrowUpRight size={16} /></a></div></article>)}</div></div>
        </section>

        <section id="contact" className="section contact-section"><div className="contact-orbit" aria-hidden="true" /><div className="wrap contact-inner"><div className="section-index">04 <span>CONTACT</span></div><div className="reveal"><p className="kicker">Have a campaign in mind?</p><h2>Let&apos;s make the<br /><em>numbers useful.</em></h2><p className="contact-copy">Tell me where growth feels stuck. I&apos;ll come back with a focused point of view and the next best move.</p><a className="button button-primary" href="mailto:hello@mohammedelmoghani.com">Start a conversation <Mail size={17} /></a></div><div className="socials reveal reveal-delay-2"><a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></section>
      </main>

      <footer className="footer"><div className="wrap"><span>© 2026 Mohammed Elmoghani</span><span>Built with discipline, not noise.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
