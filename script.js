/* ============================================================
   1. SETTINGS & VARIABLES (Alwan w Khotout)
   ============================================================ */
:root {
    --primary: #FF6B35;    /* Orange */
    --secondary: #004E89;  /* Blue */
    --accent: #F7B801;     /* Gold */
    --dark: #1a1a2e;
    --darker: #0f0f1e;
    --light: #ffffff;
    --text-light: #e0e0e0;
    --text-muted: #a0a0a0;
    --transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
    color: var(--text-light);
    overflow-x: hidden;
    line-height: 1.6;
}

/* ============================================================
   2. SHARED COMPONENTS (Header, Footer, Background)
   ============================================================ */
/* Animated BG */
.bg-light, .bg-light2 {
    position: fixed;
    filter: blur(100px);
    border-radius: 50%;
    z-index: -1;
}
.bg-light { width: 600px; height: 600px; background: radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%); top: -100px; right: -100px; animation: float 15s ease-in-out infinite; }
.bg-light2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,78,137,0.15) 0%, transparent 70%); bottom: -50px; left: -50px; animation: float 20s ease-in-out infinite reverse; }

@keyframes float { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,30px) scale(1.1); } }

/* Navigation */
header {
    position: fixed;
    top: 0; width: 100%; padding: 18px 6%;
    display: flex; justify-content: space-between; align-items: center;
    z-index: 1000; background: rgba(15,15,30,0.7); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,107,53,0.1); transition: var(--transition);
}
header.scrolled { padding: 12px 6%; background: rgba(15,15,30,0.95); box-shadow: 0 10px 40px rgba(0,0,0,0.5); }

.logo {
    font-size: 26px; font-weight: 900; text-decoration: none;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

nav { display: flex; gap: 8px; }
nav a {
    color: var(--text-light); text-decoration: none; padding: 8px 16px;
    font-size: 14px; font-weight: 700; transition: var(--transition); border-radius: 8px;
}
nav a:hover, nav a.active { color: var(--accent); background: rgba(255,107,53,0.1); }

footer {
    padding: 40px 6%; text-align: center; color: var(--text-muted);
    font-size: 14px; border-top: 1px solid rgba(255,107,53,0.1);
}

/* ============================================================
   3. INDEX PAGE SPECIFIC (Hero, Services, Stats)
   ============================================================ */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 6% 80px; }
.hero h1 { font-size: clamp(40px, 8vw, 80px); font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; }
.hero h1 span { background: linear-gradient(135deg, var(--accent), var(--primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.btn {
    padding: 14px 40px; border-radius: 12px; font-weight: 800; text-decoration: none;
    display: inline-block; transition: var(--transition); cursor: pointer; border: none;
}
.btn-gold { background: linear-gradient(135deg, var(--accent), var(--primary)); color: var(--dark); box-shadow: 0 10px 30px rgba(255,107,53,0.3); }
.btn-gold:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255,107,53,0.5); }

/* Cards & Stats */
.services, .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 50px; }
.card, .stat {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,107,53,0.1);
    padding: 40px; border-radius: 16px; transition: var(--transition);
}
.card:hover, .stat:hover { transform: translateY(-10px); border-color: var(--primary); background: rgba(255,107,53,0.05); }

/* Artist Grid (Common for Index & Related) */
.artists-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
.artist-card { 
    position: relative; aspect-ratio: 1/1; overflow: hidden; border-radius: 15px; 
    border: 1px solid rgba(255,107,53,0.2); transition: var(--transition);
}
.artist-card img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
.artist-card:hover img { transform: scale(1.1); filter: brightness(0.7); }

.artist-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column; 
    justify-content: flex-end; padding: 20px; background: linear-gradient(transparent, rgba(15,15,30,0.9));
}

/* ============================================================
   4. ARTIST PROFILE PAGES (Mustapha Zyan, Kader Berkane, etc.)
   ============================================================ */
.profile-box { padding: 120px 6% 60px; text-align: center; }
.profile-box h2 { color: var(--accent); font-size: clamp(28px, 5vw, 45px); margin-bottom: 30px; font-weight: 900; }

.video-container {
    max-width: 1000px; margin: 0 auto; position: relative;
    border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,107,53,0.3);
}
.profile-box iframe { width: 100%; aspect-ratio: 16/9; border: none; display: block; }

.related-artists { padding: 60px 6%; border-top: 1px solid rgba(255,107,53,0.1); }
.related-artists h2 { text-align: center; color: var(--accent); margin-bottom: 40px; }

/* Center helper for related artists if few items */
.artists-center { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; }

/* ============================================================
   5. RESPONSIVE (Mobile Tweaks)
   ============================================================ */
@media (max-width: 768px) {
    header { padding: 15px 4%; }
    .hero h1 { font-size: 35px; }
    .artists-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
    .profile-box { padding-top: 100px; }
    .stats { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
    .logo { font-size: 20px; }
    nav a { padding: 6px 10px; font-size: 12px; }
    .artist-overlay h3 { font-size: 16px; }
}
