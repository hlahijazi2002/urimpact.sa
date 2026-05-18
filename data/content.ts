import type { IconName } from "./icons";

export type Lang = "en" | "ar";

export const content = {
  nav: {
    platform: { en: "Platform", ar: "المنصة" },
    solutions: { en: "Solutions", ar: "الحلول" },
    frameworks: { en: "Frameworks", ar: "المعايير" },
    resources: { en: "Resources", ar: "الموارد" },
    about: { en: "About", ar: "عن الشركة" },
    contact: { en: "Contact", ar: "تواصل معنا" },
    demo: { en: "Request Demo", ar: "طلب عرض" },
    langSwitch: { en: "عربي", ar: "English" },
  },

  hero: {
    badge: {
      en: "Saudi Vision 2030 Aligned",
      ar: "متوافق مع رؤية السعودية 2030",
    },
    headline1: { en: "Measure", ar: "حوِّل بياناتك" },
    headline2: { en: "Manage", ar: "إلى تأثير" },
    headline3: { en: "Mitigate", ar: "حقيقي" },
    subheadline: {
      en: "URIMPACT enables organizations to measure GHG emissions, manage ESG performance, automate sustainability reporting, and accelerate decarbonization through AI-driven insights and Nature-Based Solutions.",
      ar: "تُمكّن URIMPACT المؤسسات من قياس انبعاثات الغازات الدفيئة، وإدارة أداء ESG، وأتمتة تقارير الاستدامة، وتسريع إزالة الكربون من خلال رؤى الذكاء الاصطناعي والحلول القائمة على الطبيعة.",
    },
    cta1: { en: "Request Demo", ar: "طلب عرض تجريبي" },
    cta2: { en: "Learn More", ar: "اعرف المزيد" },
    trustItems: [
      { en: "GRI Aligned", ar: "متوافق مع GRI" },
      { en: "IFRS S1 & S2 Ready", ar: "جاهز لـ IFRS S1 & S2" },
      { en: "GHG Protocol Compatible", ar: "متوافق مع بروتوكول GHG" },
      { en: "ISO 14064 Aligned", ar: "متوافق مع ISO 14064" },
      { en: "Saudi Vision 2030 Focused", ar: "مرتكز على رؤية 2030" },
    ],
    stats: [
      {
        value: "70%",
        label: { en: "Reporting Time Saved", ar: "توفير في وقت التقارير" },
      },
      { value: "3x", label: { en: "Faster Compliance", ar: "امتثال أسرع" } },
      {
        value: "100+",
        label: { en: "ESG KPIs Tracked", ar: "مؤشر ESG قيد التتبع" },
      },
    ],
  },

  problem: {
    sectionLabel: { en: "The Challenge", ar: "التحدي" },
    headline: {
      en: "Why Sustainability Transformation Cannot Wait",
      ar: "لماذا لا يمكن تأخير التحول نحو الاستدامة",
    },
    body: {
      en: "Global regulations, investor pressure, and climate risks are forcing organizations to rethink operations. Yet most enterprises struggle with fragmented ESG data, manual reporting processes, and lack of visibility into carbon emissions.",
      ar: "تُجبر اللوائح العالمية وضغوط المستثمرين والمخاطر المناخية المؤسسات على إعادة التفكير في عملياتها. ومع ذلك، تعاني معظم الشركات من تشتت بيانات ESG والعمليات اليدوية وانعدام الرؤية لانبعاثات الكربون.",
    },
    transition: {
      en: "URIMPACT helps organizations move from disconnected spreadsheets to intelligent sustainability management.",
      ar: "تساعد URIMPACT المؤسسات على الانتقال من جداول البيانات المتفرقة إلى إدارة الاستدامة الذكية.",
    },
    cards: [
      {
        icon: "lightning" as IconName,
        title: { en: "ESG Reporting Complexity", ar: "تعقيد تقارير ESG" },
        desc: {
          en: "Multi-framework requirements create compliance bottlenecks and resource drain.",
          ar: "متطلبات المعايير المتعددة تخلق اختناقات الامتثال واستنزاف الموارد.",
        },
      },
      {
        icon: "scope3" as IconName,
        title: { en: "Scope 3 Data Gaps", ar: "فجوات بيانات النطاق 3" },
        desc: {
          en: "Supply chain emissions remain invisible without integrated data collection.",
          ar: "تبقى انبعاثات سلسلة التوريد غير مرئية بدون جمع بيانات متكامل.",
        },
      },
      {
        icon: "chart-gap" as IconName,
        title: {
          en: "No Decarbonization Visibility",
          ar: "غياب رؤية إزالة الكربون",
        },
        desc: {
          en: "Organizations lack clear roadmaps to track progress toward climate targets.",
          ar: "تفتقر المؤسسات إلى خرائط طريق واضحة لتتبع التقدم نحو أهداف المناخ.",
        },
      },
      {
        icon: "roadmap" as IconName,
        title: {
          en: "No Actionable Roadmap",
          ar: "غياب خارطة طريق قابلة للتنفيذ",
        },
        desc: {
          en: "Data without strategy leaves sustainability goals unachievable.",
          ar: "البيانات بدون استراتيجية تجعل أهداف الاستدامة غير قابلة للتحقيق.",
        },
      },
    ],
  },

  platform: {
    sectionLabel: { en: "The Platform", ar: "المنصة" },
    headline: {
      en: "One Integrated Sustainability Platform",
      ar: "منصة استدامة متكاملة واحدة",
    },
    intro: {
      en: "URIMPACT combines ESG management, GHG accounting, decarbonization intelligence, and Nature-Based Solutions into a single enterprise platform.",
      ar: "تجمع URIMPACT إدارة ESG ومحاسبة الغازات الدفيئة وذكاء إزالة الكربون والحلول القائمة على الطبيعة في منصة مؤسسية واحدة.",
    },
    modules: [
      {
        id: "esg",
        icon: "esg-module" as IconName,
        color: "#00E5A0",
        title: { en: "ESG Management", ar: "إدارة ESG" },
        desc: {
          en: "Track ESG KPIs across environmental, social, and governance pillars with automated workflows, compliance mapping, and performance dashboards.",
          ar: "تتبع مؤشرات ESG عبر الركائز البيئية والاجتماعية والحوكمة مع سير عمل آلي ورسم خرائط الامتثال ولوحات الأداء.",
        },
        features: [
          { en: "ESG KPI tracking", ar: "تتبع مؤشرات ESG" },
          { en: "Materiality assessment", ar: "تقييم الجوهرية" },
          { en: "Audit-ready reporting", ar: "تقارير جاهزة للتدقيق" },
          { en: "Supplier ESG assessment", ar: "تقييم ESG للموردين" },
        ],
      },
      {
        id: "ghg",
        icon: "ghg-module" as IconName,
        color: "#00C2FF",
        title: { en: "GHG Accounting", ar: "محاسبة الغازات الدفيئة" },
        desc: {
          en: "Measure Scope 1, 2, and 3 emissions using globally recognized methodologies aligned with the GHG Protocol.",
          ar: "قياس انبعاثات النطاق 1 و2 و3 باستخدام منهجيات معترف بها عالمياً ومتوافقة مع بروتوكول GHG.",
        },
        features: [
          { en: "Scope 1, 2, 3 calculations", ar: "حسابات النطاق 1 و2 و3" },
          {
            en: "Activity & spend-based data",
            ar: "بيانات قائمة على النشاط والإنفاق",
          },
          {
            en: "Real-time emissions dashboard",
            ar: "لوحة انبعاثات في الوقت الفعلي",
          },
          { en: "Automated data collection", ar: "جمع البيانات الآلي" },
        ],
      },
      {
        id: "decarb",
        icon: "decarb-module" as IconName,
        color: "#7B61FF",
        title: { en: "Decarbonization Intelligence", ar: "ذكاء إزالة الكربون" },
        desc: {
          en: "Move beyond reporting with AI-powered reduction planning and transition pathways.",
          ar: "تجاوز مرحلة التقارير مع تخطيط تخفيض الانبعاثات المدعوم بالذكاء الاصطناعي ومسارات الانتقال.",
        },
        features: [
          { en: "Net Zero pathways", ar: "مسارات صفر انبعاثات" },
          { en: "Reduction target tracking", ar: "تتبع أهداف التخفيض" },
          { en: "Scenario analysis", ar: "تحليل السيناريوهات" },
          {
            en: "Carbon hotspot identification",
            ar: "تحديد نقاط الكربون الساخنة",
          },
        ],
      },
      {
        id: "nbs",
        icon: "nbs-module" as IconName,
        color: "#39D353",
        title: {
          en: "Nature-Based Solutions",
          ar: "الحلول القائمة على الطبيعة",
        },
        desc: {
          en: "Integrate ecological restoration and climate-positive interventions into your sustainability strategy.",
          ar: "دمج استعادة النظام البيئي والتدخلات الإيجابية للمناخ في استراتيجية الاستدامة الخاصة بك.",
        },
        features: [
          { en: "Urban landscaping", ar: "التشجير والتنسيق الحضري" },
          { en: "Carbon sequestration projects", ar: "مشاريع عزل الكربون" },
          {
            en: "Climate resilience strategies",
            ar: "استراتيجيات المرونة المناخية",
          },
          { en: "Biodiversity restoration", ar: "استعادة التنوع البيولوجي" },
        ],
      },
    ],
  },

  howItWorks: {
    sectionLabel: { en: "How It Works", ar: "كيف تعمل" },
    headline: { en: "From Measurement to Impact", ar: "من القياس إلى التأثير" },
    // Steps use numbered badges (01–05) — no icon key needed.
    steps: [
      {
        num: "01",
        title: { en: "Collect", ar: "اجمع" },
        desc: {
          en: "Integrate sustainability data from operations, facilities, procurement, logistics, and suppliers.",
          ar: "دمج بيانات الاستدامة من العمليات والمرافق والمشتريات والخدمات اللوجستية والموردين.",
        },
      },
      {
        num: "02",
        title: { en: "Measure", ar: "قِس" },
        desc: {
          en: "Calculate ESG metrics and GHG emissions across Scope 1, 2, and 3.",
          ar: "احسب مقاييس ESG وانبعاثات الغازات الدفيئة عبر النطاقات 1 و2 و3.",
        },
      },
      {
        num: "03",
        title: { en: "Analyze", ar: "حلِّل" },
        desc: {
          en: "Identify carbon hotspots, risks, compliance gaps, and improvement opportunities.",
          ar: "حدد نقاط الكربون الساخنة والمخاطر وفجوات الامتثال وفرص التحسين.",
        },
      },
      {
        num: "04",
        title: { en: "Decarbonize", ar: "خفِّض الكربون" },
        desc: {
          en: "Implement reduction strategies and Nature-Based Solutions aligned with business goals.",
          ar: "نفّذ استراتيجيات التخفيض والحلول القائمة على الطبيعة المتوافقة مع أهداف العمل.",
        },
      },
      {
        num: "05",
        title: { en: "Report", ar: "أبلِّغ" },
        desc: {
          en: "Generate investor-grade sustainability reports aligned with global frameworks.",
          ar: "أنشئ تقارير استدامة بمستوى المستثمرين متوافقة مع المعايير العالمية.",
        },
      },
    ],
  },

  frameworks: {
    sectionLabel: { en: "Compliance", ar: "الامتثال" },
    headline: {
      en: "Built for Global Sustainability Frameworks",
      ar: "مبني للمعايير العالمية للاستدامة",
    },
    body: {
      en: "URIMPACT simplifies sustainability disclosures by aligning your reporting workflows with globally accepted standards and regional compliance requirements.",
      ar: "تبسّط URIMPACT إفصاحات الاستدامة من خلال مواءمة سير عمل التقارير مع المعايير المقبولة عالمياً ومتطلبات الامتثال الإقليمية.",
    },
    items: [
      "GRI",
      "SASB",
      "TCFD",
      "IFRS S1/S2",
      "CSRD",
      "GHG Protocol",
      "CDP",
      "UN SDGs",
    ],
  },

  ai: {
    sectionLabel: { en: "AI Intelligence", ar: "الذكاء الاصطناعي" },
    headline: {
      en: "AI-Powered Sustainability Intelligence",
      ar: "ذكاء استدامة مدعوم بالذكاء الاصطناعي",
    },
    body: {
      en: "Transform sustainability data into strategic decisions using predictive analytics, automated emissions calculations, and intelligent recommendations.",
      ar: "حوّل بيانات الاستدامة إلى قرارات استراتيجية باستخدام التحليلات التنبؤية وحسابات الانبعاثات الآلية والتوصيات الذكية.",
    },
    features: [
      {
        icon: "ai-extract" as IconName,
        title: {
          en: "AI-Assisted Data Extraction",
          ar: "استخراج البيانات بالذكاء الاصطناعي",
        },
        desc: {
          en: "Automate data ingestion from multiple sources.",
          ar: "أتمتة استيعاب البيانات من مصادر متعددة.",
        },
      },
      {
        icon: "emission-map" as IconName,
        title: {
          en: "Automated Emission Mapping",
          ar: "رسم خرائط الانبعاثات الآلي",
        },
        desc: {
          en: "Real-time mapping of emission sources across operations.",
          ar: "رسم خرائط فوري لمصادر الانبعاثات عبر العمليات.",
        },
      },
      {
        icon: "risk" as IconName,
        title: { en: "Risk Prediction", ar: "التنبؤ بالمخاطر" },
        desc: {
          en: "Identify climate and regulatory risks before they escalate.",
          ar: "حدد المخاطر المناخية والتنظيمية قبل تصاعدها.",
        },
      },
      {
        icon: "benchmark" as IconName,
        title: { en: "Smart Benchmarking", ar: "المقارنة الذكية" },
        desc: {
          en: "Compare performance against industry peers and best practices.",
          ar: "قارن الأداء مع أقران الصناعة وأفضل الممارسات.",
        },
      },
      {
        icon: "decarb-rec" as IconName,
        title: {
          en: "Decarbonization Recommendations",
          ar: "توصيات إزالة الكربون",
        },
        desc: {
          en: "AI-generated action plans to accelerate Net Zero goals.",
          ar: "خطط عمل مُولَّدة بالذكاء الاصطناعي لتسريع أهداف الحياد الصفري.",
        },
      },
    ],
  },

  nbs: {
    sectionLabel: { en: "NBS", ar: "الحلول الطبيعية" },
    headline: {
      en: "Where Technology Meets Nature",
      ar: "حيث تلتقي التكنولوجيا بالطبيعة",
    },
    body: {
      en: "Unlike traditional ESG software platforms, URIMPACT combines digital sustainability intelligence with real-world Nature-Based Solutions to create measurable environmental impact.",
      ar: "على خلاف منصات برامج ESG التقليدية، تجمع URIMPACT بين الذكاء الرقمي للاستدامة والحلول الطبيعية الواقعية لخلق تأثير بيئي قابل للقياس.",
    },
    highlights: [
      { en: "Urban Landscaping", ar: "التشجير والتنسيق الحضري" },
      { en: "Biodiversity Restoration", ar: "استعادة التنوع البيولوجي" },
      { en: "Carbon Sink Enhancement", ar: "تعزيز مصارف الكربون" },
    ],
  },

  businessValue: {
    sectionLabel: { en: "Business Value", ar: "القيمة التجارية" },
    headline: {
      en: "Sustainability That Creates Business Value",
      ar: "استدامة تخلق قيمة تجارية",
    },
    metrics: [
      {
        value: "70%",
        label: {
          en: "Reduction in Reporting Time",
          ar: "تخفيض في وقت التقارير",
        },
        icon: "delayed" as IconName,
      },
      {
        value: "3x",
        label: { en: "Faster ESG Visibility", ar: "رؤية ESG أسرع" },
        icon: "chart-gap" as IconName,
      },
      {
        value: "100%",
        label: {
          en: "Framework Compliance Coverage",
          ar: "تغطية امتثال المعايير",
        },
        icon: "decarb-rec" as IconName,
      },
      {
        value: "∞",
        label: { en: "Investor Confidence Boost", ar: "تعزيز ثقة المستثمرين" },
        icon: "benchmark" as IconName,
      },
      {
        value: "Net Zero",
        label: { en: "Accelerated Planning", ar: "تخطيط متسارع" },
        icon: "decarb-module" as IconName,
      },
    ],
  },

  caseStudies: {
    sectionLabel: { en: "Impact", ar: "التأثير" },
    headline: {
      en: "Real Sustainability Outcomes",
      ar: "نتائج استدامة حقيقية",
    },
    cases: [
      {
        industry: { en: "Manufacturing", ar: "التصنيع" },
        challenge: {
          en: "Complex Scope 3 emissions across 200+ suppliers",
          ar: "انبعاثات النطاق 3 المعقدة عبر 200+ مورد",
        },
        solution: {
          en: "Automated supply chain emission tracking with AI-powered insights",
          ar: "تتبع انبعاثات سلسلة التوريد الآلي مع رؤى مدعومة بالذكاء الاصطناعي",
        },
        stat1: {
          label: { en: "Emissions Reduced", ar: "تخفيض الانبعاثات" },
          value: {
            en: "Pilot results available upon request",
            ar: "النتائج التجريبية متاحة عند الطلب",
          },
        },
        stat2: {
          label: { en: "ESG Score Improved", ar: "تحسين نقاط ESG" },
          value: {
            en: "Pilot results available upon request",
            ar: "النتائج التجريبية متاحة عند الطلب",
          },
        },
      },
      {
        industry: { en: "Real Estate", ar: "العقارات" },
        challenge: {
          en: "No visibility into building energy and carbon performance",
          ar: "غياب الرؤية في أداء طاقة المباني والكربون",
        },
        solution: {
          en: "Real-time energy monitoring with decarbonization roadmaps",
          ar: "مراقبة الطاقة في الوقت الفعلي مع خرائط طريق إزالة الكربون",
        },
        stat1: {
          label: { en: "Carbon Footprint Cut", ar: "خفض البصمة الكربونية" },
          value: {
            en: "Pilot results available upon request",
            ar: "النتائج التجريبية متاحة عند الطلب",
          },
        },
        stat2: {
          label: { en: "Investor Confidence", ar: "ثقة المستثمرين" },
          value: { en: "2X", ar: "2X" },
        },
      },
      {
        industry: { en: "Smart Cities", ar: "المدن الذكية" },
        challenge: {
          en: "Fragmented sustainability data across city departments",
          ar: "تشتت بيانات الاستدامة عبر أقسام المدينة",
        },
        solution: {
          en: "Unified ESG dashboard with NBS integration for urban greening",
          ar: "لوحة ESG موحدة مع دمج الحلول الطبيعية للتخضير الحضري",
        },
        stat1: {
          label: { en: "Urban Heat Reduced", ar: "تخفيض الحرارة الحضرية" },
          value: {
            en: "Pilot results available upon request",
            ar: "النتائج التجريبية متاحة عند الطلب",
          },
        },
        stat2: {
          label: { en: "Reporting Automated", ar: "تقارير مؤتمتة" },
          value: {
            en: "Pilot results available upon request",
            ar: "النتائج التجريبية متاحة عند الطلب",
          },
        },
      },
    ],
  },

  about: {
    sectionLabel: { en: "About", ar: "عن الشركة" },
    headline: { en: "About URIMPACT", ar: "عن URIMPACT" },
    body: {
      en: "URIMPACT is a sustainability intelligence platform helping organizations accelerate their transition toward responsible, resilient, and low-carbon operations. We combine ESG management, GHG accounting, AI-powered decarbonization, and Nature-Based Solutions into one integrated ecosystem designed for modern enterprises.",
      ar: "URIMPACT هي منصة ذكاء استدامة تساعد المؤسسات على تسريع انتقالها نحو عمليات مسؤولة ومرنة وذات انبعاثات كربونية منخفضة. نجمع إدارة ESG ومحاسبة الغازات الدفيئة وإزالة الكربون المدعومة بالذكاء الاصطناعي والحلول الطبيعية في نظام بيئي متكامل واحد مصمم للمؤسسات الحديثة.",
    },
    mission: {
      label: { en: "Mission", ar: "المهمة" },
      text: {
        en: "To simplify sustainability transformation through intelligent technology and measurable environmental impact.",
        ar: "تبسيط التحول نحو الاستدامة من خلال التكنولوجيا الذكية والتأثير البيئي القابل للقياس.",
      },
    },
    vision: {
      label: { en: "Vision", ar: "الرؤية" },
      text: {
        en: "To become the leading sustainability operating system for enterprises across the Middle East and beyond.",
        ar: "أن نصبح نظام التشغيل الرائد للاستدامة للمؤسسات عبر الشرق الأوسط وما يتخطاه.",
      },
    },
  },

  partners: {
    sectionLabel: { en: "Our Partners", ar: "شركاؤنا" },
    headline: {
      en: "Trusted by Leading Institutions",
      ar: "موثوق به من قِبَل المؤسسات الرائدة",
    },
    items: [
      { name: "KACST", logo: "https://urimpact.sa/images/partners/KACST.svg" },
      {
        name: "King Abdulaziz University",
        logo: "https://urimpact.sa/images/partners/King Abdulaziz University.svg",
      },
      {
        name: "King Khalid University",
        logo: "https://urimpact.sa/images/partners/king-khalid-university.svg",
      },
      {
        name: "Majmaah University",
        logo: "https://urimpact.sa/images/partners/Majmaah University.svg",
      },
      {
        name: "MEWA",
        logo: "https://urimpact.sa/images/partners/mewa-logo.svg",
      },
      {
        name: "NCVC",
        logo: "https://urimpact.sa/images/partners/NCVC-Logo-Color-AR.svg",
      },
      {
        name: "Prince Sattam University",
        logo: "https://urimpact.sa/images/partners/prince-sattam-bin-abdullaziz-university.svg",
      },
      {
        name: "Saudi Ministry of National Guard",
        logo: "https://urimpact.sa/images/partners/Saudi_Ministry_of_National_Guard_Logo.svg",
      },
      {
        name: "Wareef",
        logo: "https://urimpact.sa/images/partners/wareef.svg",
      },
    ],
  },

  services: {
    sectionLabel: { en: "Our Services", ar: "خدماتنا" },
    headline: {
      en: "End-to-End Sustainability Services",
      ar: "خدمات استدامة متكاملة",
    },
    tabs: [
      {
        id: "csr",
        title: { en: "CSR Tree Planting", ar: "زراعة الأشجار CSR" },
        headline: {
          en: "Satellite-Verified Tree Planting Certificates",
          ar: "شهادات زراعة الأشجار الموثّقة بالأقمار الاصطناعية",
        },
        body: {
          en: "Perfect for corporate social responsibility initiatives and sustainability commitments. Reports are structured to meet Verra VCS, Gold Standard, and other carbon credit certification requirements.",
          ar: "مثالية لمبادرات المسؤولية الاجتماعية للشركات والتزامات الاستدامة. تم هيكلة التقارير لتلبية متطلبات Verra VCS وGold Standard وغيرها.",
        },
        features: [
          { en: "Verification certificates", ar: "شهادات التحقق" },
          {
            en: "Satellite imagery proof",
            ar: "إثبات بصور الأقمار الاصطناعية",
          },
          {
            en: "GPS-verified tree counts",
            ar: "أعداد الأشجار المتحقق منها بـ GPS",
          },
          { en: "Shareable impact reports", ar: "تقارير تأثير قابلة للمشاركة" },
          { en: "Biodiversity assessment", ar: "تقييم التنوع البيولوجي" },
        ],
      },
      {
        id: "esg",
        title: { en: "ESG Management Platform", ar: "منصة إدارة ESG" },
        headline: {
          en: "Complete Carbon Management Platform",
          ar: "منصة إدارة الكربون الكاملة",
        },
        body: {
          en: "Combine Scope 1 & 2 emissions tracking with satellite-verified tree planting offsets. Automate ESG reporting for regulatory compliance and stakeholder transparency.",
          ar: "اجمع تتبع انبعاثات النطاق 1 و2 مع تعويضات زراعة الأشجار الموثّقة بالأقمار الاصطناعية. أتمتة تقارير ESG للامتثال التنظيمي وشفافية أصحاب المصلحة.",
        },
        features: [
          { en: "Emissions tracking", ar: "تتبع الانبعاثات" },
          { en: "AI-powered insights", ar: "رؤى مدعومة بالذكاء الاصطناعي" },
          { en: "Carbon offset integration", ar: "دمج تعويضات الكربون" },
          { en: "ESG reporting automation", ar: "أتمتة تقارير ESG" },
          { en: "Regulatory compliance", ar: "الامتثال التنظيمي" },
          { en: "Stakeholder dashboards", ar: "لوحات أصحاب المصلحة" },
        ],
      },
      {
        id: "mrv",
        title: { en: "Carbon Credit MRV", ar: "MRV ائتمانات الكربون" },
        headline: {
          en: "Quarterly/Annual Monitoring, Reporting & Verification",
          ar: "المراقبة والتقارير والتحقق الفصلي/السنوي",
        },
        body: {
          en: "Comprehensive monitoring for carbon credit projects. Reports are automatically structured to meet international standards including Verra VCS, Gold Standard, and Plan Vivo.",
          ar: "مراقبة شاملة لمشاريع ائتمانات الكربون. يتم هيكلة التقارير تلقائياً لتلبية المعايير الدولية بما فيها Verra VCS وGold Standard وPlan Vivo.",
        },
        features: [
          { en: "Quarterly/annual reports", ar: "تقارير ربع سنوية/سنوية" },
          { en: "Carbon sequestration metrics", ar: "مقاييس عزل الكربون" },
          { en: "Compliance documentation", ar: "وثائق الامتثال" },
          { en: "Baseline assessments", ar: "تقييمات الخط الأساسي" },
          { en: "Additionality verification", ar: "التحقق من الإضافية" },
          { en: "Third-party audit support", ar: "دعم التدقيق من طرف ثالث" },
        ],
      },
    ],
  },

  satelliteComparison: {
    sectionLabel: { en: "Problem & Solution", ar: "المشكلة والحل" },
    headline: {
      en: "Traditional vs. Automated Monitoring",
      ar: "المراقبة التقليدية مقابل الآلية",
    },
    traditional: {
      title: {
        en: "Traditional Tree Monitoring Is Costly & Inefficient",
        ar: "المراقبة التقليدية للأشجار مكلفة وغير فعّالة",
      },
      items: [
        {
          icon: "field-visit" as IconName,
          title: { en: "Manual Field Visits", ar: "زيارات ميدانية يدوية" },
          desc: {
            en: "Requires teams to physically visit sites, consuming time and resources",
            ar: "يتطلب من الفرق زيارة المواقع جسدياً، مما يستهلك الوقت والموارد",
          },
        },
        {
          icon: "delayed" as IconName,
          title: { en: "Delayed Reporting", ar: "تأخر التقارير" },
          desc: {
            en: "Data collection and analysis takes weeks or months to complete",
            ar: "يستغرق جمع البيانات وتحليلها أسابيع أو أشهر",
          },
        },
        {
          icon: "limited-coverage" as IconName,
          title: { en: "Limited Coverage", ar: "تغطية محدودة" },
          desc: {
            en: "Difficult to monitor large or remote areas comprehensively",
            ar: "صعوبة مراقبة المناطق الكبيرة أو النائية بشكل شامل",
          },
        },
        {
          icon: "high-cost" as IconName,
          title: { en: "High Costs", ar: "تكاليف عالية" },
          desc: {
            en: "Travel, personnel, and equipment expenses add up quickly",
            ar: "تتراكم نفقات السفر والموظفين والمعدات بسرعة",
          },
        },
      ],
    },
    automated: {
      title: {
        en: "URIMPACT Provides Automated Satellite Monitoring",
        ar: "URIMPACT تقدم مراقبة آلية بالأقمار الاصطناعية",
      },
      body: {
        en: "Automated satellite monitoring + AI-driven analysis provides continuous, verifiable, and auditable insights across every planting project.",
        ar: "توفر المراقبة الآلية بالأقمار الاصطناعية + التحليل المدعوم بالذكاء الاصطناعي رؤى مستمرة وقابلة للتحقق والتدقيق عبر كل مشروع زراعي.",
      },
      items: [
        {
          icon: "realtime" as IconName,
          title: { en: "Real-Time Data", ar: "بيانات فورية" },
          desc: {
            en: "Continuous satellite monitoring provides up-to-date insights daily",
            ar: "توفر مراقبة الأقمار الاصطناعية المستمرة رؤى محدّثة يومياً",
          },
        },
        {
          icon: "full-coverage" as IconName,
          title: { en: "Full Coverage", ar: "تغطية كاملة" },
          desc: {
            en: "Monitor any location globally, regardless of size or accessibility",
            ar: "راقب أي موقع عالمياً بصرف النظر عن الحجم أو إمكانية الوصول",
          },
        },
        {
          icon: "cost-effective" as IconName,
          title: { en: "Cost-Effective", ar: "فعّالة من حيث التكلفة" },
          desc: {
            en: "Eliminate travel costs and reduce personnel requirements significantly",
            ar: "تخلص من تكاليف السفر وقلّل متطلبات الموظفين بشكل كبير",
          },
        },
        {
          icon: "transparent" as IconName,
          title: { en: "Transparent Reporting", ar: "تقارير شفافة" },
          desc: {
            en: "Automated reports and dashboards keep all stakeholders informed",
            ar: "التقارير الآلية ولوحات المعلومات تُبقي جميع أصحاب المصلحة على اطلاع",
          },
        },
      ],
    },
  },

  cta: {
    headline: {
      en: "Ready to Accelerate Your Net Zero Journey?",
      ar: "هل أنت مستعد لتسريع رحلتك نحو الحياد الصفري؟",
    },
    sub: {
      en: "Designed for enterprises building climate resilience, ESG leadership, and long-term sustainability impact.",
      ar: "مصمم للمؤسسات التي تبني المرونة المناخية وقيادة ESG وتأثير الاستدامة طويل الأمد.",
    },
    btn1: { en: "Schedule a Demo", ar: "طلب عرض" },
    btn2: {
      en: "Talk to Sustainability Experts",
      ar: "تحدث إلى خبراء الاستدامة",
    },
  },

  footer: {
    platform: {
      label: { en: "Platform", ar: "المنصة" },
      links: [
        { en: "ESG Management", ar: "إدارة ESG" },
        { en: "GHG Accounting", ar: "محاسبة الغازات الدفيئة" },
        { en: "Decarbonization", ar: "إزالة الكربون" },
        { en: "Nature-Based Solutions", ar: "الحلول القائمة على الطبيعة" },
      ],
    },
    solutions: {
      label: { en: "Solutions", ar: "الحلول" },
      links: [
        { en: "Manufacturing", ar: "التصنيع" },
        { en: "Real Estate", ar: "العقارات" },
        { en: "Smart Cities", ar: "المدن الذكية" },
        { en: "Supply Chain", ar: "سلسلة التوريد" },
      ],
    },
    resources: {
      label: { en: "Resources", ar: "الموارد" },
      links: [
        { en: "Blogs", ar: "المدونات" },
        { en: "Sustainability Insights", ar: "رؤى الاستدامة" },
        { en: "Framework Guides", ar: "أدلة المعايير" },
        { en: "ESG News", ar: "أخبار ESG" },
      ],
    },
    company: {
      label: { en: "Company", ar: "الشركة" },
      links: [
        { en: "About", ar: "عن الشركة" },
        { en: "Contact", ar: "تواصل معنا" },
        { en: "Careers", ar: "الوظائف" },
        { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      ],
    },
    copyright: {
      en: `© 2026 URIMPACT. All rights reserved.`,
      ar: `© 2026 URIMPACT. جميع الحقوق محفوظة.`,
    },
    newsletter: {
      label: {
        en: "Subscribe to our newsletter",
        ar: "اشترك في نشرتنا الإخبارية",
      },
      placeholder: { en: "Your email address", ar: "بريدك الإلكتروني" },
      btn: { en: "Subscribe", ar: "اشترك" },
    },
    legal: [
      { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      { en: "Terms of Service", ar: "شروط الخدمة" },
      { en: "Cookie Policy", ar: "سياسة الكوكيز" },
      { en: "Security", ar: "الأمان" },
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/urimpact/",
      whatsapp: "https://api.whatsapp.com/send?phone=966545636919",
      email: "mailto:info@urimpact.sa",
    },
  },
};

export type ContentType = typeof content;
