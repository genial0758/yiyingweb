import { Category, Certification, Equipment } from "./types";

export type Language = "en" | "zh";

export interface TranslationDictionary {
  navbar: {
    home: string;
    specializations: string;
    oemRnd: string;
    manufacturingHub: string;
    aboutYiying: string;
    contactSpecialist: string;
  };
  hero: {
    established: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    btnConfigure: string;
    btnExplore: string;
    metricCleanroomTitle: string;
    metricCleanroomValue: string;
    metricWaterTitle: string;
    metricWaterValue: string;
    metricCapacityTitle: string;
    metricCapacityValue: string;
    metricStandardsTitle: string;
    metricStandardsValue: string;
  };
  certifications: {
    title: string;
    desc: string;
    standardTitle: string;
    lobTitle: string;
    statusTitle: string;
    gmpComment: string;
    placeholder: string;
  };
  categories: {
    title: string;
    subtitle: string;
    desc: string;
    badgeTooling: string;
    substrateLabel: string;
    gsmLabel: string;
    specSheetTitle: string;
    formulaDescLabel: string;
    standardFormulaLabel: string;
    specsMatrixTitle: string;
    specsParamLabel: string;
    specsValueLabel: string;
    specsGsmRange: string;
    specsSizes: string;
    specsCounts: string;
    btnConfigureBase: string;
    btnProposalDraft: string;
  };
  ecosystem: {
    badge: string;
    title: string;
    description: string;
    apiTitle: string;
    apiDesc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  factory: {
    badge: string;
    title: string;
    description: string;
    sqmLabel: string;
    marketsLabel: string;
    staffLabel: string;
    operationsLabel: string;
    btnTour: string;
    tabFolding: string;
    tabRnd: string;
    specTitle: string;
  };
  inquiry: {
    badge: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messageBadge: string;
    messagePlaceholder: string;
    btnSubmit: string;
    btnSubmitting: string;
    receiptTitle: string;
    receiptFile: string;
    registeredLabel: string;
    buyerLabel: string;
    corpLabel: string;
    contactLabel: string;
    registeredSpecTitle: string;
    noSpecLoaded: string;
    approvedLabel: string;
    diagnosticDesc: string;
    authLabel: string;
    praiseLabel: string;
    btnPrint: string;
    btnReset: string;
  };
  about: {
    badge: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    teamTitle: string;
    teamDesc: string;
    sustainTitle: string;
    sustainDesc: string;
    h_site: string;
    h_name: string;
    h_loc: string;
  };
  footer: {
    desc: string;
    columnResources: string;
    columnLegal: string;
    columnContact: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    addressValue: string;
    rights: string;
  };
  configurator: {
    badge: string;
    title: string;
    desc: string;
    marketLabel: string;
    substrateLabel: string;
    gsmTitle: string;
    gsmFine: string;
    gsmHeavy: string;
    solutionLabel: string;
    packSelectTitle: string;
    packSelectSuffix: string;
    packSelectOption: string;
    packagingLabel: string;
    scentLabel: string;
    scentDesc: string;
    scentOn: string;
    scentOff: string;
    visualTitle: string;
    visualSubtitle: string;
    visualActive: string;
    visualPcs: string;
    diagnosticsTitle: string;
    tensileLabel: string;
    waterLabel: string;
    biodegLabel: string;
    sterilityLabel: string;
    diagnosticsNote: string;
    btnApply: string;
    btnApplySuccess: string;
    footerDesc: string;
  };
}

export const LOCALES: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      home: "Home",
      specializations: "Specializations",
      oemRnd: "OEM/ODM R&D",
      manufacturingHub: "Manufacturing Hub",
      aboutYiying: "About Yiying",
      contactSpecialist: "Contact Specialist"
    },
    hero: {
      established: "Established April 2020 • Accredited Lab Facility",
      titleFirst: "Clinical Precision in ",
      titleSecond: "Hygiene Manufacturing.",
      description: "Advanced OEM/ODM solutions for medical-grade wipes, lint-free optical lens wipes, skin-safe cosmetic sheets, and organic pet grooming hygiene nonwovens. Built for global compliance.",
      btnConfigure: "Configure Custom R&D Formula",
      btnExplore: "Explore Spec Catalog",
      metricCleanroomTitle: "GMP R&D GRADE",
      metricCleanroomValue: "Class 100,000 Cleanroom",
      metricWaterTitle: "WATER COMPLIANCE",
      metricWaterValue: "RO Sterile Pure Water",
      metricCapacityTitle: "BATCH CAPACITY",
      metricCapacityValue: "15,000 sqm High-speed Mfg",
      metricStandardsTitle: "STANDARDS IN USE",
      metricStandardsValue: "ISO 9001, GMPC, CE"
    },
    certifications: {
      title: "Safety Verification & Compliance Registry",
      desc: "Click any certification below to view licensed parameters, cleanroom scopes, and standardized clinical test bounds.",
      standardTitle: "Verified Standard:",
      lobTitle: "LOB ACCOUNTABILITY",
      statusTitle: "STATUS RECORD",
      gmpComment: "GMP LAB COMMENT:",
      placeholder: "Click a standard above to inspect parameters."
    },
    categories: {
      title: "Clinical Specialization",
      subtitle: "High-Value Hygiene Categories",
      desc: "Select a hygiene category card below to inspect fiber compositions, RO water parameters, chemical solutions, and custom size catalogs.",
      badgeTooling: "Multi-size flexible packaging tooling ready",
      substrateLabel: "SUBSTRATE BLEND",
      gsmLabel: "STANDARD GSM",
      specSheetTitle: "Spec Sheet",
      formulaDescLabel: "Formula Description",
      standardFormulaLabel: "Standard Formula Presets",
      specsMatrixTitle: "Clinical Specs Matrix & Tooling Ready Parameters",
      specsParamLabel: "Param",
      specsValueLabel: "Standard Spec Range",
      specsGsmRange: "Substrate GSM Range",
      specsSizes: "Certified Available Sizes",
      specsCounts: "Recommended Sheet Counts",
      btnConfigureBase: "Configure This Substrate Base",
      btnProposalDraft: "Quick Proposal Draft"
    },
    ecosystem: {
      badge: "Manufacturing Excellence",
      title: "Integrated OEM/ODM Ecosystem",
      description: "From initial formula R&D testing in our microbiological cleanrooms to rapid high-volume substrate folding and packaging, we offer a completely integrated, traceable clean manufacturing service.",
      apiTitle: "Specification API Pre-Load",
      apiDesc: "Configure fiber blends and solutions below, then click to populate directly into our contact desk.",
      step1Title: "Formula R&D System",
      step1Desc: "Custom formulations engineered in our Class 100k sterile lab with continuous RO-purification monitoring and allergen screenings.",
      step2Title: "Flexible Automated Line",
      step2Desc: "Enclosed, touch-free folding corridors supporting various folding configurations (Z, C, interfold) with fast material changeover.",
      step3Title: "Multi-Stage Diagnostic QC",
      step3Desc: "CCD visual cameras verify lint presence and structural defects. Hand audits inspect seal protection integrity."
    },
    factory: {
      badge: "Certified Production Capabilities",
      title: "Our Sterile Manufacturing Hub",
      description: "Operating high-speed packaging engines inside highly-monitored sterile industrial corridors. Traceability standards guarantee lot consistency.",
      sqmLabel: "Sqm Clean Facility",
      marketsLabel: "Markets Reached",
      staffLabel: "Advanced Eng Staff",
      operationsLabel: "Operations",
      btnTour: "Schedule Cleanroom Facility Tour",
      tabFolding: "Folding Engine",
      tabRnd: "Formulation R&D Station",
      specTitle: "Equipment specs tag:"
    },
    inquiry: {
      badge: "Start Your Production Journey",
      title: "Request Comprehensive OEM/ODM Proposal",
      description: "Complete standard client parameter checks below. Our lead clinical formulation engineers and production analysts will respond with a formalized batch and price sheet within 24 hours.",
      nameLabel: "Procurement Name",
      namePlaceholder: "e.g. Director of Clinical Operations",
      companyLabel: "Company Name",
      companyPlaceholder: "e.g. Global Health Corp Inc.",
      emailLabel: "B2B Email Address",
      emailPlaceholder: "e.g. contact@corporatehealthcare.com",
      serviceLabel: "Service Class Category",
      messageLabel: "Project details, Formulation instructions & Material specifications",
      messageBadge: "Self-load from R&D Configurator above",
      messagePlaceholder: "Describe your customized product details, fiber blends (Spunlace, bamboo fabric), sheet dimensions, required antiseptic formulations, or target launch zones...",
      btnSubmit: "Submit Specification Inquiry",
      btnSubmitting: "Submitting Spec into Sterile Audit Portal...",
      receiptTitle: "Official Spec Specimen Receipt",
      receiptFile: "Inquiry File:",
      registeredLabel: "Registered:",
      buyerLabel: "Authorized Buyer",
      corpLabel: "Registered Corporation",
      contactLabel: "Contact Registry",
      registeredSpecTitle: "Registered Substrate Configuration",
      noSpecLoaded: "Category: OEM Custom Design\nNo additional configurations loaded.",
      approvedLabel: "Engine Diagnostic Result: Approved",
      diagnosticDesc: "Your loaded parameters are completely compatible with folding engine Line 4A and class-certified active ingredients. Estimated production lead time:",
      authLabel: "Authenticity MD5: 4bc8fa4ff89a71...",
      praiseLabel: "Approved by Procurement Desk YY",
      btnPrint: "Print",
      btnReset: "Reset Form"
    },
    about: {
      badge: "Sterile Clean History",
      titleFirst: "Corporate Legacy & ",
      titleSecond: "Our Clinical Mission",
      description: "Since our launch in April 2020 at the center of precision medical nonwoven manufacturing, Yiying Hygiene has committed to providing advanced, touch-free folding corridors and customized antiseptic solutions for international buyers. Each batch leaves our Class 100k Cleanroom certified under ISO 9001 and CE regulations.",
      teamTitle: "Technical R&D Team",
      teamDesc: "Highly specialized medical microbiologists verify skin-safety biocompatibility parameters at our labs daily.",
      sustainTitle: "Sustainability Standard",
      sustainDesc: "Eco-cellulose, certified USDA-biobased bamboo wipes, and 100% biodegradable fiber fabrics are fully supported under ODM.",
      h_site: "Main Facility Site",
      h_name: "Yiying HQ Plant 1",
      h_loc: "Clean City Industrial Zone, Zhejiang, CN"
    },
    footer: {
      desc: "Providing certified B2B nonwoven hygiene and cleaning product operations globally since 2020. Class 100,000 cleanroom certified.",
      columnResources: "RESOURCES",
      columnLegal: "LEGAL REGULATION",
      columnContact: "CONTACT REGISTER",
      phoneLabel: "WhatsApp Desk:",
      emailLabel: "Email Contact:",
      addressLabel: "Main Plant Address:",
      addressValue: "Cleanroom City Center, Zhejiang Industrial, CN",
      rights: "Yiying Hygiene Ltd. All Rights Reserved. Clinical Precision Manufacturing for the Global Health Sector."
    },
    configurator: {
      badge: "Step-by-Step Custom Design",
      title: "Formula R&D Configurator",
      desc: "Build your brand's specific clinical wipes. Adjust variables to generate simulated physical properties.",
      marketLabel: "1. Select Market Application",
      substrateLabel: "2. Substrate / Fiber Base",
      gsmTitle: "Substrate Weight (GSM)",
      gsmFine: "Fine/Precision",
      gsmHeavy: "Ultra-Heavy Duty",
      solutionLabel: "3. Chemical Preservative & Active Solution",
      packSelectTitle: "4. Sheets per Pack",
      packSelectSuffix: "Pcs",
      packSelectOption: "Full Sheets / Pack",
      packagingLabel: "5. Packaging Geometry",
      scentLabel: "Aroma Infusion Option",
      scentDesc: "Clinical default is completely fragrance-free (hypoallergenic).",
      scentOn: "Light Green Tea Scent",
      scentOff: "Unscented Pure Purewater Formulation",
      visualTitle: "Substrate Blueprint Visualization",
      visualSubtitle: "Clinical Spec Output (Simulated)",
      visualActive: "RO Sterile Flow: Active",
      visualPcs: "CT",
      diagnosticsTitle: "Material Physics Diagnostics",
      tensileLabel: "Substrate Tensile Coeff:",
      waterLabel: "Water Absorption Rate:",
      biodegLabel: "Biodegradation Index:",
      sterilityLabel: "Sterility Protection:",
      diagnosticsNote: "Formulated at Yiying Cleanroom Station 3 using active RO filtration. Verified under GMP microbiological standards.",
      btnApply: "Populate Spec in Proposal Inquiry",
      btnApplySuccess: "Specs Loaded! Form Ready Below",
      footerDesc: "Specs will auto-insert into the inquiry form message. Free chemical test samples are eligible with this loaded blueprint setup."
    }
  },
  zh: {
    navbar: {
      home: "首页",
      specializations: "专业领域",
      oemRnd: "OEM/ODM 研发",
      manufacturingHub: "制造中心",
      aboutYiying: "关于宜莹",
      contactSpecialist: "联系采购专员"
    },
    hero: {
      established: "始于 2020 年 4 月 • 认证实验室设施",
      titleFirst: "卫生制造中的 ",
      titleSecond: "临床级精密标准",
      description: "为医疗级湿巾、零毛料光学擦镜纸、亲肤舒缓面膜/卸妆棉、以及宠物卫生湿巾等高纯度非织造产品提供先进 OEM/ODM 解决方案。符合全球多重严格合规标准。",
      btnConfigure: "配置定制研发配方",
      btnExplore: "探索规格产品目录",
      metricCleanroomTitle: "GMP 研发等级",
      metricCleanroomValue: "10万级净化车间",
      metricWaterTitle: "生产水质合规",
      metricWaterValue: "RO 医用级反渗透纯水",
      metricCapacityTitle: "基地批次产能",
      metricCapacityValue: "1.5万平高速非织造布线",
      metricStandardsTitle: "执行合规标准",
      metricStandardsValue: "ISO 9001, GMPC, 欧盟CE"
    },
    certifications: {
      title: "安全验证与合规认证注册表",
      desc: "点击下方任何证书，即可实时调阅经审核的授权生产范围、无尘净化级数及临床测试数据界限。",
      standardTitle: "已核准标准：",
      lobTitle: "核准经营范围",
      statusTitle: "认证信誉记录",
      gmpComment: "无菌实验室合规备注：",
      placeholder: "点击上方合规标准标签以展开审计摘要。"
    },
    categories: {
      title: "临床细分领域",
      subtitle: "高价值卫生非织造品类",
      desc: "选择并展开上方各专业品类规范，以深入审查纤维细密配比、RO纯水检测参数、环保活性成分及专属尺寸段。",
      badgeTooling: "多规格柔性高速折叠与包装模具已全部上线",
      substrateLabel: "纤维材料构成",
      gsmLabel: "标准厚度克重",
      specSheetTitle: "技术规格表",
      formulaDescLabel: "配方效用说明",
      standardFormulaLabel: "预置标准医用配方",
      specsMatrixTitle: "制造规格参数矩阵及现成模具支持",
      specsParamLabel: "规格指标",
      specsValueLabel: "标准验证参数范围",
      specsGsmRange: "适用厚度 GSM 克重范围",
      specsSizes: "现成认证生产尺寸 (毫米)",
      specsCounts: "推荐每包装片数配置",
      btnConfigureBase: "以此纤维基材配置研发公式",
      btnProposalDraft: "快速草拟询价意向文件"
    },
    ecosystem: {
      badge: "卓越洁净生产线",
      title: "一体化 OEM/ODM 特色生态",
      description: "从我们微生物净化室中的早期试样、酸碱配方微滴测试，到大规模高速基质无接触折叠包装，宜莹提供无缝对接、源头可追溯的洁净卫生制造体系。",
      apiTitle: "生产技术参数智能加载",
      apiDesc: "请在下方调整基材与浸入配方，一键将您的专属技术规格导入下方询盘窗口，获取精准报价。",
      step1Title: "独立配方研发系统",
      step1Desc: "在 10 万级无菌室由临床专家研制配方，全程配合高压 RO 反渗透水循环检测及温和抗过敏筛查。",
      step2Title: "全自动柔性折叠线",
      step2Desc: "全封闭隔尘折叠廊道，全面支持 Z叠、C叠、交叉折叠等各种规格样式，换线转换损耗低。",
      step3Title: "多级机能诊断质检",
      step3Desc: "高清晰 CCD 工业相机全速抓取表面飘尘或异物，最终人工抽检封口防泄漏性能及压力限值。"
    },
    factory: {
      badge: "车间设备与制造吞吐量",
      title: "我们的自动化无菌制造中心",
      description: "在受严格空气、洁净控制的管道内运行全密闭包装设备。每一卷非织造基材、每批配方成分均留样备案、终身可追溯。",
      sqmLabel: "平米精密厂房及实验室",
      marketsLabel: "销往全球国家和地区",
      staffLabel: "位一线应用技术与研发工程师",
      operationsLabel: "运营响应速度",
      btnTour: "预约参观我们的一号生产车间",
      tabFolding: "极速非织造折叠设备",
      tabRnd: "配方研发与检测中心",
      specTitle: "设备重要合规指标："
    },
    inquiry: {
      badge: "开启您的定制化大货生产",
      title: "索取完整 OEM/ODM 方案报价",
      description: "您可以在下方配置或者填入您的产品方案需求。我们的值班采购经理与生产车间工程师将在 24 小时内向您回复正式估值单与试样排程表。",
      nameLabel: "业务联络负责人姓名",
      namePlaceholder: "例如：张采购总监",
      companyLabel: "公司全称",
      companyPlaceholder: "例如：某某医疗用品有限公司",
      emailLabel: "企业 B2B 联系邮箱",
      emailPlaceholder: "例如：buyer@yourcompany.com",
      serviceLabel: "代工代研服务类别",
      messageLabel: "项目背景描述、纤维配比偏好、液体活性及封口特殊要求",
      messageBadge: "自动承载上方配置器的技术成果",
      messagePlaceholder: "请阐述您的目标市场、预期的单片尺寸、无纺布偏好（如木浆粘胶混纺、超柔有机竹纤维等）、包装规格及液体配方功效...",
      btnSubmit: "保密提交此技术参数表单并询价",
      btnSubmitting: "正在将生产规格上传至合规审计系统...",
      receiptTitle: "核可产品规格参数回单",
      receiptFile: "技术批案文件号：",
      registeredLabel: "确核存档时间：",
      buyerLabel: "登记业务受托方",
      corpLabel: "注册订约商名字",
      contactLabel: "登记联络人通道",
      registeredSpecTitle: "经备案并解析的订制基材参数",
      noSpecLoaded: "代工类型: 宜莹多用途无纺布代工\n暂未侦测到预载的高能配置数据。",
      approvedLabel: "设备工程可行性评估: 已批准上线",
      diagnosticDesc: "经系统验证，您载入的湿巾和包装材质配置与全效高速折叠生产线 4A 完美兼容。试样首批估算交付时间：",
      authLabel: "数据防伪一致性 SHA 校验值：4bc8fa4ff89a71...",
      praiseLabel: "浙江宜莹采购服务部确验签章",
      btnPrint: "打印/导出 PDF 凭证",
      btnReset: "重置询盘表单"
    },
    about: {
      badge: "十载洁净传承回顾",
      titleFirst: "企业历程与 ",
      titleSecond: "医疗制造愿景",
      description: "自 2020 年春在新区高标准现代卫生非织造产业孵化园设立以来，宜莹（Yiying）秉持精益求精的精神。我们引入国内外一流的全密闭、十万级无尘折叠和灌装成套设备，旨在为全球广大药品、彩妆及宠物客商提供可深度追溯的高质服务。",
      teamTitle: "核心临床研发团队",
      teamDesc: "配备多位具有执业资质的皮肤学或微生物研究员，全面保障成品生物相容性合规。",
      sustainTitle: "全闭环环保制造标准",
      sustainDesc: "完整覆盖天然可降解棉草、USDA竹纤维基底，并全面响应工厂低能耗及零化工污水直接零排放标准。",
      h_site: "总部与制造基址",
      h_name: "宜莹一号示范智慧工厂",
      h_loc: "中国浙江省高新技术制造和洁净工业走廊"
    },
    footer: {
      desc: "致力于为全球专业医疗卫生、光学设备和宠物护理生态链提供经临床多重核查的可溯源代工服务。厂房级别：10万级净化车间。",
      columnResources: "研发资源",
      columnLegal: "监管与安全",
      columnContact: "采购服务接口",
      phoneLabel: "合伙业务直联:",
      emailLabel: "邮件询价通路:",
      addressLabel: "厂区地理区位:",
      addressValue: "中国浙江省清洁科技精密工业智造走廊",
      rights: "© 宜莹卫生用品有限公司 (Yiying Hygiene) 版权所有。为人类健康事业而构建的临床精密加工体系。"
    },
    configurator: {
      badge: "配方参数数字化设计",
      title: "参数配置与试样虚拟评估器",
      desc: "调整纤维成分、纯水渗透倍数及液量配比。一键导出并加载到下方需求表单中。",
      marketLabel: "1. 选定细分应用场景",
      substrateLabel: "2. 纤维基材及表面精制类型",
      gsmTitle: "基材克重选择范围 (g/m²)",
      gsmFine: "超薄、透光光学精度规格",
      gsmHeavy: "超厚重重体力洁净擦拭",
      solutionLabel: "3. 侵泡液体活性/滋养/保洁液选择",
      packSelectTitle: "4. 每包推荐装载片数 (张)",
      packSelectSuffix: "张",
      packSelectOption: "张规格成品 / 每包装",
      packagingLabel: "5. 外壳几何封装样式",
      scentLabel: "轻柔香味选择项",
      scentDesc: "临床推荐采用零香精添加、温和纯净级配方，降低潜在过敏可能性。",
      scentOn: "绿茶草本提取微香型",
      scentOff: "零添加、零香精无水气原味配置",
      visualTitle: "产品厚度及封装虚拟蓝图",
      visualSubtitle: "规格几何动态模拟看板",
      visualActive: "RO净化水注流状态: 不间断自流",
      visualPcs: "片装",
      diagnosticsTitle: "基于预设基材克重与厚度的物理性质诊断",
      tensileLabel: "估计横向/纵向拉伸强度:",
      waterLabel: "最大饱和吸液率指数:",
      biodegLabel: "平均自然降解消纳周期:",
      sterilityLabel: "包装阻隔阻菌系数:",
      diagnosticsNote: "在宜莹洁净配制中心 3 号站，以最高级别在线 RO 过滤水制成，完全符合 GMP 微生物学检测。",
      btnApply: "将定制参数导入询价单",
      btnApplySuccess: "预载导入成功！快来下方查看成果",
      footerDesc: "点击此按钮，规格数据会自动整理并替换到下方的留言里。加载此技术方案的客户能免费寄送定制微滴试样。"
    }
  }
};

