import { Category, Certification, Equipment } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "functional-wipes",
    badge: "INDUSTRIAL & MEDICAL",
    title: "Functional Wipes",
    subTitle: "Specialized cleaning solutions for sensitive manufacturing and healthcare environments.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsfkP9MoZHcXCHf9mUCP0zse-hSI7kgP6ahVqvLjt8ay9cFt_YdXgk8SooAKVD9Z1tetSShas2YC8LBwXCcs8unlew2-vL_QiJCjmmohfnjdDR9IfoStDkzC88VsUK8gjaYa2s5PMqEqfRjrN3CtyK26fhGvBnvKS1CkXxwuHZR0Ae2-3qqt35hND1FRkoDWD5OG3heTJR1bR8fxFDmPiNS8QTkJDWU1KR2ki2eoWEYlDiP-_DSpvdYzBgg",
    description: "Engineered specifically to prevent cross-contamination and sanitize effectively. Ideal for clinical rooms, high-tech semiconductor fabs, diagnostic labs, and medical instrument wiping. Substrate is highly-absorbent, low-tint, robust polyester-cellulose blend.",
    standardGSM: "50 - 68 GSM Spunlace / Poly-Cellulose Blend",
    standardIngredients: "Isopropyl Alcohol (IPA) 70%, Benzalkonium Chloride, Sterile pure water",
    availableSizes: ["150mm x 150mm", "200mm x 200mm", "230mm x 230mm"],
    commonSheetCounts: [50, 80, 100, 150]
  },
  {
    id: "lens-screen",
    badge: "OPTICAL CARE",
    title: "Lens & Screen Cleaning",
    subTitle: "High-precision cleaning wipes for pristine glasses, cameras, and display touchscreens.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuMtAHaKbZOpIHpqDRdDdg6b3vWO4mA5o4abb0qYzBJejiFuuYoTDYhfcNaJcdJIHKNVA60hjTgKcms71TxwOFNacEWmJvL86t9Gb7Efr2l_JtQcQiY46bunxzzu79bxWf9UzyjYNttvUCwnNTlzXgQn1trokryuZv9ax72BdJv4LLba24A0lA6H8Q4qqFzSrVvSKkwb4ZIpVz7Npbwx0g_l0028fzVWDDjojrPHldUwOmHSzz44nowdkQl",
    description: "Microfiber spunlace structure optimized for smudge removal without leaving dry streaks, micro-scratches, or chemical residues. Pre-saturated with streak-free anti-static formula ideal for premium camera lenses, eyeglasses, microscope lenses, and digital display screens.",
    standardGSM: "35 - 45 GSM Micro-fine Spunlace Nonwoven",
    standardIngredients: "Bio-degradable surfactant system, Anti-fogging additive, Deionized ultra-pure water",
    availableSizes: ["100mm x 120mm", "120mm x 150mm"],
    commonSheetCounts: [30, 50, 100]
  },
  {
    id: "pet-care",
    badge: "GENTLE FORMULAS",
    title: "Pet Care Hygiene",
    subTitle: "Ph-balanced premium formulations engineered safely for pet grooming and sensitive paws.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLs7Dvq4smKcJVDbRrYi_0ZnmoLKn8RhCyqlHnU2itQ8K2mdLnM1ppd5J6bIcQUhqbbbTzwSY21ZfNZbfOFsOL4ozd4DXEOuHmvUTGjCHvZ1ll369YoveVtT5ROM-CMoxR8m3Czs4kQpOWCqpkIGFwAyn4F8WIhlgDCZkFT7jJHnKYTHA_PnGf82rCIfE_euoMDqlLE7WB-xiJJT38MWvIqxFvL2p5pCbWSF_X_6L-WtzGKv4bLNu3fqPGEO",
    description: "Extra thick, textured cross-lapped spunlace sheets that lock in dirt, loose hair, and odors. Specially pH-balanced (pH 6.5 - 7.5) to avoid dry skin, completely free from parabens, alcohols, or synthetic irritants. Perfect for daily paw sanitization, ear-flaps, and coat deodorizing.",
    standardGSM: "55 - 70 GSM Cross-lapped Spunlace Viscose/Polyester",
    standardIngredients: "Aloe Vera Extract, Chamomile Extract, Vitamin E, Decyl Glucoside, Mild Preservative",
    availableSizes: ["150mm x 200mm", "180mm x 200mm", "200mm x 220mm"],
    commonSheetCounts: [40, 80, 120]
  },
  {
    id: "personal-care",
    badge: "DAILY HYGIENE",
    title: "Personal Care & Cosmetic",
    subTitle: "Hypoallergenic sanitizing wipes, makeup removers, and facial cleansing substrates.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvXncPhbfqZdBVju48aD4BUN1TKmNn84xrmPJxFZeDDjwr2pitp4TiaSmAeY2C83Lrcv0hWG-OSdFMX9QMEc2MUs3w74BJzPFi-rBCJLfUyn96ZvGcJ94vTtGsX3-rGpCZ56V0sOR9FGksZBUJOUwxDTFEkJJF6J37cdpr9p5lMeRVO7Blpc_5mMS9ejmi4C_9HSLEciBso0jtPoSgsliNbonnoDmb4awLsxK6lHNJAzj6wUkL6b8FyHkun",
    description: "Dermatologically-tested ultra-soft hygienic wipes designed for everyday delicate skin applications. Offering optimal water retention, uniform liquid release, and luxurious handfeel. Fully customizable with vitamins, natural oil essences, or medical disinfectants.",
    standardGSM: "40 - 55 GSM Biodegradable Bamboo / Tencel Nonwoven",
    standardIngredients: "Hyaluronic Acid, Organic Cucumber Hydrosol, Citric Acid, Glycerin, Purified RO Water",
    availableSizes: ["140mm x 180mm", "150mm x 200mm", "160mm x 200mm"],
    commonSheetCounts: [10, 20, 60, 80, 100]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "ISO 9001:2015",
    authority: "SGS Global Standards",
    scope: "Quality Management Systems for Medical-grade Cleanroom Wipes",
    year: "Re-certified 2024",
    clinicalNote: "Ensures seamless trace-testing and rigorous vendor management across pure water intake and processing lines."
  },
  {
    name: "GMP Cleanroom (Class 100k)",
    authority: "National Health Inspection Bureau",
    scope: "Sterile Production and Formulation Preparation Facility",
    year: "Certified since 2020",
    clinicalNote: "Facility maintains positive atmospheric pressure, HEPA filtration, and strict microbial monitoring guidelines."
  },
  {
    name: "CE Mark & MDD",
    authority: "EU Technical Board",
    scope: "Medical Device Class I and Disinfectant Formulation Compliance",
    year: "Validated 2025",
    clinicalNote: "Guarantees toxicological safety, low allergen levels, and reliable pathogen reduction benchmarks."
  },
  {
    name: "BSCI Certified",
    authority: "Amfori Association",
    scope: "Social Compliance and Ethical Workplace Governance",
    year: "Audited A-Grade 2026",
    clinicalNote: "Reflects complete supply chain transparency, clean labor protections, and eco-conscious waste minimization protocols."
  }
];

