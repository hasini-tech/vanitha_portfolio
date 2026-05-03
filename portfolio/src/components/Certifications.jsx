const certsData = [
  {
    name: "Facebook Marketing and Advertising",
    issuer: "Simplilearn SkillUp",
    image: "/images/image3.png",
    color: "#1d62b7",
    desc: "Completed training in Facebook campaign strategy, advertising basics, and audience engagement.",
  },
  {
    name: "YouTube and Video Marketing",
    issuer: "Simplilearn SkillUp",
    image: "/images/image4.png",
    color: "#e09f16",
    desc: "Completed training in video marketing, content planning, and YouTube audience growth.",
  },
  {
    name: "Google My Business",
    issuer: "Google",
    image: "/images/image5.png",
    color: "#c9a84c",
    desc: "Knowledge of creating and managing Google Business listings for stronger local visibility.",
  },
  {
    name: "Fundamentals of Digital Marketing",
    issuer: "Google",
    image: "/images/image6.png",
    color: "#4a90d9",
    desc: "Core knowledge in SEO, SEM, social media, content marketing, and analytics.",
  },
];

export default function Certifications() {
  return (
    <>
      <style>{`
        .cr{background:#f4f7fb;padding:44px 32px 56px;font-family:'DM Sans',sans-serif;}
        .cr-in{max-width:1280px;margin:0 auto;}
        .cr-hd{text-align:center;margin-bottom:34px;}
        .cr-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .cr-ttl{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,48px);font-weight:900;color:#0d1b3e;}
        .cr-ttl span{color:#4a90d9;}
        .cr-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;max-width:1220px;margin:0 auto;align-items:stretch;}
        .cr-card{background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e8eef6;box-shadow:0 2px 12px rgba(0,0,0,.04);transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;min-height:420px;}
        .cr-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(13,27,62,.1);}
        .cr-card:focus-within{box-shadow:0 12px 40px rgba(13,27,62,.1);}
        .cr-img-wrap{background:#eef4fb;border-bottom:1px solid #e8eef6;aspect-ratio:16/12;min-height:240px;display:flex;align-items:center;justify-content:center;padding:10px;}
        .cr-img{width:100%;height:100%;object-fit:contain;border-radius:8px;background:#fff;box-shadow:0 8px 24px rgba(13,27,62,.08);}
        .cr-body{padding:20px 16px 24px;flex:1;}
        .cr-badge{display:inline-block;font-size:9px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;padding:3px 9px;border-radius:100px;margin-bottom:8px;}
        .cr-nm{font-size:14px;font-weight:700;color:#0d1b3e;margin-bottom:6px;line-height:1.35;}
        .cr-desc{font-size:11px;line-height:1.6;color:#7a8fa6;}
        @media(max-width:1100px){.cr-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px;gap:22px;}.cr-card{min-height:390px;}.cr-img-wrap{aspect-ratio:16/9;min-height:auto;padding:12px;}.cr-body{padding:18px 22px 20px;}.cr-nm{font-size:15px;}.cr-desc{font-size:12px;line-height:1.65;}}
        @media(max-width:768px){.cr{padding:70px 0;min-height:auto;}.cr-in{max-width:100%;}.cr-hd{margin-bottom:44px;padding:0 24px;}.cr-grid{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:24px;max-width:none;padding:0 24px 18px;-webkit-overflow-scrolling:touch;}.cr-grid::-webkit-scrollbar{height:4px;}.cr-grid::-webkit-scrollbar-track{background:#dfe8f4;border-radius:100px;margin:0 24px;}.cr-grid::-webkit-scrollbar-thumb{background:#c9a84c;border-radius:100px;}.cr-card{flex:0 0 min(84vw,430px);min-height:0;scroll-snap-align:start;}}
        @media(max-width:480px){.cr{padding:58px 0;}.cr-hd{margin-bottom:36px;padding:0 16px;}.cr-grid{gap:14px;scroll-padding:16px;padding:0 16px 18px;}.cr-grid::-webkit-scrollbar-track{margin:0 16px;}.cr-card{flex-basis:calc(100vw - 46px);border-radius:10px;}.cr-body{padding:20px 18px 22px;}.cr-img-wrap{padding:9px;aspect-ratio:4/3;}.cr-img{border-radius:6px;}.cr-badge{font-size:8px;letter-spacing:1.2px;}.cr-nm{font-size:14px;line-height:1.35;}.cr-desc{font-size:12px;line-height:1.65;}}
      `}</style>

      <section className="cr" id="certifications">
        <div className="cr-in">
          <div className="cr-hd">
            <div className="cr-lbl">Credentials</div>
            <h2 className="cr-ttl">My <span>Certifications</span></h2>
          </div>

          <div className="cr-grid">
            {certsData.map((cert) => (
              <div className="cr-card" key={cert.name}>
                <div className="cr-img-wrap">
                  <img
                    className="cr-img"
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                  />
                </div>

                <div className="cr-body">
                  <div
                    className="cr-badge"
                    style={{
                      background: `${cert.color}18`,
                      color: cert.color,
                      border: `1px solid ${cert.color}44`,
                    }}
                  >
                    {cert.issuer}
                  </div>
                  <div className="cr-nm">{cert.name}</div>
                  <p className="cr-desc">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
