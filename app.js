/* ============================================================
   LIVING HOMES — page composition + interactivity
============================================================ */

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
      Most contractors juggle sub-contractors. We <em>are</em> the subs — electrical, plumbing, drywall, and paint live in-house, scheduled by Luis personally. Less waiting, less finger-pointing, one warranty.
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

/* ---------- STORY ---------- */
const storyHTML = `
<section class="story" id="story" data-screen-label="03 Story">
  <div class="story-inner">
    <div class="story-portrait" data-reveal>
      <span class="frame-label mono">Luis · job site, Vienna VA · 2024</span>
      <span class="frame-tag">Founder</span>
    </div>

    <div data-reveal data-reveal-delay="1">
      <div class="eyebrow">
        <span class="num">N° 03</span>
        <span class="label">The Story</span>
        <span class="rule"></span>
      </div>

      <p class="story-quote">
        "If it's not a house I'd let my own family sleep in, <em>it's not done yet.</em>"
      </p>

      <div class="story-body">
        <p>Luis arrived in Northern Virginia twenty-two years ago carrying a worn set of trowels and a habit of being early. He spent the next decade as a trusted sub-contractor for Moss Building &amp; Design — running electrical, plumbing, framing, and finish on some of the most exacting renovations in McLean, Vienna, and Great Falls.</p>
        <p>In 2010 he started Living Homes around his kitchen table with one truck, his brother, and a promise: the same crew that demos your wall on Monday will be the one that paints the trim on Friday. Fifteen years later, that promise still holds — only now the truck is a fleet and the kitchen table is in a workshop in Chantilly.</p>
      </div>

      <div class="story-sign">
        <span class="story-sign-name">Luis A.</span>
        <span class="story-sign-role">Founder · Lead<br/>Living Homes</span>
      </div>

      <div class="story-stats">
        <div>
          <div class="stat-num"><em>15</em>+</div>
          <div class="stat-lbl">Years independent</div>
        </div>
        <div>
          <div class="stat-num"><em>400</em>+</div>
          <div class="stat-lbl">Homes touched</div>
        </div>
        <div>
          <div class="stat-num"><em>1</em></div>
          <div class="stat-lbl">Family running it</div>
        </div>
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
          <p>Luis walks the space with you, measures, asks questions, and shows reference photos of comparable jobs. No fee. No pressure.</p>
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
      <p class="section-deck">Fill out the form, or chat with our assistant in the corner — she'll triage your scope and book Luis directly on the calendar. Either way, you'll hear from a human within one business hour.</p>

      <div class="quote-contacts">
        <div class="qc-row"><span class="k">Call</span><a href="tel:+15555550130">(703) 555-0130</a></div>
        <div class="qc-row"><span class="k">Email</span><a href="mailto:hello@livinghomesva.com">hello@livinghomesva.com</a></div>
        <div class="qc-row"><span class="k">Visit</span><span>14201 Sullyfield Cir, Chantilly VA 20151</span></div>
        <div class="qc-row"><span class="k">Hours</span><span>Mon–Fri · 7am – 6pm · Sat by appt.</span></div>
      </div>
    </div>

    <form class="qform" data-reveal data-reveal-delay="1" onsubmit="event.preventDefault(); submitQuote();">
      <div class="qform-head">
        <h3>Request a free estimate</h3>
        <span class="status"><span class="dot"></span>Replies in &lt; 1 hr</span>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>First name</label>
          <input type="text" placeholder="Maria" required />
        </div>
        <div class="qfield">
          <label>Last name</label>
          <input type="text" placeholder="Hernandez" required />
        </div>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>Email</label>
          <input type="email" placeholder="maria@example.com" required />
        </div>
        <div class="qfield">
          <label>Phone</label>
          <input type="tel" placeholder="(703) 000-0000" />
        </div>
      </div>

      <div class="qform-row">
        <div class="qfield">
          <label>Property address</label>
          <input type="text" placeholder="Street, City, VA" />
        </div>
        <div class="qfield">
          <label>Ideal start</label>
          <select>
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
          <label class="scope"><input type="checkbox"/><span>Kitchen</span></label>
          <label class="scope"><input type="checkbox"/><span>Bathroom</span></label>
          <label class="scope"><input type="checkbox"/><span>Addition</span></label>
          <label class="scope"><input type="checkbox"/><span>Deck</span></label>
          <label class="scope"><input type="checkbox"/><span>Porch</span></label>
          <label class="scope"><input type="checkbox"/><span>Sunroom</span></label>
          <label class="scope"><input type="checkbox"/><span>Whole-home</span></label>
          <label class="scope"><input type="checkbox"/><span>Other</span></label>
        </div>
      </div>

      <div class="qfield">
        <label>Tell us what you're imagining</label>
        <textarea placeholder="A few sentences is fine — sketches, Pinterest links, or square-footage all welcome."></textarea>
      </div>

      <div class="qform-foot">
        <p class="fineprint">By submitting, you agree to a friendly follow-up — no spam, no shared lists, ever.</p>
        <button type="submit" class="btn btn-primary">
          <span>Send request</span>
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
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
        <p itemprop="text">Yes — completely free, no obligation. Luis personally walks every project, measures, and discusses scope. You receive a detailed line-item proposal within five business days.</p>
      </div>
    </details>
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
          <li>(703) 555-0130</li><li>hello@livinghomesva.com</li><li>Chantilly, VA 20151</li>
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
  tradesHTML + storyHTML + workHTML + processHTML + faqHTML + quoteHTML + footHTML;
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
   QUOTE FORM SUBMIT (demo)
============================================================ */
window.submitQuote = function() {
  const btn = document.querySelector('.qform .btn-primary span');
  if (btn) { btn.textContent = 'Sent — Luis will be in touch'; }
  setTimeout(() => { if (btn) btn.textContent = 'Send request'; }, 4000);
};

/* ============================================================
   CHATBOT — connected to window.claude.complete
============================================================ */
const chatLauncher = document.getElementById('chatLauncher');
const chatPanel    = document.getElementById('chatPanel');
const chatClose    = document.getElementById('chatClose');
const chatBody     = document.getElementById('chatBody');
const chatForm     = document.getElementById('chatForm');
const chatInput    = document.getElementById('chatInput');

const SYSTEM_PROMPT = `You are Lucia, a warm, concise, and professional AI assistant for Living Homes, a family-owned general contractor in Northern Virginia (NOVA). Living Homes specializes in renovations and additions — kitchens, bathrooms, decks, porches, and sunrooms — and self-performs electrical, plumbing, drywall, and paint with their in-house crew. Founder is Luis, who started as a Moss Building & Design subcontractor and has been independent 15+ years. Class A licensed, insured, 5-year workmanship warranty.

