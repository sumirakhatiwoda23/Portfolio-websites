import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-band reveal">
          <h2>Let&apos;s build something together.</h2>
          <p>
  I’m always open to new opportunities, interesting projects, and meeting
  people who love building things. Whether it’s about a full-stack role,an
  internship, a collaboration, or simply exchanging ideas — come say hi!
</p>

<p>
  You can find me on Instagram, Facebook,TikTok, or X. Let’s
  connect, chat, and see what we can create together. ✨
</p>
          <div className="contact-actions">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-outline"
              href={profile.github}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
