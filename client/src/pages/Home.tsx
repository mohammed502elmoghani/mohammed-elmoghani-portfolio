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
    title: "Al-Nada Rice Transplanting Co.",
    subtitle: "Agriculture / AgTech · 20 days",
    category: "LIVE CAMPAIGN",
    image: "/manus-storage/case-farm_81d1ce25.jpg",
    result: "EGP 4,000",
    resultLabel: "campaign budget",
    metrics: ["0 conversations", "0 reach", "0 impressions", "0 link clicks", "1.32 EGP cost/conversation", "3.72% link CTR", "9.26 EGP CPM", "0.14 EGP CPC"],
    description:
      "Objective: brand awareness + contracts. Targeted farmers and landowners across Qalyubia, Sharqia, Kafr El-Sheikh, Dakahlia, Beheira, Gharbia, and Monufia.",
  },
  {
    number: "02",
    title: "SADDA — سدّي",
    subtitle: "Fashion / E-commerce · 5 days",
    category: "LIVE CAMPAIGN",
    image: "/manus-storage/case-fashion_e352d79a.jpg",
    result: "EGP 449.36",
    resultLabel: "total spend",
    metrics: ["0 conversations", "0 reach", "0 impressions", "EGP 449.36 spend", "4.63 EGP cost/conversation", "11.91% CTR", "0.22 EGP CPC", "EGP 800 budget"],
    description:
      "Objective: direct sales. The campaign paused after two days because of a production issue, protecting customer experience and brand reputation.",
  },
  {
    number: "03",
    title: "Nile Residences",
    subtitle: "Residential compound · 30 days",
    category: "CONCEPT CAMPAIGN",
    image: "/manus-storage/case-performance_db242c43.jpg",
    result: "EGP 6,000",
    resultLabel: "proposed budget",
    metrics: ["Site visits", "Qualified leads", "Meta + Google", "Lead Ads"],
    description:
      "A proposed multi-platform strategy for site visits and qualified leads, using Meta Lead Ads, Google Search, and retargeting for Greater Cairo buyers.",
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

        <section className="proof-strip" aria-label="Verified campaign snapshot"><div className="wrap proof-grid"><div className="proof-label"><span>ORIGINAL DATA / META ADS</span><strong>Verified campaign snapshot.</strong></div><div><b>228,417</b><span>total reach</span></div><div><b>450,578</b><span>total impressions</span></div><div><b>0</b><span>conversations started</span></div><div className="proof-status"><i /> 2 live campaigns run</div></div></section>

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
          <div className="wrap"><div className="work-intro"><div className="section-index">03 <span>SELECTED WORK</span></div><div className="reveal"><p className="kicker">A few signals from the field</p><h2>Campaigns, with<br /><em>the receipts.</em></h2></div><p className="work-aside reveal">Every entry below uses the figures and notes from the original campaign file—nothing added.</p></div><div className="case-list">{cases.map((item, index) => <article className={`case-card reveal case-${index === 0 ? "featured" : "secondary"}`} key={item.number}><div className="case-image"><img src={item.image} alt={item.title} /><span>{item.number}</span></div><div className="case-content"><div className="case-meta"><span>{item.category}</span><span>Meta Ads</span></div><p className="case-subtitle">{item.subtitle}</p><h3>{item.title}</h3><p className="case-description"><span className="constraint-label">Constraint → </span>{item.description}</p><div className="case-result"><span className="result-label">Source data</span><strong>{item.result}</strong><span>{item.resultLabel}</span></div><div className="case-tags">{item.metrics.map((metric) => <span key={metric}><Check size={13} /> {metric}</span>)}</div><a className="case-link" href="#contact">Read the approach <ArrowUpRight size={16} /></a></div></article>)}</div></div>
        </section>

        <section id="contact" className="section contact-section"><div className="contact-orbit" aria-hidden="true" /><div className="wrap contact-inner"><div className="section-index">04 <span>CONTACT</span></div><div className="reveal"><p className="kicker">Have a campaign in mind?</p><h2>Let&apos;s make the<br /><em>numbers useful.</em></h2><p className="contact-copy">Tell me where growth feels stuck. I&apos;ll come back with a focused point of view and the next best move.</p><a className="button button-primary" href="mailto:hello@mohammedelmoghani.com">Start a conversation <Mail size={17} /></a></div><div className="socials reveal reveal-delay-2"><a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></section>
      </main>

      <footer className="footer"><div className="wrap"><span>© 2026 Mohammed Elmoghani</span><span>Built with discipline, not noise.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
