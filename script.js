:root{
  --bg:#0b1020;
  --card:#101a36;
  --text:#eef2ff;
  --muted:#b7c2ffcc;
  --line:#26355f;
  --accent:#7c3aed;
  --accent2:#22c55e;
  --accent3:#06b6d4;
  --shadow: 0 20px 60px rgba(0,0,0,.35);
  --radius: 18px;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:"Manrope",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  background:
    radial-gradient(1200px 600px at 15% 10%, rgba(124,58,237,.30), transparent 60%),
    radial-gradient(900px 500px at 85% 15%, rgba(6,182,212,.22), transparent 60%),
    radial-gradient(900px 500px at 50% 95%, rgba(34,197,94,.16), transparent 60%),
    var(--bg);
  color:var(--text);
  line-height:1.55;
}
a{color:inherit;text-decoration:none}
.container{width:min(1100px,92vw);margin:0 auto}
.muted{color:var(--muted)}
.tiny{font-size:.85rem}
.lead{font-size:1.06rem;color:#e7ebff}

.header{
  position:sticky;top:0;z-index:50;
  background:rgba(11,16,32,.72);
  backdrop-filter:blur(10px);
  border-bottom:1px solid rgba(38,53,95,.6);
}
.nav{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
.brand{display:flex;align-items:center;gap:10px;font-weight:800}
.logo{font-size:1.2rem}
.brand-text{font-size:1.05rem}

.menu{display:flex;align-items:center;gap:18px}
.menu a{opacity:.9}
.menu a:hover{opacity:1}

.burger{
  display:none;width:44px;height:44px;border-radius:14px;
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.6);
}
.burger span{display:block;height:2px;margin:7px 10px;background:rgba(238,242,255,.9);border-radius:2px}

.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:12px 16px;border-radius:14px;
  background:linear-gradient(135deg, rgba(124,58,237,1), rgba(6,182,212,1));
  color:white;font-weight:800;
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 12px 30px rgba(124,58,237,.18);
}
.btn:hover{transform:translateY(-1px)}
.btn-small{padding:10px 14px;font-size:.95rem}
.btn-ghost{background:rgba(16,26,54,.35);border:1px solid rgba(38,53,95,.9);box-shadow:none}
.btn-full{width:100%}

.hero{padding:44px 0 18px}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:26px;align-items:start}
.badge{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 12px;border-radius:999px;
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.35);
  font-weight:700;font-size:.9rem;
}
h1{font-size:clamp(2rem,4vw,3rem);line-height:1.08;margin:.65rem 0 .6rem}
.grad{
  background:linear-gradient(90deg,var(--accent),var(--accent3),var(--accent2));
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px}
.mini-stats{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap}
.stat{
  border:1px solid rgba(38,53,95,.7);
  background:rgba(16,26,54,.28);
  border-radius:16px;
  padding:12px 14px;min-width:140px;
}
.stat-num{font-weight:900;font-size:1.2rem}
.stat-label{color:var(--muted);font-weight:700;font-size:.9rem}

.card{
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.55);
  border-radius:var(--radius);
  padding:18px;
  box-shadow:var(--shadow);
}

.form{display:grid;gap:12px;margin-top:10px}
label{display:grid;gap:7px;font-weight:800;font-size:.92rem}
input,select,textarea{
  width:100%;padding:12px 12px;border-radius:14px;
  border:1px solid rgba(38,53,95,.9);
  background:rgba(11,16,32,.55);
  color:var(--text);outline:none;
}
input:focus,select:focus,textarea:focus{
  border-color:rgba(6,182,212,.9);
  box-shadow:0 0 0 4px rgba(6,182,212,.12);
}

.trust{display:flex;gap:10px;flex-wrap:wrap;padding:14px 0 8px}
.trust-item{
  padding:10px 12px;border-radius:999px;
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.22);
  font-weight:700;font-size:.92rem;
}

.section{padding:50px 0}
.section.alt{
  background:linear-gradient(180deg, rgba(16,26,54,.25), rgba(16,26,54,0));
  border-top:1px solid rgba(38,53,95,.55);
  border-bottom:1px solid rgba(38,53,95,.55);
}
h2{font-size:clamp(1.6rem,3vw,2.1rem);margin:0 0 10px}

