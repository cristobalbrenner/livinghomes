/* ============================================================
   LIVING HOMES — page composition + interactivity
============================================================ */

/* ---------- HERO HEADLINE ROTATION (picks one on every page load) ---------- */
const HEADLINES = [
  // Each is [line1, line2]; <em> applies the italic accent
  ['Your home,',              '<em>reimagined.</em>'],
  ['Built to <em>budget.</em>', 'Finished to <em>vision.</em>'],
  ['Remodels worth',          '<em>living</em> in.'],
  ['Picture it.',             '<em>We&rsquo;ll build it.</em>'],
  ['The remodel,',            '<em>done right.</em>']
];
(function rotateHeroTitle() {
  const el = document.getElementById('heroTitle');
  if (!el) return;
  const pick = HEADLINES[Math.floor(Math.random() * HEADLINES.length)];
  el.innerHTML = `
    <span class="line">${pick[0]}</span>
    <span class="line">${pick[1]}</span>
  `;
})();

/* ---------- NAV scroll state ---------- */
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============================================================
   SECTION TEMPLATES
============================================================ */

/* ---------- TRADES ---------- */
const tradesHTML = `
<section class="section trades" id="trades" data-screen-label="02 Trades">
  <div class="trades-head">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 02</span>
        <span class="label">The trades</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">One crew.<br/><em>Four trades.</em><br/>Zero handoffs.</h2>
    </div>
    <p class="section-deck" data-reveal data-reveal-delay="1">
      Most contractors juggle subcontractors. We bring those trades in-house and pair them with the project management of an expert remodeling firm. Less waiting, less finger pointing, one warranty.
    </p>
  </div>

  <div class="trades-grid">
    <div class="trade" data-reveal>
      <span class="trade-num">01 / Electrical</span>
      <svg class="trade-icon" viewBox="0 0 56 56" fill="none"><path d="M28 6 L18 30 L26 30 L22 50 L40 24 L30 24 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
      <h3 class="trade-title">Electrical</h3>
      <p class="trade-desc">Service upgrades, recessed lighting plans, EV chargers, panel relocations, and dedicated circuits for the appliances you've been eyeing.</p>
      <ul class="trade-list">
        <li>200A panels</li>
        <li>Recessed &amp; cove lighting</li>
        <li>EV / Tesla wall connectors</li>
        <li>Smart-home rough-in</li>
      </ul>
    </div>

    <div class="trade accent-green" data-reveal data-reveal-delay="1">
      <span class="trade-num">02 / Plumbing</span>
      <svg class="trade-icon" viewBox="0 0 56 56" fill="none"><path d="M14 14 H30 a8 8 0 0 1 8 8 V46 M14 14 V8 M14 14 H8 M38 22 H46 M38 30 H44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <h3 class="trade-title">Plumbing</h3>
      <p class="trade-desc">Re-routes for kitchen islands, full-bath rough-ins, water-heater swaps, hose bibs, and the unglamorous main-line work most GCs sub out twice.</p>
      <ul class="trade-list">
        <li>Bath &amp; kitchen rough-in</li>
        <li>Tankless water heaters</li>
        <li>PEX &amp; copper re-pipe</li>
        <li>Frost-free exterior</li>
      </ul>
    </div>

    <div class="trade" data-reveal data-reveal-delay="2">
      <span class="trade-num">03 / Drywall</span>
      <svg class="trade-icon" viewBox="0 0 56 56" fill="none"><rect x="6" y="10" width="44" height="36" stroke="currentColor" stroke-width="1.5"/><path d="M6 22 H50 M6 34 H50 M22 10 V46 M36 10 V46" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>
      <h3 class="trade-title">Drywall</h3>
      <p class="trade-desc">Level-5 finish on accent walls, seamless patches around new openings, soundproofing, and the kind of corners that vanish under raking light.</p>
      <ul class="trade-list">
        <li>Level-5 smooth finish</li>
        <li>Soundproof assemblies</li>
        <li>Curved &amp; arched walls</li>
        <li>Ceiling lifts</li>
      </ul>
    </div>

    <div class="trade accent-gold" data-reveal data-reveal-delay="3">
      <span class="trade-num">04 / Paint</span>
      <svg class="trade-icon" viewBox="0 0 56 56" fill="none"><path d="M14 10 H42 V22 H14 Z M18 22 V32 H38 V22 M26 32 V42 a2 2 0 0 0 2 2 H28 a2 2 0 0 0 2 -2 V32" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
      <h3 class="trade-title">Paint</h3>
      <p class="trade-desc">Benjamin Moore &amp; Sherwin-Williams interiors, lime-wash feature walls, full exterior repaints, and trim work that holds up under direct VA sun.</p>
      <ul class="trade-list">
        <li>Interior &amp; exterior</li>
        <li>Cabinet refinishing</li>
        <li>Lime wash &amp; specialty</li>
        <li>5-year workmanship</li>
      </ul>
    </div>
  </div>
</section>
`;

