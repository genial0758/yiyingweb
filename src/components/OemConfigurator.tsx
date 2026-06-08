import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sliders, 
  Layers, 
  FlaskConical, 
  Check, 
  ArrowRight, 
  Info,
  Sparkles,
  HelpCircle,
  TrendingUp
} from "lucide-react";
import { 
  PRESETS_MATERIALS, 
  PRESETS_FORMULATIONS, 
  PRESETS_PACKAGING, 
  CATEGORIES 
} from "../data";
import { OEMConfiguration } from "../types";

interface OemConfiguratorProps {
  onApplyConfig: (configText: string) => void;
}

export default function OemConfigurator({ onApplyConfig }: OemConfiguratorProps) {
  const [category, setCategory] = useState<string>("functional-wipes");
  const [material, setMaterial] = useState<string>(PRESETS_MATERIALS[0].value);
  const [weightGsm, setWeightGsm] = useState<number>(55);
  const [formulation, setFormulation] = useState<string>(PRESETS_FORMULATIONS[0].value);
  const [sheetCount, setSheetCount] = useState<number>(80);
  const [packaging, setPackaging] = useState<string>(PRESETS_PACKAGING[0].value);
  const [scented, setScented] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Sync recommended defaults when category changes
  useEffect(() => {
    if (category === "functional-wipes") {
      setMaterial("spunlace-woodpulp");
      setWeightGsm(65);
      setFormulation("medical-sanitize");
      setPackaging("resealable-flowpack");
      setSheetCount(100);
    } else if (category === "lens-screen") {
      setMaterial("microfine-optical");
      setWeightGsm(38);
      setFormulation("streak-free-optical");
      setPackaging("single-sachet");
      setSheetCount(50);
    } else if (category === "pet-care") {
      setMaterial("cross-lapped-viscose");
      setWeightGsm(70);
      setFormulation("pet-safe-deodor");
      setPackaging("resealable-flowpack");
      setSheetCount(80);
    } else if (category === "personal-care") {
      setMaterial("tencel-skin");
      setWeightGsm(45);
      setFormulation("sensitive-chamomile");
      setPackaging("resealable-flowpack");
      setSheetCount(60);
    }
  }, [category]);

  const selectedCategoryObj = CATEGORIES.find(c => c.id === category);
  const selectedMaterialObj = PRESETS_MATERIALS.find(m => m.value === material) || PRESETS_MATERIALS[0];
  const selectedFormulationObj = PRESETS_FORMULATIONS.find(f => f.value === formulation) || PRESETS_FORMULATIONS[0];
  const selectedPackagingObj = PRESETS_PACKAGING.find(p => p.value === packaging) || PRESETS_PACKAGING[0];

  // Adjust GSM to stay inside limits of selected material preset
  useEffect(() => {
    if (selectedMaterialObj) {
      if (weightGsm < selectedMaterialObj.gsmMin) {
        setWeightGsm(selectedMaterialObj.gsmMin);
      } else if (weightGsm > selectedMaterialObj.gsmMax) {
        setWeightGsm(selectedMaterialObj.gsmMax);
      }
    }
  }, [material]);

  // Calculate sterile score index & performance blueprint estimates
  const liquidRetentionCapacity = Math.round((weightGsm * 3.8) * (category === "pet-care" ? 1.2 : 1.0));
  const tensileStrengthIndex = Math.round((weightGsm * 1.5) * (material.includes("cross-lapped") ? 1.4 : 1.0));
  const biodegradabilityLifeDays = material.includes("bamboo") || material.includes("tencel") ? "60 - 90 Days" : "Non-flushable (Incinerate)";

  const configurationSummaryText = `[OEM/ODM SPEC PRESET] 
Category: ${selectedCategoryObj?.title || category}
Substrate: ${selectedMaterialObj?.label} (${weightGsm} GSM)
Formula: ${selectedFormulationObj?.label}
Sheet Count: ${sheetCount} sheets per pack
Packaging Style: ${selectedPackagingObj?.label}
Aroma Preference: ${scented ? "Light Green Tea Scent" : "Unscented Pure Purewater Formulation"}`;

  const handlePopulate = () => {
    onApplyConfig(configurationSummaryText);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
    
    // Smooth scroll down to contact form
    const inquirySection = document.getElementById("inquiry-section");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white border border-outline-clinical rounded-lg overflow-hidden clean-shadow min-h-[600px] grid grid-cols-1 lg:grid-cols-12">
      {/* Configuration Controls (Left Column) */}
      <div className="lg:col-span-7 p-6 md:p-8 border-r border-[#e7f0ed]/70 space-y-6">
        <div>
          <span className="text-primary font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 font-bold mb-1">
            <Sliders className="w-3 h-3" /> Step-by-Step Custom Design
          </span>
          <h3 className="text-xl font-bold font-sans text-text-primary tracking-tight">
            Formula R&D Configurator
          </h3>
          <p className="text-xs text-text-secondary mt-1">
            Build your brand's specific clinical wipes. Adjust variables to generate simulated physical properties.
          </p>
        </div>

        {/* 1. Target Category */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
            1. Select Market Application
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`py-2.5 px-3 rounded text-left transition-all border text-xs flex flex-col justify-between ${
                  category === cat.id
                    ? "border-primary bg-surface-low text-primary"
                    : "border-outline-clinical/40 hover:border-outline-clinical text-text-secondary bg-surface-lowest"
                }`}
              >
                <span className="font-bold tracking-tight">{cat.title}</span>
                <span className="text-[10px] opacity-75 mt-0.5 font-mono">{cat.badge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Substrate Nonwoven Material */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider flex items-center gap-1">
              <Layers className="w-3 h-3" /> 2. Substrate / Fiber Base
            </label>
            <span className="text-[10px] font-mono text-text-secondary bg-surface-container py-0.5 px-1.5 rounded">
              {selectedMaterialObj?.gsmMin}-{selectedMaterialObj?.gsmMax} GSM Limits
            </span>
          </div>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full h-11 bg-surface-low text-xs border border-outline-clinical/50 rounded px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans cursor-pointer"
          >
            {PRESETS_MATERIALS.map((mat) => (
              <option key={mat.value} value={mat.value}>
                {mat.label}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Sheet Weight (GSM) */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-text-primary text-xs">Substrate Weight (GSM)</span>
            <span className="font-mono text-primary font-bold bg-surface-low px-2 py-0.5 rounded border border-outline-clinical/30">
              {weightGsm} g/m²
            </span>
          </div>
          <input
            type="range"
            min={selectedMaterialObj?.gsmMin || 35}
            max={selectedMaterialObj?.gsmMax || 90}
            value={weightGsm}
            onChange={(e) => setWeightGsm(Number(e.target.value))}
            className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-text-secondary font-mono">
            <span>Fine/Precision ({selectedMaterialObj?.gsmMin || 35} GSM)</span>
            <span>Ultra-Heavy Duty ({selectedMaterialObj?.gsmMax || 90} GSM)</span>
          </div>
        </div>

        {/* 4. Chemical Formulation Solution */}
        <div className="space-y-2">
          <label className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider flex items-center gap-1">
            <FlaskConical className="w-3 h-3" /> 3. Chemical Preservative & Active Solution
          </label>
          <select
            value={formulation}
            onChange={(e) => setFormulation(e.target.value)}
            className="w-full h-11 bg-surface-low text-xs border border-outline-clinical/50 rounded px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans cursor-pointer"
          >
            {PRESETS_FORMULATIONS.map((formula) => (
              <option key={formula.value} value={formula.value}>
                {formula.label}
              </option>
            ))}
          </select>
        </div>

        {/* 5. Sheet Count and Packaging */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
              <span>4. Sheets per Pack</span>
              <span className="text-secondary">{sheetCount} Pcs</span>
            </div>
            <select
              value={sheetCount}
              onChange={(e) => setSheetCount(Number(e.target.value))}
              className="w-full h-11 bg-surface-low text-xs border border-outline-clinical/50 rounded px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans cursor-pointer"
            >
              {[10, 20, 30, 50, 60, 80, 100, 120, 150].map((count) => (
                <option key={count} value={count}>
                  {count} Full Sheets / Pack
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
              5. Packaging Geometry
            </label>
            <select
              value={packaging}
              onChange={(e) => setPackaging(e.target.value)}
              className="w-full h-11 bg-surface-low text-xs border border-outline-clinical/50 rounded px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans cursor-pointer"
            >
              {PRESETS_PACKAGING.map((pack) => (
                <option key={pack.value} value={pack.value}>
                  {pack.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 6. Fragrance Toggle */}
        <div className="pt-2 flex items-center justify-between bg-surface-low/80 p-3 rounded border border-[#edf6f3]">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-text-primary">Aroma Infusion Option</span>
            <span className="text-[10px] text-text-secondary">Clinical default is completely fragrance-free (hypoallergenic).</span>
          </div>
          <button
            type="button"
            onClick={() => setScented(!scented)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
              scented ? "bg-primary" : "bg-outline-clinical/50"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                scented ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Blueprint Visual & Physics Spec Indicator (Right Column) */}
      <div className="lg:col-span-5 bg-surface-low p-6 md:p-8 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-secondary font-mono text-[10px] tracking-wider uppercase font-bold">
            Substrate Blueprint Visualization
          </span>
          <h4 className="text-sm font-bold text-text-primary uppercase tracking-tight mt-1">
            Clinical Spec Output (Simulated)
          </h4>
        </div>

        {/* Dynamic Graphic representation of the selected pack */}
        <div className="relative bg-white border border-[#e1eae7] rounded-lg p-6 flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
          {/* Subtle laboratory grid background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: "radial-gradient(#006a65 1px, transparent 1px)",
            backgroundSize: "10px 10px"
          }} />

          <motion.div
            layout
            className="relative flex flex-col items-center z-10"
          >
            {/* Visual representing the sheet stacking thickness based on GSM and sheet count */}
            <div className="relative w-36 h-20 bg-primary/10 border border-primary/20 rounded-md shadow-sm overflow-hidden flex items-center justify-center flex-col">
              {/* Stacked sheets lines indicator */}
              <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-primary/30 to-primary/5 rounded border-b border-primary/40"
                   style={{ height: `${Math.min((sheetCount / 150) * 44 + 8, 52)}px` }}>
                <div className="absolute inset-x-0 top-0 h-[1px] bg-primary/50 border-t border-dashed border-primary" />
              </div>

              {/* Package stamp text */}
              <span className="font-mono text-[9px] text-primary/80 tracking-widest font-bold z-20">
                {selectedCategoryObj?.title.toUpperCase()}
              </span>
              <span className="font-mono text-[8px] text-text-secondary/80 mt-1 z-20">
                {sheetCount} CT / {weightGsm} GSM
              </span>
            </div>

            {/* Pulled-out sterile single wipe animation preview */}
            <div className="mt-3 flex items-center justify-center gap-1 text-[10px] font-mono text-primary font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed-dim opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>RO Sterile Flow: Active</span>
            </div>
          </motion.div>
        </div>

        {/* Technical Estimates Table */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#e1eae7] rounded p-4 space-y-3.5 text-xs text-text-primary">
          <h5 className="font-mono text-[10px] text-text-secondary font-bold uppercase tracking-wider flex items-center gap-1 border-b border-surface-container pb-1.5">
            <Sparkles className="w-3 h-3 text-primary animate-pulse" /> Material Physics Diagnostics
          </h5>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-text-secondary font-sans block">Substrate Tensile Coeff:</span>
              <span className="font-mono text-text-primary font-bold text-xs">
                {tensileStrengthIndex} N/50mm (High)
              </span>
            </div>
            <div>
              <span className="text-text-secondary font-sans block">Water Absorption Rate:</span>
              <span className="font-mono text-text-primary font-bold text-xs">
                {liquidRetentionCapacity}% dry weight
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
            <div>
              <span className="text-text-secondary font-sans block">Biodegradation Index:</span>
              <span className="font-mono text-text-primary font-bold text-xs text-primary">
                {biodegradabilityLifeDays}
              </span>
            </div>
            <div>
              <span className="text-text-secondary font-sans block">Sterility Protection:</span>
              <span className="font-mono text-text-primary font-bold text-xs">
                Double Air-Tight Seal
              </span>
            </div>
          </div>

          <div className="bg-surface-low border border-outline-clinical/30 rounded p-2 text-[10px] text-text-secondary flex gap-2 items-start">
            <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <span>
              Formulated at Yiying Cleanroom Station 3 using active RO filtration. Verified under GMP microbiological standards.
            </span>
          </div>
        </div>

        {/* Populate Inquiry Action Button */}
        <button
          onClick={handlePopulate}
          className="w-full bg-primary text-white py-3.5 px-4 rounded font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 text-xs shadow-sm hover:shadow"
        >
          {copiedSuccess ? (
            <>
              <Check className="w-4 h-4 text-primary-fixed" />
              Specs Loaded! Form Ready Below
            </>
          ) : (
            <>
              Populate Spec in Proposal Inquiry
              <ArrowRight className="w-4 h-4 text-primary-fixed-dim" />
            </>
          )}
        </button>

        <p className="text-[10px] text-text-secondary text-center">
          Specs will auto-insert into the inquiry form message. Free chemical test samples are eligible with this loaded blueprint setup.
        </p>
      </div>
    </div>
  );
}
