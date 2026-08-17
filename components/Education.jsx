import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Background</div>
          <div className="sec-title">Education &amp; Training</div>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <div className="t-item reveal" key={item.title}>
              <div className="t-dot">✓</div>
              <div className="t-card">
                <div className="t-duration">{item.duration}</div>
                <div className="t-title">{item.title}</div>
                <div className="t-sub">{item.sub}</div>
                {item.desc.length > 0 && (
                  <ul className="t-desc">
                    {item.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {item.credential && (
                  <div style={{ marginTop: "12px" }}>
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--violet)",
                      }}
                    >
                      View credential ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
