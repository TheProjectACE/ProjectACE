import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((item, index) => (
              <span key={item.label + index}>
                <span aria-hidden="true">/</span>{" "}
                {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="page-intro reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
