/* Design system: غرفة الأخبار الرقمية — editorial dark, Signal Mint #63E6BE, DM Serif Display + Manrope + IBM Plex Mono. */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDot,
  Bot,
  Linkedin,
  Menu,
  MessageCircle,
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
    result: "3,054",
    resultLabel: "conversations started",
    metrics: ["Meta Ads", "20 days", "Brand awareness + contracts"],
    kpis: [["Conversations", "3,054"], ["Link clicks", "16,144"], ["Reach", "218,062"], ["Impressions", "433,756"], ["Budget", "EGP 4,000"], ["Cost / conversation", "EGP 1.32"], ["Link CTR", "3.72%"], ["CPM", "EGP 9.26"], ["CPC", "EGP 0.14"]],
    description:
      "Objective: brand awareness + contracts. Targeted farmers and landowners across Qalyubia, Sharqia, Kafr El-Sheikh, Dakahlia, Beheira, Gharbia, and Monufia.",
    study: {
      challenge: "Rice transplanting is traditionally done by hand, so one of the biggest challenges was not simply generating interest — it was building trust in machine-based transplanting. The campaign needed to introduce the service to farmers and landowners, communicate its practical advantages, and generate enough conversations to create opportunities for bookings and contracts.",
      objective: "Build awareness + generate conversations that could lead to bookings and contracts. The campaign was designed to reach farmers and landowners across key agricultural governorates in Egypt.",
      audience: "Age: 27–60+ · Locations: Qalyubia, Sharqia, Kafr El-Sheikh, Dakahlia, Beheira, Gharbia & Monufia. The audience focused on farmers, landowners, and people interested in agriculture and agricultural machinery.",
      interests: ["Agribusiness", "Agricultural Machinery", "Tractor", "Farm", "Farmer", "Farming", "Agriculture"],
      setup: [["Budget", "EGP 4,000"], ["Duration", "20 days"], ["Objective", "Engagement → Messages"], ["Creative", "Video"]],
      creative: ["Speed", "Labor saving", "Precision"],
      interpretation: "The campaign generated 3,054 conversations from a service that required the audience to first understand and trust a different way of transplanting rice. The strongest signal was the volume of conversations generated relative to the campaign budget, creating a large pool of people who could be followed up with for potential bookings and contracts.",
      takeaway: "For an unfamiliar agricultural service, the first job of the campaign was to reduce uncertainty. The creative led with practical benefits — speed, labor savings, and precision — while the messaging objective gave interested farmers a direct way to ask about the service.",
      nextDecision: "With a larger testing phase, the next step would be to identify which messages, audiences, and creative angles produce the strongest qualified conversations and actual contracts, rather than optimizing only for conversation volume.",
    },
  },
  {
    number: "02",
    title: "SADDA — سدّي",
    subtitle: "Fashion / E-commerce · 2 active days",
    category: "LIVE CAMPAIGN",
    image: "/manus-storage/case-fashion_e352d79a.jpg",
    result: "97",
    resultLabel: "conversations started",
    metrics: ["Meta Ads", "5 days", "Direct sales"],
    kpis: [["Conversations", "97"], ["Reach", "10,355"], ["Impressions", "16,822"], ["Total spend", "EGP 449.36"], ["Budget", "EGP 800"], ["Cost / conversation", "EGP 4.63"], ["CTR", "11.91%"], ["CPC", "EGP 0.22"]],
    description:
      "Objective: direct sales. The campaign paused after two days because of a production issue, protecting customer experience and brand reputation.",
    study: {
      challenge: "SADDA was preparing to sell a new collection ahead of Eid, but there was no website, so the sales journey had to happen through messages. At the same time, the collection was released late, creating a short window to generate demand and convert it into sales.",
      objective: "Generate direct sales through conversations. Since there was no website or online checkout, potential customers were directed to communicate with the brand through messages.",
      audience: "Women · 18–35 · Location: Damietta",
      interests: ["Fashion & Style", "Women's Clothing", "Women's Clothing Brands"],
      setup: [["Planned budget", "EGP 800"], ["Actual spend", "EGP 449.36"], ["Planned duration", "5 days"], ["Active duration", "2 days"], ["Objective", "Direct sales through messages"], ["Creative", "Product images"]],
      creative: ["Product-focused visuals", "Direct conversations"],
      whatHappened: "The campaign was planned to run for five days, but it was paused after two days. The campaign generated a strong number of conversations, but the brand then faced a production issue: incoming demand had created a problem with the collection's availability, and the manufacturer stopped responding to the brand owner. Rather than continue generating orders that could not be fulfilled, the campaign was stopped immediately and customers were informed and apologized to.",
      takeaway: "Performance is not only about getting more customers — it's also about knowing when not to keep spending. The campaign was able to generate interest and conversations, but operational capacity became the limiting factor. Pausing the campaign prevented additional demand from turning into a poor customer experience.",
      nextDecision: "Before relaunching, the priority would be to ensure stock availability, production capacity, and a reliable fulfillment process are ready to support the demand generated by the campaign.",
    },
  },
];