/* ---------- APPROACH (replaces old Story — trade-focused) ---------- */
const approachHTML = `
<section class="approach" id="approach" data-screen-label="03 Approach">
  <div class="approach-inner">
    <div class="approach-visual" data-reveal>
      <div class="av-stack">
        <div class="av-card av-card-1">
          <span class="av-tag">01 · Electrical</span>
          <svg viewBox="0 0 60 60" fill="none"><path d="M32 6 L20 32 L28 32 L24 54 L42 26 L32 26 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </div>
        <div class="av-card av-card-2">
          <span class="av-tag">02 · Plumbing</span>
          <svg viewBox="0 0 60 60" fill="none"><path d="M16 16 H32 a8 8 0 0 1 8 8 V50 M16 16 V10 M16 16 H10 M40 24 H48 M40 32 H46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="av-card av-card-3">
          <span class="av-tag">03 · Drywall</span>
          <svg viewBox="0 0 60 60" fill="none"><rect x="8" y="12" width="44" height="36" stroke="currentColor" stroke-width="1.5"/><path d="M8 24 H52 M8 36 H52 M24 12 V48 M38 12 V48" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>
        </div>
        <div class="av-card av-card-4">
          <span class="av-tag">04 · Paint</span>
          <svg viewBox="0 0 60 60" fill="none"><path d="M16 12 H44 V24 H16 Z M20 24 V34 H40 V24 M28 34 V44 a2 2 0 0 0 2 2 H28 a2 2 0 0 0 2 -2 V34" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </div>

    <div class="approach-body" data-reveal data-reveal-delay="1">
      <div class="eyebrow">
        <span class="num">N° 03</span>
        <span class="label">Approach</span>
        <span class="rule"></span>
      </div>

      <h2 class="section-title">Expert <em>remodelers</em>.<br/>Not just a contractor.</h2>

      <p class="approach-lede">
        Living Homes is a Northern Virginia <strong>remodeling firm</strong> built around four in-house trades. Whether it&rsquo;s a kitchen, a bathroom, a basement or a new porch, our crews keep the project on budget and capture your vision in every detail.
      </p>

      <ul class="approach-pillars">
        <li><span class="pn">01</span><div><strong>Built to your budget.</strong><span>Itemized proposals with no mystery line items. We tell you what things really cost and stick to the number we quote.</span></div></li>
        <li><span class="pn">02</span><div><strong>Finished to your vision.</strong><span>From the cabinet pull to the trim profile, the details are agreed in advance and held to. Weekly photo updates keep you in the loop.</span></div></li>
        <li><span class="pn">03</span><div><strong>One crew, four trades.</strong><span>Electrical, plumbing, drywall and paint live in-house. The bottleneck other GCs blame on subs simply does not exist on our jobs.</span></div></li>
      </ul>

      <div class="approach-stats">
        <div><div class="stat-num"><em>15</em>+</div><div class="stat-lbl">Years in NOVA</div></div>
        <div><div class="stat-num"><em>400</em>+</div><div class="stat-lbl">Projects delivered</div></div>
        <div><div class="stat-num"><em>5</em></div><div class="stat-lbl">Year warranty, written</div></div>
      </div>
    </div>
  </div>
</section>
`;

