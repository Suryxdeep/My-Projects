/**
 * Americos Chemicals Pvt Ltd — Product Catalogue
 * Global products array (var, not const/let/export) for universal script access.
 */

var products = [
  /* ─────────────────────────────────────────────
     THERMOCHROMIC  (IDs 1–5)  🌡️
  ───────────────────────────────────────────── */
  {
    id: 1,
    name: "Thermochromic Red→Clear 31°C Powder",
    category: "thermochromic",
    price: 1200,
    oldPrice: 1500,
    weight: "50g",
    description:
      "Industry-grade microencapsulated thermochromic pigment that transitions from vivid red to completely transparent at 31 °C. Ideal for novelty inks, smart packaging and temperature-indicating applications.",
    uses: ["Novelty Inks", "Smart Packaging", "Textiles", "Coatings"],
    badge: "Hot",
    emoji: "🌡️",
    colorFrom: "#e63946",
    colorTo: "#f0f0f0",
    activationTemp: 31,
    rating: 4.7,
    reviews: 218,
    inStock: true
  },
  {
    id: 2,
    name: "Thermochromic Blue→White 45°C Powder",
    category: "thermochromic",
    price: 1350,
    oldPrice: 1700,
    weight: "50g",
    description:
      "High-temperature activation pigment perfect for hot-beverage cups, cosmetic formulas and heat-sensitive labels. Shifts from deep cobalt blue to pure white above 45 °C.",
    uses: ["Hot-Cup Printing", "Cosmetics", "Safety Labels", "Toys"],
    badge: "New",
    emoji: "🌡️",
    colorFrom: "#0077b6",
    colorTo: "#ffffff",
    activationTemp: 45,
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  {
    id: 3,
    name: "Thermochromic Black→Yellow 28°C Powder",
    category: "thermochromic",
    price: 1450,
    oldPrice: 1800,
    weight: "100g",
    description:
      "Body-heat-activated pigment with a dramatic black-to-yellow reveal effect. Formulated for fabric screen printing, nail art and interactive point-of-sale displays.",
    uses: ["Fabric Printing", "Nail Art", "POS Displays", "Security Ink"],
    badge: "Sale",
    emoji: "🌡️",
    colorFrom: "#111111",
    colorTo: "#ffd166",
    activationTemp: 28,
    rating: 4.8,
    reviews: 307,
    inStock: true
  },
  {
    id: 4,
    name: "Thermochromic Green→Clear 37°C Liquid",
    category: "thermochromic",
    price: 980,
    oldPrice: null,
    weight: "25g",
    description:
      "Water-based liquid thermochromic concentrate optimised for inkjet and flexographic printing. Activates precisely at human body temperature (37 °C).",
    uses: ["Flexo Printing", "Medical Labels", "Packaging", "Educational Kits"],
    badge: "",
    emoji: "🌡️",
    colorFrom: "#2dc653",
    colorTo: "#f8f9fa",
    activationTemp: 37,
    rating: 4.3,
    reviews: 89,
    inStock: true
  },
  {
    id: 5,
    name: "Thermochromic Purple→Pink 33°C Powder",
    category: "thermochromic",
    price: 1600,
    oldPrice: 2000,
    weight: "50g",
    description:
      "Dual-tone decorative pigment for premium fashion textile printing and nail gel systems. Warm-touch reveals a romantic pink from deep violet at 33 °C.",
    uses: ["Fashion Textiles", "Nail Gel", "Ceramics", "Candle Coatings"],
    badge: "Hot",
    emoji: "🌡️",
    colorFrom: "#7209b7",
    colorTo: "#f72585",
    activationTemp: 33,
    rating: 4.6,
    reviews: 172,
    inStock: false
  },

  /* ─────────────────────────────────────────────
     PHOTOCHROMIC  (IDs 6–9)  ☀️
  ───────────────────────────────────────────── */
  {
    id: 6,
    name: "Photochromic Blue UV Pigment",
    category: "photochromic",
    price: 1800,
    oldPrice: 2200,
    weight: "25g",
    description:
      "Premium naphthopyran-based photochromic pigment that turns intense blue on exposure to UV/sunlight and returns to colourless indoors within seconds. Excellent fatigue resistance (>50k cycles).",
    uses: ["Sunglasses Lenses", "Security Printing", "Textiles", "Cosmetics"],
    badge: "New",
    emoji: "☀️",
    colorFrom: "#ffffff",
    colorTo: "#1d3557",
    activationTemp: null,
    rating: 4.9,
    reviews: 421,
    inStock: true
  },
  {
    id: 7,
    name: "Photochromic Purple UV Pigment",
    category: "photochromic",
    price: 1950,
    oldPrice: 2400,
    weight: "50g",
    description:
      "UV-activated violet pigment with rapid colour-change kinetics. Formulated for outdoor apparel, anti-counterfeit inks and interactive art installations.",
    uses: ["Outdoor Apparel", "Anti-Counterfeit", "Art Installations", "Plastics"],
    badge: "Hot",
    emoji: "☀️",
    colorFrom: "#f8f9fa",
    colorTo: "#7209b7",
    activationTemp: null,
    rating: 4.7,
    reviews: 285,
    inStock: true
  },
  {
    id: 8,
    name: "Photochromic Red UV Powder",
    category: "photochromic",
    price: 2100,
    oldPrice: null,
    weight: "25g",
    description:
      "High-performance red-forming photochromic suitable for coatings, screen printing and injection-moulded plastics. Maintains colour fidelity after extended UV exposure.",
    uses: ["Plastics Moulding", "Screen Printing", "Coatings", "Fashion"],
    badge: "Sale",
    emoji: "☀️",
    colorFrom: "#eeeeee",
    colorTo: "#d62828",
    activationTemp: null,
    rating: 4.4,
    reviews: 163,
    inStock: true
  },
  {
    id: 9,
    name: "Photochromic Yellow-Orange UV Pigment",
    category: "photochromic",
    price: 2300,
    oldPrice: 2800,
    weight: "100g",
    description:
      "Vivid warm-tone photochromic that delivers a brilliant yellow-to-orange shift under sun exposure. A favourite for children's toys, promotional merchandise and novelty stationery.",
    uses: ["Children's Toys", "Stationery", "Promotional Items", "Ceramics"],
    badge: "",
    emoji: "☀️",
    colorFrom: "#fff3b0",
    colorTo: "#f77f00",
    activationTemp: null,
    rating: 4.2,
    reviews: 97,
    inStock: false
  },

  /* ─────────────────────────────────────────────
     GLOW IN DARK  (IDs 10–12)  ✨
  ───────────────────────────────────────────── */
  {
    id: 10,
    name: "Neon Green Glow in Dark Powder",
    category: "glow",
    price: 850,
    oldPrice: 1100,
    weight: "100g",
    description:
      "SrAl2O4-based long-afterglow phosphorescent pigment with >10-hour glow duration. Produces a bright neon-green luminescence after just 5 minutes of light charging. Non-toxic, non-radioactive.",
    uses: ["Safety Signage", "Paints & Coatings", "Fishing Lures", "Interior Decor"],
    badge: "Hot",
    emoji: "✨",
    colorFrom: "#b7e4c7",
    colorTo: "#52b788",
    activationTemp: null,
    rating: 4.8,
    reviews: 534,
    inStock: true
  },
  {
    id: 11,
    name: "Sky Blue Glow in Dark Pigment",
    category: "glow",
    price: 920,
    oldPrice: null,
    weight: "50g",
    description:
      "Ultra-bright blue-emitting phosphorescent pigment with exceptional charging speed. Perfect for artistic resin pours, jewellery and architectural accent lighting.",
    uses: ["Resin Art", "Jewellery Making", "Architectural Accents", "Pottery"],
    badge: "New",
    emoji: "✨",
    colorFrom: "#ade8f4",
    colorTo: "#0077b6",
    activationTemp: null,
    rating: 4.6,
    reviews: 312,
    inStock: true
  },
  {
    id: 12,
    name: "Aqua Teal Glow in Dark Powder",
    category: "glow",
    price: 800,
    oldPrice: 950,
    weight: "25g",
    description:
      "Fine-grade aqua-teal phosphorescent powder for water-based and solvent-based paint systems. Bright afterglow persists for 8+ hours; compatible with epoxy, polyurethane and latex binders.",
    uses: ["Epoxy Flooring", "Outdoor Signs", "Toys", "Nail Art"],
    badge: "Sale",
    emoji: "✨",
    colorFrom: "#99d98c",
    colorTo: "#168aad",
    activationTemp: null,
    rating: 3.8,
    reviews: 76,
    inStock: true
  }
];
