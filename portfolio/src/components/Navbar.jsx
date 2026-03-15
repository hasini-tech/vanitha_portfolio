import { useState, useEffect } from "react";

const navLinks = ["Home","About","Skills","Experience","Projects","Certifications","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .nb{position:fixed;top:0;left:0;right:0;z-index:1000;height:64px;padding:0 40px;display:flex;align-items:center;justify-content:space-between;transition:all .3s;}
        .nb.sc{background:rgba(13,27,62,.96);backdrop-filter:blur(16px);box-shadow:0 2px 24px rgba(0,0,0,.25);}
        .nb-logo{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#fff;cursor:pointer;}
        .nb-logo span{color:#c9a84c;}
        .nb-links{display:flex;gap:28px;list-style:none;}
        .nb-links li{font-size:13px;font-weight:500;color:rgba(255,255,255,.75);cursor:pointer;letter-spacing:.5px;transition:color .2s;position:relative;}
        .nb-links li::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1.5px;background:#c9a84c;transform:scaleX(0);transition:transform .25s;}
        .nb-links li:hover{color:#fff;}
        .nb-links li:hover::after{transform:scaleX(1);}
        .hb{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;}
        .hb span{width:24px;height:2px;background:#fff;border-radius:2px;}
        .mob{position:fixed;top:64px;left:0;right:0;background:rgba(13,27,62,.97);backdrop-filter:blur(20px);padding:20px 0 28px;display:flex;flex-direction:column;gap:4px;transition:transform .35s;border-bottom:1px solid rgba(201,168,76,.2);z-index:999;}
        .mob li{list-style:none;font-size:15px;color:rgba(255,255,255,.8);cursor:pointer;padding:12px 40px;transition:background .2s,color .2s;}
        .mob li:hover{background:rgba(255,255,255,.05);color:#fff;}
        @media(max-width:768px){.nb-links{display:none;}.hb{display:flex;}.nb{padding:0 24px;}}
      `}</style>

      <nav className={`nb${scrolled ? " sc" : ""}`}>
        <div className="nb-logo" onClick={() => go("home")}>V<span>S</span></div>
        <ul className="nb-links">
          {navLinks.map(l => <li key={l} onClick={() => go(l)}>{l}</li>)}
        </ul>
        <div className="hb" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </div>
      </nav>

      <ul className="mob" style={{ transform: open ? "translateY(0)" : "translateY(-110%)" }}>
        {navLinks.map(l => <li key={l} onClick={() => go(l)}>{l}</li>)}
      </ul>
    </>
  );
}