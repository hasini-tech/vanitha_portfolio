const contactItems = [
  { icon:"📞", label:"Phone",   val:"8807229174" },
  { icon:"✉️", label:"Email",   val:"vanithasingararm05@gmail.com" },
  { icon:"📍", label:"Address", val:"399, Ambalakara Street, Rajandram, Thanjavur" },
];

export default function Contact() {
  return (
    <>
      <style>{`
        .ct{background:linear-gradient(135deg,#0d1b3e 0%,#1a3a6b 100%);padding:100px 40px;position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;}
        .ct::before{content:'';position:absolute;bottom:-100px;left:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 70%);pointer-events:none;}
        .ct-in{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;position:relative;z-index:1;}
        .ct-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .ct-ttl{font-family:'Playfair Display',serif;font-size:clamp(30px,3.5vw,44px);font-weight:900;color:#fff;line-height:1.2;margin-bottom:20px;}
        .ct-sub{font-size:15px;line-height:1.8;color:rgba(255,255,255,.65);margin-bottom:40px;}
        .ct-list{list-style:none;display:flex;flex-direction:column;gap:20px;}
        .ct-item{display:flex;align-items:center;gap:16px;}
        .ct-iico{width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
        .ct-ik{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.4);margin-bottom:2px;}
        .ct-iv{font-size:14px;font-weight:500;color:#fff;}
        .ct-form{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:40px 36px;}
        .f-g{margin-bottom:20px;}
        .f-l{display:block;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:8px;}
        .f-i,.f-ta{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:13px 16px;font-family:'DM Sans',sans-serif;font-size:14px;color:#fff;outline:none;transition:border-color .2s,background .2s;}
        .f-i::placeholder,.f-ta::placeholder{color:rgba(255,255,255,.25);}
        .f-i:focus,.f-ta:focus{border-color:#c9a84c;background:rgba(255,255,255,.08);}
        .f-ta{resize:vertical;min-height:110px;}
        .f-btn{width:100%;background:#c9a84c;color:#0d1b3e;font-family:'DM Sans',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;padding:15px;border:none;border-radius:8px;cursor:pointer;transition:transform .2s,box-shadow .2s;margin-top:8px;}
        .f-btn:hover{background:#d4b55a;transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,168,76,.35);}
        @media(max-width:768px){.ct{padding:70px 24px;}.ct-in{grid-template-columns:1fr;gap:48px;}.ct-form{padding:28px 24px;}}
      `}</style>

      <section className="ct" id="contact">
        <div className="ct-in">
          <div>
            <div className="ct-lbl">Get In Touch</div>
            <h2 className="ct-ttl">Let's Work<br />Together</h2>
            <p className="ct-sub">Open to internship and job opportunities in digital marketing. Feel free to reach out — I'd love to connect!</p>
            <ul className="ct-list">
              {contactItems.map(c => (
                <li className="ct-item" key={c.label}>
                  <div className="ct-iico">{c.icon}</div>
                  <div>
                    <div className="ct-ik">{c.label}</div>
                    <div className="ct-iv">{c.val}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ct-form">
            {[["Your Name","text","Enter your name"],["Email Address","email","Enter your email"],["Subject","text","Job opportunity / Collaboration"]].map(([l,t,p]) => (
              <div className="f-g" key={l}>
                <label className="f-l">{l}</label>
                <input className="f-i" type={t} placeholder={p} />
              </div>
            ))}
            <div className="f-g">
              <label className="f-l">Message</label>
              <textarea className="f-ta" placeholder="Write your message here..." />
            </div>
            <button className="f-btn">Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
}