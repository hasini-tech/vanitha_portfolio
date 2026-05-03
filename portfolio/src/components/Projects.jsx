const projectsData = [
  { title:"GA4 Ecommerce Tracking",     desc:"Set up Google Analytics 4 (GA4) tracking for an ecommerce website to monitor user behavior, purchase funnels, and conversion events.",            tags:["GA4","Ecommerce","Analytics"],          icon:"📊", color:"#4a90d9" },
  { title:"Meta Pixel Integration",      desc:"Installed Meta Pixel on a client website and tested all standard events including PageView, AddToCart, and Purchase for accurate ad attribution.", tags:["Meta Pixel","Events","Facebook Ads"],    icon:"🎯", color:"#c9a84c" },
  { title:"Shopify Store Setup",         desc:"Created and optimized Shopify product pages, configured promotions, discount codes, and improved product listings for better conversion.",        tags:["Shopify","Product Pages","Promotions"],  icon:"🛍️", color:"#1a3a6b" },
  { title:"Meta Ads Campaign",           desc:"Ran and managed a Meta Ads campaign for a local brand, targeting the right audience, setting budgets, and monitoring ad performance metrics.",    tags:["Meta Ads","Targeting","Campaigns"],      icon:"📢", color:"#4a90d9" },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .pr{background:#fff;padding:100px 40px;font-family:'DM Sans',sans-serif;}
        .pr-in{max-width:1100px;margin:0 auto;}
        .pr-hd{text-align:center;margin-bottom:64px;}
        .pr-lbl{font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;margin-bottom:12px;}
        .pr-ttl{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,48px);font-weight:900;color:#0d1b3e;}
        .pr-ttl span{color:#4a90d9;}
        .pr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;}
        .pr-card{background:#f8fafd;border:1px solid #e8eef6;border-radius:16px;padding:32px 28px;position:relative;overflow:hidden;transition:transform .25s,box-shadow .25s;}
        .pr-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--ac);border-radius:16px 16px 0 0;transform:scaleX(0);transition:transform .3s;transform-origin:left;}
        .pr-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(13,27,62,.1);}
        .pr-card:hover::before{transform:scaleX(1);}
        .pr-ico{width:52px;height:52px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;}
        .pr-nm{font-size:17px;font-weight:700;color:#0d1b3e;margin-bottom:10px;}
        .pr-desc{font-size:13.5px;line-height:1.75;color:#4a5568;margin-bottom:20px;}
        .pr-tags{display:flex;flex-wrap:wrap;gap:8px;}
        .pr-tag{font-size:11px;font-weight:600;letter-spacing:.5px;padding:4px 12px;border-radius:100px;border:1px solid currentColor;}
        @media(max-width:768px){.pr{padding:70px 0;}.pr-in{max-width:100%;}.pr-hd{margin-bottom:44px;padding:0 24px;}.pr-grid{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:24px;padding:0 24px 18px;-webkit-overflow-scrolling:touch;}.pr-grid::-webkit-scrollbar{height:4px;}.pr-grid::-webkit-scrollbar-track{background:#e8eef6;border-radius:100px;margin:0 24px;}.pr-grid::-webkit-scrollbar-thumb{background:#4a90d9;border-radius:100px;}.pr-card{flex:0 0 min(84vw,430px);scroll-snap-align:start;min-height:260px;}}
        @media(max-width:480px){.pr{padding:60px 0;}.pr-hd{padding:0 16px;}.pr-grid{gap:14px;scroll-padding:16px;padding:0 16px 18px;}.pr-grid::-webkit-scrollbar-track{margin:0 16px;}.pr-card{flex-basis:86vw;min-height:270px;padding:26px 20px;border-radius:12px;}.pr-desc{font-size:13px;line-height:1.7;}.pr-tag{font-size:10px;padding:4px 10px;}}
      `}</style>

      <section className="pr" id="projects">
        <div className="pr-in">
          <div className="pr-hd">
            <div className="pr-lbl">Portfolio</div>
            <h2 className="pr-ttl">Featured <span>Projects</span></h2>
          </div>
          <div className="pr-grid">
            {projectsData.map(p => (
              <div className="pr-card" key={p.title} style={{"--ac": p.color}}>
                <div className="pr-ico" style={{background:`${p.color}18`}}>{p.icon}</div>
                <div className="pr-nm">{p.title}</div>
                <p className="pr-desc">{p.desc}</p>
                <div className="pr-tags">
                  {p.tags.map(t => (
                    <span className="pr-tag" key={t} style={{color:p.color, borderColor:`${p.color}55`, background:`${p.color}0f`}}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