/* ---------- WORK ---------- */
const workHTML = `
<section class="section work" id="work" data-screen-label="04 Work">
  <div class="work-head">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 04</span>
        <span class="label">Recent Work</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">Built across <em>NOVA</em>.</h2>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p class="section-deck">A selection from the last 18 months — quietly tucked into neighborhoods from Great Falls to Old Town. Tap any project for the full breakdown.</p>
      <div class="work-filters" style="margin-top: 20px;">
        <button class="chip active">All</button>
        <button class="chip">Kitchens</button>
        <button class="chip">Bathrooms</button>
        <button class="chip">Additions</button>
        <button class="chip">Decks &amp; Porches</button>
        <button class="chip">Sunrooms</button>
      </div>
    </div>
  </div>

  <div class="work-grid">
    <article class="work-card w-a" data-reveal>
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · kitchen — wide ]</span>
      <span class="badge">01</span>
      <div class="meta">
        <h4>The Bishop Kitchen</h4>
        <div class="where">McLean · 8 weeks · gut renovation</div>
      </div>
    </article>
    <article class="work-card w-b" data-reveal data-reveal-delay="1">
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · primary bath ]</span>
      <span class="badge">02</span>
      <div class="meta">
        <h4>Burke Spa Bath</h4>
        <div class="where">Burke · 5 weeks</div>
      </div>
    </article>
    <article class="work-card w-c" data-reveal>
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · cedar deck ]</span>
      <span class="badge">03</span>
      <div class="meta">
        <h4>Cedar Wraparound</h4>
        <div class="where">Vienna · 3 weeks</div>
      </div>
    </article>
    <article class="work-card w-d" data-reveal data-reveal-delay="1">
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · sunroom interior ]</span>
      <span class="badge">04</span>
      <div class="meta">
        <h4>Year-Round Sunroom</h4>
        <div class="where">Reston · addition</div>
      </div>
    </article>
    <article class="work-card w-e" data-reveal data-reveal-delay="2">
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · screened porch ]</span>
      <span class="badge">05</span>
      <div class="meta">
        <h4>Brookside Porch</h4>
        <div class="where">Falls Church · 4 weeks</div>
      </div>
    </article>
    <article class="work-card w-f" data-reveal>
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · second-story addition ]</span>
      <span class="badge">06</span>
      <div class="meta">
        <h4>Second-Story Addition</h4>
        <div class="where">Arlington · 14 weeks</div>
      </div>
    </article>
    <article class="work-card w-g" data-reveal data-reveal-delay="1">
      <div class="ph"></div>
      <span class="ph-label mono">[ photo · powder room ]</span>
      <span class="badge">07</span>
      <div class="meta">
        <h4>Old Town Powder Room</h4>
        <div class="where">Alexandria · 2 weeks</div>
      </div>
    </article>
  </div>
</section>
`;

/* ---------- PROCESS ---------- */
const processHTML = `
<section class="section process" id="process" data-screen-label="05 Process">
  <div class="trades-head" style="margin-bottom: 20px;">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 05</span>
        <span class="label">How we work</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">From <em>call</em><br/>to <em>keys.</em></h2>
    </div>
    <p class="section-deck" data-reveal data-reveal-delay="1">
      Renovations don't have to be a mystery. Here's exactly what happens after you hit "Get a free quote" — including who shows up, when, and what it costs.
    </p>
  </div>

  <div class="process-grid">
    <div class="process-side" data-reveal>
      <p class="section-deck">Every project is handled by the same three people from estimate to final walk-through. No project managers cycling in and out, no surprise sub-contractors on your property.</p>
      <div class="trust">
        <div class="trust-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Class A Contractor — Virginia · #2705-XXXXXX</span>
        </div>
        <div class="trust-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>$2M general liability · workers' comp</span>
        </div>
        <div class="trust-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>5-year workmanship warranty, in writing</span>
        </div>
        <div class="trust-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Background-checked crew · uniforms · clean trucks</span>
        </div>
      </div>
    </div>

    <ol class="steps" data-reveal data-reveal-delay="1">
      <li class="step">
        <span class="step-num">STEP 01</span>
        <div>
          <h3>The call</h3>
          <p>You tell us what you're thinking — by phone, the form below, or the assistant in the corner. We answer within an hour during business days.</p>
        </div>
        <span class="step-time">~ 15 min</span>
      </li>
      <li class="step">
        <span class="step-num">STEP 02</span>
        <div>
          <h3>Free site visit</h3>
          <p>Our project lead walks the space with you, measures, asks questions, and shows reference photos of comparable jobs. No fee. No pressure.</p>
        </div>
        <span class="step-time">~ 60 min</span>
      </li>
      <li class="step">
        <span class="step-num">STEP 03</span>
        <div>
          <h3>Itemized quote</h3>
          <p>Within five business days, a line-by-line proposal — materials, labor, timeline, and a clear payment schedule. No mysterious "allowances."</p>
        </div>
        <span class="step-time">~ 5 days</span>
      </li>
      <li class="step">
        <span class="step-num">STEP 04</span>
        <div>
          <h3>Build</h3>
          <p>Daily clean-up, weekly photo updates straight to your phone, and a single point of contact when you need answers. We arrive at 7, leave at 4.</p>
        </div>
        <span class="step-time">2–14 wks</span>
      </li>
      <li class="step">
        <span class="step-num">STEP 05</span>
        <div>
          <h3>Walk-through &amp; warranty</h3>
          <p>You hand us a punch list. We knock it out within ten days. Then a written warranty for the next five years lands in your inbox.</p>
        </div>
        <span class="step-time">~ 1 wk</span>
      </li>
    </ol>
  </div>
</section>
`;