export function getLocalizedCategories(lang: Language, pristineCategories: Category[]): Category[] {
  return pristineCategories.map((cat) => {
    if (lang === "zh") {
      if (cat.id === "functional-wipes") {
        return {
          ...cat,
          badge: "工业和医疗级",
          title: "功能性特种湿巾",
          subTitle: "针对高精尖工坊及临床诊疗环境的精密保洁防腐材料。",
          description: "专为防止交叉污染及高度消杀而设计。适用于无菌室、半导体晶圆室、生物分析实验室防静电防尘擦拭，基材具有强效吸液、不掉毛无尘的坚挺质地。",
          standardGSM: "50 - 68 GSM 涤纶-木浆混纺水刺无纺布",
          standardIngredients: "70% 异丙醇 (IPA)、苯扎氯铵、无菌纯医用水"
        };
      }
      if (cat.id === "lens-screen") {
        return {
          ...cat,
          badge: "高精密光学护理",
          title: "镜头与屏幕镜面纸",
          subTitle: "针对高端眼镜、相机镜头、数码平板触控等高透光基质的光学级去指纹擦拭。",
          description: "微纤水刺结构，强效锁住细微油污、不掉粉碎颗粒、零划伤、零微细滑痕、不留化学水渍。预饱和防静电吸附介质，适合各种高档涂层镜头。",
          standardGSM: "35 - 45 GSM 超细旦长丝水刺布",
          standardIngredients: "环保非离子表面活性洗液、防雾去油助剂、精密高透脱矿去离子水"
        };
      }
      if (cat.id === "pet-care") {
        return {
          ...cat,
          badge: "温和无刺激配方",
          title: "宠物安全卫生湿巾",
          subTitle: "专为爱宠调和酸碱度 (pH 6.5-7.5) 的健康保洁非织造湿巾。",
          description: "精选中厚克重、交叉网铺水刺无纺织物基布，可瞬间吸附尘土、体屑和浮毛。配方中完全不含 parabens、杀菌剂、强酸强碱或酒精染料等，宠舔无碍，温柔呵护皮层。",
          standardGSM: "55 - 70 GSM 交叉网铺水刺粘胶和聚酯混纺布",
          standardIngredients: "天然芦荟凝胶原液、洋甘菊提取物、生育酚 (VE)、葵基葡萄糖苷、纯净过滤水"
        };
      }
      if (cat.id === "personal-care") {
        return {
          ...cat,
          badge: "日常温和卫生",
          title: "个人护理及美妆卸妆湿布",
          subTitle: "眼唇舒缓卸妆、敏感肌温和消毒湿巾，富含保湿皮肤护理多重屏障调理体系。",
          description: "经皮肤学科安全性严谨测验，充分考虑每天温和卸除污物而不会损害角质阻隔层。吸水率匀称，质地温软如脂，触感极其亲和舒适。支持微量精简、活性因子等深度专研配制。",
          standardGSM: "40 - 55 GSM 可生物降解有机竹浆与天丝混纺无纺布",
          standardIngredients: "透明质酸钠、有机黄瓜纯露、一水柠檬酸、天然油水均衡甘油、超纯 RO 处理水"
        };
      }
    }
    return cat;
  });
}

