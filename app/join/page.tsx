import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { departments } from "@/lib/data";

const APPLICATION_FORM_URL = "https://forms.gle/oJjXGUaCJTY4gqDi7";

export const metadata: Metadata = {
  title: "Apply to ProjectACE",
  description: "Explore ProjectACE departments and submit your application through the official application form.",
};

export default function JoinPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contribute · Learn · Build"
        title="Bring your curiosity."
        description="ProjectACE brings together students interested in science, research, engineering, and creative technology. Explore a department, then tell us what you would like to learn, build, or investigate."
      />
      <section className="page-body">
        <div className="wrap page-grid">
          <div>
            <section className="panel">
              <h2>Explore a department</h2>
              <div className="work-list">
                {departments.map((department) => (
                  <div className="work-row" key={department.slug}>
                    <h3>
                      <Link href={"/departments/" + department.slug}>{department.name} ↗</Link>
                    </h3>
                    <p>{department.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel" style={{ marginTop: 20 }}>
              <h2>Before you apply</h2>
              <ul className="content-list">
                <li>Think about which department or research theme interests you.</li>
                <li>Consider what skill you would like to learn or contribute.</li>
                <li>Bring a question or small project idea you would like to explore.</li>
                <li>Be ready to share your availability and relevant experience, if any.</li>
                <li>A portfolio or code link is optional.</li>
              </ul>
              <p className="field-help">
                Share only information needed for your application. Never include passwords or other private account credentials.
              </p>
            </section>
          </div>

          <aside className="panel application-panel">
            <p className="eyebrow">ProjectACE application</p>
            <h2>Your next chapter starts here.</h2>
            <p className="muted">
              Complete the official application form to tell us about your interests, ideas, and the kind of work you want to explore.
            </p>
            <a
              className="button button-primary application-button"
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the ProjectACE application form in a new tab"
            >
              Start your application <span aria-hidden="true">↗</span>
            </a>
            <p className="application-hint">Opens the ProjectACE Google Form in a new tab.</p>
            <hr className="rule" />
            <p className="small muted">
              Please review the form before submitting and provide only information relevant to your application. Your responses are submitted through Google Forms.
            </p>
            <Link className="external-link" href="/contact">Questions? Contact ProjectACE →</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