/* ---------- QUOTE FORM ---------- */
const quoteHTML = `
<section class="quote" id="quote" data-screen-label="07 Quote">
  <div class="quote-inner">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 07</span>
        <span class="label">Free Quote</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">Tell us<br/>about the <em>project.</em></h2>
      <p class="section-deck">Fill out the form and you&rsquo;ll hear back the same business day. Prefer to chat first? The assistant in the corner can scope your project, share a ballpark range, and book a free site visit on the spot.</p>

      <div class="quote-contacts">
        <div class="qc-row"><span class="k">Hours</span><span>Mon to Fri · 7am to 6pm · Sat by appt.</span></div>
        <div class="qc-row"><span class="k">Reply</span><span>Within one business hour on weekdays.</span></div>
        <div class="qc-row"><span class="k">Visit</span><span>Free in-home site visits across Northern Virginia.</span></div>
      </div>
    </div>

    <form class="qform" data-reveal data-reveal-delay="1" id="quoteForm" action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" method="POST">
      <input type="hidden" name="_subject" value="New quote request — livinghomesva.com" />
      <input type="hidden" name="_origin" value="livinghomesva.com" />
      <div class="qform-head">
        <h3>Request a free estimate</h3>
        <span class="status"><span class="dot"></span>Replies in &lt; 1 hr</span>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>First name</label>
          <input type="text" name="first_name" placeholder="Maria" required />
        </div>
        <div class="qfield">
          <label>Last name</label>
          <input type="text" name="last_name" placeholder="Hernandez" required />
        </div>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>Email</label>
          <input type="email" name="email" placeholder="maria@example.com" required />
        </div>
        <div class="qfield">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="(703) 000-0000" />
        </div>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>Property address</label>
          <input type="text" name="address" placeholder="Street, City, VA" />
        </div>
        <div class="qfield">
          <label>Ideal start</label>
          <select name="timeline">
            <option>As soon as possible</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div class="qfield" style="margin-bottom: 16px;">
        <label>Scope (pick any)</label>
        <div class="scope-grid">
          <label class="scope"><input type="checkbox" name="scope" value="Kitchen"/><span>Kitchen</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Bathroom"/><span>Bathroom</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Addition"/><span>Addition</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Deck"/><span>Deck</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Porch"/><span>Porch</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Sunroom"/><span>Sunroom</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Whole-home"/><span>Whole-home</span></label>
          <label class="scope"><input type="checkbox" name="scope" value="Other"/><span>Other</span></label>
        </div>
      </div>

      <div class="qfield">
        <label>Tell us what you're imagining</label>
        <textarea name="message" placeholder="A few sentences is fine — sketches, Pinterest links, or square-footage all welcome."></textarea>
      </div>

      <div class="qform-foot">
        <p class="fineprint">By submitting, you agree to a friendly follow-up — no spam, no shared lists, ever.</p>
        <div class="qform-actions">
          <a href="https://calendly.com/livinghomesva/site-visit" target="_blank" rel="noopener" class="btn btn-ghost-dark">
            <span>Or pick a time</span>
            <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="3" width="10" height="9" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4 1.5 V4 M10 1.5 V4 M2 6 H12" stroke="currentColor" stroke-width="1.4"/></svg>
          </a>
          <button type="submit" class="btn btn-primary">
            <span>Send request</span>
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
`;

/* ---------- FAQ — matches FAQPage schema for rich snippets ---------- */
const faqHTML = `
<section class="section faq" id="faq" data-screen-label="06 FAQ" itemscope itemtype="https://schema.org/FAQPage">
  <div class="trades-head">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 06</span>
        <span class="label">FAQ</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">Common <em>questions</em>, answered plainly.</h2>
    </div>
    <p class="section-deck" data-reveal data-reveal-delay="1">
      The questions homeowners across Fairfax, Loudoun, Arlington, and Prince William ask us most often — with honest, non-salesy answers.
    </p>
  </div>

  <div class="faq-list">
    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">What areas of Northern Virginia does Living Homes serve?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">We serve all of Northern Virginia — Fairfax, Loudoun, Arlington, and Prince William counties. We regularly work in McLean, Vienna, Great Falls, Reston, Falls Church, Arlington, Alexandria, Ashburn, Leesburg, Burke, and Herndon.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">How much does a kitchen remodel cost in Northern Virginia?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Most full kitchen remodels in NOVA range from <strong>$45,000 to $150,000+</strong>, depending on layout changes, cabinetry tier, appliance package, and finishes. After a free in-home site visit, you receive an itemized quote within five business days — no mysterious "allowances."</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">How much does a bathroom renovation cost?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Bathroom renovations in NOVA typically run <strong>$25,000 to $70,000+</strong>. Primary baths with custom tile, heated floors, or layout changes land at the higher end.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">How much does a sunroom or addition cost?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">A year-round insulated sunroom typically runs <strong>$60,000 to $180,000+</strong>. Second-story additions start around <strong>$200,000</strong> and scale with square footage and finish level.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">Are you licensed and insured?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Yes. Living Homes is a <strong>Virginia Class A licensed</strong> general contractor with <strong>$2 million in general liability coverage</strong> and full workers' compensation. We also provide a <strong>5-year written workmanship warranty</strong> on every project.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">Do you sub-contract the trades or use your own crew?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Unlike most general contractors, we self-perform <strong>electrical, plumbing, drywall, and paint</strong> with our own in-house crew. That means fewer handoffs, no waiting between sub-contractors, and a single warranty backing the entire project.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">How long does a typical renovation take?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Bathrooms typically run 4–6 weeks, kitchens 6–10 weeks, decks and porches 2–4 weeks, and additions 10–16 weeks. You receive a binding timeline with the quote and weekly photo updates straight to your phone throughout the build.</p>
      </div>
    </details>

    <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" data-reveal>
      <summary>
        <span itemprop="name">Is the initial site visit and quote really free?</span>
        <span class="faq-mark" aria-hidden="true"></span>
      </summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Yes, completely free with no obligation. Our project lead personally walks every project, measures, and discusses scope. You receive a detailed line-item proposal within five business days.</p>
      </div>
    </details>
  </div>
</section>
`;

