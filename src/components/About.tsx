import { trustPoints } from "@/data/home";
import { Icon } from "./Icon";

export function About() {
  return (
    <section id="about" className="container about">
      <div className="about__photo">
        <span className="tag">[TEAM OR COUPLE PHOTO · 600×420]</span>
      </div>
      <div className="about__copy">
        <div className="eyebrow">Who we are</div>
        <h2 className="h2">Built to create meaningful connections.</h2>
        <p className="lead lead--dark">
          We bring together singles looking for love and companionship, in an environment designed
          to feel safe, kind and respectful from the first message.
        </p>
        <ul className="checks">
          {trustPoints.map((point) => (
            <li key={point.id}>
              <Icon name="check" size={26} strokeWidth={2.4} className="checks__icon" />
              <span>
                <b>{point.lead}</b> {point.body}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