export function getLocalizedCertifications(lang: Language, pristineCerts: Certification[]): Certification[] {
  return pristineCerts.map((cert) => {
    if (lang === "zh") {
      if (cert.name.includes("ISO 9001")) {
        return {
          name: "ISO 9001:2015 质量管理认证",
          authority: "SGS 瑞士通用公证行",
          scope: "医疗级净化无纺湿巾制造体系全流程质量追溯管理",
          year: "2024 年度审校核准",
          clinicalNote: "全面把关纯逆渗透水工艺管道状态、生产投料过程防污染性，达到全球合规要求。"
        };
      }
      if (cert.name.includes("GMP")) {
        return {
          name: "GMP 十万级净化车间认证",
          authority: "国家卫生监督检验检疫总局",
          scope: "无菌配方配制、无接触折叠走廊环境资质验证合规率",
          year: "创建自 2020 年 4 月至今",
          clinicalNote: "实施连续正压层流技术监控、高效 HEPA 空气过滤器，每日定量培养细菌残留测定。"
        };
      }
      if (cert.name.includes("CE Mark")) {
        return {
          name: "CE 欧盟医耗标准合格标记",
          authority: "EU 技术标准评议团",
          scope: "医疗器械 I 类指令及全效消毒配方对欧输出合规",
          year: "2025 年最新审计签署",
          clinicalNote: "排除原料细胞毒性与皮肤光化学刺激原。对于金黄色葡萄球菌与大肠杆菌消杀性能优良。"
        };
      }
      if (cert.name.includes("BSCI")) {
        return {
          name: "BSCI 供应链社会责任等级认证",
          authority: "Amfori 国际社会责任商贸协会",
          scope: "保障生产安全制度、公平劳动报酬、清洁循环经济处理",
          year: "2026 年度 A级金牌评估归案",
          clinicalNote: "车间全面推行低噪音、水循环再利用，提供阳光、全透明的人权与环保排硫管控审计。"
        };
      }
    }
    return cert;
  });
}