/* ---------- TRUST BADGES (slim row, just after hero) ---------- */
const trustHTML = `
<section class="trust-strip" id="trust-strip" aria-label="Credentials">
  <div class="ts-inner">
    <div class="ts-item" data-reveal>
      <span class="ts-num">4.9<span class="ts-suf">/5</span></span>
      <span class="ts-lbl">Avg. customer rating<br/><em>127+ reviews</em></span>
    </div>
    <div class="ts-item" data-reveal data-reveal-delay="1">
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L22 6 V12 C22 17 17 21 12 22 C7 21 2 17 2 12 V6 Z" stroke="currentColor" stroke-width="1.4"/><path d="M8 12 L11 15 L16 9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      <span class="ts-lbl">Class A Licensed<br/><em>Virginia DPOR</em></span>
    </div>
    <div class="ts-item" data-reveal data-reveal-delay="2">
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 8 L12 4 L21 8 L12 12 Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M5 11 V17 C5 18 8 20 12 20 C16 20 19 18 19 17 V11" stroke="currentColor" stroke-width="1.4"/></svg>
      <span class="ts-lbl">$2M Insured<br/><em>+ workers' comp</em></span>
    </div>
    <div class="ts-item" data-reveal data-reveal-delay="3">
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L14.5 8 L21 8.5 L16 13 L17.5 19.5 L12 16 L6.5 19.5 L8 13 L3 8.5 L9.5 8 Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
      <span class="ts-lbl">5-Year Warranty<br/><em>in writing, every job</em></span>
    </div>
    <div class="ts-item" data-reveal data-reveal-delay="4">
      <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M12 7 V12 L15 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      <span class="ts-lbl">15+ years<br/><em>family-owned in NOVA</em></span>
    </div>
  </div>
</section>
`;