export const EQUIPMENTS: Equipment[] = [
  {
    id: "extrusion-folding",
    name: "High-Speed Automated Folding Engine",
    tag: "MANUFACTURING ACCELERATION",
    description: "Fully-enclosed sterile rotary folding machinery capable of high-precision Z-folding, C-folding, or custom interfolded patterns without human touch.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvO7k6QLSOwx8oNzqgoaxJw5v6SlDkgOlDWX8ulGp6OuKJkewNyRuupdxAFFjeti-ZRJM0-MxBBD7F70G35B1rC5HY87rFM0_Sa7O4SlqpBhahe2SPhN_DEzOSKXFCADB90w-41npoUaO8TRw4WJajJxj0FPy3-Th-5NBdyegoz0Lp-5WayGWSrjDdQKGj4WikcIE5eUBLgcn0GEx_YUJg9rKfQgSO8rsyyN-RZkyejGXgaXWTJfb58C5Mb",
    specs: [
      { label: "Optimal Output Speed", value: "800 - 1,200 cut-sheets/min" },
      { label: "Permitted Folding Tolerances", value: "±0.5mm linear" },
      { label: "Substrate Integration Range", value: "30gsm to 90gsm nonwovens" },
      { label: "Atmospheric Environment", value: "Class 100,000 HEPA Clean Air" }
    ]
  },
  {
    id: "ro-pipette",
    name: "Clinical R&D Formulation Station",
    tag: "BIO-CHEMICAL ENGINEERING",
    description: "State-of-the-art laboratory hosting multiple multi-stage Reverse Osmosis (RO) purification columns, gas chromatography analyzers, and formulation blenders.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLC0nXGvgnS4tq68rykdB-FzsCgPcATuUbvdRMnPEGrXTAkOPyOabZoWXGiSv0i0ZK_yd_VuK1zknuX4OeFqX2iMqdt15Z3TdIp9s_rplPKiq-LICUGF_JpAjY7o7EKLiHIZUNjIR-VdhFZMBE98f9wfibGkrPYpr3VU0hoSjoPZNfIXCNQkfQy17NQ_okRXUiHrAnewB4633Qjcqz8yX0o0sdk9NFCmGTVStyDtOtkSSbS4aJxlJzaYdI",
    specs: [
      { label: "Water Quality Standard", value: "< 0.1 μS/cm Conductivity USP Spec" },
      { label: "Formulation pH Precision", value: "±0.1 pH units target control" },
      { label: "Heavy Metal Screening", value: "< 1 ppm detection limit" },
      { label: "Incubation Testing Suite", value: "72-hour fast microbial assessment" }
    ]
  }
];

