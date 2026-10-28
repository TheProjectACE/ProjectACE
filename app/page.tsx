import Link from "next/link";
import { departments, projects } from "@/lib/data";
import { DepartmentCard } from "@/components/DepartmentCard";
import { ProjectCard } from "@/components/ProjectCard";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function OrbitArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Animated illustration of Earth rotating while the Moon orbits Earth">
      <div className="earth-moon-scene" aria-hidden="true">
        <div className="space-stars stars-one" />
        <div className="space-stars stars-two" />
        <div className="orbit-track" />
        <div className="earth-globe">
          <span className="earth-land land-one" />
          <span className="earth-land land-two" />
          <span className="earth-land land-three" />
          <span className="earth-cloud cloud-one" />
          <span className="earth-cloud cloud-two" />
        </div>
        <div className="moon-orbit">
          <div className="moon"><span /></div>
        </div>
        <span className="orbit-tag earth-tag">EARTH <i>01</i></span>
        <span className="orbit-tag moon-tag">MOON <i>02</i></span>
        <span className="orbit-readout">LUNAR SYSTEM <b>● LIVE ORBIT</b></span>
      </div>
      <div className="hero-caption"><strong>Earth &amp; Moon.</strong>One planet · One natural satellite</div>
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

      <section className="section frontier-showcase">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Ideas, made visible</p>
            <h2>Build beyond the expected.</h2>
            <p>From orbital mechanics to intelligent machines, explore the real-world frontiers that inspire ProjectACE.</p>
          </div>
          <div className="frontier-grid">
            <article className="frontier-image-card frontier-feature">
              <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1500&q=85" alt="Earth viewed from orbit with clouds and blue atmosphere" loading="lazy" decoding="async" />
              <div className="frontier-image-copy">
                <span className="kicker">01 / Space systems</span>
                <h3>Think in new orbits.</h3>
                <p>Ask bigger questions about our planet, spaceflight, and the systems that connect them.</p>
              </div>
            </article>
            <div className="frontier-side">
              <article className="frontier-image-card">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=85" alt="Modern robotics hardware representing automation and engineering" loading="lazy" decoding="async" />
                <div className="frontier-image-copy">
                  <span className="kicker">02 / Robotics</span>
                  <h3>Make intelligence tangible.</h3>
                  <p>Prototype, test, learn, and improve.</p>
                </div>
              </article>
              <article className="frontier-image-card">
                <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1000&q=85" alt="Rocket standing upright on a launch pad" loading="lazy" decoding="async" />
                <div className="frontier-image-copy">
                  <span className="kicker">03 / Flight research</span>
                  <h3>Turn curiosity into lift.</h3>
                  <p>Explore aerodynamics, measurement, and responsible design.</p>
                </div>
              </article>
            </div>
          </div>
          <p className="image-credit">Visual inspiration: <a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>. Images load from their image CDN.</p>
        </div>
      </section>

      <section className="section" style={{ borderBlock: "1px solid var(--line)", background: "#091625" }}>
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">Workbench</p><h2>See the questions taking shape.</h2><p>Browse documented project records, proposed explorations, and work in progress. Demo content is clearly labelled.</p></div>
          <div className="project-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          <div style={{ marginTop: 24 }}><Link className="button button-primary" href="/projects">Browse project library <Arrow /></Link></div>
        </div>
      </section>
      <section className="section" style={{ borderTop: "1px solid var(--line)", background: "#091625" }}>
        <div className="wrap grid-2">
          <article className="panel">
            <p className="eyebrow">News &amp; milestones</p>
            <h2>Progress, documented.</h2>
            <p className="muted">Public updates will be dated and linked to the work they describe. No announcement has been published in this initial library yet.</p>
            <Link className="card-link" href="/news">View updates <span>→</span></Link>
          </article>
          <article className="panel">
            <p className="eyebrow">Research library</p>
            <h2>Evidence before claims.</h2>
            <p className="muted">Find official science data resources and guidance for recording sources, units, and limitations. ProjectACE publications will appear here only when verified records are ready.</p>
            <Link className="card-link" href="/research">Explore research resources <span>→</span></Link>
          </article>
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