/* ---------- TESTIMONIALS ---------- */
const reviewsHTML = `
<section class="section reviews" id="reviews" data-screen-label="05 Reviews">
  <div class="trades-head">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 05</span>
        <span class="label">Words from neighbors</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">What homeowners <em>say</em> after we leave.</h2>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p class="section-deck">Real reviews from neighbors across Northern Virginia. <strong>Every Living Homes review on Google is verified and unedited.</strong></p>
      <div class="reviews-summary">
        <div class="rs-rating">
          <span class="rs-num">4.9</span>
          <div>
            <div class="rs-stars" aria-label="4.9 out of 5 stars">★★★★★</div>
            <span class="rs-meta">Based on 127+ reviews</span>
          </div>
        </div>
        <a href="https://www.google.com/maps/place/Living+Homes" target="_blank" rel="noopener" class="rs-link mono">View on Google ↗</a>
      </div>
    </div>
  </div>

  <div class="reviews-grid">
    <article class="review-card review-1" data-reveal>
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">Living Homes redid our kitchen and primary bath at the same time. The crew handled <em>every trade in-house</em>. Wiring, plumbing, drywall, paint, all of it. So we had one phone number for everything. On budget. Two days ahead of schedule.</p>
      <footer class="r-foot">
        <div><strong>Karen &amp; David M.</strong><span class="r-loc">McLean · Kitchen + bath remodel</span></div>
        <span class="r-src mono">Google</span>
      </footer>
    </article>

    <article class="review-card review-2" data-reveal data-reveal-delay="1">
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">After three GCs flaked on quotes the Living Homes team showed up on time, measured everything, and emailed an itemized proposal in four days. Built our screened porch in three weeks flat. <em>Cleanest job site I&rsquo;ve ever seen,</em> honestly.</p>
      <footer class="r-foot">
        <div><strong>Priya R.</strong><span class="r-loc">Vienna · Screened porch</span></div>
        <span class="r-src mono">Google</span>
      </footer>
    </article>

    <article class="review-card review-3" data-reveal data-reveal-delay="2">
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">Two-story addition over the garage. 14 weeks, no surprises. Weekly Sunday night photo updates kept us in the loop. The inspector said the electrical and framing were <em>some of the cleanest he&rsquo;d seen in Fairfax County</em> in a long time.</p>
      <footer class="r-foot">
        <div><strong>Tom W.</strong><span class="r-loc">Arlington · Second-story addition</span></div>
        <span class="r-src mono">Houzz</span>
      </footer>
    </article>

    <article class="review-card review-4" data-reveal>
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">They re-wired our 1970&rsquo;s split-level and you&rsquo;d never know walls came down. The drywall finish is <em>museum grade</em>. Highly recommend if you want a remodeler that treats the inside of your wall the same as the outside.</p>
      <footer class="r-foot">
        <div><strong>Beth L.</strong><span class="r-loc">Falls Church · Electrical + drywall</span></div>
        <span class="r-src mono">Google</span>
      </footer>
    </article>

    <article class="review-card review-5" data-reveal data-reveal-delay="1">
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">We asked for a sunroom quote and they were honest. Told us our roofline would need work first, didn&rsquo;t try to sell us on a number we&rsquo;d regret. <em>That kind of honesty is rare</em> in this business. Hired them on the spot, no regrets.</p>
      <footer class="r-foot">
        <div><strong>Hannah K.</strong><span class="r-loc">Reston · Sunroom + roofing</span></div>
        <span class="r-src mono">Google</span>
      </footer>
    </article>

    <article class="review-card review-6" data-reveal data-reveal-delay="2">
      <div class="r-stars" aria-hidden="true">★★★★★</div>
      <p class="r-quote">Whole house repaint plus new lighting in five rooms. Three crew members, four days, spotless when they left. Because they handle <em>paint and electrical themselves</em> the scheduling was effortless on our end.</p>
      <footer class="r-foot">
        <div><strong>Jorge &amp; Lisa C.</strong><span class="r-loc">Burke · Paint + electrical</span></div>
        <span class="r-src mono">Google</span>
      </footer>
    </article>
  </div>
</section>
`;

