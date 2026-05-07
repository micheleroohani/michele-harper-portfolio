import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const caseStudies = [
  {
    client: "Fuel Cycle",
    title: "AI-driven UX research enhancements",
    role: "Head of UX",
    focus: "AI, SaaS, research synthesis",
    summary:
      "Led UX work to integrate AI-assisted summaries, tagging, thematic analysis, and objective alignment into research workflows, reducing manual effort and improving the speed of insight generation.",
  },
  {
    client: "ProMedica",
    title: "Digital transformation of a healthcare company",
    role: "Director of UX",
    focus: "IA, usability testing, design systems",
    summary:
      "Led UX strategy for consolidating three fragmented healthcare websites into one coherent CMS experience, including UX audits, content inventory, journey design, usability testing, SEO alignment, and a live Figma design system.",
  },
  {
    client: "NNA connected services",
    title: "Testing the current site of an automotive company",
    role: "Lead UX researcher",
    focus: "Usability testing, conversion, content clarity",
    summary:
      "Designed and ran remote usability testing to uncover why users were not engaging with key content. Findings helped prioritize clearer CTAs, better content hierarchy, and more discoverable offers.",
  },
  {
    client: "HP consumer services",
    title: "Testing a redesign of a consumer technology site",
    role: "Lead UX researcher",
    focus: "Prototype testing, navigation, client education",
    summary:
      "Ran usability testing on redesigned support pages, synthesized findings into actionable recommendations, and helped establish UX research as a trusted method for future projects.",
  },
];

const expertise = [
  "UX research",
  "Usability testing",
  "Information architecture",
  "Accessibility",
  "Design systems",
  "AI-assisted UX workflows",
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">Michele Harper</a>
        <div className="navlinks">
          <a href="#case-studies">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="heroInner">
          <p className="eyebrow">Senior UX researcher & designer</p>
          <h1>I design and improve complex digital experiences through research, clarity, and systems thinking.</h1>
          <p className="lede">
            I help product teams make better decisions through usability research, information architecture, accessibility-minded design, and AI-assisted UX workflows.
          </p>
          <div className="actions">
            <a className="button primary" href="#case-studies">View case studies →</a>
            <a className="button secondary" href="#contact">Contact me</a>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <p className="eyebrow">About</p>
        <h2>UX research with product judgment.</h2>
        <div className="twoCol">
          <p>
            I’m a UX researcher and designer with 12+ years of experience across SaaS, healthcare, automotive, consumer technology, and global web platforms.
          </p>
          <p>
            My background combines design, research, and engineering, which helps me work fluently with product, design, development, analytics, SEO, and accessibility teams.
          </p>
        </div>
      </section>

      <section id="expertise" className="section">
        <p className="eyebrow">Expertise</p>
        <h2>Where I create value.</h2>
        <div className="grid">
          {expertise.map((label) => (
            <div className="card" key={label}>
              <div className="iconDot"></div>
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="section">
        <p className="eyebrow">Selected case studies</p>
        <h2>Research-led work across complex products and organizations.</h2>
        <div className="caseList">
          {caseStudies.map((item, index) => (
            <article className="caseCard" key={item.title}>
              <div className="caseNumber">0{index + 1}</div>
              <div>
                <p className="meta">{item.client} · {item.role} · {item.focus}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <p className="eyebrow">Process</p>
        <h2>A practical research process for product decisions.</h2>
        <div className="steps">
          {[
            ["Understand", "Clarify the problem, audience, product context, and decision to be made."],
            ["Research", "Choose the right method for the product stage and risk level."],
            ["Test", "Use real tasks and observable behavior, not just opinions."],
            ["Synthesize", "Turn findings into prioritized recommendations and next steps."],
            ["Improve", "Iterate with product, design, and engineering until the experience is clearer."]
          ].map(([step, text]) => (
            <div className="step" key={step}>
              <h3>{step}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="section">
        <p className="eyebrow">Tools & methods</p>
        <h2>Research, strategy, and design methods.</h2>
        <div className="toolGroups">
          <p><strong>Research:</strong> UserTesting, Userlytics, UserZoom, Validately, interviews, surveys, card sorting, tree testing, A/B testing.</p>
          <p><strong>Design:</strong> Figma, design systems, wireframes, prototypes, annotated flows.</p>
          <p><strong>Strategy:</strong> UX audits, information architecture, journey mapping, competitive benchmarks, accessibility reviews.</p>
          <p><strong>AI:</strong> AI-assisted synthesis, tagging, research workflows, product spec generation, UX oversight.</p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p className="eyebrow">Contact</p>
        <h2>Interested in UX research, consulting, or AI-assisted product workflows?</h2>
        <div className="contactLinks">
          <a href="mailto:hello@example.com">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="small">© {new Date().getFullYear()} Michele Harper</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
