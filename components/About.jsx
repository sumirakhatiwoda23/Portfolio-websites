import Image from "next/image";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="avatar-ring">
                <Image
                  src="/projects/profilepic.png"
                  alt={profile.name}
                  fill
                  sizes="130px"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div className="about-caption">{about.caption}</div>
            </div>
          </div>
        </div>
        <div className="about-copy reveal">
          <div className="sec-eyebrow">About me</div>
          <h3 style={{ marginTop: "8px" }}>{about.heading}</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-meta">
            {about.meta.map((item) => (
              <div key={item.k}>
                <div className="k">{item.k}</div>
                <div className="v">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}