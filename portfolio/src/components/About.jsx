export default function About() {
  const details = [
    ["Name","Vanitha S"],
    ["Degree","BA Economics (2023-2026)"],
    ["College","Kunthalavai Naachiyar Arts College"],
    ["Location","Thanjavur, Tamil Nadu"],
    ["Phone","8807229174"],
    ["Email","vanithasingararm05@gmail.com"],
  ];

  return (
    <>
      <style>{`
        .abt{background:#f4f7fb;padding:100px 40px;font-family:'DM Sans',sans-serif;}
        .abt-in{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
        .abt-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .abt-ttl{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,48px);font-weight:900;color:#0d1b3e;line-height:1.15;margin-bottom:24px;}
        .abt-ttl span{color:#4a90d9;}
        .abt-p{font-size:15px;line-height:1.9;color:#4a5568;margin-bottom:32px;}
        .abt-dg{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .abt-k{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:#7a8fa6;}
        .abt-v{font-size:14px;font-weight:500;color:#0d1b3e;margin-top:3px;}
        .abt-card{background:linear-gradient(135deg,#0d1b3e 0%,#1a3a6b 100%);border-radius:16px;padding:48px 40px;color:#fff;position:relative;overflow:hidden;}
        .abt-card::before{content:'"';position:absolute;top:-20px;left:24px;font-family:'Playfair Display',serif;font-size:140px;color:rgba(201,168,76,.15);line-height:1;pointer-events:none;}
        .abt-q{font-size:17px;line-height:1.8;color:rgba(255,255,255,.85);font-style:italic;margin-bottom:32px;position:relative;z-index:1;}
        .abt-qa{display:flex;align-items:center;gap:12px;}
        .abt-ql{width:32px;height:2px;background:#c9a84c;}
        .abt-qn{font-size:13px;font-weight:600;color:#c9a84c;letter-spacing:1px;text-transform:uppercase;}
        .abt-langs{margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;}
        .abt-pill{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:6px 18px;font-size:13px;color:rgba(255,255,255,.8);display:flex;align-items:center;gap:8px;}
        .abt-dot{width:8px;height:8px;border-radius:50%;}
        @media(max-width:768px){.abt{padding:70px 24px;}.abt-in{grid-template-columns:1fr;gap:48px;}.abt-dg{grid-template-columns:1fr;}.abt-card{padding:34px 28px;}}
        @media(max-width:480px){.abt{padding:60px 16px;}.abt-ttl{font-size:32px;}.abt-p{font-size:14px;line-height:1.8;}.abt-card{padding:30px 22px;border-radius:12px;}.abt-q{font-size:15px;line-height:1.75;}.abt-pill{width:100%;justify-content:flex-start;}.abt-v{overflow-wrap:anywhere;}}
      `}</style>

      <section className="abt" id="about">
        <div className="abt-in">
          <div>
            <div className="abt-lbl">About Me</div>
            <h2 className="abt-ttl">Turning Data<br />into <span>Growth</span></h2>
            <p className="abt-p">Motivated and detail-oriented BA Economics student with hands-on experience in Digital Marketing. Skilled in business manage-tailoring and customer handling. Seeking opportunities to grow in marketing roles while contributing creativity and discipline.</p>
            <div className="abt-dg">
              {details.map(([k,v]) => (
                <div key={k}>
                  <div className="abt-k">{k}</div>
                  <div className="abt-v">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="abt-card">
              <p className="abt-q">"Aspiring Digital Marketing Professional seeking opportunities to apply skills in social media marketing, analytics, and ecommerce growth."</p>
              <div className="abt-qa">
                <div className="abt-ql" />
                <span className="abt-qn">Vanitha S</span>
              </div>
              <div className="abt-langs">
                <div className="abt-pill"><div className="abt-dot" style={{background:"#ff9933"}} />Tamil (Native)</div>
                <div className="abt-pill"><div className="abt-dot" style={{background:"#0052b4"}} />English (Proficient)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