.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px}
.feature{
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.35);
  border-radius:var(--radius);
  padding:18px;
}
.icon{font-size:1.5rem}
.list{margin:10px 0 0;padding-left:18px}
.list li{margin:6px 0;color:#dfe6ff}

.split{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;align-items:start}
.pill-row{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0}
.pill{
  padding:9px 12px;border-radius:999px;
  border:1px solid rgba(38,53,95,.8);
  background:rgba(11,16,32,.32);
  font-weight:800;font-size:.92rem;
}
.callout{
  margin-top:16px;
  border:1px dashed rgba(6,182,212,.8);
  background:rgba(6,182,212,.08);
  border-radius:var(--radius);
  padding:14px 16px;
}
.sticky{position:sticky;top:86px}

.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px}
.price-card{
  position:relative;
  border:1px solid rgba(38,53,95,.85);
  background:rgba(16,26,54,.38);
  border-radius:var(--radius);
  padding:18px;
}
.price-card.highlight{
  background:linear-gradient(180deg, rgba(124,58,237,.20), rgba(16,26,54,.35));
  border-color:rgba(124,58,237,.55);
}
.ribbon{
  position:absolute;top:14px;right:14px;
  padding:6px 10px;font-weight:900;font-size:.82rem;
  border-radius:999px;border:1px solid rgba(255,255,255,.15);
  background:rgba(124,58,237,.35);
}
.price{font-size:1.55rem;font-weight:900}
.price span{font-size:.9rem;color:var(--muted);font-weight:700}

.table{margin-top:10px;border:1px solid rgba(38,53,95,.7);border-radius:14px;overflow:hidden}
.row{display:flex;justify-content:space-between;padding:10px 12px;background:rgba(11,16,32,.35);border-top:1px solid rgba(38,53,95,.55)}
.row:first-child{border-top:none}

.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px}
.step{
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.28);
  border-radius:var(--radius);
  padding:16px;
}
.step-num{
  width:36px;height:36px;border-radius:12px;
  display:flex;align-items:center;justify-content:center;
  font-weight:900;
  background:rgba(124,58,237,.25);
  border:1px solid rgba(124,58,237,.5);
}

.faq{display:grid;gap:10px;margin-top:12px}
details{
  border:1px solid rgba(38,53,95,.8);
  background:rgba(16,26,54,.28);
  border-radius:var(--radius);
  padding:14px 16px;
}
summary{cursor:pointer;font-weight:900}
details p{margin:10px 0 0;color:#dfe6ff}

.contact-box{display:grid;gap:10px;margin-top:14px}
.contact-item{
  display:flex;justify-content:space-between;gap:12px;
  border:1px solid rgba(38,53,95,.75);
  background:rgba(16,26,54,.22);
  border-radius:16px;
  padding:12px 14px;
}
.contact-k{font-weight:900}

.toast{
  margin-top:12px;
  padding:12px 14px;
  border-radius:16px;
  display:none;
  border:1px solid rgba(34,197,94,.65);
  background:rgba(34,197,94,.10);
  color:#dfffe8;
  font-weight:800;
}

.footer{
  border-top:1px solid rgba(38,53,95,.6);
  padding:18px 0 26px;
  background:rgba(11,16,32,.55);
}
.foot{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}

@media (max-width: 920px){
  .hero-grid{grid-template-columns:1fr}
  .split{grid-template-columns:1fr}
  .grid3{grid-template-columns:1fr}
  .pricing{grid-template-columns:1fr}
  .steps{grid-template-columns:1fr 1fr}
  .sticky{position:static}
  .menu{display:none}
  .burger{display:inline-block}
  .menu.open{
    display:flex;position:absolute;left:4vw;right:4vw;top:64px;
    flex-direction:column;gap:12px;
    padding:14px;
    border:1px solid rgba(38,53,95,.8);
    background:rgba(11,16,32,.92);
    border-radius:18px;
  }
}
@media (max-width: 520px){
  .steps{grid-template-columns:1fr}
}