export function getLocalizedEquipments(lang: Language, pristineEquipments: Equipment[]): Equipment[] {
  return pristineEquipments.map((equip) => {
    if (lang === "zh") {
      if (equip.id === "extrusion-folding") {
        return {
          ...equip,
          name: "高柔性智能极速非织造折叠包装流水线",
          tag: "高速智能制造加速器",
          description: "全封闭无接触生产廊道，全自适应精准调整 Z 叠、C 叠、以及 interfold 交叉抽取规格形式，避免二次化学/毛尘沾染。",
          specs: [
            { label: "最优生产出产量", value: "800 - 1,200 片/分钟" },
            { label: "可控折叠切片误差", value: "仅 ±0.5 毫米线性限制" },
            { label: "基质通适克重范围", value: "30gsm 至 90gsm 大多规格多款通配" },
            { label: "空气物理洁净条件", value: "十万级洁净级多级加压过滤" }
          ]
        };
      }
      if (equip.id === "ro-pipette") {
        return {
          ...equip,
          name: "临床湿巾配方分析与气相纯水实验室",
          tag: "精密生物化学工程系统",
          description: "配备完备的双级反渗透 (RO) 高透水超纯净化总流程、理化精密 PH 梯度测定、超微重金属滴定和加速微生物层析设施。",
          specs: [
            { label: "生产用水电导精度", value: "< 0.1 μS/cm USP 国际电阻精控" },
            { label: "配制酸碱微调锁定", value: "±0.1 PH 标准控制阀限值" },
            { label: "超微金属检测灵敏度", value: "低于万分之 1 ppm 超低杂质判定" },
            { label: "加速菌落留样观察仓", value: "全天候 72 小时无残余霉菌侵袭验证" }
          ]
        };
      }
    }
    return equip;
  });
}

