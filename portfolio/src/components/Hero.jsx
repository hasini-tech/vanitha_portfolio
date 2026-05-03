import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--px", px.toFixed(3));
      hero.style.setProperty("--py", py.toFixed(3));
      hero.style.setProperty("--sx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      hero.style.setProperty("--sy", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };

    const onLeave = () => {
      hero.style.setProperty("--px", "0");
      hero.style.setProperty("--py", "0");
      hero.style.setProperty("--sx", "72%");
      hero.style.setProperty("--sy", "42%");
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / r.height) * -12;
      const ry = ((x - r.width / 2) / r.width) * 12;
      card.style.setProperty("--mx", `${(x / r.width) * 100}%`);
      card.style.setProperty("--my", `${(y / r.height) * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(14px) scale3d(1.035,1.035,1.035)`;
    };
    const onLeave = () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0) scale3d(1,1,1)";
    };
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
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
        @keyframes hspin   { from { transform:translateY(-50%) rotate(0deg); } to { transform:translateY(-50%) rotate(360deg); } }
        @keyframes hfloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes hfloatSlow { 0%,100%{transform:translate3d(0,0,0) rotateX(60deg) rotateZ(-32deg)} 50%{transform:translate3d(0,-18px,0) rotateX(60deg) rotateZ(-32deg)} }
        @keyframes hglowMove { 0%,100%{opacity:.42;transform:translate3d(0,0,0)} 50%{opacity:.7;transform:translate3d(18px,-16px,20px)} }
        @keyframes hbeam { 0%,100%{opacity:.18;transform:translate3d(-12px,0,0) rotate(-18deg)} 50%{opacity:.34;transform:translate3d(16px,-10px,0) rotate(-18deg)} }
        @keyframes hshimmer{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes hpulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
        @keyframes hparticle { 0%{transform:translate3d(0,20px,0) scale(.75);opacity:0} 18%,78%{opacity:.75} 100%{transform:translate3d(34px,-90px,80px) scale(1.15);opacity:0} }
        @keyframes hscan { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        @keyframes hscroll { 0%{opacity:1;transform:scaleY(1) translateY(0)} 100%{opacity:0;transform:scaleY(.3) translateY(20px)} }

        /* ── Section ── */
        .hero-sec {
          --px: 0;
          --py: 0;
          --sx: 72%;
          --sy: 42%;
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

        .hero-sec::before {
          content:'';
          position:absolute;
          inset:0;
          z-index:1;
          pointer-events:none;
          background:
            radial-gradient(circle at var(--sx) var(--sy), rgba(201,168,76,.13), transparent 18%),
            radial-gradient(circle at var(--sx) var(--sy), rgba(74,144,217,.16), transparent 32%);
          opacity:.9;
        }

        .h-bg-3d {
          position:absolute;
          inset:0;
          z-index:1;
          pointer-events:none;
          perspective:900px;
          transform-style:preserve-3d;
          overflow:hidden;
        }

        .h-bg-3d::before {
          content:'';
          position:absolute;
          inset:-20%;
          background:
            radial-gradient(circle at 78% 42%, rgba(74,144,217,.28), transparent 26%),
            radial-gradient(circle at 84% 78%, rgba(201,168,76,.12), transparent 20%),
            radial-gradient(circle at 16% 28%, rgba(255,255,255,.045), transparent 18%);
          transform:translate3d(calc(var(--px) * -20px), calc(var(--py) * -16px), -80px);
        }

        .h-bg-3d::after {
          content:'';
          position:absolute;
          right:14%;
          top:-18%;
          width:240px;
          height:140%;
          background:linear-gradient(180deg, transparent, rgba(74,144,217,.22), transparent);
          filter:blur(18px);
          animation:hbeam 7s ease-in-out infinite;
          transform-origin:center;
        }

        .h-floor {
          position:absolute;
          left:72%;
          bottom:-170px;
          width:760px;
          height:440px;
          background:
            linear-gradient(rgba(74,144,217,.20) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,144,217,.20) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(74,144,217,.16), transparent 68%);
          background-size:42px 42px, 42px 42px, 100% 100%;
          border:1px solid rgba(74,144,217,.18);
          transform:translateX(-50%) rotateX(70deg) rotateZ(-10deg) translate3d(calc(var(--px) * 24px), calc(var(--py) * 8px), 0);
          transform-origin:center bottom;
          opacity:.36;
          mask-image:linear-gradient(to top, rgba(0,0,0,.9), transparent 82%);
        }

        .h-depth-panel {
          position:absolute;
          width:210px;
          height:130px;
          border:1px solid rgba(255,255,255,.11);
          background:
            linear-gradient(145deg,rgba(255,255,255,.10),rgba(255,255,255,.018)),
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size:100% 100%, 26px 26px, 26px 26px;
          box-shadow:0 24px 70px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.14);
          backdrop-filter:blur(6px);
          border-radius:10px;
        }

        .h-depth-panel.p1 {
          top:18%;
          right:19%;
          transform:translate3d(calc(var(--px) * -34px), calc(var(--py) * -22px), 70px) rotateX(62deg) rotateZ(-18deg);
          opacity:.22;
        }

        .h-depth-panel.p2 {
          right:1%;
          bottom:22%;
          width:320px;
          height:170px;
          transform:translate3d(calc(var(--px) * 44px), calc(var(--py) * 28px), 90px) rotateX(62deg) rotateZ(-8deg);
          opacity:.18;
        }

        .h-cube {
          position:absolute;
          width:92px;
          height:92px;
          right:12%;
          top:21%;
          transform-style:preserve-3d;
          transform:translate3d(calc(var(--px) * 50px), calc(var(--py) * 36px), 120px) rotateX(60deg) rotateZ(-32deg);
          animation:hfloatSlow 6.5s ease-in-out infinite;
          opacity:.22;
        }

        .h-cube::before,
        .h-cube::after {
          content:'';
          position:absolute;
          inset:0;
          border:1px solid rgba(201,168,76,.36);
          background:rgba(201,168,76,.05);
          box-shadow:0 18px 50px rgba(201,168,76,.08);
        }

        .h-cube::after {
          transform:translate3d(28px,-28px,-40px);
          border-color:rgba(74,144,217,.28);
          background:rgba(74,144,217,.06);
        }

        .h-glow-dot {
          position:absolute;
          width:10px;
          height:10px;
          border-radius:50%;
          background:#c9a84c;
          box-shadow:0 0 26px rgba(201,168,76,.75);
          right:34%;
          top:66%;
          transform:translate3d(calc(var(--px) * 70px), calc(var(--py) * 45px), 160px);
          animation:hglowMove 4.8s ease-in-out infinite;
        }

        .h-particles span {
          position:absolute;
          width:5px;
          height:5px;
          border-radius:50%;
          background:#c9a84c;
          box-shadow:0 0 18px rgba(201,168,76,.7);
          animation:hparticle 7s ease-in-out infinite;
        }

        .h-particles span:nth-child(1){right:36%;top:24%;animation-delay:.1s;}
        .h-particles span:nth-child(2){right:18%;top:40%;animation-delay:1.4s;background:#4a90d9;box-shadow:0 0 18px rgba(74,144,217,.7);}
        .h-particles span:nth-child(3){right:30%;top:74%;animation-delay:2.6s;}
        .h-particles span:nth-child(4){right:8%;top:68%;animation-delay:3.8s;background:#4a90d9;box-shadow:0 0 18px rgba(74,144,217,.7);}
        .h-particles span:nth-child(5){right:48%;top:58%;animation-delay:5s;}

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
          right:2%; top:54%; transform:translateY(-50%);
          width:560px; height:560px;
          border:1px solid rgba(74,144,217,.20);
          border-radius:50%;
          animation:hspin 28s linear infinite;
          opacity:.8;
        }
        .h-ring::before {
          content:''; position:absolute; inset:110px;
          border:1px solid rgba(201,168,76,.14);
          border-radius:50%;
          box-shadow:0 0 70px rgba(74,144,217,.08);
        }
        .h-ring::after {
          content:''; position:absolute; inset:55px;
          border:1px dashed rgba(201,168,76,.16);
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
        .h-left {
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          transform:translate3d(calc(var(--px) * -14px), calc(var(--py) * -10px), 0);
          transition:transform .18s ease;
        }

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
        .h-stat {
          position:relative;
          padding:10px 12px;
          margin:-10px -12px;
          border:1px solid transparent;
          border-radius:10px;
          transition:transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .h-stat:hover {
          background:rgba(255,255,255,.045);
          border-color:rgba(201,168,76,.22);
          box-shadow:0 12px 32px rgba(0,0,0,.18);
          transform:translateY(-5px);
        }
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
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#c9a84c,#d4b55a);
          color:#0d1b3e; font-family:'DM Sans',sans-serif;
          font-weight:700; font-size:13px;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:15px 36px; border:none; border-radius:3px;
          cursor:pointer;
          box-shadow:0 4px 20px rgba(201,168,76,.28);
          transition:transform .2s, box-shadow .2s;
        }
        .h-b1::before,
        .h-b2::before {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(110deg, transparent 0 35%, rgba(255,255,255,.35) 48%, transparent 62% 100%);
          transform:translateX(-120%);
        }
        .h-b1:hover::before,
        .h-b2:hover::before { animation:hscan .75s ease; }
        .h-b1:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(201,168,76,.45); }

        .h-b2 {
          position:relative;
          overflow:hidden;
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
          perspective:1000px;
          animation:hfloat 5.5s ease-in-out infinite;
        }
        .h-card-wrap::before {
          content:'';
          position:absolute;
          inset:34px -32px -26px 34px;
          border:1px solid rgba(74,144,217,.20);
          background:linear-gradient(145deg,rgba(74,144,217,.10),rgba(255,255,255,.02));
          border-radius:18px;
          transform:translateZ(-80px) rotateY(-10deg) rotateX(8deg);
          box-shadow:0 22px 70px rgba(0,0,0,.20);
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
          --mx:50%;
          --my:20%;
          width:100%; border-radius:18px; overflow:hidden;
          border:1px solid rgba(255,255,255,.13);
          box-shadow:
            0 28px 64px rgba(0,0,0,.55),
            0 0 0 1px rgba(255,255,255,.04),
            inset 0 1px 0 rgba(255,255,255,.09);
          transition:transform .16s ease, box-shadow .2s ease;
          transform-style:preserve-3d;
          cursor:pointer;
          background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
          position:relative;
        }
        .h-card-3d:hover {
          box-shadow:
            0 34px 82px rgba(0,0,0,.62),
            0 0 0 1px rgba(201,168,76,.20),
            0 0 70px rgba(74,144,217,.22),
            inset 0 1px 0 rgba(255,255,255,.12);
        }
        .h-card-3d::before {
          content:''; position:absolute;
          top:0; left:0; right:0; height:48%;
          background:linear-gradient(180deg,rgba(255,255,255,.06) 0%,transparent 100%);
          border-radius:18px 18px 0 0; z-index:2; pointer-events:none;
        }
        .h-card-3d::after {
          content:''; position:absolute; inset:0;
          background:radial-gradient(circle at var(--mx) var(--my),rgba(255,255,255,.28),transparent 28%);
          mix-blend-mode:screen;
          opacity:.55;
          z-index:3;
          pointer-events:none;
        }
        .h-card-3d img {
          width:100%; height:400px;
          object-fit:cover; object-position:top center;
          display:block;
          transform:translateZ(24px) scale(1.02);
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
          .hero-sec { min-height:auto; }
          .h-floor { left:50%; width:720px; height:420px; bottom:-190px; opacity:.18; }
          .h-depth-panel { display:none; }
          .h-cube { right:6%; top:10%; opacity:.14; }
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
          .h-sub { line-height:1.7; }
          .h-card-wrap { width:min(280px,70vw); }
          .h-card-wrap::before { inset:28px -22px -20px 28px; }
          .h-card-3d img { height:340px; }
        }
        @media(max-width:480px) {
          .hero-sec  { padding-top:60px; }
          .h-floor { width:520px; height:320px; bottom:-160px; background-size:34px 34px; opacity:.14; }
          .h-cube,.h-glow-dot,.h-bg-3d::after,.h-particles { display:none; }
          .h-grid    { padding:42px 16px 76px; gap:40px; }
          .h-left    { transform:none; }
          .h-tag     { font-size:9px; letter-spacing:2px; padding:8px 12px; margin-bottom:24px; }
          .h-name    { font-size:clamp(44px,11vw,64px); }
          .h-sub     { font-size:13px; letter-spacing:.8px; }
          .h-bio     { font-size:14px; line-height:1.8; }
          .h-stats   { width:100%; gap:0; justify-content:space-between; }
          .h-stat    { flex:1; }
          .h-stat:hover { transform:none; box-shadow:none; }
          .h-stat:not(:last-child)::after { right:0; }
          .h-sn      { font-size:26px; }
          .h-sl      { font-size:9px; letter-spacing:1.2px; }
          .h-cta     { width:100%; gap:12px; }
          .h-b1,.h-b2{ width:100%; padding:14px 18px; }
          .h-card-wrap { width:min(235px,72vw); animation:none; }
          .h-card-wrap::before { inset:20px -16px -16px 20px; }
          .h-card-3d { cursor:default; }
          .h-card-3d img { height:295px; transform:none; }
          .h-badge   { font-size:9px; letter-spacing:1.8px; padding:9px 16px; }
          .h-ring    { width:340px; height:340px; right:-120px; opacity:.7; }
          .h-scroll  { bottom:20px; }
        }
      `}</style>

      <section className="hero-sec" id="home" ref={heroRef}>
        <div className="h-bg-3d">
          <div className="h-floor" />
          <div className="h-depth-panel p1" />
          <div className="h-depth-panel p2" />
          <div className="h-cube" />
          <div className="h-glow-dot" />
          <div className="h-particles">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="h-orb1" />
        <div className="h-orb2" />
        <div className="h-ring" />

        <div className="h-grid">

          {/* ── LEFT ── */}
          <div className="h-left">
            <h1 className="h-name">
              Vanitha.S 
            </h1>

            <p className="h-sub">BA Economics  &nbsp;&nbsp; Digital Marketing Assistant</p>

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
                <img
                  src="/images/vanitha.png"
                  alt="Vanitha S"
                />
              </div>
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