export const PRESETS_MATERIALS = [
  { value: "spunlace-woodpulp", label: "Woodpulp Poly Blend (Extra Absorbent)", gsmMin: 50, gsmMax: 80 },
  { value: "bamboo-spunlace", label: "100% Organic Bamboo (Eco-Biodegradable)", gsmMin: 40, gsmMax: 65 },
  { value: "tencel-skin", label: "Tencel Smooth-Touch (Cosmetic Care)", gsmMin: 35, gsmMax: 55 },
  { value: "cross-lapped-viscose", label: "Cross-Lapped Viscose/Polyester (High Tensile)", gsmMin: 50, gsmMax: 90 },
  { value: "microfine-optical", label: "Micro-Fine Spunlace Nonwoven (Zero Lint)", gsmMin: 35, gsmMax: 50 }
];

export const PRESETS_FORMULATIONS = [
  { value: "medical-sanitize", label: "70% Isopropyl Alcohol Medical-Grade Disinfectant (Antiseptic)" },
  { value: "sensitive-chamomile", label: "Hypoallergenic Aloe Vera & Chamomile Hydrolat (Soothing)" },
  { value: "pet-safe-deodor", label: "Pet-Safe Odor neutralizer & Coconut Extract (pH 7.0 Balanced)" },
  { value: "streak-free-optical", label: "Streak-Free Anti-Static Lens Cleaner (Fast Evaporation)" },
  { value: "salicylic-cleansing", label: "Cosmetic Active Micellar with Salicylic & Hyaluronic Acid" }
];

export const PRESETS_PACKAGING = [
  { value: "resealable-flowpack", label: "Soft Pack Flowpack with Rigid Plastic Flip-Top Cap" },
  { value: "single-sachet", label: "Individual Foil Barrier Sachet (Zero evaporation rate)" },
  { value: "tub-canister", label: "Rigid Cylindrical Canister Container with Threading Die" },
  { value: "kraft-organic", label: "Kraft-Lined High Barrier Recyclable Outer Envelope" }
];