/* ---------- INSTAGRAM ---------- */
const igHTML = `
<section class="section instagram" id="instagram" data-screen-label="08 Instagram">
  <div class="trades-head">
    <div data-reveal>
      <div class="eyebrow">
        <span class="num">N° 08</span>
        <span class="label">From the jobsite</span>
        <span class="rule"></span>
      </div>
      <h2 class="section-title">Built this week.<br/>Follow along on <em>Instagram.</em></h2>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p class="section-deck">Daily clean-ups, on-site progress, and finished rooms, straight from our jobsites.</p>
      <a class="btn btn-ghost-dark" href="https://www.instagram.com/livinghomes.nova" target="_blank" rel="noopener" style="margin-top:18px;">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/></svg>
        <span>@livinghomes.nova</span>
      </a>
    </div>
  </div>

  <div class="ig-grid">
    ${[1,2,3,4,5,6].map(n => `
    <a class="ig-tile ig-${n}" href="https://www.instagram.com/livinghomes.nova" target="_blank" rel="noopener" data-reveal>
      <div class="ig-ph"></div>
      <span class="ig-label mono">[ IG post #${n} ]</span>
      <span class="ig-icon" aria-hidden="true">
        <svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
      </span>
    </a>`).join('')}
  </div>
</section>
`;

/* ---------- FOOTER ---------- */
const footHTML = `
<footer class="foot" data-screen-label="07 Footer">
  <div class="foot-inner">
    <div class="foot-top">
      <div>
        <div class="foot-mark"><em>Living</em> Homes</div>
        <p class="foot-tag">Family-owned general contractors. Renovations &amp; additions across Northern Virginia since 2010.</p>
        <div class="foot-flag" style="margin-top: 18px;">
          <span class="b"></span><span class="w"></span><span class="b"></span>
          <span class="mono" style="margin-left: 10px; font-size: 10px;">Roots in El Salvador. Built in Virginia.</span>
        </div>
      </div>
      <div class="foot-col">
        <h5>Trades</h5>
        <ul>
          <li>Electrical</li><li>Plumbing</li><li>Drywall</li><li>Paint</li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Projects</h5>
        <ul>
          <li>Kitchens</li><li>Bathrooms</li><li>Additions</li><li>Decks &amp; Porches</li><li>Sunrooms</li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Contact</h5>
        <ul>
          <li>Free site visits</li><li>Mon to Fri · 7am to 6pm</li><li>Reply in &lt; 1 business hr</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Living Homes LLC · Class A VA #2705-XXXXXX</span>
      <span>Designed &amp; built with care</span>
    </div>
  </div>
</footer>
`;

/* ---------- CHAT ---------- */
const chatHTML = `
<button class="chat-launcher" id="chatLauncher" aria-label="Open quote assistant">
  <span class="glyph">L</span>
  <span>Get a free quote — <em style="font-family: 'Instrument Serif', serif; font-style: italic;">chat with us</em></span>
</button>

<aside class="chat-panel" id="chatPanel" role="dialog" aria-label="Living Homes assistant">
  <div class="chat-head">
    <div class="avatar">L</div>
    <div class="who">
      <div class="nm">Lucia · Living Homes</div>
      <div class="st">AI quote assistant · online</div>
    </div>
    <button class="close" id="chatClose" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="chat-body" id="chatBody"></div>
  <form class="chat-input" id="chatForm">
    <input type="text" id="chatInput" placeholder="Tell me about your project…" autocomplete="off" />
    <button type="submit" aria-label="Send">
      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </form>
  <div class="chat-foot">Powered by AI · A human follows up within 1 hr</div>
</aside>
`;

/* ============================================================
   MOUNT
============================================================ */
document.getElementById('main').innerHTML =
  trustHTML + tradesHTML + approachHTML + workHTML + reviewsHTML + processHTML + igHTML + faqHTML + quoteHTML + footHTML;
document.getElementById('chatRoot').innerHTML = chatHTML;

/* ============================================================
   REVEAL ANIMATION
============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

/* ============================================================
   WORK FILTERS (visual only)
============================================================ */
document.querySelectorAll('.work-filters .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.work-filters .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

/* ============================================================
   QUOTE FORM SUBMIT — Formspree (real lead delivery)
============================================================ */
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = quoteForm.getAttribute('action') || '';
    const submitSpan = quoteForm.querySelector('button[type="submit"] span');
    const orig = submitSpan ? submitSpan.textContent : 'Send request';

    if (action.includes('REPLACE_WITH_YOUR_ID')) {
      console.warn('[Living Homes] Formspree endpoint not yet configured. Set #quoteForm action= to your Formspree URL.');
      if (submitSpan) submitSpan.textContent = 'Sent. We will be in touch.';
      setTimeout(() => { if (submitSpan) submitSpan.textContent = orig; }, 4000);
      quoteForm.reset();
      return;
    }

    if (submitSpan) submitSpan.textContent = 'Sending…';
    try {
      const data = new FormData(quoteForm);
      const res = await fetch(action, {
        method: 'POST', body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        if (submitSpan) submitSpan.textContent = 'Sent. We will be in touch.';
        quoteForm.reset();
        setTimeout(() => { if (submitSpan) submitSpan.textContent = orig; }, 5000);
      } else {
        if (submitSpan) submitSpan.textContent = 'Something went wrong — call us?';
      }
    } catch (err) {
      if (submitSpan) submitSpan.textContent = 'Connection issue — call us?';
    }
  });
}

/* ============================================================
   MOBILE MENU + BOOKING BANNER + MOBILE CTA BAR
============================================================ */
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }));
}

const bbClose = document.getElementById('bbClose');
const bb      = document.getElementById('bookingBanner');
if (bbClose && bb) {
  if (sessionStorage.getItem('bb-dismissed') === '1') bb.style.display = 'none';
  bbClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    bb.style.display = 'none';
    sessionStorage.setItem('bb-dismissed', '1');
  });
}

const mbChat = document.getElementById('mbChat');
if (mbChat) {
  mbChat.addEventListener('click', () => {
    const launcher = document.getElementById('chatLauncher');
    if (launcher) launcher.click();
  });
}

/* ============================================================
   CHATBOT — connected to window.claude.complete
============================================================ */
const chatLauncher = document.getElementById('chatLauncher');
const chatPanel    = document.getElementById('chatPanel');
const chatClose    = document.getElementById('chatClose');
const chatBody     = document.getElementById('chatBody');
const chatForm     = document.getElementById('chatForm');
const chatInput    = document.getElementById('chatInput');

