const edu = [
  { degree:"Bachelor of Arts in Economics", inst:"Kunthalavai Naachiyar Arts College for Women, Thanjavur", period:"2023 – 2026", icon:"🎓" },
  { degree:"Higher Secondary (12th)", inst:"State Board", score:"87.5%", period:"2023", icon:"📚" },
];

const highlights = [
  "Assisted in creating social media content and managing online campaigns.",
  "Analyzed marketing trends to improve online engagement.",
  "Supported product promotions and brand visibility.",
];

export default function EducationExperience() {
  return (
    <>
      <style>{`
        .ee{background:#f4f7fb;padding:100px 40px;font-family:'DM Sans',sans-serif;}
        .ee-in{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;}
        .ee-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .ee-ttl{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,36px);font-weight:900;color:#0d1b3e;line-height:1.2;margin-bottom:40px;}
        .ee-ttl span{color:#4a90d9;}
        .tl{position:relative;padding-left:28px;}
        .tl::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#4a90d9,#c9a84c);border-radius:2px;}
        .tl-item{position:relative;margin-bottom:32px;}
        .tl-item:last-child{margin-bottom:0;}
        .tl-dot{position:absolute;left:-28px;top:6px;width:16px;height:16px;border-radius:50%;background:#4a90d9;border:3px solid #f4f7fb;box-shadow:0 0 0 2px #4a90d9;}
        .tl-card{background:#fff;border-radius:12px;padding:22px 24px;border:1px solid #e8eef6;box-shadow:0 2px 12px rgba(0,0,0,.04);transition:box-shadow .25s,transform .25s;}
        .tl-card:hover{box-shadow:0 8px 32px rgba(26,58,107,.1);transform:translateY(-2px);}
        .tl-ico{font-size:20px;margin-bottom:8px;}
        .tl-deg{font-size:15px;font-weight:700;color:#0d1b3e;margin-bottom:4px;}
        .tl-inst{font-size:13px;color:#4a90d9;font-weight:500;margin-bottom:8px;}
        .tl-meta{display:flex;gap:12px;flex-wrap:wrap;align-items:center;}
        .tl-per{font-size:12px;color:#7a8fa6;}
        .tl-sc{font-size:12px;font-weight:600;background:rgba(201,168,76,.12);color:#a07828;padding:2px 10px;border-radius:100px;}
        .exp-card{background:linear-gradient(135deg,#0d1b3e 0%,#1a3a6b 100%);border-radius:14px;padding:28px;color:#fff;border:1px solid rgba(255,255,255,.08);box-shadow:0 8px 32px rgba(13,27,62,.2);}
        .exp-type{display:inline-block;background:rgba(201,168,76,.2);border:1px solid rgba(201,168,76,.4);color:#c9a84c;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:100px;margin-bottom:14px;}
        .exp-role{font-size:17px;font-weight:700;color:#fff;margin-bottom:4px;}
        .exp-co{font-size:13px;color:#4a90d9;font-weight:500;margin-bottom:10px;}
        .exp-per{font-size:12px;color:rgba(255,255,255,.45);margin-bottom:20px;display:flex;align-items:center;gap:6px;}
        .exp-per::before{content:'';width:20px;height:1px;background:rgba(255,255,255,.25);}
        .exp-list{list-style:none;display:flex;flex-direction:column;gap:10px;}
        .exp-li{display:flex;gap:10px;font-size:13.5px;line-height:1.65;color:rgba(255,255,255,.75);}
        .exp-dot{flex-shrink:0;width:6px;height:6px;border-radius:50%;background:#c9a84c;margin-top:7px;}
        @media(max-width:768px){.ee{padding:70px 24px;}.ee-in{grid-template-columns:1fr;gap:56px;}}
      `}</style>

      <section className="ee" id="experience">
        <div className="ee-in">
          <div>
            <div className="ee-lbl">Academic Background</div>
            <h2 className="ee-ttl">My <span>Education</span></h2>
            <div className="tl">
              {edu.map(e => (
                <div className="tl-item" key={e.degree}>
                  <div className="tl-dot" />
                  <div className="tl-card">
                    <div className="tl-ico">{e.icon}</div>
                    <div className="tl-deg">{e.degree}</div>
                    <div className="tl-inst">{e.inst}</div>
                    <div className="tl-meta">
                      <span className="tl-per">📅 {e.period}</span>
                      {e.score && <span className="tl-sc">Score: {e.score}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="ee-lbl">Work History</div>
            <h2 className="ee-ttl">My <span>Experience</span></h2>
            <div className="exp-card">
              <div className="exp-type">Part-Time</div>
              <div className="exp-role">Digital Marketing Assistant</div>
              <div className="exp-co">Teck Vaseegara, Thanjavur</div>
              <div className="exp-per">2023 – Present</div>
              <ul className="exp-list">
                {highlights.map(h => (
                  <li className="exp-li" key={h}>
                    <span className="exp-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}