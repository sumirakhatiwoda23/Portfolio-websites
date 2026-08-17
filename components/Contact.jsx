import { profile } from "@/lib/data";
import { FaInstagram, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Connect with me</div>
          <h2 className="sec-title">Let&apos;s get in touch</h2>
        </div>

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
            <a className="btn btn-outline" href={`mailto:${profile.email}`}>
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

          <div className="contact-socials">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="social-btn"
            >
              <FaInstagram />
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="social-btn"
            >
              <FaFacebook />
            </a>
            <a
              href={profile.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
              className="social-btn"
            >
              <FaTiktok />
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
              className="social-btn"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}