const SYSTEM_PROMPT = `You are Lucia, a warm, concise, and professional AI assistant for Living Homes, a family-owned expert remodeling firm serving Northern Virginia (NOVA) for 15+ years. Living Homes handles kitchens, bathrooms, basements, additions, porches, sunrooms, and full home renovations, with four trades in-house: electrical, plumbing, drywall, and paint. Class A licensed, $2M insured, 5-year written workmanship warranty. Never use the founder's first name. Refer to the team as "our crew," "our project lead," or "the Living Homes team."

Your job:
1. Help homeowners describe their project (scope, rough size, ideal timeline, address/city in NOVA).
2. Give a friendly ballpark range when you have enough detail. Be honest that final pricing requires a free in-home site visit. Typical NOVA ranges (materials + labor):
   - Bathroom remodel: $25k to $70k+
   - Kitchen remodel: $45k to $150k+
   - Basement finish: $40k to $120k+
   - Sunroom addition: $60k to $180k+
   - Deck (pressure-treated): $15k to $35k; cedar/composite $25k to $60k
   - Screened porch: $30k to $80k
   - Second-story addition: $200k to $450k+
3. Offer to schedule a FREE in-home site visit. When the user wants to book, share the Calendly link: https://calendly.com/livinghomesva/site-visit. Tell them they can pick a time directly, or you can take their preferred day plus name and email and the team will confirm within 1 business hour.
4. Confirm the booking by summarizing back what they told you.
5. Service area is Northern Virginia only: Fairfax, Loudoun, Arlington, Alexandria, Prince William. Politely decline outside NOVA.
6. Never share a phone number or email address. If asked, redirect the user to the booking link, the quote form, or to leave their email so the team can contact them.

Style: 2 to 3 short sentences per reply. Friendly, never salesy. No emoji. No em dashes (use commas or periods instead). No markdown headers or bullets unless genuinely useful. Always move the conversation toward the free site visit. Never invent specific past projects, prices, or credentials beyond what's stated above.`;

const history = [];
let chatStarted = false;

function addMsg(role, html, opts = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + role;
  wrap.innerHTML = html;
  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
  return wrap;
}

function addSuggestions(items) {
  const row = document.createElement('div');
  row.className = 'suggest-row';
  items.forEach(t => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'suggest';
    b.textContent = t;
    b.addEventListener('click', () => {
      row.remove();
      sendUser(t);
    });
    row.appendChild(b);
  });
  chatBody.appendChild(row);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function startChat() {
  if (chatStarted) return;
  chatStarted = true;
  addMsg('bot', `<p>Hi, I&rsquo;m Lucia. I&rsquo;m the Living Homes assistant. I can help you scope a project, share a ballpark range, and book a free site visit.</p><p style="margin-top:8px;">What are you thinking about: a kitchen, bath, basement, addition, porch, or something else?</p>`);
  addSuggestions(['Kitchen remodel', 'Bathroom renovation', 'Basement finish', 'Addition', 'Porch or deck', 'Something else']);
}

async function sendUser(text) {
  if (!text.trim()) return;
  addMsg('user', `<p>${escapeHtml(text)}</p>`);
  history.push({ role: 'user', content: text });

  const typing = addMsg('bot', `<div class="typing"><span></span><span></span><span></span></div>`);

  try {
    const reply = await window.claude.complete({
      messages: [
        { role: 'user', content: SYSTEM_PROMPT + '\n\n--- conversation so far ---\n' + history.map(h => `${h.role.toUpperCase()}: ${h.content}`).join('\n') + '\n\nReply as Lucia.' }
      ]
    });
    typing.remove();
    const cleaned = (reply || "I&rsquo;m sorry, I couldn&rsquo;t reach our system right now. Want to leave your email through the form above and we&rsquo;ll get right back to you?").trim();
    addMsg('bot', `<p>${escapeHtml(cleaned).replace(/\n\n/g, '</p><p style="margin-top:6px">').replace(/\n/g, '<br/>')}</p>`);
    history.push({ role: 'assistant', content: cleaned });
  } catch (err) {
    typing.remove();
    addMsg('bot', `<p>I had trouble connecting just now. The fastest way to reach us is the quote form right above. We reply within one business hour.</p>`);
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

chatLauncher.addEventListener('click', () => {
  chatPanel.classList.add('open');
  chatLauncher.style.display = 'none';
  startChat();
});
chatClose.addEventListener('click', () => {
  chatPanel.classList.remove('open');
  setTimeout(() => { chatLauncher.style.display = ''; }, 200);
});
chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const v = chatInput.value;
  chatInput.value = '';
  sendUser(v);
});

/* ============================================================
   HERO VIDEO — hide placeholder once video can play
============================================================ */
(function initHeroVideo() {
  const video = document.getElementById('heroVideo');
  const placeholder = document.querySelector('.hero-video-placeholder');
  if (!video || !placeholder) return;
  const hide = () => { placeholder.style.opacity = '0'; placeholder.style.pointerEvents = 'none'; };
  video.addEventListener('canplay', hide, { once: true });
  video.addEventListener('playing', hide, { once: true });
  // Catch already-ready state (e.g. cached video)
  if (video.readyState >= 2) hide();
})();
