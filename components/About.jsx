import Image from "next/image";
import { about, profile } from "@/lib/data";
import { FaLocationDot } from "react-icons/fa6";

export default function About() {
  const location = about.meta.find((item) => item.k === "Location");

  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="avatar-ring">
                <Image
                  src="/projects/profilepic2.png"
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
          {location && (
            <div className="about-location">
              <FaLocationDot />
              <span>{location.v}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}