Your job:
1. Help homeowners describe their project (scope, rough size, ideal timeline, address/city in NOVA).
2. Give a friendly ballpark range when you have enough detail. Be honest that final pricing requires a site visit. Typical NOVA ranges to use as anchors (per project, materials + labor):
   - Bathroom remodel: $25k–$70k+
   - Kitchen remodel: $45k–$150k+
   - Sunroom addition: $60k–$180k+
   - Deck (pressure-treated): $15k–$35k; cedar/composite $25k–$60k
   - Screened porch: $30k–$80k
   - Second-story addition: $200k–$450k+
3. Offer to schedule a FREE in-home estimate. Ask for preferred day/time and best contact (email or phone).
4. Confirm the booking by summarizing back what they told you. Reassure that Luis or his team will confirm within one business hour.
5. Service area is Northern Virginia: Fairfax, Loudoun, Arlington, Alexandria, Prince William. Politely decline outside NOVA.

Style: 2–3 short sentences per reply. Friendly, never salesy. No emoji. No markdown headers or bullets unless genuinely useful. Always move the conversation toward the free site visit.`;

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
  addMsg('bot', `<p>Hi, I'm Lucia 👋 — Living Homes' assistant. I can help you scope a project, share a ballpark estimate, and book a free site visit with Luis.</p><p style="margin-top:8px;">What are you thinking about renovating?</p>`);
  addSuggestions(['Kitchen remodel', 'Bathroom renovation', 'Build a deck', 'Sunroom addition', 'Something else']);
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
    const cleaned = (reply || "I'm sorry — I couldn't reach our system. Want me to take your number and have Luis call you back directly?").trim();
    addMsg('bot', `<p>${escapeHtml(cleaned).replace(/\n\n/g, '</p><p style="margin-top:6px">').replace(/\n/g, '<br/>')}</p>`);
    history.push({ role: 'assistant', content: cleaned });
  } catch (err) {
    typing.remove();
    addMsg('bot', `<p>I had trouble connecting just now. You can also call us at (703) 555-0130 or use the form above — Luis will get right back to you.</p>`);
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
