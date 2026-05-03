import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .nb {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          background: transparent;
          transition: background .25s ease, box-shadow .25s ease;
        }

        .nb.sc,
        .nb.open {
          background: rgba(13, 27, 62, .96);
          backdrop-filter: blur(16px);
          box-shadow: 0 2px 24px rgba(0, 0, 0, .22);
        }

        .nb-inner {
          width: min(100%, 1200px);
          height: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .nb-logo {
          flex: 0 0 auto;
          border: 0;
          background: transparent;
          font-family: var(--font-display, 'Playfair Display', serif);
          font-size: 23px;
          font-weight: 900;
          line-height: 1;
          color: #fff;
          cursor: pointer;
        }

        .nb-logo span { color: var(--gold, #c9a84c); }

        .nb-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(16px, 2vw, 28px);
          list-style: none;
          margin: 0;
          padding: 0;
          min-width: 0;
        }

        .nb-link {
          border: 0;
          background: transparent;
          padding: 8px 0;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          color: rgba(255, 255, 255, .78);
          cursor: pointer;
          letter-spacing: .4px;
          transition: color .2s ease;
          position: relative;
          white-space: nowrap;
        }

        .nb-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: var(--gold, #c9a84c);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform .22s ease;
        }

        .nb-link:hover,
        .nb-link:focus-visible { color: #fff; }

        .nb-link:hover::after,
        .nb-link:focus-visible::after { transform: scaleX(1); }

        .hb {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, .16);
          border-radius: 6px;
          background: rgba(255, 255, 255, .04);
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          flex: 0 0 auto;
        }

        .hb span {
          width: 20px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform .2s ease, opacity .2s ease;
        }

        .hb.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hb.active span:nth-child(2) { opacity: 0; }
        .hb.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mob {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 999;
          list-style: none;
          margin: 0;
          padding: 10px 0 18px;
          display: flex;
          flex-direction: column;
          background: rgba(13, 27, 62, .98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201, 168, 76, .2);
          box-shadow: 0 18px 30px rgba(0, 0, 0, .2);
          transform: translateY(-120%);
          transition: transform .28s ease;
        }

        .mob.open { transform: translateY(0); }

        .mob button {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 14px 40px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 15px;
          color: rgba(255, 255, 255, .84);
          text-align: left;
          cursor: pointer;
          transition: background .2s ease, color .2s ease;
        }

        .mob button:hover,
        .mob button:focus-visible {
          background: rgba(255, 255, 255, .06);
          color: #fff;
        }

        @media (max-width: 980px) {
          .nb-inner { padding: 0 28px; }
          .nb-links { gap: 14px; }
          .nb-link { font-size: 12px; }
        }

        @media (max-width: 768px) {
          .nb { height: 64px; }
          .nb-inner { padding: 0 24px; }
          .nb-links { display: none; }
          .hb { display: flex; }
          .mob { top: 64px; }
          .mob button { padding: 14px 24px; }
        }

        @media (max-width: 480px) {
          .nb-inner { padding: 0 16px; }
          .nb-logo { font-size: 21px; }
          .mob button { padding: 13px 16px; }
        }

        @media (max-width: 360px) {
          .nb-inner { padding: 0 12px; }
          .hb { width: 38px; height: 38px; }
        }
      `}</style>

      <nav className={`nb${scrolled ? " sc" : ""}${open ? " open" : ""}`}>
        <div className="nb-inner">
          <button className="nb-logo" type="button" onClick={() => go("home")}>
            V<span>S</span>
          </button>

          <ul className="nb-links">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  className="nb-link"
                  type="button"
                  onClick={() => go(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={`hb${open ? " active" : ""}`}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <ul className={`mob${open ? " open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link}>
            <button type="button" onClick={() => go(link)}>
              {link}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
