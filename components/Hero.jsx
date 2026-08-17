"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/lib/data";
import { socialIcons } from "@/lib/icons";

const { github: GithubIcon, linkedin: LinkedinIcon, email: EmailIcon } =
  socialIcons;

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = profile.roles;
    const typedEl = typedRef.current;
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function typeLoop() {
      if (reduceMotion) {
        typedEl.textContent = roles[0];
        return;
      }
      const current = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        typedEl.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIdx--;
        typedEl.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="pill">
            <span className="dot"></span> Open to full-stack opportunities
          </div>
          <h1>
            Hi, I&apos;m <span className="grad-text">{profile.name}</span> 👋
          </h1>
          <div className="hero-roles">
            <span ref={typedRef}></span>
            <span className="caret"></span>
          </div>
          <p className="lede">{profile.lede}</p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#projects">
              View my work
            </a>
            <a className="btn btn-solid" href="/resume.pdf" download>
              Download CV
            </a>
          </div>
          <div className="sec-eyebrow" style={{ marginTop: "36px", marginBottom: "16px" }}>
            Connect with me
          </div>
          <div className="hero-socials" style={{ marginTop: 0 }}>
             <a
              className="social-btn"
              href={profile.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
             <a
              className="social-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              className="social-btn"
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <Image
              src="/projects/profilepic.png"
              alt={profile.name}
              fill
              sizes="300px"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              priority
            />
            <div className="float-chip chip1">
              <span className="ico" style={{ background: "#61dafb" }}>
                R
              </span>{" "}
              React.js
            </div>
            <div className="float-chip chip2">
              <span className="ico" style={{ background: "#3c873a" }}>
                N
              </span>{" "}
              Node.js
            </div>
            <div className="float-chip chip3">
              <span className="ico" style={{ background: "#47a248" }}>
                M
              </span>{" "}
              MongoDB
            </div>
            <div className="float-chip chip4">
              <span className="ico" style={{ background: "#f7df1e", color: "#111" }}>
                JS
              </span>{" "}
              JWT · Auth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}