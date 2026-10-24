"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="page-body"><div className="wrap"><div className="empty-state"><p className="eyebrow">Something went wrong</p><h1 style={{ fontFamily: "var(--display)" }}>Let&apos;s try that again.</h1><p>The page could not be displayed. No uploaded CSV data is sent to the server by the ACE Lab tool.</p><button className="button button-primary" type="button" onClick={() => reset()}>Try again</button></div></div></section>;
}
