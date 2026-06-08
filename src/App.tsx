import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  FlaskConical, 
  Factory, 
  CheckCircle2, 
  Mail, 
  Globe, 
  Users, 
  HeartHandshake, 
  Database, 
  ChevronRight, 
  Info, 
  Sparkles, 
  FileText, 
  Phone, 
  MapPin, 
  Clock, 
  CornerDownRight, 
  Check, 
  X,
  Volume2,
  Printer,
  FileCheck2,
  RotateCcw,
  Copy
} from "lucide-react";
import { CATEGORIES, CERTIFICATIONS, EQUIPMENTS } from "./data";
import { Category, Certification, SubmissionResponse } from "./types";
import OemConfigurator from "./components/OemConfigurator";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [activeFacilityStep, setActiveFacilityStep] = useState<number>(0);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  // Statistic numbers with dynamic count-up state
  const [sqmFacility, setSqmFacility] = useState<number>(0);
  const [marketsCount, setMarketsCount] = useState<number>(0);
  const [staffCount, setStaffCount] = useState<number>(0);

  // Inquiry Form state
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("OEM Service");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<SubmissionResponse | null>(null);

  // Header scroll shadow toggle
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger count-up metrics simulation
  useEffect(() => {
    const timers = [
      setInterval(() => {
        setSqmFacility((prev) => {
          if (prev >= 15000) return 15000;
          return prev + 250;
        });
      }, 20),
      setInterval(() => {
        setMarketsCount((prev) => {
          if (prev >= 50) return 50;
          return prev + 1;
        });
      }, 30),
      setInterval(() => {
        setStaffCount((prev) => {
          if (prev >= 320) return 320;
          return prev + 5;
        });
      }, 20),
    ];

    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  // Handles loading loaded custom configuration from OemConfigurator directly into inquiry form
  const handleApplyConfig = (configText: string) => {
    setMessage((prev) => {
      if (prev.includes("[OEM/ODM SPEC PRESET]")) {
        // replace old config
        return configText;
      }
      return prev ? `${configText}\n\n[Project Notes]: ${prev}` : configText;
    });
    // Scroll automatically down to inquiry form
    const inquirySection = document.getElementById("inquiry-section");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) {
      alert("Please fill in high-priority fields: Name, Email and Company Name.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-precision diagnostic check of inputs
    setTimeout(() => {
      const ticketId = `YY-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setSubmissionReceipt({
        ticketId,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
        estimatedLeadTime: "12-16 business days for initial pilot formulation prototyping",
        summary: {
          name,
          company,
          email,
          category: selectedCategory?.title || "Custom Wipe Product",
          material: "Configured substrate specifications loaded",
          weightGsm: 55,
          formulation: "Certified non-toxic active solution",
          sheetCount: 80,
          packaging: "Sterile high-barrier protective laminate",
          scented: false
        }
      });
      setIsSubmitting(false);
    }, 1800);
  };

  const resetInquiry = () => {
    setSubmissionReceipt(null);
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
    setServiceType("OEM Service");
  };

  // Scrolls fluidly to navigation sections
  const navigateToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background-clean text-text-primary font-sans selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
      
      {/* Dynamic Navigation Row */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrollActive 
          ? "h-16 bg-white/95 backdrop-blur-md border-outline-clinical shadow-sm" 
          : "h-20 bg-surface-lowest/90 backdrop-blur-md border-outline-clinical/30"
      }`}>
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 h-full">
          
          {/* Logo Brand */}
          <div 
            onClick={() => navigateToSection("home")} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="bg-primary text-white w-9 h-9 rounded flex items-center justify-center font-mono font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform">
              YY
            </div>
            <div>
              <span className="font-sans font-bold text-lg md:text-xl text-primary tracking-tight block">
                Yiying Hygiene
              </span>
              <span className="text-[9px] font-mono text-text-secondary tracking-widest block uppercase -mt-1 font-semibold">
                Clinical Precision Mfg
              </span>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { id: "home", label: "Home" },
              { id: "categories", label: "Specializations" },
              { id: "ecosystem", label: "OEM/ODM R&D" },
              { id: "factory", label: "Manufacturing Hub" },
              { id: "about", label: "About Yiying" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigateToSection(tab.id)}
                className={`relative py-1 text-xs font-mono font-semibold tracking-wide transition-colors ${
                  activeTab === tab.id 
                    ? "text-primary" 
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="navbar-spec-underline" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Quick Actions Action bar */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigateToSection("inquiry-section")}
              className="bg-primary text-white hover:bg-primary-hover px-5 py-2.5 rounded font-mono text-[11px] font-bold tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              Contact Specialist <ArrowRight className="w-3.5 h-3.5 text-primary-fixed-dim" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* Full-Width Hero Section */}
        <section id="home" className="relative min-h-[750px] flex items-center overflow-hidden bg-slate-900 border-b border-outline-clinical/40">
          
          {/* Laboratory Dynamic Image */}
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-35 scale-105 select-none pointer-events-none" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLD__iSrg4gXrXQ2Sig9ji9ngcrXMNp29O8eALxwSDaslQcRPIAqgxp5YkahJ6ontlNcqLmHykz5Su9W7lmleetuslw5K1fvaJ3RAivTFY1VTPXlyoNqYUYyo500G6oewgyXfJUuZSIo-I_jHvqstOVmZ2TV-pLZY7t37w56RaKnxPWZelRaXmco-ya0vWTVEtflPb2MOufBjIxHgfCrdnLrjQtfESsGep2QxzYL7ROIarjzUCsp5VLnOM" 
              alt="Automated clinical nonwoven manufacturing line"
              referrerPolicy="no-referrer"
            />
            {/* Linear overlay designed for absolute technical contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          </div>

          {/* High-Precision Headline Card */}
          <div className="relative z-15 w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl text-white">
              
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 py-1 px-3 rounded-full mb-6 text-primary-fixed-dim font-mono text-[10px] uppercase tracking-wider font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-fixed animate-pulse" /> Established April 2020 • Accredited Lab Facility
              </div>
              
              <h1 className="font-sans font-bold text-4.5xl md:text-5xl lg:text-5.5xl text-white tracking-tight leading-[1.1] mb-6">
                Clinical Precision in <br />
                <span className="text-primary-fixed">Hygiene Manufacturing.</span>
              </h1>
              
              <p className="font-sans text-base md:text-lg text-[#baf7f2]/90 leading-relaxed mb-8 max-w-xl">
                Advanced OEM/ODM solutions for medical-grade wipes, lint-free optical lens wipes, skin-safe cosmetic sheets, and organic pet grooming hygiene nonwovens. Built for global compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateToSection("ecosystem")}
                  className="bg-primary text-white hover:bg-primary-hover px-7 py-3 rounded text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 group transition-all"
                >
                  Configure Custom R&D Formula 
                  <ArrowRight className="w-4 h-4 text-primary-fixed-dim transition-transform group-hover:translate-x-1" />
                </button>
                
                <button 
                  onClick={() => navigateToSection("categories")}
                  className="bg-[#2a3231]/80 backdrop-blur border border-outline-clinical/30 text-white hover:bg-[#343e3d] px-7 py-3 rounded text-xs font-mono font-bold tracking-wider transition-all"
                >
                  Explore Spec Catalog
                </button>
              </div>
            </div>
            
            {/* Real-time environmental specs banner */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 backdrop-blur border border-white/10 rounded p-4 max-w-3xl">
              <div>
                <span className="text-[10px] font-mono text-primary-fixed block">GMP R&D GRADE</span>
                <span className="text-white text-xs font-bold font-sans">Class 100,000 Cleanroom</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary-fixed block">WATER COMPLIANCE</span>
                <span className="text-white text-xs font-bold font-sans">RO Sterile Pure Water</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary-fixed block">BATCH CAPACITY</span>
                <span className="text-white text-xs font-bold font-sans">15,000 sqm High-speed Mfg</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary-fixed block">STANDARDS IN USE</span>
                <span className="text-white text-xs font-bold font-sans">ISO 9001, GMPC, CE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Certifications Trust Marquee Section */}
        <section className="bg-surface-low border-b border-outline-clinical/45 py-8 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 mb-4">
            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest block text-center mb-1">
              Safety Verification & Compliance Registry
            </span>
            <p className="text-xs text-text-secondary text-center max-w-lg mx-auto">
              Click any certification below to view licensed parameters, cleanroom scopes, and standardized clinical test bounds.
            </p>
          </div>

          {/* Loop Marquee Bar */}
          <div className="relative border-t border-b border-outline-clinical/20 bg-white/60 py-3.5">
            <div className="animate-marquee-slow flex whitespace-nowrap gap-16 text-xs text-text-primary">
              {CERTIFICATIONS.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="font-mono font-bold tracking-wider hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer origin-left hover:scale-[1.03]"
                >
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <span>{cert.name}</span>
                  <span className="text-[10px] text-text-secondary font-sans font-light">[{cert.authority}]</span>
                </button>
              ))}
              {/* Loop Duplicate for smooth flow */}
              {CERTIFICATIONS.map((cert, index) => (
                <button
                  key={`dup-${index}`}
                  onClick={() => setSelectedCert(cert)}
                  className="font-mono font-bold tracking-wider hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer origin-left hover:scale-[1.03]"
                >
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <span>{cert.name}</span>
                  <span className="text-[10px] text-text-secondary font-sans font-light">[{cert.authority}]</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Certificate Audit Details Block */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="max-w-2xl mx-auto px-6 overflow-hidden mt-4"
              >
                <div className="bg-white border border-primary/20 rounded p-4 text-xs space-y-2 relative">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-2.5 right-2.5 text-text-secondary hover:text-primary focus:outline-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1.5 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-mono font-bold text-xs uppercase">Verified Standard: {selectedCert.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-1 font-sans text-text-secondary">
                    <div>
                      <span className="block text-[10px] font-mono text-primary font-bold">LOB ACCOUNTABILITY</span>
                      <p className="text-text-primary text-[11px] font-medium leading-tight">{selectedCert.scope}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-primary font-bold">STATUS RECORD</span>
                      <p className="text-text-primary text-[11px] font-medium leading-tight">{selectedCert.year}</p>
                    </div>
                  </div>
                  <div className="bg-surface-low p-2 rounded border border-outline-clinical/30 text-[10px] mt-2">
                    <span className="font-mono font-bold block text-primary mb-0.5">GMP LAB COMMENT:</span>
                    {selectedCert.clinicalNote}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* High-Value Hygiene Categories Segment */}
        <section id="categories" className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-primary block uppercase tracking-wider mb-1">
                Clinical Specialization
              </span>
              <h2 className="text-3xl font-sans font-bold text-text-primary tracking-tight">
                High-Value Hygiene Categories
              </h2>
              <p className="text-text-secondary text-xs mt-1 max-w-xl">
                Select a hygiene category card below to inspect fiber compositions, RO water parameters, chemical solutions, and custom size catalogs.
              </p>
            </div>
            <div className="text-xs font-mono text-text-secondary flex items-center gap-1 bg-surface-low px-3 py-1.5 rounded border border-outline-clinical/40">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Multi-size flexible packaging tooling ready
            </div>
          </div>

          {/* Grid Cards of Specialization Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="group relative bg-white border border-outline-clinical/80 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col md:flex-row min-h-[220px]"
              >
                {/* Visual Image half */}
                <div className="w-full md:w-2/5 relative overflow-hidden bg-slate-900 border-r border-[#e7f0ed]/50">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105" 
                    src={cat.image} 
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white md:hidden">
                    <span className="text-[9px] font-mono text-primary-fixed font-bold block uppercase">{cat.badge}</span>
                  </div>
                </div>

                {/* Info Text half */}
                <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <span className="hidden md:inline-block text-[9px] font-mono text-primary font-bold uppercase tracking-wider bg-surface-low text-primary px-2 py-0.5 rounded mb-2">
                      {cat.badge}
                    </span>
                    <h3 className="text-md font-sans font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors flex items-center gap-1">
                      {cat.title} <ChevronRight className="w-4 h-4 text-outline-clinical group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                      {cat.subTitle}
                    </p>
                  </div>

                  <div className="border-t border-[#e7f0ed]/80 pt-3 mt-4 flex justify-between items-center text-[10px] text-text-secondary">
                    <div>
                      <span className="block font-mono tracking-wider text-[8px] uppercase">SUBSTRATE BLEND</span>
                      <span className="font-semibold text-text-primary block">{cat.title === "Personal Care" ? "Bamboo/Tencel" : cat.title === "Lens & Screen" ? "Micro-Fine Fiber" : "Spunlace Blend"}</span>
                    </div>
                    <div>
                      <span className="block font-mono tracking-wider text-[8px] uppercase">STANDARD GSM</span>
                      <span className="font-semibold text-text-primary block">{cat.title === "Pet Care" ? "55-70 GSM" : "38-65 GSM"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Specification Modal Overlay */}
          <AnimatePresence>
            {selectedCategory && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div 
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  className="bg-white border border-outline-clinical rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 space-y-6 relative"
                >
                  {/* Close button modal */}
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="absolute top-4 right-4 bg-surface-low hover:bg-surface-container rounded-full p-2 text-text-secondary hover:text-primary transition-all focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase block mb-1">
                      Cat: {selectedCategory.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary font-sans leading-none">
                      {selectedCategory.title} Spec Sheet
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img 
                      className="rounded object-cover h-44 w-full border border-outline-clinical/30" 
                      src={selectedCategory.image} 
                      alt={selectedCategory.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block font-bold">Formula Description</span>
                        <p className="text-xs text-text-primary leading-relaxed mt-0.5">
                          {selectedCategory.description}
                        </p>
                      </div>
                      <div className="bg-surface-low border border-[#edf6f3] rounded p-2.5 space-y-2">
                        <span className="text-[9px] font-mono text-primary uppercase tracking-wider block font-bold">Standard Formula Presets</span>
                        <div className="text-[10px] text-text-primary italic font-medium leading-snug">
                          {selectedCategory.standardIngredients}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical values catalog details table */}
                  <div className="bg-surface-lowest border border-outline-clinical/60 rounded overflow-hidden">
                    <div className="p-2 border-b border-outline-clinical/40 bg-surface-low/50">
                      <span className="text-[9px] font-mono text-primary uppercase font-bold tracking-wider">Clinical Specs Matrix & Tooling Ready Parameters</span>
                    </div>
                    <table className="w-full text-xs text-left text-text-primary border-collapse">
                      <thead>
                        <tr className="border-b border-outline-clinical/30 font-mono text-[9px] text-text-secondary uppercase">
                          <th className="p-2 pl-3">Param</th>
                          <th className="p-2">Standard Spec Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#e7f0ed]/40">
                          <td className="p-2 pl-3 font-semibold text-text-secondary">Substrate GSM Range</td>
                          <td className="p-2 font-mono text-[11px] font-bold text-primary">{selectedCategory.standardGSM}</td>
                        </tr>
                        <tr className="border-b border-[#e7f0ed]/40">
                          <td className="p-2 pl-3 font-semibold text-text-secondary">Certified Available Sizes</td>
                          <td className="p-2 font-mono text-[11px] text-text-primary">
                            {selectedCategory.availableSizes.join(" / ")}
                          </td>
                        </tr>
                        <tr className="border-b border-[#e7f0ed]/40">
                          <td className="p-2 pl-3 font-semibold text-text-secondary">Recommended Sheet Counts</td>
                          <td className="p-2 font-mono text-[11px] text-text-primary">
                            {selectedCategory.commonSheetCounts.join(", ")} sheets
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => {
                        setSelectedCategory(null);
                        navigateToSection("ecosystem");
                      }}
                      className="flex-1 bg-primary text-white py-3 px-4 rounded text-xs font-mono font-bold tracking-wider hover:bg-primary-hover transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Configure This Substrate Base
                      <ArrowRight className="w-4 h-4 text-primary-fixed-dim" />
                    </button>
                    <button 
                      onClick={() => {
                        const defaultMessage = `Hello, I would like to request an OEM/ODM proposal for standard ${selectedCategory.title} wipes. Specifically target size: ${selectedCategory.availableSizes[0]} and typical sheet count.`;
                        setMessage(defaultMessage);
                        setSelectedCategory(null);
                        navigateToSection("inquiry-section");
                      }}
                      className="flex-shrink-0 bg-surface-low border border-outline-clinical hover:bg-[#e7f0ed] text-text-primary py-3 px-5 rounded text-xs font-mono font-bold transition-all"
                    >
                      Quick Proposal Draft
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Integrated OEM/ODM Ecosystem Walkthrough & Configurator Section */}
        <section id="ecosystem" className="bg-surface-container py-20 border-t border-b border-[#e1eae7]/55">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold text-primary block uppercase tracking-wider mb-1">
                  Manufacturing Excellence
                </span>
                <h2 className="text-3.5xl font-sans font-bold text-text-primary tracking-tight leading-tight">
                  Integrated OEM/ODM Ecosystem
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mt-3 max-w-2xl">
                  From initial formula R&D testing in our microbiological cleanrooms to rapid high-volume substrate folding and packaging, we offer a completely integrated, traceable clean manufacturing service. 
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <div className="bg-white/80 border border-outline-clinical rounded p-4 text-xs font-mono text-text-secondary max-w-sm flex gap-3 shadow-xs">
                  <Database className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-text-primary block">Specification API Pre-Load</span>
                    Configure fiber blends and solutions below, then click to populate directly into our contact desk.
                  </div>
                </div>
              </div>
            </div>

            {/* Three Pillars Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  step: "01",
                  title: "Formula R&D System",
                  desc: "Custom formulations engineered in our Class 100k sterile lab with continuous RO-purification monitoring and allergen screenings.",
                  icon: <FlaskConical className="w-5 h-5 text-primary" />
                },
                {
                  step: "02",
                  title: "Flexible Automated Line",
                  desc: "Enclosed, touch-free folding corridors supporting various folding configurations (Z, C, interfold) with fast material changeover.",
                  icon: <Factory className="w-5 h-5 text-primary" />
                },
                {
                  step: "03",
                  title: "Multi-Stage Diagnostic QC",
                  desc: "CCD visual cameras verify lint presence and structural defects. Hand audits inspect seal protection integrity.",
                  icon: <ShieldCheck className="w-5 h-5 text-primary" />
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#edf6f3] p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono font-bold text-[#b9cac7]">{item.step}</span>
                    <div className="bg-surface-low rounded-full w-9 h-9 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-sans font-bold text-text-primary uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive OemConfigurator Embedment */}
            <OemConfigurator onApplyConfig={handleApplyConfig} />
          </div>
        </section>

        {/* Factory Operations Snapshot Section */}
        <section id="factory" className="py-20 bg-inverse-surface text-inverse-on-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Count metrics statistics layout */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-primary-fixed font-mono text-[10px] uppercase tracking-widest font-bold block mb-1">
                    Certified Production Capabilities
                  </span>
                  <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
                    Our Sterile Manufacturing Hub
                  </h2>
                  <p className="text-surface-variant text-xs leading-relaxed mt-2.5">
                    Operating high-speed packaging engines inside highly-monitored sterile industrial corridors. Traceability standards guarantee lot consistency.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="border-l border-primary/40 pl-4 py-1">
                    <div className="text-white font-sans text-3xl font-bold tracking-tight">
                      {sqmFacility.toLocaleString()}+ <span className="text-primary-fixed text-xs block font-mono uppercase font-bold mt-1">Sqm Clean Facility</span>
                    </div>
                  </div>
                  <div className="border-l border-primary/40 pl-4 py-1">
                    <div className="text-white font-sans text-3xl font-bold tracking-tight">
                      {marketsCount}+ <span className="text-primary-fixed text-xs block font-mono uppercase font-bold mt-1">Markets Reached</span>
                    </div>
                  </div>
                  <div className="border-l border-primary/40 pl-4 py-1">
                    <div className="text-white font-sans text-3xl font-bold tracking-tight">
                      {staffCount} <span className="text-primary-fixed text-xs block font-mono uppercase font-bold mt-1">Advanced Eng Staff</span>
                    </div>
                  </div>
                  <div className="border-l border-primary/40 pl-4 py-1">
                    <div className="text-white font-sans text-3xl font-bold tracking-tight text-primary-fixed">
                      24/7 <span className="text-white text-xs block font-mono uppercase font-bold mt-1">Operations</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigateToSection("inquiry-section")}
                  className="bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded font-mono text-xs font-bold tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  Schedule Cleanroom Facility Tour <ArrowRight className="w-4 h-4 text-primary-fixed" />
                </button>
              </div>

              {/* Dynamic Virtual Slide Walkthrough (Right Column) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex border-b border-[#3a4a48] gap-4 text-xs font-mono pb-2">
                  {[
                    { id: 0, label: "Folding Engine" },
                    { id: 1, label: "Formulation R&D Station" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFacilityStep(tab.id)}
                      className={`pb-1 px-1 transition-all ${
                        activeFacilityStep === tab.id 
                          ? "border-b-2 border-primary-fixed text-primary-fixed" 
                          : "text-surface-variant hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFacilityStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#212726] border border-[#3a4a48]/70 rounded-lg overflow-hidden p-5 space-y-4"
                  >
                    <img 
                      className="rounded object-cover h-64 w-full border border-white/5 select-none pointer-events-none" 
                      src={EQUIPMENTS[activeFacilityStep].image} 
                      alt={EQUIPMENTS[activeFacilityStep].name}
                      referrerPolicy="no-referrer"
                    />
                    
                    <div>
                      <span className="text-[9px] font-mono text-primary-fixed uppercase tracking-wider font-bold">
                        Equipment specs tag: {EQUIPMENTS[activeFacilityStep].tag}
                      </span>
                      <h4 className="text-md text-white font-sans font-bold leading-tight mt-0.5">
                        {EQUIPMENTS[activeFacilityStep].name}
                      </h4>
                      <p className="text-xs text-surface-variant leading-relaxed mt-1">
                        {EQUIPMENTS[activeFacilityStep].description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 border-t border-[#3a4a48] pt-3 text-[11px]">
                      {EQUIPMENTS[activeFacilityStep].specs.map((spec, sIdx) => (
                        <div key={sIdx}>
                          <span className="text-surface-variant block font-sans">{spec.label}</span>
                          <span className="text-primary-fixed font-mono font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive B2B proposal submission form or receipt validation sheet */}
        <section id="inquiry-section" className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <AnimatePresence mode="wait">
              {!submissionReceipt ? (
                // Step 1: Standard clean inquiry submitter form
                <motion.div
                  key="form-entry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-outline-clinical p-6 md:p-12 rounded-xl clean-shadow relative"
                >
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest block mb-1">
                      Start Your Production Journey
                    </span>
                    <h3 className="text-3xl font-sans font-bold text-text-primary tracking-tight">
                      Request Comprehensive OEM/ODM Proposal
                    </h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Complete standard client parameter checks below. Our lead clinical formulation engineers and production analysts will respond with a formalized batch and price sheet within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-text-primary">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold block">
                        Procurement Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Director of Clinical Operations"
                        className="w-full h-11 bg-surface-low border border-outline-clinical/60 rounded px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold block">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Global Health Corp Inc."
                        className="w-full h-11 bg-surface-low border border-outline-clinical/60 rounded px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold block">
                        B2B Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. contact@corporatehealthcare.com"
                        className="w-full h-11 bg-surface-low border border-outline-clinical/60 rounded px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold block">
                        Service Class Category
                      </label>
                      <select 
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full h-11 bg-surface-low border border-outline-clinical/60 rounded px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-sans cursor-pointer"
                      >
                        <option>OEM Formulation Service</option>
                        <option>ODM Complete Design</option>
                        <option>Stock Nonwoven Purchase</option>
                        <option>Bulk Container Contract mfg</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold">
                          Project details, Formulation instructions & Material specifications
                        </label>
                        <span className="text-[9px] font-mono text-text-secondary bg-surface-low px-1.5 rounded">
                          Self-load from R&D Configurator above
                        </span>
                      </div>
                      <textarea 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your customized product details, fiber blends (Spunlace, bamboo fabric), sheet dimensions, required antiseptic formulations, or target launch zones..."
                        className="w-full bg-surface-low border border-outline-clinical/60 rounded p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary font-sans font-mono text-[11px] leading-relaxed"
                      />
                    </div>

                    <div className="md:col-span-2 pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 px-6 rounded-lg font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-xs font-mono uppercase tracking-wider"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin border-2 border-t-transparent border-white w-4 h-4 rounded-full mr-2" />
                            Submitting Spec into Sterile Audit Portal...
                          </>
                        ) : (
                          <>
                            Submit Specification Inquiry
                            <ArrowRight className="w-4 h-4 text-primary-fixed-dim" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                // Step 2: Animated digital clean PDF representation of registered ticket
                <motion.div
                  key="receipt-audit"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-primary/40 p-6 md:p-10 rounded-xl clean-shadow relative"
                >
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => window.print()}
                      className="bg-surface-low hover:bg-surface-container rounded p-1.5 text-text-secondary hover:text-primary transition-all text-xs flex items-center gap-1 font-mono font-bold"
                      title="Print specimen receipt sheet"
                    >
                      <Printer className="w-4 h-4" /> Print
                    </button>
                    <button 
                      onClick={resetInquiry}
                      className="bg-surface-low hover:bg-surface-container rounded p-1.5 text-text-secondary hover:text-primary transition-all text-xs flex items-center gap-1 font-mono font-bold"
                    >
                      <RotateCcw className="w-4 h-4" /> Reset Form
                    </button>
                  </div>

                  <div className="border-b border-outline-clinical/50 pb-6 mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="bg-primary text-white text-[10px] font-mono tracking-widest uppercase py-0.5 px-2 rounded w-fit font-bold">
                          Official Spec Specimen Receipt
                        </div>
                        <h4 className="text-xl font-bold font-sans text-text-primary tracking-tight mt-1.5">
                          Inquiry File: {submissionReceipt.ticketId}
                        </h4>
                        <span className="text-[10px] font-mono text-text-secondary block mt-0.5">
                          Registered: {submissionReceipt.timestamp}
                        </span>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="font-sans font-bold text-sm text-primary tracking-tight block">
                          Yiying Hygiene Mfg
                        </span>
                        <span className="text-[9px] font-mono text-text-secondary block">
                          Cleanroom Unit 3, CN
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="bg-surface-low p-4 rounded border border-outline-clinical/30 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block">Authorized Buyer</span>
                        <span className="font-semibold text-text-primary block text-[13px]">{submissionReceipt.summary.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block">Registered Corporation</span>
                        <span className="font-semibold text-text-primary block text-[13px]">{submissionReceipt.summary.company}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block">Contact Registry</span>
                        <span className="font-semibold text-text-primary block text-[13px]">{submissionReceipt.summary.email}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block border-b border-outline-clinical/30 pb-1 mb-2">
                        Registered Substrate Configuration
                      </span>
                      <p className="text-[11px] font-mono text-text-primary bg-slate-900 text-[#baf7f2] p-4 rounded leading-relaxed whitespace-pre-wrap select-all">
                        {message || `Category: ${serviceType}\nNo additional configurations loaded.`}
                      </p>
                    </div>

                    <div className="bg-teal-50 border border-primary/20 rounded p-4 flex gap-3 text-xs">
                      <FileCheck2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-primary block">Engine Diagnostic Result: Approved</span>
                        Your loaded parameters are completely compatible with folding engine <span className="font-mono text-primary font-bold">Line 4A</span> and class-certified active ingredients. Estimated production lead time: <span className="font-mono font-bold text-text-primary">{submissionReceipt.estimatedLeadTime}</span>.
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#e7f0ed] pt-6 mt-6 flex justify-between items-center text-[10px] text-text-secondary">
                    <span>Authenticity MD5: 4bc8fa4ff89a71...</span>
                    <span>Approved by Procurement Desk YY</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* B2B Corporate Information Details */}
        <section id="about" className="py-16 bg-surface-low border-t border-outline-clinical/40">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-primary block uppercase tracking-wider mb-1">
                Sterile Clean History
              </span>
              <h3 className="text-2.5xl font-sans font-bold text-text-primary tracking-tight leading-tight">
                Corporate Legacy & <br />
                Our Clinical Mission
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed mt-4">
                Since our launch in April 2020 at the center of precision medical nonwoven manufacturing, Yiying Hygiene has committed to providing advanced, touch-free folding corridors and customized antiseptic solutions for international buyers. Each batch leaves our Class 100k Cleanroom certified under ISO 9001 and CE regulations.
              </p>
              
              <div className="space-y-4 mt-6 text-xs">
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block">Technical R&D Team</span>
                    Highly specialized medical microbiologists verify skin-safety biocompatibility parameters at our labs daily.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded">
                    <HeartHandshake className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block">Sustainability Standard</span>
                    Eco-cellulose, certified USDA-biobased bamboo wipes, and 100% biodegradable fiber fabrics are fully supported under ODM.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                className="rounded-lg object-cover h-80 w-full border border-outline-clinical" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLvY0s8a-LCb9p8lrF-n5noP7s7PPZO9r8vJvC9461yDX62wBetNtjUJCuCWJuX0qEimyIkwpDMhAy-JvBx3yJypQg8iROlH4QQDgbnMWwimGgYmQHRNux3t66A3bPm3wawPWUP8FOQGJE1GUgyFAHKzW1dBv1ev_5S8lWFtPdTD5s4Wj9R1K9s8TCCzEzV1-jlzeowoKzIB17CdEgnpy5v_uqqB9UISrva7q2d3ZbWkAcBEsJe7scfFJMX7" 
                alt="Yiying Hygiene high-end manufacturing facility"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-outline-clinical/75 rounded p-3.5 max-w-sm text-xs shadow">
                <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block">Main Facility Site</span>
                <span className="font-sans font-bold text-text-primary mt-1 block">Yiying HQ Plant 1</span>
                <span className="text-text-secondary text-[10px] block font-light">Clean City Industrial Zone, Zhejiang, CN</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Sterile Footing */}
      <footer className="bg-inverse-surface text-inverse-on-surface border-t border-[#3a4a48]/70">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-sans font-bold text-lg text-white tracking-tight block">
              Yiying Hygiene
            </span>
            <span className="text-[10px] font-mono text-surface-variant block uppercase tracking-wider">
              Clinical PrecisionMfg
            </span>
            <p className="text-xs text-surface-variant leading-relaxed mt-4 pr-4">
              Providing certified B2B nonwoven hygiene and cleaning product operations globally since 2020. Class 100,000 cleanroom certified.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="text-surface-variant hover:text-white cursor-pointer" title="International Site">
                <Globe className="w-5 h-5" />
              </span>
              <span className="text-surface-variant hover:text-white cursor-pointer" title="Direct Email Line">
                <Mail className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold text-primary-fixed block uppercase tracking-wider mb-4">RESOURCES</h5>
            <ul className="space-y-2.5 text-xs text-surface-variant font-medium">
              <li><a className="hover:text-white transition-colors" href="#">Technical Material Safety Sheets (MSDS)</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Global Logistic Freight Lines</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Sterility Test Validation Sheets</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Corporate Brochure (English PDF)</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold text-primary-fixed block uppercase tracking-wider mb-4">LEGAL REGULATION</h5>
            <ul className="space-y-2.5 text-xs text-surface-variant font-medium">
              <li><a className="hover:text-white transition-colors" href="#">Sustainability Pledge</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Privacy Protection Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">B2B OEM Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Class Compliance Directory</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-bold text-primary-fixed block uppercase tracking-wider mb-4">CONTACT REGISTER</h5>
            <div className="space-y-3 text-xs text-surface-variant font-medium">
              <div className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>WhatsApp Desk: +[Placeholder / Inquire]</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Email Contact: contact@yiying.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Cleanroom City Center, Zhejiang Industrial, CN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a4a48]/50 py-8">
          <div className="max-w-[1280px] mx-auto px-6 text-center text-xs text-surface-variant opacity-70">
            © {new Date().getFullYear()} Yiying Hygiene Ltd. All Rights Reserved. Clinical Precision Manufacturing for the Global Health Sector.
          </div>
        </div>
      </footer>

    </div>
  );
}
