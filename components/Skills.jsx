import { skillGroups } from "@/lib/data";
import { skillIconMap } from "@/lib/icons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">What I work with</div>
          <div className="sec-title">Skills &amp; Tech Stack</div>
          <p className="sec-sub">
            The tools and technologies I use to design, build, and ship
            full-stack applications.
          </p>
        </div>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-card reveal" key={group.cat}>
              <span className="cat-tag" style={{ background: group.color }}>
                {group.cat}
              </span>
              <ul>
                {group.items.map((item) => {
                  const entry = skillIconMap[item];
                  const Icon = entry?.Icon;
                  return (
                    <li key={item}>
                      {Icon && (
                        <Icon
                          className="skill-icon"
                          style={{ color: entry.color }}
                          aria-hidden="true"
                        />
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}