import Link from "next/link";
import { featuredProfile } from "@/data/home";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__copy">
        <span className="pill">Meaningful connections, lasting love</span>
        <h1 className="display">Find your perfect match today.</h1>
        <p className="lead">
          Meet singles who are looking for the same thing you are: real conversation, genuine
          chemistry and a safe place to start.
        </p>
        <div className="hero__actions">
          <Link href="/profile" className="btn btn--accent btn--lg">
            Start dating now
          </Link>
          <a href="#how" className="link-arrow">
            See how it works
            <Icon name="arrow" size={20} />
          </a>
        </div>
        <p className="hero__trust">
          <Icon name="shield" size={22} />
          Every profile is reviewed before it goes live.
        </p>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <span className="blob blob--big" />
        <span className="blob blob--small" />
        <div className="phone">
          <div className="phone__screen">
            <div className="phone__photo">
              <span className="tag">[PHOTO]</span>
              <div className="phone__meta">
                <div className="phone__name">
                  {featuredProfile.name}, {featuredProfile.age}
                </div>
                <div className="phone__sub">
                  {featuredProfile.city} · {featuredProfile.interest}
                </div>
              </div>
            </div>
            <div className="phone__actions">
              <span className="round round--outline">
                <Icon name="close" size={24} strokeWidth={2.4} />
              </span>
              <span className="round round--accent">
                <Icon name="heart" size={26} filled />
              </span>
            </div>
          </div>
        </div>
        <div className="match-card">
          <span className="match-card__icon">
            <Icon name="chat" size={20} />
          </span>
          <div>
            <div className="match-card__title">It&apos;s a match</div>
            <div className="match-card__sub">Say hello first</div>
          </div>
        </div>
      </div>
    </section>
  );
}
