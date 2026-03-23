(function() {
  // Inject Google Fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Satoshi:wght@400;500;700&display=swap';
  document.head.appendChild(fontLink);

  // Create and inject combined style tag with ALL CSS
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    /* Reset and base styles for #pp-root */
    #pp-root {
      margin: 0;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
    }

    #pp-root * {
      box-sizing: border-box;
    }

    /* Typography */
    #pp-root {
      --font-body: 'Satoshi', sans-serif;
      --font-heading: 'Space Grotesk', sans-serif;
      --color-primary: #1a1a1a;
      --color-bg: #ffffff;
      --color-cta: #D93A3A;
      --color-light-bg: #faf7f4;
      --color-dark-bg: #1a1a1a;
      --color-text-light: rgba(255, 255, 255, 0.85);
      --color-text-light-muted: rgba(255, 255, 255, 0.65);
      --color-border-light: rgba(255, 255, 255, 0.08);
      --color-badge-bg: rgba(255, 255, 255, 0.1);
    }

    /* HERO SECTION */
    .hero {
      background: linear-gradient(135deg, #3a0c18, #4a1020 40%, #2a0e16);
      padding: 100px 24px 64px 24px;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background-color: var(--color-badge-bg);
      border: 1px solid var(--color-border-light);
      color: var(--color-text-light-muted);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 32px;
      font-family: var(--font-body);
    }

    .hero h1 {
      font-family: var(--font-heading);
      font-size: 56px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 24px 0;
      color: white;
    }

    .hero h1 .gradient-text {
      background: linear-gradient(90deg, #D93A3A, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: var(--color-text-light);
      margin: 0 0 48px 0;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 64px;
    }

    .btn {
      font-family: var(--font-body);
      font-size: 16px;
      font-weight: 600;
      padding: 14px 32px;
      border-radius: 6px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      display: inline-block;
    }

    .btn-primary {
      background-color: var(--color-cta);
      color: white;
    }

    .btn-primary:hover {
      background-color: #c42a2a;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(217, 58, 58, 0.3);
    }

    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: white;
    }

    .hero-logo-strip {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
      opacity: 0.7;
    }

    .hero-logo-item {
      font-family: var(--font-body);
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      padding: 8px 12px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.05);
      min-width: 80px;
      text-align: center;
    }

    /* LOGO CAROUSEL / MARQUEE SECTION */
    .lc-section {
      background-color: var(--color-bg);
      padding: 80px 24px;
      text-align: center;
    }

    .lc-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .lc-badge {
      display: inline-block;
      background-color: var(--color-light-bg);
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .lc-title {
      font-family: var(--font-heading);
      font-size: 32px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 48px 0;
    }

    .lc-marquee-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .lc-marquee {
      display: flex;
      gap: 32px;
      animation: scroll-left 40s linear infinite;
      width: fit-content;
    }

    .lc-marquee:hover {
      animation-play-state: paused;
    }

    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .lc-logo {
      flex-shrink: 0;
      width: 140px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-light-bg);
      border-radius: 8px;
      font-family: var(--font-body);
      font-size: 13px;
      color: var(--color-primary);
      font-weight: 600;
      text-align: center;
      padding: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .lc-logo:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    /* WHY NOW SECTION */
    .wn {
      background: linear-gradient(180deg, #3a0c18, #4a1020);
      padding: 80px 24px;
      color: white;
    }

    .wn-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .wn-badge {
      display: inline-block;
      background-color: var(--color-badge-bg);
      border: 1px solid var(--color-border-light);
      color: var(--color-text-light-muted);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .wn h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      text-align: center;
    }

    .wn h2 .highlight {
      background: linear-gradient(90deg, #D93A3A, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .wn-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: var(--color-text-light);
      text-align: center;
      margin: 0 0 48px 0;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .wn-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }

    .wn-card {
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--color-border-light);
      border-radius: 12px;
      padding: 32px 24px;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .wn-card:hover {
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-4px);
    }

    .wn-card-icon {
      font-size: 40px;
      margin-bottom: 16px;
      text-align: left;
    }

    .wn-card-title {
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 700;
      color: white;
      margin: 0 0 12px 0;
      text-align: left;
    }

    .wn-card-description {
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.6;
      color: var(--color-text-light-muted);
      margin: 0;
      text-align: left;
    }

    /* DATA LAYERS SECTION */
    .dl {
      background-color: var(--color-bg);
      padding: 80px 24px;
    }

    .dl-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .dl-badge {
      display: inline-block;
      background-color: var(--color-light-bg);
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .dl-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .dl h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: var(--color-primary);
    }

    .dl h2 .highlight {
      background: linear-gradient(90deg, #D93A3A, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .dl-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .dl-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
    }

    .dl-card {
      background-color: var(--color-light-bg);
      border-radius: 12px;
      padding: 32px 24px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .dl-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .dl-card-number {
      font-family: var(--font-heading);
      font-size: 48px;
      font-weight: 700;
      color: var(--color-cta);
      margin: 0 0 12px 0;
    }

    .dl-card-title {
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 12px 0;
    }

    .dl-card-description {
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.6;
      color: #666;
      margin: 0;
    }

    /* WHO WE SERVE SECTION */
    .ws {
      background-color: var(--color-light-bg);
      padding: 80px 24px;
    }

    .ws-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .ws-badge {
      display: inline-block;
      background-color: white;
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
      border: 1px solid #e0e0e0;
    }

    .ws-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .ws h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: var(--color-primary);
    }

    .ws-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .ws-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
    }

    .ws-card {
      background-color: white;
      border-radius: 12px;
      padding: 32px 24px;
      text-align: center;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;
    }

    .ws-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
      border-color: var(--color-cta);
    }

    .ws-card-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }

    .ws-card-title {
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 12px 0;
    }

    .ws-card-description {
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.6;
      color: #666;
      margin: 0;
    }

    /* RESOURCES SECTION */
    .rs {
      background-color: var(--color-bg);
      padding: 80px 24px;
    }

    .rs-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .rs-badge {
      display: inline-block;
      background-color: var(--color-light-bg);
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .rs-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .rs h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: var(--color-primary);
    }

    .rs-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .rs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }

    .rs-card {
      background-color: var(--color-light-bg);
      border-radius: 12px;
      padding: 32px 24px;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .rs-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }

    .rs-card-icon {
      font-size: 32px;
      margin-bottom: 16px;
    }

    .rs-card-title {
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 12px 0;
    }

    .rs-card-description {
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.6;
      color: #666;
      margin: 0 0 20px 0;
      flex-grow: 1;
    }

    .rs-card-link {
      font-family: var(--font-body);
      font-size: 14px;
      font-weight: 600;
      color: var(--color-cta);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .rs-card-link:hover {
      color: #c42a2a;
      text-decoration: underline;
    }

    /* PRICING SECTION */
    .pr {
      background-color: var(--color-light-bg);
      padding: 80px 24px;
    }

    .pr-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .pr-badge {
      display: inline-block;
      background-color: white;
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
      border: 1px solid #e0e0e0;
    }

    .pr-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .pr h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: var(--color-primary);
    }

    .pr-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .pr-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }

    .pr-card {
      background-color: white;
      border-radius: 12px;
      padding: 40px 32px;
      border: 2px solid #e0e0e0;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
    }

    .pr-card.featured {
      border-color: var(--color-cta);
      box-shadow: 0 12px 40px rgba(217, 58, 58, 0.15);
      transform: scale(1.05);
    }

    .pr-card:not(.featured):hover {
      transform: translateY(-4px);
      border-color: #ccc;
    }

    .pr-card.featured::before {
      content: 'POPULAR';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--color-cta);
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      font-family: var(--font-body);
    }

    .pr-card-name {
      font-family: var(--font-heading);
      font-size: 22px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 12px 0;
    }

    .pr-card-price {
      font-family: var(--font-heading);
      font-size: 48px;
      font-weight: 700;
      color: var(--color-cta);
      margin: 0 0 8px 0;
    }

    .pr-card-price-period {
      font-family: var(--font-body);
      font-size: 14px;
      color: #999;
      margin: 0 0 24px 0;
    }

    .pr-card-description {
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.6;
      color: #666;
      margin: 0 0 32px 0;
    }

    .pr-card-features {
      text-align: left;
      margin-bottom: 32px;
    }

    .pr-card-feature {
      font-family: var(--font-body);
      font-size: 14px;
      color: #666;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }

    .pr-card-feature:last-child {
      border-bottom: none;
    }

    .pr-card-feature::before {
      content: '✓ ';
      color: var(--color-cta);
      font-weight: 700;
      margin-right: 8px;
    }

    .pr-card-cta {
      display: inline-block;
      margin-top: 24px;
    }

    /* COMMUNITY IMPACT SECTION */
    .ci {
      background-color: var(--color-bg);
      padding: 80px 24px;
    }

    .ci-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .ci-badge {
      display: inline-block;
      background-color: var(--color-light-bg);
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .ci-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .ci h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: var(--color-primary);
    }

    .ci h2 .highlight {
      background: linear-gradient(90deg, #D93A3A, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .ci-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .ci-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-bottom: 48px;
    }

    .ci-stat {
      text-align: center;
    }

    .ci-stat-number {
      font-family: var(--font-heading);
      font-size: 48px;
      font-weight: 700;
      color: var(--color-cta);
      margin: 0 0 8px 0;
    }

    .ci-stat-label {
      font-family: var(--font-body);
      font-size: 16px;
      font-weight: 600;
      color: var(--color-primary);
      margin: 0;
    }

    /* GALLERY SECTION */
    .gl {
      background-color: var(--color-dark-bg);
      padding: 80px 24px;
    }

    .gl-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .gl-badge {
      display: inline-block;
      background-color: var(--color-badge-bg);
      border: 1px solid var(--color-border-light);
      color: var(--color-text-light-muted);
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      font-family: var(--font-body);
    }

    .gl-header {
      text-align: center;
      margin-bottom: 48px;
    }

    .gl h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: white;
    }

    .gl-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: var(--color-text-light);
      max-width: 700px;
      margin: 0 auto;
    }

    .gl-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .gl-item {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-border-light);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .gl-item:hover {
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
      transform: scale(1.02);
    }

    .gl-item-content {
      text-align: center;
      color: var(--color-text-light);
      font-family: var(--font-body);
      font-size: 14px;
    }

    /* CONTACT / GET STARTED SECTION */
    .ct {
      background: linear-gradient(135deg, #3a0c18, #4a1020 40%, #2a0e16);
      padding: 100px 24px;
      text-align: center;
      color: white;
    }

    .ct-container {
      max-width: 700px;
      margin: 0 auto;
    }

    .ct h2 {
      font-family: var(--font-heading);
      font-size: 44px;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 24px 0;
    }

    .ct-subtitle {
      font-family: var(--font-body);
      font-size: 18px;
      line-height: 1.6;
      color: var(--color-text-light);
      margin: 0 0 48px 0;
    }

    .ct-cta-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* FOOTER ADJUSTMENTS */
    .pp-footer {
      background-color: #0a0a0a;
      padding: 48px 24px 32px 24px;
      color: white;
    }

    .pp-footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .pp-footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 32px;
      margin-bottom: 40px;
    }

    .pp-footer-column h3 {
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 16px 0;
      color: white;
    }

    .pp-footer-column ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .pp-footer-column li {
      margin-bottom: 12px;
    }

    .pp-footer-column a {
      font-family: var(--font-body);
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .pp-footer-column a:hover {
      color: var(--color-cta);
    }

    .pp-footer-divider {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 32px;
      padding-bottom: 32px;
    }

    .pp-footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-family: var(--font-body);
      font-size: 13px;
      color: rgba(255, 255, 255, 0.6);
    }

    .pp-footer-bottom a {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .pp-footer-bottom a:hover {
      color: var(--color-cta);
    }

    /* FADE-IN ANIMATION */
    .fade-in {
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* RESPONSIVE ADJUSTMENTS */
    @media (max-width: 768px) {
      .hero {
        padding: 60px 20px 40px 20px;
      }

      .hero h1 {
        font-size: 36px;
      }

      .hero-subtitle {
        font-size: 16px;
        margin-bottom: 32px;
      }

      .hero-cta-group {
        flex-direction: column;
        gap: 12px;
      }

      .btn {
        width: 100%;
        max-width: 300px;
      }

      .lc-section {
        padding: 60px 20px;
      }

      .lc-title {
        font-size: 28px;
      }

      .lc-marquee {
        gap: 20px;
      }

      .lc-logo {
        width: 120px;
        height: 70px;
        font-size: 11px;
      }

      .wn {
        padding: 60px 20px;
      }

      .wn h2 {
        font-size: 32px;
      }

      .wn-subtitle {
        font-size: 16px;
        margin-bottom: 36px;
      }

      .wn-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .wn-card {
        padding: 24px 20px;
      }

      .dl-section {
        padding: 60px 20px;
      }

      .dl h2 {
        font-size: 32px;
      }

      .dl-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .ws-section {
        padding: 60px 20px;
      }

      .ws h2 {
        font-size: 32px;
      }

      .ws-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .rs-section {
        padding: 60px 20px;
      }

      .rs h2 {
        font-size: 32px;
      }

      .rs-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .pr-section {
        padding: 60px 20px;
      }

      .pr h2 {
        font-size: 32px;
      }

      .pr-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .pr-card.featured {
        transform: scale(1);
      }

      .ci-section {
        padding: 60px 20px;
      }

      .ci h2 {
        font-size: 32px;
      }

      .ci-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .gl-section {
        padding: 60px 20px;
      }

      .gl h2 {
        font-size: 32px;
      }

      .gl-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .ct {
        padding: 60px 20px;
      }

      .ct h2 {
        font-size: 32px;
      }

      .ct-cta-group {
        flex-direction: column;
        gap: 12px;
      }

      .ct-cta-group .btn {
        width: 100%;
        max-width: 300px;
      }

      .pp-footer-content {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .pp-footer-bottom {
        justify-content: center;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 28px;
      }

      .hero-subtitle {
        font-size: 15px;
      }

      .hero-badge {
        font-size: 11px;
        padding: 6px 12px;
      }

      .lc-title {
        font-size: 24px;
      }

      .lc-logo {
        width: 100px;
        height: 60px;
        font-size: 10px;
      }

      .wn h2 {
        font-size: 26px;
      }

      .wn-card {
        padding: 20px 16px;
      }

      .wn-card-title {
        font-size: 16px;
      }

      .wn-card-description {
        font-size: 13px;
      }

      .dl h2,
      .ws h2,
      .rs h2,
      .pr h2,
      .ci h2,
      .gl h2,
      .ct h2 {
        font-size: 26px;
      }

      .dl-card-number {
        font-size: 36px;
      }

      .pr-card-price {
        font-size: 36px;
      }

      .ci-stat-number {
        font-size: 36px;
      }

      .gl-grid {
        grid-template-columns: 1fr;
      }
    }

      #pp-root.dl {
        background: #ffffff;
        padding: 48px 24px;
      }

      .dl-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .dl-header {
        text-align: center;
        margin-bottom: 48px;
      }

      .dl-badge {
        display: inline-block;
        background: #f0f0f0;
        color: #333;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
      }

      .dl-title {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 16px 0;
        line-height: 1.2;
      }

      .dl-subtitle {
        font-size: 16px;
        color: #666;
        margin-top: 12px;
        line-height: 1.5;
      }

      .dl-cards {
        display: grid;
        gap: 32px;
        margin-bottom: 48px;
      }

      .dl-card {
        background: #f9f9f9;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 32px;
        display: grid;
        grid-template-columns: 1fr;
      }

      .dl-card-1,
      .dl-card-3 {
        grid-template-columns: 1.2fr 1fr;
      }

      .dl-card-2,
      .dl-card-4 {
        grid-template-columns: 1fr 1.2fr;
      }

      .dl-card:nth-child(2),
      .dl-card:nth-child(4) {
        flex-direction: row-reverse;
      }

      .dl-card-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .dl-card-number {
        font-size: 48px;
        font-weight: 700;
        color: #d93a3a;
        margin-bottom: 16px;
      }

      .dl-card-title {
        font-size: 24px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 8px 0;
      }

      .dl-card-desc {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
        margin: 12px 0 24px 0;
      }

      .dl-card-bullets {
        list-style: none;
        padding: 0;
        margin: 0 0 24px 0;
      }

      .dl-card-bullets li {
        font-size: 14px;
        color: #555;
        padding: 8px 0;
        padding-left: 24px;
        position: relative;
      }

      .dl-card-bullets li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #d93a3a;
        font-weight: bold;
      }

      .dl-card-insight {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: #fff;
        border-left: 3px solid #d93a3a;
        border-radius: 4px;
        margin-bottom: 24px;
        font-size: 14px;
        color: #333;
        line-height: 1.5;
      }

      .dl-card-lock {
        font-size: 18px;
        flex-shrink: 0;
      }

      .dl-card-insight-text {
        font-weight: 500;
      }

      .dl-card-chart {
        font-size: 64px;
        text-align: center;
        opacity: 0.5;
        margin-top: 24px;
      }

      .dl-footer {
        text-align: center;
        font-size: 16px;
        color: #555;
        line-height: 1.6;
        padding: 32px;
        background: #f9f9f9;
        border-radius: 8px;
      }

      .dl-footer p {
        margin: 0;
      }

      @media (max-width: 768px) {
        #pp-root.dl {
          padding: 32px 16px;
        }

        .dl-title {
          font-size: 28px;
        }

        .dl-subtitle {
          font-size: 14px;
        }

        .dl-cards {
          gap: 24px;
        }

        .dl-card {
          grid-template-columns: 1fr !important;
          padding: 24px;
        }

        .dl-card-number {
          font-size: 36px;
        }

        .dl-card-title {
          font-size: 20px;
        }

        .dl-card-desc {
          font-size: 14px;
        }

        .dl-card-chart {
          font-size: 48px;
        }

        .dl-footer {
          font-size: 14px;
          padding: 24px;
        }
      }
    

      #pp-root.ws {
        background: #faf7f4;
        padding: 48px 24px;
      }

      .ws-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .ws-header {
        text-align: center;
        margin-bottom: 48px;
      }

      .ws-badge {
        display: inline-block;
        background: #f0f0f0;
        color: #333;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
      }

      .ws-title {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 16px 0;
        line-height: 1.2;
      }

      .ws-subtitle {
        font-size: 16px;
        color: #666;
        margin-top: 12px;
        line-height: 1.5;
      }

      .ws-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .ws-card {
        background: #ffffff;
        border: 1px solid #e5dcd3;
        border-radius: 8px;
        padding: 32px;
        display: flex;
        flex-direction: column;
      }

      .ws-card-title {
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 8px 0;
      }

      .ws-card-role {
        font-size: 13px;
        color: #d93a3a;
        font-weight: 600;
        margin: 0 0 16px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .ws-card-desc {
        font-size: 15px;
        color: #555;
        line-height: 1.6;
        margin: 0 0 24px 0;
      }

      .ws-card-checks {
        list-style: none;
        padding: 0;
        margin: 0;
        flex-grow: 1;
      }

      .ws-card-checks li {
        font-size: 14px;
        color: #555;
        padding: 10px 0;
        padding-left: 28px;
        position: relative;
        line-height: 1.5;
      }

      .ws-card-checks li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #d93a3a;
        font-weight: bold;
        font-size: 16px;
      }

      @media (max-width: 1024px) {
        .ws-cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        #pp-root.ws {
          padding: 32px 16px;
        }

        .ws-title {
          font-size: 28px;
        }

        .ws-subtitle {
          font-size: 14px;
        }

        .ws-cards {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .ws-card {
          padding: 24px;
        }

        .ws-card-title {
          font-size: 18px;
        }

        .ws-card-desc {
          font-size: 14px;
        }

        .ws-card-checks li {
          font-size: 13px;
        }
      }
    

      #pp-root.rs {
        background: #ffffff;
        padding: 48px 24px;
      }

      .rs-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .rs-header {
        text-align: center;
        margin-bottom: 48px;
      }

      .rs-badge {
        display: inline-block;
        background: #f0f0f0;
        color: #333;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
      }

      .rs-title {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 16px 0;
        line-height: 1.2;
      }

      .rs-subtitle {
        font-size: 16px;
        color: #666;
        margin-top: 12px;
        line-height: 1.5;
      }

      .rs-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .rs-card {
        background: #f9f9f9;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: all 0.3s ease;
      }

      .rs-card:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        border-color: #d93a3a;
      }

      .rs-card-emoji {
        font-size: 48px;
        margin-bottom: 16px;
      }

      .rs-card-title {
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 12px 0;
      }

      .rs-card-desc {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin: 0 0 24px 0;
      }

      .rs-card-link {
        display: inline-block;
        background: #d93a3a;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.3s ease;
        margin: 8px 0;
      }

      .rs-card-link:hover {
        background: #b82c2c;
      }

      .rs-card-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      .rs-card-links .rs-card-link {
        margin: 0;
      }

      @media (max-width: 1024px) {
        .rs-cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        #pp-root.rs {
          padding: 32px 16px;
        }

        .rs-title {
          font-size: 28px;
        }

        .rs-subtitle {
          font-size: 14px;
        }

        .rs-cards {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .rs-card {
          padding: 24px;
        }

        .rs-card-emoji {
          font-size: 40px;
        }

        .rs-card-title {
          font-size: 18px;
        }

        .rs-card-desc {
          font-size: 13px;
        }

        .rs-card-link {
          font-size: 13px;
          padding: 11px 20px;
        }
      }
    

      #pp-root.pr {
        background: #ffffff;
        padding: 64px 24px 48px;
      }

      .pr-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .pr-header {
        text-align: center;
        margin-bottom: 48px;
      }

      .pr-badge {
        display: inline-block;
        background: #f0f0f0;
        color: #333;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
      }

      .pr-title {
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 16px 0;
        line-height: 1.2;
      }

      .pr-subtitle {
        font-size: 16px;
        color: #666;
        margin-top: 12px;
        line-height: 1.5;
      }

      /* Desktop Table */
      .pr-table-wrapper {
        overflow-x: auto;
        margin-bottom: 48px;
      }

      .pr-table {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
      }

      .pr-table thead {
        background: #f9f9f9;
        border-bottom: 2px solid #eee;
      }

      .pr-table th {
        padding: 28px 20px;
        text-align: center;
        border-right: 1px solid #eee;
      }

      .pr-table th:last-child {
        border-right: none;
      }

      .pr-table-header-label {
        text-align: left;
        border-right: 1px solid #eee;
      }

      .pr-table-header-featured {
        background: #faf7f4;
        border-top: 2px solid #d93a3a;
        border-bottom: 2px solid #d93a3a;
      }

      .pr-tier-badge {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: #333;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
      }

      .pr-tier-badge-featured {
        color: #d93a3a;
      }

      .pr-tier-price {
        font-size: 28px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 8px 0;
      }

      .pr-tier-price span {
        font-size: 12px;
        color: #666;
        font-weight: 400;
      }

      .pr-tier-capacity {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
      }

      .pr-table td {
        padding: 16px 20px;
        text-align: center;
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
      }

      .pr-table td:last-child {
        border-right: none;
      }

      .pr-feature {
        text-align: left;
        font-size: 14px;
        color: #555;
        font-weight: 500;
        background: #fafafa;
        border-right: 1px solid #eee;
      }

      .pr-check {
        color: #d93a3a;
        font-weight: 700;
        font-size: 18px;
      }

      .pr-check-featured {
        background: #faf7f4;
      }

      .pr-empty {
        color: #ccc;
        font-size: 18px;
      }

      .pr-empty-featured {
        background: #faf7f4;
      }

      .pr-cta-row td {
        padding: 24px 20px;
        border: none;
      }

      .pr-cta-row {
        background: #fafafa;
      }

      .pr-cta {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .pr-cta-primary {
        background: #d93a3a;
        color: #ffffff;
      }

      .pr-cta-primary:hover {
        background: #b82c2c;
      }

      .pr-cta-secondary {
        background: #f0f0f0;
        color: #1a1a1a;
        border: 1px solid #ddd;
      }

      .pr-cta-secondary:hover {
        background: #e8e8e8;
      }

      /* Mobile Accordion */
      .pr-mobile {
        display: none;
      }

      .pr-accordion-card {
        border: 1px solid #eee;
        border-radius: 8px;
        margin-bottom: 16px;
        background: #ffffff;
        overflow: hidden;
      }

      .pr-accordion-card.pr-accordion-featured {
        border: 2px solid #d93a3a;
      }

      .pr-accordion-header {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f9f9f9;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        transition: background 0.3s ease;
      }

      .pr-accordion-card.pr-accordion-featured .pr-accordion-header {
        background: #faf7f4;
      }

      .pr-accordion-header:hover {
        background: #f0f0f0;
      }

      .pr-accordion-card.pr-accordion-featured .pr-accordion-header:hover {
        background: #f5f0eb;
      }

      .pr-acc-tier {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        color: #666;
        letter-spacing: 0.5px;
      }

      .pr-accordion-card.pr-accordion-featured .pr-acc-tier {
        color: #d93a3a;
      }

      .pr-acc-price {
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin-top: 4px;
      }

      .pr-acc-toggle {
        font-size: 24px;
        color: #d93a3a;
        font-weight: 300;
        transition: transform 0.3s ease;
      }

      .pr-accordion-card.open .pr-acc-toggle {
        transform: rotate(45deg);
      }

      .pr-accordion-content {
        display: none;
        padding: 24px;
        background: #ffffff;
        border-top: 1px solid #eee;
      }

      .pr-accordion-card.open .pr-accordion-content {
        display: block;
      }

      .pr-accordion-card.pr-accordion-featured .pr-accordion-content {
        border-top: 1px solid #d93a3a;
      }

      .pr-acc-capacity {
        font-size: 13px;
        color: #666;
        margin-bottom: 16px;
        font-weight: 500;
      }

      .pr-acc-features {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0;
      }

      .pr-acc-check {
        font-size: 14px;
        color: #555;
        padding: 8px 0;
        padding-left: 24px;
        position: relative;
      }

      .pr-acc-check:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #d93a3a;
        font-weight: bold;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .pr-table {
          font-size: 14px;
        }

        .pr-table th,
        .pr-table td {
          padding: 16px 12px;
        }

        .pr-tier-price {
          font-size: 24px;
        }

        .pr-feature {
          font-size: 13px;
        }
      }

      @media (max-width: 768px) {
        #pp-root.pr {
          padding: 32px 16px;
        }

        .pr-title {
          font-size: 28px;
        }

        .pr-subtitle {
          font-size: 14px;
        }

        .pr-table-wrapper {
          display: none;
        }

        .pr-mobile {
          display: block;
        }

        .pr-accordion-header {
          padding: 16px;
          font-size: 14px;
        }

        .pr-acc-tier {
          font-size: 12px;
        }

        .pr-acc-price {
          font-size: 18px;
        }

        .pr-accordion-content {
          padding: 20px;
        }

        .pr-acc-capacity {
          font-size: 12px;
        }

        .pr-acc-check {
          font-size: 13px;
        }

        .pr-cta {
          width: 100%;
          display: block;
          text-align: center;
          padding: 14px 20px;
          font-size: 13px;
        }
      }
    
  `;
  document.head.appendChild(styleTag);

  // Get root element
  const ppRoot = document.getElementById('pp-root');
  if (!ppRoot) {
    console.warn('pp-root element not found');
    return;
  }

  // Set innerHTML with all sections concatenated in order:
  // Hero -> Marquee -> Why Now -> Platform -> Who We Serve -> Resources -> Pricing -> Community -> Gallery -> Contact
  ppRoot.innerHTML = `    <!-- HERO SECTION -->
    <section class="hero fade-in">
      <div class="hero-content">
        <div class="hero-badge">For Partners & Institutions</div>
        <h1>Where student journeys become <span class="gradient-text">institutional intelligence</span></h1>
        <p class="hero-subtitle">P3 is the AI-powered mentorship platform that connects underserved students with industry mentors — and turns those connections into the longitudinal outcome data your institution needs.</p>
        <div class="hero-cta-group">
          <a href="mailto:team@pulseofp3.org?subject=Partner%20Demo%20Request" class="btn btn-primary">Schedule a Demo</a>
          <a href="#resources" class="btn btn-secondary">Download a Deck</a>
        </div>
        <div class="hero-logo-strip">
          <div class="hero-logo-item">CSU</div>
          <div class="hero-logo-item">MBK</div>
          <div class="hero-logo-item">Gilead</div>
          <div class="hero-logo-item">Mentor</div>
          <div class="hero-logo-item">Langston</div>
          <div class="hero-logo-item">Project HOOD</div>
          <div class="hero-logo-item">CPS</div>
        </div>
      </div>
    </section>

    <!-- LOGO CAROUSEL SECTION -->
    <section class="lc-section fade-in">
      <div class="lc-container">
        <div class="lc-badge">Trusted Partners</div>
        <h2 class="lc-title">Trusted by leading institutions</h2>
        <div class="lc-marquee-wrapper">
          <div class="lc-marquee">
            <div class="lc-logo">Chicago State University</div>
            <div class="lc-logo">Xavier University</div>
            <div class="lc-logo">Langston University</div>
            <div class="lc-logo">NYU</div>
            <div class="lc-logo">Google</div>
            <div class="lc-logo">LSU</div>
            <div class="lc-logo">MBK Chicago</div>
            <div class="lc-logo">Project H.O.O.D</div>
            <div class="lc-logo">Chicago Public Schools</div>
            <div class="lc-logo">100 Black Men</div>
            <div class="lc-logo">Champs Mentoring</div>
            <div class="lc-logo">BUILD Chicago</div>
            <div class="lc-logo">Gilead Foundation</div>
            <div class="lc-logo">Leo High School</div>
            <div class="lc-logo">Lurie Hospital</div>
            <div class="lc-logo">Olive Harvey</div>
            <div class="lc-logo">Salute 1st</div>
            <div class="lc-logo">Sneakers to Scrubs</div>
            <div class="lc-logo">U of Michigan</div>
            <div class="lc-logo">UNT</div>
            <div class="lc-logo">UT Austin</div>
            <!-- Duplicate for seamless loop -->
            <div class="lc-logo">Chicago State University</div>
            <div class="lc-logo">Xavier University</div>
            <div class="lc-logo">Langston University</div>
            <div class="lc-logo">NYU</div>
            <div class="lc-logo">Google</div>
            <div class="lc-logo">LSU</div>
            <div class="lc-logo">MBK Chicago</div>
            <div class="lc-logo">Project H.O.O.D</div>
            <div class="lc-logo">Chicago Public Schools</div>
            <div class="lc-logo">100 Black Men</div>
            <div class="lc-logo">Champs Mentoring</div>
            <div class="lc-logo">BUILD Chicago</div>
            <div class="lc-logo">Gilead Foundation</div>
            <div class="lc-logo">Leo High School</div>
            <div class="lc-logo">Lurie Hospital</div>
            <div class="lc-logo">Olive Harvey</div>
            <div class="lc-logo">Salute 1st</div>
            <div class="lc-logo">Sneakers to Scrubs</div>
            <div class="lc-logo">U of Michigan</div>
            <div class="lc-logo">UNT</div>
            <div class="lc-logo">UT Austin</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY NOW SECTION -->
    <section class="wn fade-in">
      <div class="wn-container">
        <div class="wn-badge">Why Now</div>
        <h2>Convergence is <span class="highlight">Happening Today</span></h2>
        <p class="wn-subtitle">The institutions that act now own the data advantage. Those that wait spend years catching up.</p>
        <div class="wn-grid">
          <div class="wn-card">
            <div class="wn-card-icon">🤖</div>
            <h3 class="wn-card-title">AI Is Eliminating Entry-Level Work</h3>
            <p class="wn-card-description">65% of students will work in jobs that don't exist today. The guidance gap is existential.</p>
          </div>
          <div class="wn-card">
            <div class="wn-card-icon">🏛</div>
            <h3 class="wn-card-title">Federal Outcome Scrutiny Escalating</h3>
            <p class="wn-card-description">Title III mandates force institutions to prove ROI now.</p>
          </div>
          <div class="wn-card">
            <div class="wn-card-icon">🎓</div>
            <h3 class="wn-card-title">Students Demand Tuition ROI</h3>
            <p class="wn-card-description">Only 30% of 2025 grads found field-relevant jobs.</p>
          </div>
          <div class="wn-card">
            <div class="wn-card-icon">📊</div>
            <h3 class="wn-card-title">EdTech Data Gap Is Proven</h3>
            <p class="wn-card-description">\$50K-\$500K/yr on tools — zero longitudinal data.</p>
          </div>
          <div class="wn-card">
            <div class="wn-card-icon">⏱</div>
            <h3 class="wn-card-title">Longitudinal Clock Started</h3>
            <p class="wn-card-description">Multi-year data takes years. Every month delayed is depth lost.</p>
          </div>
        </div>
      </div>
    </section>
  \`;

  // Insert HTML into pp-root


  <section id="pp-root" class="dl">
    <div class="dl-container">
      <div class="dl-header">
        <span class="dl-badge">The Platform</span>
        <h2 class="dl-title">Four layers of data no competitor can replicate</h2>
        <p class="dl-subtitle">Each layer compounds — building a dataset that takes years to replicate.</p>
      </div>

      <div class="dl-cards">
        <!-- Card 1: Engagement Data (Text Left, Image Right) -->
        <div class="dl-card dl-card-1">
          <div class="dl-card-content">
            <div class="dl-card-number">01</div>
            <h3 class="dl-card-title">Engagement Data</h3>
            <p class="dl-card-desc">Baseline behavioral patterns that establish each student's unique mentorship fingerprint.</p>
            <ul class="dl-card-bullets">
              <li>Session frequency &amp; duration</li>
              <li>Mentor Q&amp;A response rates</li>
              <li>Content engagement patterns</li>
              <li>App retention &amp; churn signals</li>
            </ul>
            <div class="dl-card-insight">
              <span class="dl-card-lock">🔒</span>
              <span class="dl-card-insight-text">Baseline data — establishes mentorship fingerprint</span>
            </div>
            <div class="dl-card-chart">📊</div>
          </div>
        </div>

        <!-- Card 2: Milestone Progression (Text Right, Image Left) -->
        <div class="dl-card dl-card-2">
          <div class="dl-card-content">
            <div class="dl-card-number">02</div>
            <h3 class="dl-card-title">Milestone Progression</h3>
            <p class="dl-card-desc">Student-volunteered and verified checkpoints no competitor captures at scale.</p>
            <ul class="dl-card-bullets">
              <li>Campus visits &amp; exam results</li>
              <li>Major selection checkpoints</li>
              <li>Scholarship applications</li>
              <li>Internship milestones secured</li>
            </ul>
            <div class="dl-card-insight">
              <span class="dl-card-lock">🔒</span>
              <span class="dl-card-insight-text">Student-volunteered &amp; verified — no competitor captures this</span>
            </div>
            <div class="dl-card-chart">📈</div>
          </div>
        </div>

        <!-- Card 3: Outcome Attribution (Text Left, Image Right) -->
        <div class="dl-card dl-card-3">
          <div class="dl-card-content">
            <div class="dl-card-number">03</div>
            <h3 class="dl-card-title">Outcome Attribution</h3>
            <p class="dl-card-desc">The causal link between mentorship activity and real academic and career outcomes.</p>
            <ul class="dl-card-bullets">
              <li>College enrollment confirmed</li>
              <li>Degree completion tracked</li>
              <li>Job placements &amp; field match</li>
              <li>Academic &amp; career outcomes</li>
            </ul>
            <div class="dl-card-insight">
              <span class="dl-card-lock">🔒</span>
              <span class="dl-card-insight-text">Links mentorship directly to outcomes — proven causally</span>
            </div>
            <div class="dl-card-chart">🎯</div>
          </div>
        </div>

        <!-- Card 4: Longitudinal Impact (Text Right, Image Left) -->
        <div class="dl-card dl-card-4">
          <div class="dl-card-content">
            <div class="dl-card-number">04</div>
            <h3 class="dl-card-title">Longitudinal Impact</h3>
            <p class="dl-card-desc">Multi-year, cross-institution career trajectory tracking — our exclusive data moat.</p>
            <ul class="dl-card-bullets">
              <li>5-10 year career trajectories</li>
              <li>Social mobility index scores</li>
              <li>Macro trend analysis</li>
              <li>STEM &amp; leadership pipeline</li>
            </ul>
            <div class="dl-card-insight">
              <span class="dl-card-lock">🔒</span>
              <span class="dl-card-insight-text">Multi-year cross-institution tracking — our exclusive moat</span>
            </div>
            <div class="dl-card-chart">📊</div>
          </div>
        </div>
      </div>

      <div class="dl-footer">
        <p>No EdTech competitor captures mentorship-to-career data longitudinally. This dataset takes years to build. <strong>We're already launching.</strong></p>
      </div>
    </div>
  </section>


  <section id="pp-root" class="ws">
    <div class="ws-container">
      <div class="ws-header">
        <span class="ws-badge">Who We Serve</span>
        <h2 class="ws-title">Built for those that believe in student success</h2>
        <p class="ws-subtitle">P3 meets your students where they are: on their phones.</p>
      </div>

      <div class="ws-cards">
        <!-- Card 1: Universities & HBCUs -->
        <div class="ws-card ws-card-1">
          <h3 class="ws-card-title">Universities &amp; HBCUs</h3>
          <p class="ws-card-role">VP Student Success • Career Services • Provost</p>
          <p class="ws-card-desc">Track outcomes from enrollment to placement. Build longitudinal data for accreditation.</p>
          <ul class="ws-card-checks">
            <li>AI Smart Match by industry, goals &amp; background</li>
            <li>Analytics dashboard with retention metrics</li>
            <li>Outcome attribution to graduation &amp; placement</li>
            <li>Industry benchmarking against peer institutions</li>
          </ul>
        </div>

        <!-- Card 2: Community Groups -->
        <div class="ws-card ws-card-2">
          <h3 class="ws-card-title">Community Groups</h3>
          <p class="ws-card-role">Youth Programs • After-School • Nonprofits</p>
          <p class="ws-card-desc">Bring career mentors to your youth. Track milestones and outcomes across your community programs.</p>
          <ul class="ws-card-checks">
            <li>Youth-focused career exploration pathways</li>
            <li>Milestone tracking from enrollment to placement</li>
            <li>Scholarship discovery &amp; application support</li>
            <li>Program-wide impact reports for grants</li>
          </ul>
        </div>

        <!-- Card 3: Corporate Teams -->
        <div class="ws-card ws-card-3">
          <h3 class="ws-card-title">Corporate Teams</h3>
          <p class="ws-card-role">DEI Leaders • CSR Directors • HR Executives</p>
          <p class="ws-card-desc">Scale employee mentorship and volunteer programs with verifiable community impact.</p>
          <ul class="ws-card-checks">
            <li>Co-branded portal for your volunteer mentors</li>
            <li>CSR/DEI impact reporting with verified metrics</li>
            <li>Talent pipeline connecting mentees to employment</li>
            <li>Grant-eligible outcome documentation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <section id="pp-root" class="rs">
    <div class="rs-container">
      <div class="rs-header">
        <span class="rs-badge">Resources</span>
        <h2 class="rs-title">Download the deck that fits your needs</h2>
        <p class="rs-subtitle">Explore our materials at your own pace.</p>
      </div>

      <div class="rs-cards">
        <!-- Card 1: Client Deck -->
        <div class="rs-card rs-card-1">
          <div class="rs-card-emoji">💼</div>
          <h3 class="rs-card-title">Client Deck</h3>
          <p class="rs-card-desc">Platform features, data layers, partnership tiers, and institutional ROI.</p>
          <a href="https://drive.google.com/file/d/1MfG5Cs8w8PYlLbirKytglL4hppKlOMGQ/view?usp=sharing" class="rs-card-link" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>

        <!-- Card 2: Investor Deck -->
        <div class="rs-card rs-card-2">
          <div class="rs-card-emoji">📈</div>
          <h3 class="rs-card-title">Investor Deck</h3>
          <p class="rs-card-desc">Market opportunity, revenue model, traction metrics, and our data moat.</p>
          <div class="rs-card-links">
            <a href="https://drive.google.com/file/d/19LQ4aOLe7XuTVD_uGSNh_L-WTmAMn7MO/view?usp=drive_link" class="rs-card-link" target="_blank" rel="noopener noreferrer">Download Deck</a>
            <a href="https://drive.google.com/file/d/1Yu5zPqUjb-C6LiuuL8K1gw3hXjhIw3Ar/view?usp=drive_link" class="rs-card-link" target="_blank" rel="noopener noreferrer">View 1-Pager</a>
          </div>
        </div>

        <!-- Card 3: Foundations & Grants -->
        <div class="rs-card rs-card-3">
          <div class="rs-card-emoji">🌱</div>
          <h3 class="rs-card-title">Foundations &amp; Grants</h3>
          <p class="rs-card-desc">Mission, impact data, community outcomes, and grant-eligible metrics.</p>
          <a href="https://drive.google.com/file/d/1IrFocCsboO6mLZsG3GAlHjmKv_V7a9Sn/view?usp=drive_link" class="rs-card-link" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      </div>
    </div>
  </section>


  <section id="pp-root" class="pr">
    <div class="pr-container">
      <div class="pr-header">
        <span class="pr-badge">Partnership Tiers</span>
        <h2 class="pr-title">Simple pricing. Transformative data.</h2>
        <p class="pr-subtitle">Free for students and mentors. Institutions invest in the intelligence layer.</p>
      </div>

      <!-- Desktop Table -->
      <div class="pr-table-wrapper">
        <table class="pr-table">
          <thead>
            <tr>
              <th class="pr-table-header-label"></th>
              <th class="pr-table-header">
                <div class="pr-tier-badge">Essential</div>
                <div class="pr-tier-price">\$10K <span>/yr</span></div>
                <div class="pr-tier-capacity">Up to 2,000 students</div>
              </th>
              <th class="pr-table-header pr-table-header-featured">
                <div class="pr-tier-badge pr-tier-badge-featured">Insights</div>
                <div class="pr-tier-price">\$25K <span>/yr</span></div>
                <div class="pr-tier-capacity">Up to 5,000 students</div>
              </th>
              <th class="pr-table-header">
                <div class="pr-tier-badge">Enterprise</div>
                <div class="pr-tier-price">Custom <span>/starting at \$30K</span></div>
                <div class="pr-tier-capacity">Unlimited students</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pr-feature">Annual impact reports</td>
              <td class="pr-check">✓</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Quarterly insights briefs</td>
              <td class="pr-check">✓</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Dedicated onboarding</td>
              <td class="pr-check">✓</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Analytics dashboard</td>
              <td class="pr-empty">—</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Industry benchmarking</td>
              <td class="pr-empty">—</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Data workshops &amp; training</td>
              <td class="pr-empty">—</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Customer success manager</td>
              <td class="pr-empty">—</td>
              <td class="pr-check pr-check-featured">✓</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">Co-branded student portal</td>
              <td class="pr-empty">—</td>
              <td class="pr-empty pr-empty-featured">—</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr>
              <td class="pr-feature">API access &amp; integrations</td>
              <td class="pr-empty">—</td>
              <td class="pr-empty pr-empty-featured">—</td>
              <td class="pr-check">✓</td>
            </tr>
            <tr class="pr-cta-row">
              <td></td>
              <td>
                <a href="mailto:team@pulseofp3.org?subject=Partnership%20Inquiry%20-%20Essential" class="pr-cta pr-cta-secondary">Get Started</a>
              </td>
              <td>
                <a href="mailto:team@pulseofp3.org?subject=Partner%20Demo%20Request" class="pr-cta pr-cta-primary">Schedule a Demo</a>
              </td>
              <td>
                <a href="mailto:team@pulseofp3.org?subject=Partnership%20Inquiry" class="pr-cta pr-cta-secondary">Contact Sales</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Accordion -->
      <div class="pr-mobile">
        <!-- Mobile Essential -->
        <div class="pr-accordion-card">
          <button class="pr-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <div>
              <div class="pr-acc-tier">Essential</div>
              <div class="pr-acc-price">\$10K/yr</div>
            </div>
            <span class="pr-acc-toggle">+</span>
          </button>
          <div class="pr-accordion-content">
            <div class="pr-acc-capacity">Up to 2,000 students</div>
            <ul class="pr-acc-features">
              <li class="pr-acc-check">Annual impact reports</li>
              <li class="pr-acc-check">Quarterly insights briefs</li>
              <li class="pr-acc-check">Dedicated onboarding</li>
            </ul>
            <a href="mailto:team@pulseofp3.org?subject=Partnership%20Inquiry%20-%20Essential" class="pr-cta pr-cta-secondary">Get Started</a>
          </div>
        </div>

        <!-- Mobile Insights -->
        <div class="pr-accordion-card pr-accordion-featured">
          <button class="pr-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <div>
              <div class="pr-acc-tier">Insights</div>
              <div class="pr-acc-price">\$25K/yr</div>
            </div>
            <span class="pr-acc-toggle">+</span>
          </button>
          <div class="pr-accordion-content">
            <div class="pr-acc-capacity">Up to 5,000 students</div>
            <ul class="pr-acc-features">
              <li class="pr-acc-check">Annual impact reports</li>
              <li class="pr-acc-check">Quarterly insights briefs</li>
              <li class="pr-acc-check">Dedicated onboarding</li>
              <li class="pr-acc-check">Analytics dashboard</li>
              <li class="pr-acc-check">Industry benchmarking</li>
              <li class="pr-acc-check">Data workshops &amp; training</li>
              <li class="pr-acc-check">Customer success manager</li>
            </ul>
            <a href="mailto:team@pulseofp3.org?subject=Partner%20Demo%20Request" class="pr-cta pr-cta-primary">Schedule a Demo</a>
          </div>
        </div>

        <!-- Mobile Enterprise -->
        <div class="pr-accordion-card">
          <button class="pr-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <div>
              <div class="pr-acc-tier">Enterprise</div>
              <div class="pr-acc-price">Custom</div>
            </div>
            <span class="pr-acc-toggle">+</span>
          </button>
          <div class="pr-accordion-content">
            <div class="pr-acc-capacity">Unlimited students (starting at \$30K/yr)</div>
            <ul class="pr-acc-features">
              <li class="pr-acc-check">Everything in Insights</li>
              <li class="pr-acc-check">Co-branded student portal</li>
              <li class="pr-acc-check">API access &amp; integrations</li>
              <li class="pr-acc-check">Custom integrations</li>
              <li class="pr-acc-check">Dedicated technical support</li>
            </ul>
            <a href="mailto:team@pulseofp3.org?subject=Partnership%20Inquiry" class="pr-cta pr-cta-secondary">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="ci" style="background-color: #faf7f4; padding: 48px 24px; position: relative;">
    <div style="max-width: 1200px; margin: 0 auto;">
      <!-- Badge -->
      <div style="text-align: center; margin-bottom: 24px;">
        <span class="badge" style="
          display: inline-block;
          background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        ">Community Impact</span>
      </div>

      <!-- Heading -->
      <h2 class="fade-in" style="
        text-align: center;
        font-size: clamp(28px, 5vw, 48px);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 16px 0;
        color: #1a1a1a;
      ">
        Talent is universal.
        <span style="background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Our data proves it.
        </span>
      </h2>

      <!-- Subtitle -->
      <p class="fade-in" style="
        text-align: center;
        font-size: 18px;
        color: #666;
        margin: 0 0 48px 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      ">
        Hundreds of students… millions to go.
      </p>

      <!-- Student Spotlight Cards -->
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 32px;
        margin-top: 48px;
      ">
        <!-- Card 1: Angel Ortiz -->
        <div class="fade-in" style="
          background: white;
          border-radius: 12px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">
          <!-- Image Placeholder -->
          <div style="
            width: 120px;
            height: 120px;
            margin: 0 auto 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
            font-weight: bold;
          ">AO</div>

          <!-- Name -->
          <h3 style="
            font-size: 20px;
            font-weight: 700;
            margin: 0 0 8px 0;
            color: #1a1a1a;
          ">Angel Ortiz</h3>

          <!-- Field -->
          <p style="
            font-size: 14px;
            color: #D93A3A;
            font-weight: 600;
            margin: 0 0 16px 0;
          ">System Engineering · Howard University</p>

          <!-- Bio -->
          <p style="
            font-size: 14px;
            line-height: 1.6;
            color: #555;
            margin: 0 0 16px 0;
          ">From humble beginnings, Angel founded the #CodingCollaborative introducing students to programming. After P3, he achieved a perfect 4.0 GPA. Angel is now pursuing a career as a Quantitative Business Analyst, focused on ethical innovation in healthcare technology.</p>

          <!-- Quote -->
          <blockquote style="
            font-size: 15px;
            font-style: italic;
            color: #D93A3A;
            margin: 16px 0 0 0;
            padding: 12px 0 0 0;
            border-top: 2px solid #f0f0f0;
          ">
            "Pulse of Perseverance motivated me to achieve a 4.0 and to give back by mentoring others."
          </blockquote>
        </div>

        <!-- Card 2: Daniel Osuchukwu -->
        <div class="fade-in" style="
          background: white;
          border-radius: 12px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">
          <!-- Image Placeholder -->
          <div style="
            width: 120px;
            height: 120px;
            margin: 0 auto 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
            font-weight: bold;
          ">DO</div>

          <!-- Name -->
          <h3 style="
            font-size: 20px;
            font-weight: 700;
            margin: 0 0 8px 0;
            color: #1a1a1a;
          ">Daniel Osuchukwu</h3>

          <!-- Field -->
          <p style="
            font-size: 14px;
            color: #D93A3A;
            font-weight: 600;
            margin: 0 0 16px 0;
          ">Information Technology · Towson University</p>

          <!-- Bio -->
          <p style="
            font-size: 14px;
            line-height: 1.6;
            color: #555;
            margin: 0 0 16px 0;
          ">Son of Nigerian immigrants, Daniel now serves in Boys Brigade Mentorship, 'Big Brothers' at Towson, and founding 'Boys To Men.' In February 2025, he was hired as P3's Digital Engagement Intern; a full-circle moment that shows how mentorship compounds.</p>

          <!-- Quote -->
          <blockquote style="
            font-size: 15px;
            font-style: italic;
            color: #D93A3A;
            margin: 16px 0 0 0;
            padding: 12px 0 0 0;
            border-top: 2px solid #f0f0f0;
          ">
            "My village kept me grounded. Now I'm building the village for the next generation."
          </blockquote>
        </div>
      </div>
    </div>
  </section>


  <section class="gl" style="background-color: #1a1a1a; padding: 40px 24px; position: relative;">
    <div style="max-width: 1200px; margin: 0 auto;">
      <!-- Heading -->
      <h2 class="fade-in" style="
        text-align: center;
        font-size: clamp(28px, 5vw, 48px);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 16px 0;
        color: white;
      ">
        The P3 community in action
      </h2>

      <!-- Subtitle -->
      <p class="fade-in" style="
        text-align: center;
        font-size: 18px;
        color: #999;
        margin: 0 0 48px 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      ">
        Mentorship moments, campus events, and career breakthroughs
      </p>

      <!-- Image Grid -->
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 16px;
        auto-rows: 180px;
      ">
        <!-- Image Placeholder 1 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1010 0%, #D93A3A 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(217,58,58,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Mentorship Session</div>

        <!-- Image Placeholder 2 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a2a40 0%, #4a7ba7 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,123,167,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Campus Event</div>

        <!-- Image Placeholder 3 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1a00 0%, #D4A574 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(212,165,116,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Workshop</div>

        <!-- Image Placeholder 4 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a2a1a 0%, #4a7a4a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,122,74,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Graduation Day</div>

        <!-- Image Placeholder 5 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a0a1a 0%, #9a3a5a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(154,58,90,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Mentor Meeting</div>

        <!-- Image Placeholder 6 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a1a2a 0%, #4a4a7a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,74,122,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Career Prep</div>

        <!-- Image Placeholder 7 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1a00 0%, #B8860B 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(184,134,11,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Networking Event</div>

        <!-- Image Placeholder 8 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a2a2a 0%, #4a8a8a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,138,138,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Study Group</div>

        <!-- Image Placeholder 9 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a0a0a 0%, #D93A3A 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(217,58,58,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Career Landing</div>

        <!-- Image Placeholder 10 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,74,74,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Team Photo</div>

        <!-- Image Placeholder 11 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1a10 0%, #D4A574 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(212,165,116,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Office Visit</div>

        <!-- Image Placeholder 12 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a2a10 0%, #6a8a3a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(106,138,58,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Impact Report</div>

        <!-- Image Placeholder 13 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a0a1a 0%, #8a2a5a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(138,42,90,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Success Story</div>

        <!-- Image Placeholder 14 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a0a2a 0%, #5a2a8a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(90,42,138,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Program Launch</div>

        <!-- Image Placeholder 15 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1a0a 0%, #C97b4a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(201,123,74,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Community Event</div>

        <!-- Image Placeholder 16 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a1a3a 0%, #4a4a9a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(74,74,154,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Celebration</div>

        <!-- Image Placeholder 17 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a1a1a 0%, #8a4a4a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(138,74,74,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Mentee Workshop</div>

        <!-- Image Placeholder 18 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a2a1a 0%, #3a7a3a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(58,122,58,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Growth Path</div>

        <!-- Image Placeholder 19 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #2a0a1a 0%, #7a2a4a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(122,42,74,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Partnership</div>

        <!-- Image Placeholder 20 -->
        <div class="fade-in" style="
          background: linear-gradient(135deg, #1a1a1a 0%, #5a5a5a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          text-align: center;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(90,90,90,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">Community Impact</div>
      </div>
    </div>
  </section>


  <section class="ct" id="contact" style="background-color: #faf7f4; padding: 48px 24px; position: relative;">
    <div style="max-width: 1200px; margin: 0 auto;">
      <!-- Badge -->
      <div style="text-align: center; margin-bottom: 24px;">
        <span class="badge" style="
          display: inline-block;
          background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        ">Get Started</span>
      </div>

      <!-- Heading -->
      <h2 class="fade-in" style="
        text-align: center;
        font-size: clamp(28px, 5vw, 48px);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 16px 0;
        color: #1a1a1a;
      ">
        Ready to transform student outcomes?
      </h2>

      <!-- Subtitle -->
      <p class="fade-in" style="
        text-align: center;
        font-size: 18px;
        color: #666;
        margin: 0 0 48px 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      ">
        Our team will work with you to find the right partnership model for your institution.
      </p>

      <!-- Two-Column Layout -->
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 48px;
        align-items: start;
        margin-top: 48px;
      ">
        <!-- Left Column: Contact Info -->
        <div class="fade-in" style="
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        ">
          <h3 style="
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 32px 0;
            color: #1a1a1a;
          ">Contact Information</h3>

          <!-- Email -->
          <div style="margin-bottom: 24px;">
            <label style="
              display: block;
              font-size: 12px;
              font-weight: 600;
              color: #D93A3A;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            ">Email</label>
            <p style="
              margin: 0;
              font-size: 16px;
              color: #1a1a1a;
              word-break: break-all;
            ">
              <a href="mailto:team@pulseofp3.org" style="color: #D93A3A; text-decoration: none;">team@pulseofp3.org</a>
            </p>
          </div>

          <!-- Headquarters -->
          <div style="margin-bottom: 24px;">
            <label style="
              display: block;
              font-size: 12px;
              font-weight: 600;
              color: #D93A3A;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            ">Headquarters</label>
            <p style="
              margin: 0;
              font-size: 16px;
              color: #1a1a1a;
            ">Chicago, IL</p>
          </div>

          <!-- Website -->
          <div style="margin-bottom: 0;">
            <label style="
              display: block;
              font-size: 12px;
              font-weight: 600;
              color: #D93A3A;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            ">Website</label>
            <p style="
              margin: 0;
              font-size: 16px;
              color: #1a1a1a;
            ">
              <a href="https://www.pulseofp3.org" target="_blank" style="color: #D93A3A; text-decoration: none;">www.pulseofp3.org</a>
            </p>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="fade-in" style="
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        ">
          <h3 style="
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 24px 0;
            color: #1a1a1a;
          ">Send us your details</h3>

          <form id="contactForm" style="display: flex; flex-direction: column; gap: 16px;">
            <!-- First Name -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">First Name</label>
              <input type="text" name="firstName" placeholder="First name" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'" />
            </div>

            <!-- Last Name -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Last Name</label>
              <input type="text" name="lastName" placeholder="Last name" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'" />
            </div>

            <!-- Work Email -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Work Email</label>
              <input type="email" name="workEmail" placeholder="your@institution.edu" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'" />
            </div>

            <!-- Institution -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Institution</label>
              <input type="text" name="institution" placeholder="University or College Name" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'" />
            </div>

            <!-- Your Role (Dropdown) -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Your Role</label>
              <select name="role" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
                cursor: pointer;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'">
                <option value="">Select role...</option>
                <option value="VP of Student Success">VP of Student Success</option>
                <option value="Career Services Director">Career Services Director</option>
                <option value="Chief Diversity Officer">Chief Diversity Officer</option>
                <option value="Provost / Dean">Provost / Dean</option>
                <option value="Superintendent">Superintendent</option>
                <option value="CSR / DEI Director">CSR / DEI Director</option>
                <option value="Nonprofit Executive">Nonprofit Executive</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- Primary Interest (Dropdown) -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Primary Interest</label>
              <select name="interest" required style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                transition: border-color 0.3s ease;
                cursor: pointer;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'">
                <option value="">Select interest...</option>
                <option value="Improving Student Retention">Improving Student Retention</option>
                <option value="Scaling Mentorship Programs">Scaling Mentorship Programs</option>
                <option value="Career Outcome Tracking">Career Outcome Tracking</option>
                <option value="DEI / Impact Reporting">DEI / Impact Reporting</option>
                <option value="Grant Compliance Data">Grant Compliance Data</option>
                <option value="General Partnership Inquiry">General Partnership Inquiry</option>
              </select>
            </div>

            <!-- Anything Else (Textarea) -->
            <div>
              <label style="
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 6px;
              ">Anything else?</label>
              <textarea name="message" placeholder="Tell us more about your institution's needs..." style="
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                font-family: inherit;
                box-sizing: border-box;
                resize: vertical;
                min-height: 100px;
                transition: border-color 0.3s ease;
              " onmouseover="this.style.borderColor='#D93A3A'" onmouseout="this.style.borderColor='#ddd'" onfocus="this.style.borderColor='#D93A3A'" onblur="this.style.borderColor='#ddd'"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" style="
              background: linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 6px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              width: 100%;
              margin-top: 8px;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(217,58,58,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

  // ========== INITIALIZATION & INTERACTIVITY CODE ==========

  const root = document.getElementById('pp-root');
  if (!root) return;

  // Inject all HTML sections (assuming Parts 1 & 2 are already injected)
  // This Part 3 appends to existing content
  const container = document.createElement('div');
  container.innerHTML = communityImpact + photoGallery + contactSection;
  root.appendChild(container);

  // =========================================================================
  // JAVASCRIPT INTERACTIVITY INITIALIZATION
  // =========================================================================

  // 1. INTERSECTION OBSERVER for fade-in animations
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });

  // Add fade-in CSS animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes scrollLogo {
      0% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);

  // 2. CONTACT FORM HANDLER
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Collect form data
      const formData = {
        firstName: this.querySelector('input[name="firstName"]').value,
        lastName: this.querySelector('input[name="lastName"]').value,
        workEmail: this.querySelector('input[name="workEmail"]').value,
        institution: this.querySelector('input[name="institution"]').value,
        role: this.querySelector('select[name="role"]').value,
        interest: this.querySelector('select[name="interest"]').value,
        message: this.querySelector('textarea[name="message"]').value
      };

      // Simulate sending (800ms delay)
      setTimeout(function() {
        submitBtn.style.background = '#4CAF50';
        submitBtn.textContent = 'Submitted!';
        submitBtn.style.cursor = 'default';

        // Build mailto body
        const body = encodeURIComponent(
          'Name: ' + formData.firstName + ' ' + formData.lastName + '\n' +
          'Email: ' + formData.workEmail + '\n' +
          'Institution: ' + formData.institution + '\n' +
          'Role: ' + formData.role + '\n' +
          'Interest: ' + formData.interest + '\n' +
          'Message: ' + formData.message
        );

        // Open mailto link
        window.location.href = 'mailto:team@pulseofp3.org?subject=Partnership Inquiry&body=' + body;

        // Reset after 3 seconds
        setTimeout(function() {
          submitBtn.style.background = 'linear-gradient(135deg, #D93A3A 0%, #8B2E2E 100%)';
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.cursor = 'pointer';
          contactForm.reset();
        }, 3000);
      }, 800);
    });
  }

  // 3. SMOOTH SCROLLING for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 4. NAV SCROLL EFFECT
  const navElement = document.querySelector('.p3-nav');
  if (navElement) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navElement.classList.add('scrolled');
        navElement.style.background = 'rgba(26, 26, 26, 0.95)';
        navElement.style.backdropFilter = 'blur(4px)';
      } else {
        navElement.classList.remove('scrolled');
        navElement.style.background = 'transparent';
        navElement.style.backdropFilter = 'none';
      }
    });
  }

  // 5. PRICING ACCORDION toggle function (if needed on this page)
  window.togglePrCard = function(el) {
    if (el.classList.contains('open')) {
      el.classList.remove('open');
    } else {
      // Close all other open cards
      document.querySelectorAll('.pricing-card.open').forEach(function(card) {
        if (card !== el) card.classList.remove('open');
      });
      el.classList.add('open');
    }
  };

  // 6. FORM INPUT FOCUS styling (inline already applied via onmouseover/onfocus)
  // Additional keyboard navigation support
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'SELECT' || focusedElement.tagName === 'TEXTAREA')) {
        focusedElement.style.borderColor = '#D93A3A';
      }
    }
  });



});