const skills = [
  { icon: MousePointer2, title: "Media buying", copy: "Campaign architecture, audience mapping, budget control, and daily optimization across Meta." },
  { icon: BarChart3, title: "Performance analysis", copy: "Turning a noisy dashboard into a short list of decisions your business can act on." },
  { icon: CircleDot, title: "Creative testing", copy: "Hooks, angles, offers, and formats tested as a system—not as one-off guesses." },
  { icon: Bot, title: "AI-assisted workflow", copy: "I use AI to accelerate research, organize insights, develop ad-copy directions, and improve reporting—while keeping the strategic decisions and final quality under human control." },
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
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  useReveal();

  const closeMenu = () => setMenuOpen(false);
  const alNadaStudy = cases[0].study!;
  const saddaStudy = cases[1].study!;

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
        <a className="whatsapp-cta" href="https://wa.me/201095637036?text=Hello%20Mohammed%2C%20I%20would%20like%20to%20discuss%20a%20campaign." target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media"><img src="/manus-storage/mohammed-elmoghani-profile_cd329727.jpeg" alt="Mohammed Elmoghani portrait" /></div>
          <div className="hero-content wrap">
            <div className="hero-copy reveal">
              <p className="kicker"><span className="live-dot" /> Digital marketing specialist · Meta Ads</p>
              <h1>Campaigns built<br />for the <em>next</em><br />decision.</h1>
              <p className="hero-description">I build and optimize Facebook and Instagram campaigns for ambitious businesses—connecting sharp creative with the numbers that move the business forward.</p>
              <div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowUpRight size={17} /></a><a className="text-link" href="#about">How I work <ChevronDown size={16} /></a></div>
            </div>
            <aside className="hero-note reveal reveal-delay-2"><span>01 / 04</span><p>Media buying with a point of view.</p><div className="note-rule" /><small>Based in Kafr El-Sheikh · working remotely</small></aside>
          </div>
          <div className="hero-footer wrap"><span>Scroll to explore</span><span className="scroll-arrow">↓</span><span className="hero-year">PORTFOLIO / 2026</span></div>
        </section>

        <section className="proof-strip" aria-label="Verified campaign snapshot"><div className="wrap proof-grid"><div className="proof-label"><span>ORIGINAL DATA / META ADS</span><strong>Verified campaign snapshot.</strong></div><div><b>228,417</b><span>total reach</span></div><div><b>450,578</b><span>total impressions</span></div><div><b>3,151</b><span>conversations started</span></div><div className="proof-status"><i /> 2 live campaigns run</div></div></section>

        <section id="about" className="section about-section">
          <div className="wrap section-grid">
            <div className="section-index">01 <span>ABOUT</span></div>
            <div className="section-main reveal"><p className="kicker">The operator behind the account</p><h2>Good media buying is part science, part instinct.</h2><div className="about-columns"><div><p>I&apos;m Mohammed Elmoghani, a digital marketing specialist focused on Meta Ads. I care about the space between a campaign launch and the next clear business decision.</p><p>That means clean structure, disciplined testing, and reports that tell you what to do—not just what happened.</p></div><blockquote>“Show me the bottleneck.<br /><em>I&apos;ll show you the lever.</em>”</blockquote></div></div>
            <div className="facts reveal reveal-delay-2"><div><span>Focus</span><strong>Meta Ads &amp; growth</strong></div><div><span>Approach</span><strong>Test. Learn. Scale.</strong></div><div><span>Location</span><strong>Kafr El-Sheikh, Egypt</strong></div><div><span>Availability</span><strong className="status"><i /> Open for projects</strong></div></div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="wrap section-grid">
            <div className="section-index">02 <span>EXPERTISE</span></div>
            <div className="section-main"><p className="kicker reveal">A practical growth toolkit</p><h2 className="reveal">The work behind<br /><em>the work.</em></h2><div className="skills-list">{skills.map(({ icon: Icon, title, copy }, index) => <article className="skill-row reveal" style={{ transitionDelay: `${index * 80}ms` }} key={title}><span className="skill-icon"><Icon size={20} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{copy}</p></div><span className="skill-number">0{index + 1}</span></article>)}</div><div className="learning-strip reveal"><span>Currently learning</span><b>GA4</b><b>Creative strategy</b><b>Landing page CRO</b></div><div className="credential-card reveal"><div className="credential-copy"><p className="kicker">Credential / AI</p><h3>1 Million Prompters</h3><p>Certificate of completion from the Dubai Future Foundation and the Dubai Centre for Artificial Intelligence.</p><a className="case-link" href="/manus-storage/ai-certificate_74023791.pdf" target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16} /></a></div><div className="credential-mark"><span>AI</span><small>01 / 01</small></div></div></div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="wrap"><div className="work-intro"><div className="section-index">03 <span>SELECTED WORK</span></div><div className="reveal"><p className="kicker">A few signals from the field</p><h2>Campaigns, with<br /><em>the receipts.</em></h2></div><p className="work-aside reveal">Every entry below uses the figures and notes from the original campaign file—nothing added.</p></div><div className="case-list">{cases.map((item, index) => <article className={`case-card reveal case-${index === 0 ? "featured" : "secondary"}`} key={item.number}><div className="case-image"><img src={item.image} alt={item.title} /><span>{item.number}</span></div><div className="case-content"><div className="case-meta"><span>{item.category}</span><span>Meta Ads</span></div><p className="case-subtitle">{item.subtitle}</p><h3>{item.title}</h3><p className="case-description"><span className="constraint-label">Constraint → </span>{item.description}</p><div className="case-result"><span className="result-label">Source data</span><strong>{item.result}</strong><span>{item.resultLabel}</span></div><div className="case-kpis">{item.kpis.map(([label, value]) => <div className="case-kpi" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="case-tags">{item.metrics.map((metric) => <span key={metric}><Check size={13} /> {metric}</span>)}</div><button className="case-link case-button" type="button" onClick={() => item.study && setSelectedCase(item.number)}>Read the case study <ArrowUpRight size={16} /></button></div></article>)}</div></div>
        </section>

        <section id="contact" className="section contact-section"><div className="contact-orbit" aria-hidden="true" /><div className="wrap contact-inner"><div className="section-index">04 <span>CONTACT</span></div><div className="reveal"><p className="kicker">Have a campaign in mind?</p><h2>Let&apos;s make the<br /><em>numbers useful.</em></h2><p className="contact-copy">Tell me where growth feels stuck. I&apos;ll come back with a focused point of view and the next best move.</p><a className="button button-primary" href="https://wa.me/201095637036?text=Hello%20Mohammed%2C%20I%20would%20like%20to%20discuss%20a%20campaign." target="_blank" rel="noreferrer">Contact on WhatsApp <MessageCircle size={17} /></a></div><div className="socials reveal reveal-delay-2"><a href="https://www.linkedin.com/in/mohammed-sherif-2743a4356?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a></div></div></section>
      </main>

      {selectedCase === "01" && <div className="case-modal-backdrop" role="presentation" onClick={() => setSelectedCase(null)}><article className="case-modal" role="dialog" aria-modal="true" aria-labelledby="al-nada-study-title" onClick={(event) => event.stopPropagation()}><div className="case-modal-head"><div><p className="kicker">CASE STUDY 01 — AL-NADA</p><h2 id="al-nada-study-title">Al-Nada Rice<br /><em>Transplanting Co.</em></h2><p className="case-modal-meta">Agriculture / AgTech · Meta Ads · 20 days</p></div><button className="modal-close" type="button" aria-label="Close case study" onClick={() => setSelectedCase(null)}><X size={20} /></button></div><div className="case-modal-body"><section><p className="modal-label">The challenge</p><p>{alNadaStudy.challenge}</p></section><section><p className="modal-label">Objective</p><p>{alNadaStudy.objective}</p></section><div className="modal-two-col"><section><p className="modal-label">Audience</p><p>{alNadaStudy.audience}</p><p className="modal-label">Interests included</p><div className="modal-chips">{alNadaStudy.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></section><section><p className="modal-label">Campaign setup</p><div className="modal-list">{alNadaStudy.setup.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><p className="modal-label">Creative focus</p><div className="modal-chips">{alNadaStudy.creative.map((item) => <span key={item}>{item}</span>)}</div></section></div><section><p className="modal-label">Results</p><div className="modal-results">{cases[0].kpis!.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section><section><p className="modal-label">What the numbers tell us</p><p>{alNadaStudy.interpretation}</p></section><section><p className="modal-label">Key takeaway</p><p>{alNadaStudy.takeaway}</p></section><section><p className="modal-label">Next decision</p><p>{alNadaStudy.nextDecision}</p></section></div></article></div>}

      {selectedCase === "02" && <div className="case-modal-backdrop" role="presentation" onClick={() => setSelectedCase(null)}><article className="case-modal" role="dialog" aria-modal="true" aria-labelledby="sadda-study-title" onClick={(event) => event.stopPropagation()}><div className="case-modal-head"><div><p className="kicker">CASE STUDY 02 — SADDA</p><h2 id="sadda-study-title">SADDA — <em>سدّي</em></h2><p className="case-modal-meta">Fashion / E-commerce · Meta Ads · 2 active days</p></div><button className="modal-close" type="button" aria-label="Close case study" onClick={() => setSelectedCase(null)}><X size={20} /></button></div><div className="case-modal-body"><section><p className="modal-label">The challenge</p><p>{saddaStudy.challenge}</p></section><section><p className="modal-label">Objective</p><p>{saddaStudy.objective}</p></section><div className="modal-two-col"><section><p className="modal-label">Audience</p><p>{saddaStudy.audience}</p><p className="modal-label">Interests</p><div className="modal-chips">{saddaStudy.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></section><section><p className="modal-label">Campaign setup</p><div className="modal-list">{saddaStudy.setup.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><p className="modal-label">Creative</p><div className="modal-chips">{saddaStudy.creative.map((item) => <span key={item}>{item}</span>)}</div></section></div><section><p className="modal-label">Results</p><div className="modal-results">{cases[1].kpis!.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section><section><p className="modal-label">What happened next</p><p>{saddaStudy.whatHappened}</p></section><section><p className="modal-label">Key takeaway</p><p>{saddaStudy.takeaway}</p></section><section><p className="modal-label">Next decision</p><p>{saddaStudy.nextDecision}</p></section></div></article></div>}

      <footer className="footer"><div className="wrap"><span>© 2026 Mohammed Elmoghani</span><span>Built with discipline, not noise.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
