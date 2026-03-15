const certsData = [
  { name:"Google Analytics Certification", issuer:"Google", icon:"📊", color:"#4a90d9", desc:"Proficiency in GA4 measurement, reporting, and data-driven decision making." },
  { name:"Digital Marketing Fundamentals", issuer:"Industry Standard", icon:"🎓", color:"#c9a84c", desc:"Core knowledge in SEO, SEM, social media, content marketing, and analytics." },
];

export default function Certifications() {
  return (
    <>
      <style>{`
        .cr{background:#f4f7fb;padding:100px 40px;font-family:'DM Sans',sans-serif;}
        .cr-in{max-width:1100px;margin:0 auto;}
        .cr-hd{text-align:center;margin-bottom:56px;}
        .cr-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .cr-ttl{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,48px);font-weight:900;color:#0d1b3e;}
        .cr-ttl span{color:#4a90d9;}
        .cr-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:740px;margin:0 auto;}
        .cr-card{background:#fff;border-radius:14px;padding:32px 28px;border:1px solid #e8eef6;box-shadow:0 2px 12px rgba(0,0,0,.04);transition:transform .25s,box-shadow .25s;}
        .cr-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(13,27,62,.1);}
        .cr-ico{font-size:32px;margin-bottom:16px;}
        .cr-badge{display:inline-block;font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:3px 10px;border-radius:100px;margin-bottom:10px;}
        .cr-nm{font-size:16px;font-weight:700;color:#0d1b3e;margin-bottom:8px;}
        .cr-desc{font-size:13px;line-height:1.7;color:#7a8fa6;}
        @media(max-width:768px){.cr{padding:70px 24px;}.cr-grid{grid-template-columns:1fr;}}
      `}</style>
      <section className="cr" id="certifications">
        <div className="cr-in">
          <div className="cr-hd">
            <div className="cr-lbl">Credentials</div>
            <h2 className="cr-ttl">My <span>Certifications</span></h2>
          </div>
          <div className="cr-grid">
            {certsData.map(c => (
              <div className="cr-card" key={c.name}>
                <div className="cr-ico">{c.icon}</div>
                <div className="cr-badge" style={{background:`${c.color}18`,color:c.color,border:`1px solid ${c.color}44`}}>{c.issuer}</div>
                <div className="cr-nm">{c.name}</div>
                <p className="cr-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}