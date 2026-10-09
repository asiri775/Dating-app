import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="container cta">
      <h2 className="display display--md">Your next chapter could start with hello.</h2>
      <p className="lead">Join today and meet people who are ready for something real.</p>
      <Link href="/profile" className="btn btn--accent btn--lg">
        Start dating now
      </Link>
    </section>
  );
}
