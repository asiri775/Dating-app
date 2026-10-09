import { stories } from "@/data/home";

export function Stories() {
  return (
    <section id="stories" className="band band--tint">
      <div className="container band__inner">
        <h2 className="h2">Moments of love: our journey in pictures.</h2>
        <p className="band__lead band__lead--dark">
          Replace these tiles with real member photos, with permission.
        </p>
        <ul className="stories">
          {stories.map((story) => (
            <li key={story.id} className="story" style={{ background: story.gradient }}>
              <span className="tag">{story.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