export interface PresetsBundle {
  materials: { value: string; label: string; gsmMin: number; gsmMax: number }[];
  formulations: { value: string; label: string }[];
  packaging: { value: string; label: string }[];
}

export function getLocalizedPresets(lang: Language, defaultMaterials: any[], defaultFormulations: any[], defaultPackaging: any[]): PresetsBundle {
  if (lang === "en") {
    return {
      materials: defaultMaterials,
      formulations: defaultFormulations,
      packaging: defaultPackaging
    };
  }

  return {
    materials: [
      { value: "spunlace-woodpulp", label: "木浆聚酯复合混纺无纺布 (超柔吸液型)", gsmMin: 50, gsmMax: 80 },
      { value: "bamboo-spunlace", label: "100% 有机竹纤维 (纯草本、可自然生物降解)", gsmMin: 40, gsmMax: 65 },
      { value: "tencel-skin", label: "天丝级丝柔水刺材质 (高品质美妆个人保养专用)", gsmMin: 35, gsmMax: 55 },
      { value: "cross-lapped-viscose", label: "交叉网铺粘胶/聚酯混纺 (超耐拉撕纵横向高强度)", gsmMin: 50, gsmMax: 90 },
      { value: "microfine-optical", label: "超细旦涤锦微细长丝 (零毛屑镜头屏幕精密护理用)", gsmMin: 35, gsmMax: 50 }
    ],
    formulations: [
      { value: "medical-sanitize", label: "70% 异丙醇(IPA)医疗临床级皮肤与物体消杀液体 (阻菌抗菌)" },
      { value: "sensitive-chamomile", label: "低致敏性库拉索芦荟浓缩体与洋甘菊舒缓蒸馏露 (亲水缓和)" },
      { value: "pet-safe-deodor", label: "宠物安全天然除臭抑菌因子与椰油基提取原液 (pH 7.0 酸碱中性)" },
      { value: "streak-free-optical", label: "无条纹指纹防静电专业光学镜头擦拭精油 (免擦洗无毒极速风干)" },
      { value: "salicylic-cleansing", label: "温和水杨酸/透明质酸美妆多效胶束毛孔清洁卸妆浸透液 (护肤级)" }
    ],
    packaging: [
      { value: "resealable-flowpack", label: "十字双向防跑湿柔性软包装 + 刚性塑料密封防漏翻盖" },
      { value: "single-sachet", label: "单片超密铝箔高绝缘易撕片装 (零液体蒸发及干涸率)" },
      { value: "tub-canister", label: "刚性圆柱体密封易拉罐装外桶 (配备内齿密封十字定量出口)" },
      { value: "kraft-organic", label: "环保天然牛皮原色纸高阻隔全纤维可降解除湿信封袋" }
    ]
  };
}
