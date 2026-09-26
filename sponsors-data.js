/*
 * SPONSOR LIST — this is the only file you need to touch when a sponsor signs up.
 * No HTML or CSS changes needed; the site reads this list automatically.
 *
 * To add a sponsor:
 *   1. Save their logo (PNG or SVG, transparent background if possible) into assets/sponsors/
 *   2. Add one entry to the correct tier's array below, e.g.:
 *      { name: "Acme Foods", logo: "assets/sponsors/acme-foods.png", url: "https://acme-foods.example.com" }
 *   3. Commit and push (or ask Claude to do it). The logo appears automatically
 *      in that tier's card, replacing the "Become our first ... sponsor" prompt
 *      once a tier has at least one entry.
 *
 * `url` is optional — leave it out (or set to "") if the sponsor doesn't have a
 * site/social link yet; the logo will still show, just without a click-through.
 */
const SPONSORS = {
  platinum: [
    // { name: "Business Name", logo: "assets/sponsors/business-name.png", url: "https://example.com" },
  ],
  gold: [
    // { name: "Business Name", logo: "assets/sponsors/business-name.png", url: "https://example.com" },
  ],
  bronze: [
    // { name: "Business Name", logo: "assets/sponsors/business-name.png", url: "https://example.com" },
  ]
};
