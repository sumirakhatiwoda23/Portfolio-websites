import Image from "next/image";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Recognition</div>
          <div className="sec-title">Achievements</div>
        </div>
        <div className="ach-grid">
          {achievements.map((a) => (
            <div
              className="ach-card reveal"
              style={!a.image ? { background: a.gradient } : undefined}
              key={a.title}
            >
              {a.image && (
                <a
                  className="ach-img"
                  href={a.image}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Open ${a.title} image in a new tab`}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 560px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </a>
              )}
              <div
                className="ach-body"
                style={a.image ? { background: a.gradient } : undefined}
              >
                <div className="ach-tag">{a.tag}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}