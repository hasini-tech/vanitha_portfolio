const skillsData = [
  { name:"Social Media Marketing", level:90, icon:"📱" },
  { name:"SEO (On-page basics)",   level:75, icon:"🔍" },
  { name:"Google Analytics (GA4)", level:85, icon:"📊" },
  { name:"Google Tag Manager",     level:80, icon:"🏷️" },
  { name:"Meta Ads Campaign Setup",level:82, icon:"🎯" },
  { name:"Shopify Product Management",level:78,icon:"🛍️" },
];

const badges = ["GA4 Tracking","GTM Setup","Meta Pixel","Shopify","Meta Ads","SEO Basics","Content Creation","Brand Visibility"];

export default function Skills() {
  return (
    <>
      <style>{`
        .sk{background:#0d1b3e;padding:100px 40px;position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;}
        .sk::before{content:'';position:absolute;top:-120px;right:-120px;width:500px;height:500px;background:radial-gradient(circle,rgba(74,144,217,.1) 0%,transparent 70%);pointer-events:none;}
        .sk-in{max-width:1100px;margin:0 auto;position:relative;z-index:1;}
        .sk-hd{text-align:center;margin-bottom:64px;}
        .sk-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .sk-ttl{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,48px);font-weight:900;color:#fff;}
        .sk-ttl span{color:#4a90d9;}
        .sk-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:52px;}
        .sk-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:22px 26px;transition:border-color .25s,background .25s;}
        .sk-card:hover{border-color:rgba(201,168,76,.4);background:rgba(255,255,255,.07);}
        .sk-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;}
        .sk-nw{display:flex;align-items:center;gap:10px;}
        .sk-ico{font-size:18px;}
        .sk-nm{font-size:14px;font-weight:500;color:#fff;}
        .sk-pct{font-size:13px;font-weight:600;color:#c9a84c;}
        .sk-bg{height:5px;background:rgba(255,255,255,.08);border-radius:100px;overflow:hidden;}
        .sk-fill{height:100%;border-radius:100px;background:linear-gradient(90deg,#4a90d9,#c9a84c);}
        .sk-bt{text-align:center;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:18px;}
        .sk-badges{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
        .sk-b{background:rgba(74,144,217,.12);border:1px solid rgba(74,144,217,.3);color:rgba(255,255,255,.75);font-size:12px;font-weight:500;padding:7px 18px;border-radius:100px;letter-spacing:.5px;transition:all .2s;cursor:default;}
        .sk-b:hover{background:rgba(74,144,217,.25);border-color:#4a90d9;color:#fff;}
        @media(max-width:768px){.sk{padding:70px 0;}.sk-in{max-width:100%;}.sk-hd{margin-bottom:44px;padding:0 24px;}.sk-grid{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:24px;padding:0 24px 18px;margin-bottom:42px;-webkit-overflow-scrolling:touch;}.sk-grid::-webkit-scrollbar{height:4px;}.sk-grid::-webkit-scrollbar-track{background:rgba(255,255,255,.08);border-radius:100px;margin:0 24px;}.sk-grid::-webkit-scrollbar-thumb{background:#c9a84c;border-radius:100px;}.sk-card{flex:0 0 min(82vw,420px);scroll-snap-align:start;}.sk-bt,.sk-badges{margin-left:24px;margin-right:24px;}}
        @media(max-width:480px){.sk{padding:60px 0;}.sk-hd{padding:0 16px;}.sk-grid{gap:14px;scroll-padding:16px;padding:0 16px 18px;}.sk-grid::-webkit-scrollbar-track{margin:0 16px;}.sk-card{flex-basis:86vw;padding:20px 18px;}.sk-top{align-items:flex-start;gap:14px;}.sk-nw{align-items:flex-start;}.sk-nm{line-height:1.4;}.sk-bt,.sk-badges{margin-left:16px;margin-right:16px;}.sk-badges{justify-content:flex-start;}.sk-b{font-size:11px;padding:7px 12px;}}
      `}</style>

      <section className="sk" id="skills">
        <div className="sk-in">
          <div className="sk-hd">
            <div className="sk-lbl">What I Do</div>
            <h2 className="sk-ttl">Digital Marketing <span>Skills</span></h2>
          </div>
          <div className="sk-grid">
            {skillsData.map(s => (
              <div className="sk-card" key={s.name}>
                <div className="sk-top">
                  <div className="sk-nw">
                    <span className="sk-ico">{s.icon}</span>
                    <span className="sk-nm">{s.name}</span>
                  </div>
                  <span className="sk-pct">{s.level}%</span>
                </div>
                <div className="sk-bg">
                  <div className="sk-fill" style={{width:`${s.level}%`}} />
                </div>
              </div>
            ))}
          </div>
          <div className="sk-bt">Tools &amp; Technologies</div>
          <div className="sk-badges">
            {badges.map(b => <div className="sk-b" key={b}>{b}</div>)}
          </div>
        </div>
      </section>
    </>
  );
}
