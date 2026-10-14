/*
 * SPONSOR LIST — this is the only file you need to touch when a sponsor signs up.
 * No HTML or CSS changes needed; the site reads this list automatically.
 *
 * To add a sponsor:
 *   1. Save their logo (PNG or SVG, transparent background if possible) into assets/sponsors/
 *   2. Add one entry to the correct tier's array below, e.g.:
 *      { name: "Acme Foods", logo: "assets/sponsors/acme-foods.png", url: "https://acme-foods.example.com" }
 *   3. Commit and push (or ask Claude to do it). The logo appears automatically
 *      in the "Our Sponsors" showcase above the pricing tiers, combined across
 *      all three tiers. The "Become our first ... sponsor" prompts on each
 *      tier card stay as-is either way — they're always open for more sponsors.
 *
 * `url` is optional — leave it out (or set to "") if the sponsor doesn't have a
 * site/social link yet; the logo will still show, just without a click-through.
 *
 * `blurb` and `video` are also optional — add them for a sponsor who wants a short
 * promo message and/or a video link shown under their logo in the showcase.
 */
const SPONSORS = {
  platinum: [
    // { name: "Business Name", logo: "assets/sponsors/business-name.png", url: "https://example.com" },
  ],
  gold: [
    { name: "Serene Montessori", logo: "assets/sponsors/serene.png", url: "https://www.facebook.com/people/Serene-Montessori/61571863388376/",
      blurb: `🌿 Serene Montessori🌿
Home-Based Montessori Preschool in Marysville, WA

🌱we have a few openings left for this academic year !🌱

📸 Please call to schedule a classroom tour and learn more about our Montessori program.
🔗 https://tinyurl.com/5f55fwab


✨ Serene Montessori – Where curiosity blossoms and children thrive.`,
      video: "https://www.facebook.com/share/v/1Ez3YMhK5e/" },
  ],
  bronze: [
    // { name: "Business Name", logo: "assets/sponsors/business-name.png", url: "https://example.com" },
  ]
};
