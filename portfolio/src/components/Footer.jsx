export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .ft{min-height:120px;background:#060e1e;padding:42px 40px;text-align:center;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;}
        .ft p{font-size:13px;line-height:1.7;color:rgba(255,255,255,.3);}
        .ft span{color:#c9a84c;font-weight:600;}
        @media(max-width:480px){.ft{min-height:140px;padding:38px 16px;}.ft p{font-size:12px;max-width:280px;}}
      `}</style>

      <footer className="ft">
        <p>Copyright {year} <span>Vanitha S</span>. Digital Marketing Portfolio | Built by <span>Hasini</span></p>
      </footer>
    </>
  );
}
