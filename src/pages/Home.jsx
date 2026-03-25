import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
  const socials = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/gudiya-kumari-a06b18291/?skipRedirect=true", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/Gudiya03", label: "GitHub" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/gudiyakumari03/", label: "LeetCode" },
    { icon: <SiGeeksforgeeks />, href: "https://www.geeksforgeeks.org/profile/kumariguofmg", label: "GeeksForGeeks" },
    { icon: <FaEnvelope />, href: "mailto:kumarigudiyaa03@gmail.com", label: "Email" },
    { icon: <FaPhone />, href: "tel:+919905961088", label: "Phone" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── COLOUR TOKENS ─────────────────────────────────────────
           Primary accent  : #a855f7  (violet-500)
           Bright accent   : #c026d3  (fuchsia-600)  — buttons / glow
           Dim accent      : rgba(168,85,247,0.X)
           Background      : #0d0b14  (near-black with purple tint)
           Surface text    : #f0e8ff  (off-white purple tint)
        ────────────────────────────────────────────────────────── */

        .lx-root {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background: #020617;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        {/* .lx-texture {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(168,85,247,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 50% 80% at 10% 80%, rgba(192,38,211,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        } */}

        {/* .lx-grain {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .lx-vline-left {
          position: absolute;
          left: 48px;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent 0%, rgba(168,85,247,0.22) 25%, rgba(168,85,247,0.22) 75%, transparent 100%);
          z-index: 1;
        }

        .lx-vline-right {
          position: absolute;
          right: 48px;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent 0%, rgba(168,85,247,0.1) 30%, rgba(168,85,247,0.1) 70%, transparent 100%);
          z-index: 1;
        } */}

        /* TOP BAR */
        .lx-topbar {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 72px;
          border-bottom: 1px solid rgba(168,85,247,0.15);
          opacity: 0;
          animation: lx-in 0.8s ease 0.1s forwards;
        }

        .lx-monogram {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #a855f7;
          letter-spacing: 0.15em;
        }

        .lx-topbar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.25em;
          color: rgba(168,85,247,0.5);
          text-transform: uppercase;
        }

        .lx-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c026d3;
          box-shadow: 0 0 8px rgba(192,38,211,0.8);
          animation: pulse-glow 2.5s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(192,38,211,0.8); }
          50% { opacity: 0.35; box-shadow: 0 0 2px rgba(192,38,211,0.2); }
        }

        /* MAIN GRID */
        .lx-main {
          position: relative;
          z-index: 2;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 400px;
          min-height: calc(100vh - 82px - 54px);
        }

        /* LEFT */
        .lx-left {
          padding: 64px 56px 64px 72px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .lx-eyebrow {
          font-size: 9px;
          letter-spacing: 0.38em;
          color: rgba(168,85,247,0.45);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.2s forwards;
        }

        .lx-eyebrow::after {
          content: '';
          height: 1px;
          width: 44px;
          background: rgba(168,85,247,0.28);
        }

        .lx-headline {
          font-family: 'Poppins', sans-serif;
          line-height: 1.05;
          margin-bottom: 34px;
          opacity: 0;
          animation: lx-in 0.9s ease 0.3s forwards;
        }

        .lx-hl-crafted {
          display: block;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          font-style: normal;
          color: #94a3b8;
          letter-spacing: 0.02em;
        }

        .lx-hl-name {
          display: block;
          font-size: clamp(44px, 5.5vw, 80px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .lx-hl-accent {
          color: #a855f7;
        }

        .lx-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 26px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.45s forwards;
        }

        .lx-rule-line {
          height: 1px;
          width: 44px;
          background: linear-gradient(90deg, #a855f7, transparent);
        }

        .lx-rule-diamond {
          width: 4px;
          height: 4px;
          background: #a855f7;
          transform: rotate(45deg);
          opacity: 0.65;
        }

        .lx-role-text {
          font-size: 9.5px;
          letter-spacing: 0.28em;
          color: #a855f7;
          text-transform: uppercase;
          font-weight: 500;
        }

        .lx-bio {
          font-size: 12.5px;
          line-height: 2;
          color: #94a3b8;
          max-width: 420px;
          font-weight: 300;
          letter-spacing: 0.025em;
          margin-bottom: 44px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.5s forwards;
        }

        /* STATS */
        .lx-stats {
          display: flex;
          gap: 0;
          margin-bottom: 44px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.6s forwards;
        }

        .lx-stat {
          flex: 1;
          padding: 18px 20px;
          border: 1px solid rgba(168,85,247,0.15);
          border-right: none;
          background: rgba(168,85,247,0.03);
          transition: background 0.3s;
        }

        .lx-stat:last-child { border-right: 1px solid rgba(168,85,247,0.15); }
        .lx-stat:hover { background: rgba(168,85,247,0.07); }

        .lx-stat-val {
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: #a855f7;
          line-height: 1;
          display: block;
          letter-spacing: -0.01em;
        }

        .lx-stat-lbl {
          font-size: 8.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(240,232,255,0.25);
          font-weight: 500;
          display: block;
          margin-top: 5px;
        }

        /* CTA */
        .lx-cta-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 40px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.7s forwards;
          flex-wrap: wrap;
        }

        .lx-btn-gold {
          padding: 14px 38px;
          background: linear-gradient(105deg, #7c3aed 0%, #c026d3 50%, #7c3aed 100%);
          background-size: 200% 100%;
          color: #fff;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-position 0.4s ease, box-shadow 0.3s;
          box-shadow: 0 2px 24px rgba(168,85,247,0.25);
        }

        .lx-btn-gold:hover {
          background-position: 100% 0;
          box-shadow: 0 6px 36px rgba(192,38,211,0.5);
        }

        .lx-btn-ghost {
          padding: 13px 38px;
          border: 1px solid rgba(168,85,247,0.35);
          color: rgba(240,232,255,0.5);
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
        }

        .lx-btn-ghost:hover {
          border-color: rgba(168,85,247,0.75);
          color: #a855f7;
          background: rgba(168,85,247,0.06);
        }

        /* SOCIALS */
        .lx-socials {
          display: flex;
          gap: 10px;
          opacity: 0;
          animation: lx-in 0.8s ease 0.85s forwards;
        }

        .lx-social {
          width: 32px;
          height: 32px;
          border: 1px solid rgba(168,85,247,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(168,85,247,0.4);
          font-size: 12px;
          text-decoration: none;
          transition: all 0.25s;
        }

        .lx-social:hover {
          border-color: rgba(168,85,247,0.75);
          color: #a855f7;
          background: rgba(168,85,247,0.07);
        }

        /* RIGHT */
        .lx-right {
          border-left: 1px solid rgba(168,85,247,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 36px;
          background: rgba(168,85,247,0.015);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: lx-slide-r 1s ease 0.4s forwards;
        }

        .lx-bg-monogram {
          position: absolute;
          bottom: -30px;
          right: -16px;
          font-family: 'Poppins', sans-serif;
          font-size: 200px;
          font-weight: 700;
          color: rgba(168,85,247,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.06em;
        }

        /* Photo */
        .lx-photo-wrap {
          position: relative;
          width: 240px;
          height: 240px;
          margin-bottom: 32px;
        }

        .lx-ring-spin {
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,0.22);
          animation: ring-spin 22s linear infinite;
        }

        .lx-ring-spin::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #c026d3;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(192,38,211,0.9);
        }

        .lx-ring-static {
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,0.1);
        }

        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .lx-photo-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
          box-shadow:
            0 0 0 2px rgba(168,85,247,0.35),
            0 24px 64px rgba(0,0,0,0.7);
        }

        .lx-photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: none;
          transition: filter 0.5s;
        }

        .lx-photo-circle:hover img {
          filter: none;
        }

        .lx-photo-circle::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(to top, rgba(13,11,20,0.4) 0%, transparent 55%);
          pointer-events: none;
          z-index: 3;
        }

        /* Info card */
        .lx-info-card {
          width: 100%;
          border: 1px solid rgba(168,85,247,0.18);
          background: rgba(168,85,247,0.03);
          position: relative;
        }

        .lx-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 32px; height: 1px;
          background: #a855f7;
        }

        .lx-info-card::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 32px; height: 1px;
          background: rgba(168,85,247,0.4);
        }

        .lx-info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(168,85,247,0.08);
        }

        .lx-info-row:last-child { border-bottom: none; }

        .lx-info-key {
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(168,85,247,0.42);
          font-weight: 500;
        }

        .lx-info-val {
          font-size: 10.5px;
          color: rgba(240,232,255,0.6);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-align: right;
        }

        .lx-info-val-gold { color: #c026d3 !important; }

        /* BOTTOM BAR */
        .lx-bottombar {
          position: relative;
          z-index: 3;
          border-top: 1px solid rgba(168,85,247,0.12);
          padding: 15px 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          animation: lx-in 0.7s ease 1s forwards;
        }

        .lx-copyright {
          font-size: 8.5px;
          letter-spacing: 0.22em;
          color: rgba(168,85,247,0.22);
          text-transform: uppercase;
        }

        .lx-scroll-cue {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 8.5px;
          letter-spacing: 0.25em;
          color: rgba(168,85,247,0.3);
          text-transform: uppercase;
        }

        .lx-scroll-box {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(168,85,247,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          color: rgba(168,85,247,0.45);
          animation: bob 2s ease-in-out infinite;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        /* ANIMATIONS */
        @keyframes lx-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes lx-slide-r {
          from { opacity: 0; transform: translateX(28px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .lx-vline-left, .lx-vline-right { display: none; }
          .lx-topbar, .lx-bottombar { padding: 18px 24px; }
          .lx-main { grid-template-columns: 1fr; }
          .lx-left { padding: 44px 24px; align-items: center; text-align: center; }
          .lx-bio, .lx-eyebrow, .lx-rule { justify-content: center; }
          .lx-cta-row, .lx-socials, .lx-stats { justify-content: center; }
          .lx-right { border-left: none; border-top: 1px solid rgba(168,85,247,0.12); padding: 40px 24px; }
          .lx-stats { flex-direction: column; align-items: center; }
          .lx-stat { border-right: 1px solid rgba(168,85,247,0.15) !important; text-align: center; width: 180px; }
        }
      `}</style>

      <div className="lx-root">
        <div className="lx-texture" />
        <div className="lx-grain" />
        <div className="lx-vline-left" />
        <div className="lx-vline-right" />

        {/* TOP BAR */}
        <div className="lx-topbar">
          <div className="lx-monogram">G · K</div>
          <div className="lx-topbar-right">
            <span className="lx-pulse-dot" />
            Available for hire
          </div>
        </div>

        {/* MAIN */}
        <div className="lx-main">

          {/* LEFT */}
          <div className="lx-left">
            <div className="lx-eyebrow"></div>

            <h1 className="lx-headline">
              <span className="lx-hl-crafted"></span>
              <span className="lx-hl-name">
                Gudiya <span className="lx-hl-accent">Kumari</span>
              </span>
            </h1>

            <div className="lx-rule">
              <div className="lx-rule-line" />
              <div className="lx-rule-diamond" />
              <span className="lx-role-text">MERN Stack · CS Student · Problem Solver</span>
            </div>

            <p className="lx-bio">
              A Computer Science student devoted to building elegant,
              high‑performance web applications. Every line of code
              written with care, intention, and purpose.
            </p>

            <div className="lx-stats">
              <div className="lx-stat">
                <span className="lx-stat-val">200+</span>
                <span className="lx-stat-lbl">DSA Problems</span>
              </div>
              <div className="lx-stat">
                <span className="lx-stat-val">7.92</span>
                <span className="lx-stat-lbl">CGPA</span>
              </div>
              <div className="lx-stat">
                <span className="lx-stat-val">MERN</span>
                <span className="lx-stat-lbl">Stack</span>
              </div>
            </div>

            <div className="lx-cta-row">
              <a href="#projects" className="lx-btn-gold">View Work</a>
              <a href="#contact" className="lx-btn-ghost">Hire Me</a>
            </div>

            <div className="lx-socials">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  title={s.label}
                  className="lx-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lx-right">
            <div className="lx-bg-monogram">GK</div>

            <div className="lx-photo-wrap">
              <div className="lx-ring-spin" />
              <div className="lx-ring-static" />
              <div className="lx-photo-circle">
                <img src="/Gudiya.jpeg" alt="Gudiya Kumari" />
              </div>
            </div>

            <div className="lx-info-card">
              <div className="lx-info-row">
                <span className="lx-info-key">Specialization</span>
                <span className="lx-info-val">Full‑Stack Dev</span>
              </div>
              <div className="lx-info-row">
                <span className="lx-info-key">Stack</span>
                <span className="lx-info-val">MongoDB · Express · React · Node</span>
              </div>
              <div className="lx-info-row">
                <span className="lx-info-key">Status</span>
                <span className="lx-info-val lx-info-val-gold">Open to Opportunities</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="lx-bottombar">
          <div className="lx-copyright">© 2025 Gudiya Kumari · All Rights Reserved</div>
          <div className="lx-scroll-cue">
            Scroll
            <div className="lx-scroll-box">↓</div>
          </div>
        </div>
      </div>
    </>
  );
}