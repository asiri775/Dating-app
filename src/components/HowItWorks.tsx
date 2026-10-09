import { steps } from "@/data/home";
import { Icon } from "./Icon";

export function HowItWorks() {
  return (
    <section id="how" className="band band--ink">
      <div className="container band__inner">
        <h2 className="h2 band__title">Discover your perfect match in three steps.</h2>
        <p className="band__lead">No endless swiping. Just a clear path from hello to a first date.</p>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.id} className="step">
              <span className="step__icon">
                <Icon name={step.icon} size={28} />
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
