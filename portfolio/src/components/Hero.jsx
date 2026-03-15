import { useEffect, useRef } from "react";

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / r.height) * -14;
      const ry = ((x - r.width / 2) / r.width) * 14;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04,1.04,1.04)`;
    };
    const onLeave = () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes hfadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes hspin   { to { transform:rotate(360deg); } }
        @keyframes hfloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes hshimmer{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes hpulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
        @keyframes hscroll { 0%{opacity:1;transform:scaleY(1) translateY(0)} 100%{opacity:0;transform:scaleY(.3) translateY(20px)} }

        /* ── Section ── */
        .hero-sec {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #060e1e 0%, #0d1b3e 45%, #1a3a6b 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-top: 70px;        /* ← clears fixed navbar */
        }

        /* background orbs */
        .h-orb1 {
          position: absolute; pointer-events:none;
          width:650px; height:650px; border-radius:50%;
          background:radial-gradient(circle,rgba(74,144,217,.14) 0%,transparent 70%);
          top:-120px; right:-120px;
        }
        .h-orb2 {
          position: absolute; pointer-events:none;
          width:420px; height:420px; border-radius:50%;
          background:radial-gradient(circle,rgba(201,168,76,.07) 0%,transparent 70%);
          bottom:-80px; left:-80px;
        }

        /* spinning ring */
        .h-ring {
          position:absolute; pointer-events:none;
          right:4%; top:50%; transform:translateY(-50%);
          width:540px; height:540px;
          border:1px solid rgba(74,144,217,.13);
          border-radius:50%;
          animation:hspin 28s linear infinite;
        }
        .h-ring::after {
          content:''; position:absolute; inset:55px;
          border:1px dashed rgba(201,168,76,.10);
          border-radius:50%;
        }

        /* ── Main Grid ── */
        .h-grid {
          position:relative; z-index:2;
          max-width:1200px; width:100%;
          margin:0 auto;
          padding:80px 60px 100px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
          align-items:center;
        }

        /* ── LEFT ── */
        .h-left { display:flex; flex-direction:column; align-items:flex-start; }

        .h-tag {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(201,168,76,.12);
          border:1px solid rgba(201,168,76,.38);
          color:#c9a84c;
          font-family:'DM Sans',sans-serif;
          font-size:10.5px; font-weight:600;
          letter-spacing:3px; text-transform:uppercase;
          padding:8px 20px; border-radius:3px;
          margin-bottom:30px;
          animation:hfadeUp .8s ease both;
        }
        .h-tag::before {
          content:''; width:6px; height:6px; border-radius:50%;
          background:#c9a84c; animation:hpulse 2s ease infinite;
        }

        .h-name {
          font-family:'Playfair Display',serif;
          font-size:clamp(52px,6vw,90px);
          font-weight:900; line-height:1.0;
          color:#fff; margin-bottom:18px;
          animation:hfadeUp .8s .12s ease both;
        }
        .h-name .gold {
          display:block;
          background:linear-gradient(135deg,#c9a84c 0%,#f0d080 50%,#c9a84c 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:hfadeUp .8s .12s ease both, hshimmer 3s linear infinite;
        }

        .h-sub {
          font-family:'DM Sans',sans-serif;
          font-size:14.5px; font-weight:300;
          color:rgba(255,255,255,.5); letter-spacing:1.5px;
          margin-bottom:20px;
          animation:hfadeUp .8s .24s ease both;
        }

        .h-line {
          width:48px; height:2px;
          background:linear-gradient(90deg,#c9a84c,transparent);
          margin-bottom:22px;
          animation:hfadeUp .8s .3s ease both;
        }

        .h-bio {
          font-family:'DM Sans',sans-serif;
          font-size:15px; line-height:1.9;
          color:rgba(255,255,255,.62); max-width:460px;
          animation:hfadeUp .8s .36s ease both;
        }

        /* stats */
        .h-stats {
          display:flex; gap:40px;
          margin-top:42px;
          animation:hfadeUp .8s .5s ease both;
        }
        .h-stat { position:relative; }
        .h-stat:not(:last-child)::after {
          content:''; position:absolute;
          right:-20px; top:6px;
          width:1px; height:32px;
          background:rgba(255,255,255,.1);
        }
        .h-sn {
          font-family:'Playfair Display',serif;
          font-size:32px; font-weight:900;
          color:#c9a84c; line-height:1;
        }
        .h-sl {
          font-family:'DM Sans',sans-serif;
          font-size:10px; color:rgba(255,255,255,.38);
          letter-spacing:2px; text-transform:uppercase;
          margin-top:5px;
        }

        /* CTA */
        .h-cta {
          display:flex; gap:16px; flex-wrap:wrap;
          margin-top:42px;
          animation:hfadeUp .8s .64s ease both;
        }
        .h-b1 {
          background:linear-gradient(135deg,#c9a84c,#d4b55a);
          color:#0d1b3e; font-family:'DM Sans',sans-serif;
          font-weight:700; font-size:13px;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:15px 36px; border:none; border-radius:3px;
          cursor:pointer;
          box-shadow:0 4px 20px rgba(201,168,76,.28);
          transition:transform .2s, box-shadow .2s;
        }
        .h-b1:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(201,168,76,.45); }

        .h-b2 {
          background:transparent; color:#fff;
          font-family:'DM Sans',sans-serif;
          font-weight:500; font-size:13px;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:15px 36px;
          border:1px solid rgba(255,255,255,.22);
          border-radius:3px; cursor:pointer;
          transition:all .25s;
        }
        .h-b2:hover {
          background:rgba(255,255,255,.06);
          border-color:rgba(255,255,255,.5);
          transform:translateY(-3px);
        }

        /* ── RIGHT — 3D card ── */
        .h-right {
          display:flex; justify-content:center; align-items:center;
          animation:hfadeUp .9s .28s ease both;
        }

        .h-card-wrap {
          position:relative; width:310px;
          animation:hfloat 5.5s ease-in-out infinite;
        }
        .h-card-wrap::after {
          content:''; position:absolute;
          bottom:-28px; left:50%; transform:translateX(-50%);
          width:65%; height:18px;
          background:rgba(74,144,217,.18);
          border-radius:50%; filter:blur(10px);
        }

        /* corner brackets */
        .h-cor {
          position:absolute;
          width:22px; height:22px;
          border-color:rgba(201,168,76,.45);
          border-style:solid;
        }
        .h-cor.tl { top:-7px; left:-7px; border-width:2px 0 0 2px; border-radius:4px 0 0 0; }
        .h-cor.tr { top:-7px; right:-7px; border-width:2px 2px 0 0; border-radius:0 4px 0 0; }
        .h-cor.bl { bottom:-7px; left:-7px; border-width:0 0 2px 2px; border-radius:0 0 0 4px; }
        .h-cor.br { bottom:-7px; right:-7px; border-width:0 2px 2px 0; border-radius:0 0 4px 0; }

        .h-card-3d {
          width:100%; border-radius:18px; overflow:hidden;
          border:1px solid rgba(255,255,255,.13);
          box-shadow:
            0 28px 64px rgba(0,0,0,.55),
            0 0 0 1px rgba(255,255,255,.04),
            inset 0 1px 0 rgba(255,255,255,.09);
          transition:transform .14s ease;
          transform-style:preserve-3d;
          cursor:pointer;
          background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
          position:relative;
        }
        .h-card-3d::before {
          content:''; position:absolute;
          top:0; left:0; right:0; height:48%;
          background:linear-gradient(180deg,rgba(255,255,255,.06) 0%,transparent 100%);
          border-radius:18px 18px 0 0; z-index:2; pointer-events:none;
        }
        .h-card-3d img {
          width:100%; height:400px;
          object-fit:cover; object-position:top center;
          display:block;
        }

        .h-badge {
          position:absolute;
          bottom:-18px; left:50%; transform:translateX(-50%);
          background:linear-gradient(135deg,#c9a84c,#d4b55a);
          color:#0d1b3e;
          font-family:'DM Sans',sans-serif;
          font-size:10px; font-weight:800;
          letter-spacing:2.5px; text-transform:uppercase;
          padding:10px 24px; border-radius:3px;
          white-space:nowrap;
          box-shadow:0 6px 24px rgba(201,168,76,.38);
          z-index:3;
        }

        /* scroll hint */
        .h-scroll {
          position:absolute; bottom:32px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:8px;
          cursor:pointer; z-index:3;
        }
        .h-scroll-t {
          font-family:'DM Sans',sans-serif;
          font-size:10px; letter-spacing:2.5px; text-transform:uppercase;
          color:rgba(255,255,255,.28);
        }
        .h-scroll-l {
          width:1px; height:40px;
          background:linear-gradient(180deg,rgba(201,168,76,.55),transparent);
          animation:hscroll 1.8s ease infinite;
        }

        /* ── Responsive ── */
        @media(max-width:960px) {
          .h-grid {
            grid-template-columns:1fr;
            padding:60px 40px 90px;
            gap:52px;
            text-align:center;
          }
          .h-left  { align-items:center; }
          .h-bio   { text-align:center; max-width:100%; }
          .h-stats { justify-content:center; }
          .h-cta   { justify-content:center; }
          .h-right { order:-1; }
          .h-card-wrap { width:240px; }
          .h-card-3d img { height:300px; }
        }
        @media(max-width:480px) {
          .hero-sec  { padding-top:60px; }
          .h-grid    { padding:48px 20px 80px; }
          .h-name    { font-size:clamp(44px,11vw,64px); }
          .h-stats   { gap:24px; }
          .h-card-wrap { width:200px; }
          .h-card-3d img { height:250px; }
        }
      `}</style>

      <section className="hero-sec" id="home">
        <div className="h-orb1" />
        <div className="h-orb2" />
        <div className="h-ring" />

        <div className="h-grid">

          {/* ── LEFT ── */}
          <div className="h-left">
            <div className="h-tag">Digital Marketing Professional</div>

            <h1 className="h-name">
              Vanitha.S 
            </h1>

            <p className="h-sub">BA Economics, 3rd Year &nbsp;·&nbsp; Digital Marketing Assistant</p>

            <div className="h-line" />

            <p className="h-bio">
              Motivated and detail-oriented student with hands-on experience
              in Digital Marketing. Skilled in social media marketing,
              analytics, and ecommerce growth.
            </p>

            <div className="h-stats">
              {[["2+","Years Exp."],["87.5%","HSC Score"],["2","Certs"]].map(([n,l]) => (
                <div className="h-stat" key={l}>
                  <div className="h-sn">{n}</div>
                  <div className="h-sl">{l}</div>
                </div>
              ))}
            </div>

            <div className="h-cta">
              <button className="h-b1" onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
                Hire Me
              </button>
              <button className="h-b2" onClick={() => document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}>
                View Projects
              </button>
            </div>
          </div>

          {/* ── RIGHT — 3D Card ── */}
          <div className="h-right">
            <div className="h-card-wrap">
              <div className="h-cor tl" />
              <div className="h-cor tr" />
              <div className="h-cor bl" />
              <div className="h-cor br" />

              <div className="h-card-3d" ref={cardRef}>
                {/* 👇 Replace with your real photo: src="/vanitha.jpg" */}
                <img
                  src="https://via.placeholder.com/310x400/1a3a6b/c9a84c?text=Vanitha+S"
                  alt="Vanitha S"
                />
              </div>

              <div className="h-badge">✦ Available for Work</div>
            </div>
          </div>

        </div>

        {/* scroll indicator */}
        <div className="h-scroll" onClick={() => document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}>
          <span className="h-scroll-t">Scroll</span>
          <div className="h-scroll-l" />
        </div>
      </section>
    </>
  );
}