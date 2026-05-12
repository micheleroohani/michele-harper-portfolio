import React, { useState } from "react";
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
  {
    label: "UX research",
    color: "#EEF6FF",
    description: "Reveal what users actually need before teams overbuild."
  },
  {
    label: "Usability testing",
    color: "#EEFDF5",
    description: "Identify friction quickly through observed behavior, not assumptions."
  },
  {
    label: "Information architecture",
    color: "#EEF6FF",
    description: "Organize, structure, and label content so users can find what they need and complete tasks intuitively."
  },
  {
    label: "Accessibility",
    color: "#EEFDF5",
    description: "Design experiences that work for more people, across contexts and abilities."
  },
  {
    label: "Design systems",
    color: "#EEF6FF",
    description: "Create consistency, speed, and scalable decision-making across teams."
  },
  {
    label: "AI-assisted UX workflows",
    color: "#EEFDF5",
    description: "Accelerate synthesis, tagging, and insight generation without losing judgment."
  }
];

function App() {
  const [copied, setCopied] = useState(false);

const copyEmail = async () => {
  await navigator.clipboard.writeText("michele5harper@gmail.com");
  setCopied(true);
  setTimeout(() => setCopied(false), 1600);
};
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">Michele R. Harper</a>
        <div className="navlinks">
          <a href="#case-studies">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="heroInner">
          <p className="eyebrow">Senior UX researcher & product designer</p>
          <h1>Research-led UX for complex products, enterprise platforms, and AI-assisted workflows.</h1>
          <p className="lede">
            I help product teams make better decisions through usability research, information architecture, accessibility-minded design, and AI-assisted UX workflows.
          </p>
          <div className="actions">
            <a className="button primary" href="#case-studies">View case studies →</a>
            <a className="button secondary" href="#contact">Contact me</a>
          </div>
          <div className="credibilityBar">
  <span>NN/g certified in interaction design & usability testing</span>
  <span>Engineering AND Design background</span>
  <span>12+ years across SaaS, healthcare, automotive & consumer tech</span>
</div>
        </div>
      </header>

      <section id="about" className="section">
        <p className="eyebrow">About</p>
        <h2>UX research with product judgment.</h2>
        <div className="twoCol">
          <p>
            I’m a senior UX researcher and product designer with 12+ years of experience helping organizations make better product decisions through research, testing, systems thinking, and design leadership.
          </p>
          <p>
           I’m certified by Nielsen Norman Group in interaction design and usability testing, and I’ve led work across enterprise SaaS, healthcare transformation, automotive ecosystems, and consumer technology.
          </p>
        </div>
      </section>
    <section id="credentials" className="section">
  <p className="eyebrow">Credentials</p>
  <h2>Training, certifications, and foundations that shape my UX practice.</h2>

  <div className="credentialsGrid">
    <div className="credentialCard">
      <h3>Nielsen Norman Group</h3>
      <p>Interaction design & usability testing</p>
    </div>

    <div className="credentialCard">
      <h3>Interaction Design Foundation</h3>
      <p>Accessibility, immersive experience design</p>
    </div>

    <div className="credentialCard">
      <h3>Anthropic Academy</h3>
      <p>AI fluency, LLM foundations, and applied AI workflows</p>
    </div>

    <div className="credentialCard">
      <h3>Google</h3>
      <p>Generative AI fundamentals</p>
    </div>

    <div className="credentialCard">
      <h3>UCLA</h3>
      <p>Design communication arts</p>
    </div>

    <div className="credentialCard">
      <h3>USC</h3>
      <p>B.S. Chemical Engineering</p>
    </div>
  </div>
</section>

      <section id="expertise" className="section">
        <p className="eyebrow">Expertise</p>
        <h2>Where I create value.</h2>
        <div className="grid">
{expertise.map((item) => (
  <div className="gradientCard" key={item.label}>
    <div
      className="card"
      style={{ backgroundColor: item.color }}
    >
    <h3>{item.label}</h3>
<p>{item.description}</p>
    </div>
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
  <h2>Research capabilities, design strategy, and AI-assisted workflows.</h2>

  <div className="methodGrid">
    <div className="methodCard">
      <h3>Research capabilities</h3>
      <p>
        Usability testing, moderated and unmoderated studies, interviews,
        surveys, card sorting, tree testing, A/B testing, research planning,
        and synthesis.
      </p>
    </div>

    <div className="methodCard">
      <h3>Design & systems</h3>
      <p>
        Figma, design systems, wireframes, prototypes, annotated flows,
        information architecture, accessibility reviews, and UX specifications.
      </p>
    </div>

    <div className="methodCard">
      <h3>Strategy & product judgment</h3>
      <p>
        UX audits, journey mapping, competitive benchmarks, stakeholder
        alignment, product decision support, and prioritization of research
        findings.
      </p>
    </div>

    <div className="methodCard">
      <h3>AI-assisted UX workflows</h3>
      <p>
        AI-assisted synthesis, tagging, research workflow design, product spec
        generation, prompt-aware UX thinking, and human oversight of AI outputs.
      </p>
    </div>
  </div>
</section>
        
<footer id="contact" className="footer">
  <p className="eyebrow">Contact</p>
  <h2>Interested in UX research, consulting, or AI-assisted product workflows?</h2>

  <div className="contactLinks">
  <button
    className="contactCopy"
    onClick={copyEmail}
  >
    {copied ? "Copied ✓" : "Copy email"}
  </button>


  <a
    href="https://www.linkedin.com/in/micheleharperux/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>
        
        <p className="small">© {new Date().getFullYear()} Michele R. Harper</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
