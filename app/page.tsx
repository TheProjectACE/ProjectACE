import Link from "next/link";
import { departments, projects } from "@/lib/data";
import { DepartmentCard } from "@/components/DepartmentCard";
import { ProjectCard } from "@/components/ProjectCard";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function OrbitArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Abstract orbital artwork representing connected fields of research">
      <svg className="orbit-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="coreGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(93)"><stop stopColor="#164b69"/><stop offset="1" stopColor="#0b2032"/></radialGradient>
          <linearGradient id="orbitStroke" x1="60" y1="80" x2="430" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#55e6f2" stopOpacity=".7"/><stop offset="1" stopColor="#629bff" stopOpacity=".08"/></linearGradient>
        </defs>
        <circle cx="250" cy="250" r="185" stroke="rgba(127,192,231,.25)"/>
        <circle cx="250" cy="250" r="145" stroke="rgba(127,192,231,.22)" strokeDasharray="2 9"/>
        <ellipse cx="250" cy="250" rx="210" ry="92" transform="rotate(-34 250 250)" stroke="url(#orbitStroke)"/>
        <ellipse cx="250" cy="250" rx="204" ry="78" transform="rotate(48 250 250)" stroke="rgba(85,230,242,.6)" strokeDasharray="3 8"/>
        <g className="orbit-spin"><ellipse cx="250" cy="250" rx="205" ry="116" transform="rotate(74 250 250)" stroke="rgba(127,192,231,.28)"/><circle cx="250" cy="134" r="5" fill="#55e6f2"/><circle cx="44" cy="250" r="4" fill="#a58aff"/></g>
        <circle cx="250" cy="250" r="83" fill="url(#coreGlow)" stroke="rgba(85,230,242,.65)"/><circle cx="250" cy="250" r="70" stroke="rgba(85,230,242,.25)"/>
        <path d="M219 279 250 207l31 72M231 253h38" stroke="#e5fbff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="250" cy="250" r="104" stroke="rgba(85,230,242,.16)" strokeDasharray="1 8"/>
        <circle cx="395" cy="154" r="9" fill="#0b192a" stroke="#70c9ff" strokeWidth="2"/><circle cx="113" cy="340" r="7" fill="#0b192a" stroke="#8be5a8" strokeWidth="2"/><circle cx="352" cy="397" r="6" fill="#0b192a" stroke="#b2a0ff" strokeWidth="2"/>
        <path d="M395 154 426 126h29M113 340 79 365H45" stroke="rgba(127,192,231,.55)"/>
        <text x="426" y="118" fontSize="10" letterSpacing="2" fill="#c9e8f6">EXPLORE</text><text x="45" y="382" fontSize="10" letterSpacing="2" fill="#c9e8f6">EXPERIMENT</text><text x="250" y="367" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#c9e8f6">IDEAS IN MOTION</text>
      </svg>
      <div className="hero-caption"><strong>One community. Many frontiers.</strong>Science · Engineering · Design</div>
    </div>
  );
}

export default function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <p className="eyebrow">Student-led science · Research · Creative technology</p>
            <h1>Curiosity into <span className="accent">creation.</span></h1>
            <p className="hero-copy">ProjectACE is a student-led science and engineering initiative exploring the natural world, developing affordable technologies, and transforming curiosity into research, experiments, and useful solutions.</p>
            <div className="hero-actions"><Link className="button button-primary" href="/projects">Explore projects <Arrow /></Link><Link className="button button-secondary" href="/join">Join ProjectACE</Link></div>
            <div className="hero-note"><span className="status-dot" aria-hidden="true"/>A place for questions, experiments, and honest documentation</div>
          </div>
          <OrbitArtwork />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Six fields · One shared curiosity</p><h2>Find your frontier.</h2><p>Research and build across aerospace, water science, environmental study, robotics, astronomy, and creative technology.</p></div>
          <div className="department-grid">{departments.map((department) => <DepartmentCard key={department.slug} department={department} />)}</div>
          <div style={{ marginTop: 24 }}><Link className="button button-secondary" href="/departments">Explore all departments <Arrow /></Link></div>
        </div>
      </section>
      <section className="section" style={{ borderBlock: "1px solid var(--line)", background: "#091625" }}>
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Workbench</p><h2>See the questions taking shape.</h2><p>Browse documented project records, proposed explorations, and work in progress. Demo content is clearly labelled.</p></div>
          <div className="project-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          <div style={{ marginTop: 24 }}><Link className="button button-primary" href="/projects">Browse project library <Arrow /></Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-3">
          <article className="info-card panel"><span className="kicker">01 / Explore</span><h3>ACE Lab</h3><p>Open a CSV dataset in your browser, compare numeric columns, chart it, and export the filtered data.</p><Link className="card-link" href="/lab">Open scientific tools <span>→</span></Link></article>
          <article className="info-card panel"><span className="kicker">02 / Document</span><h3>Research library</h3><p>Find source links and guidance for responsible, reproducible research. No fabricated publications.</p><Link className="card-link" href="/research">Explore research <span>→</span></Link></article>
          <article className="info-card panel"><span className="kicker">03 / Contribute</span><h3>Bring a question</h3><p>Learn about the departments, application setup, and the information contributors can prepare.</p><Link className="card-link" href="/join">Join ProjectACE <span>→</span></Link></article>
        </div>
      </section>
    </>
  );
}
