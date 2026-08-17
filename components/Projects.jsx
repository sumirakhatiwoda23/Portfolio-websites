import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">My work</div>
          <div className="sec-title">Featured Projects</div>
          <p className="sec-sub">
            A few full-stack applications I&apos;ve designed, built, and
            deployed end to end.
          </p>
        </div>
        <div className="proj-grid">
          {projects.map((proj) => (
            <div className="proj-card reveal" key={proj.name}>
              {proj.image ? (
                <div className="proj-banner proj-banner-img">
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    fill
                    sizes="(max-width: 820px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div className="proj-banner" style={{ background: proj.gradient }}>
                  {proj.banner}
                </div>
              )}
              <div className="proj-body">
                <div className="proj-cat">{proj.cat}</div>
                <div className="proj-name">{proj.name}</div>
                <div className="proj-stack">{proj.stack}</div>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-links">
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener">
                      Live demo ↗
                    </a>
                  )}
                  {proj.code && (
                    <a href={proj.code} target="_blank" rel="noopener">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
