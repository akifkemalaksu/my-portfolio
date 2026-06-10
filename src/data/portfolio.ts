export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  cvPath: string;
  socials: SocialLink[];
}

export interface AboutData {
  bio: string;
  avatarPath: string;
  location: string;
  email: string;
  phone: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "full-time" | "internship" | "freelance";
  projects?: string[];
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  company: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  startYear: number;
  endYear: number;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: number;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
}

// ─── Shared (language-independent) ──────────────────────────────────────────

const socials: SocialLink[] = [
  { label: "GitHub",   href: "https://github.com/akifkemalaksu",        icon: "github"   },
  { label: "LinkedIn", href: "https://linkedin.com/in/akifkemalaksu37", icon: "linkedin" },
  { label: "Email",    href: "mailto:akifkemalaksu@gmail.com",           icon: "mail"     },
];

const sharedSkills = [
  {
    category: "Architecture & Patterns",
    tr: "Mimari & Tasarım Desenleri",
    skills: ["Domain Driven Design (DDD)", "Onion Architecture", "Microservices", "Saga", "CQRS", "Outbox/Inbox", "SOLID", "Clean Code"],
  },
  {
    category: "Backend & Testing",
    tr: "Backend & Test",
    skills: [".NET / .NET Core", ".NET Aspire", "ASP.NET MVC", "RESTful API Design", "MediatR", "FluentValidation", "SOAP", "xUnit", "Moq"],
  },
  {
    category: "Database & Data",
    tr: "Veritabanı & Veri",
    skills: ["PostgreSQL", "MS SQL (T-SQL)", "Redis", "AWS OpenSearch", "Elasticsearch", "MongoDB", "Dapper", "Entity Framework Core", "AWS S3"],
  },
  {
    category: "Observability & DevOps",
    tr: "Gözlemlenebilirlik & DevOps",
    skills: ["LGTM Stack", "OpenTelemetry", "Docker & Docker Compose", "Kubernetes", "Nginx", "Jenkins", "GitHub Actions", "SonarQube"],
  },
  {
    category: "Security",
    tr: "Güvenlik",
    skills: ["Duende IdentityServer", "OAuth2", "JWT", "2FA"],
  },
  {
    category: "Message Brokers & Real-time",
    tr: "Mesaj Kuyruğu & Gerçek Zamanlı",
    skills: ["RabbitMQ", "MassTransit", "SignalR", "Event Bus Pattern"],
  },
];

// ─── Turkish ─────────────────────────────────────────────────────────────────

const tr: PortfolioData = {
  hero: {
    name: "Akif Kemal Aksu",
    title: "Kıdemli Backend Geliştirici",
    subtitle: ".NET & Mikroservisler",
    tagline: "Ölçeklenebilir dağıtık sistemler geliştiriyorum — bir mikroservis daha.",
    cvPath: "/cv.pdf",
    socials,
  },

  about: {
    bio: "6 yılı aşkın deneyime sahip, ölçeklenebilir mikroservis mimarileri ve modern web teknolojileri üzerine uzmanlaşmış Backend Geliştirici. .NET Core, .NET Aspire ve Distributed Systems (Saga, Outbox pattern) konularında derin teknik bilgiye sahiptir. Yüksek trafikli sistemlerde performans optimizasyonu, event-driven mimariler ve karmaşık üçüncü parti entegrasyonları (SAP, Payment Providers) geliştirme konusunda tecrübelidir. CI/CD süreçleri, gözlemlenebilirlik (LGTM stack) ve container teknolojilerini etkin kullanarak güvenilir sistemler tasarlar.",
    avatarPath: "/avatar.jpg",
    location: "İstanbul, Türkiye",
    email: "akifkemalaksu@gmail.com",
    phone: "+90 553 670 90 37",
  },

  experience: [
    {
      id: "runibex",
      company: "Runibex Technology Group",
      role: "Kıdemli Backend Geliştirici",
      startDate: "Mar 2024",
      endDate: "Ara 2025",
      location: "İstanbul",
      type: "full-time",
      projects: ["Logosoft e-Ticaret Sistemi", "Cylinda Global Service"],
      bullets: [
        "Dağıtık sistem mimarisi: PostgreSQL entegre Event Bus pattern ile RabbitMQ üzerinden asenkron iletişim.",
        "Veri tutarlılığı: Saga (State Machine) ve Inbox/Outbox tasarım desenleri ile dağıtık işlem yönetimi.",
        "Observability & Monitoring: LGTM (Loki, Grafana, Tempo, Mimir); OpenTelemetry Collector ve Aspire ile merkezi metrik/trace toplama altyapısı.",
        "Arama ve performans: AWS OpenSearch'e geçişle ürün/katalog arama gecikmesi ~%70 azaltıldı; büyük kataloglarda tam metin ve filtrelenmiş arama kapasitesi kazanıldı.",
        "Nesne depolama: AWS S3 ile dosya/medya depolama ve yönetimi sağlandı.",
        "DevOps: GitHub Actions ile CI/CD; code review süreçleri ve SonarQube PoC çalışmaları.",
        "Güvenlik: Duende Identity Server ile OAuth2/OpenID doğrulama ve yetkilendirme altyapısı.",
        "Legacy modernizasyonu: Legacy ASP.NET MVC ve SOAP servis katmanı modernize edilerek iş mantığı kademeli olarak yeni mikroservis mimarisine taşındı.",
      ],
    },
    {
      id: "tetris",
      company: "Tetris Solutions",
      role: "Full Stack Geliştirici",
      startDate: "Nis 2022",
      endDate: "Şub 2024",
      location: "İstanbul",
      type: "full-time",
      projects: ["Checklas Lastik Entegrasyonu", "Kurumsal ERP Sistemi"],
      bullets: [
        "Yüksek trafikli mikroservis mimarisi: RabbitMQ ve MassTransit ile servisler arası asenkron iletişim altyapısı kurgulandı ve ölçeklenebilir şekilde entegre edildi.",
        "DevOps ve dağıtım: Jenkins ve Kubernetes ile çok ortamlı dağıtımlar standartlaştırılarak manuel adımlar ortadan kaldırıldı.",
        "Veritabanı ve ERP mühendisliği: panel geliştirmeleri ve kritik bug-fix çalışmaları; Logo fatura sistemi veritabanı üzerinde performans optimizasyonu.",
        "SQL optimizasyonu: Kritik T-SQL procedure'lar profillenerek ve yeniden yazılarak çalışma süresi ~%50 iyileştirildi.",
        "Performans ve cache: Sık erişilen veriler Redis'e alınarak birincil veritabanı okuma baskısı ~%40 düşürüldü.",
        "SAP geçiş ve entegrasyon: Fatura ve muhasebe altyapısının SAP servisleriyle entegrasyonu yönetildi; legacy faturalama katmanı SAP API sözleşmelerine göre refaktör edildi.",
      ],
    },
    {
      id: "crawler",
      company: "Crawler Karavan A.Ş.",
      role: "Full Stack Geliştirici",
      startDate: "Haz 2020",
      endDate: "Nis 2022",
      location: "İstanbul",
      type: "full-time",
      projects: ["Crawler Karavan Web Platformu", "Crawler Karavan ERP Sistemi"],
      bullets: [
        "E-ticaret ve müşteri deneyimi: çok dilli altyapı ile dinamik fiyat teklifi, sipariş takibi ve uçtan uca süreç yönetimi sunan web platformları geliştirildi.",
        "ERP ve üretim modülü: Mamül, yarı mamül ve hammaddelerin hepsini içeren kapsamlı ürün ağacı (BOM) yapıları, envanter/depo ve iş emri yönetimi tasarlanarak operasyonel verimlilik artırıldı.",
        "Üretim optimizasyonu: Otomatik BOM ve haftalık üretim planlama; stok eşiği aşıldığında otomatik satın alma talebi oluşturularak tedarik sürekliliği güvence altına alındı.",
        "Veritabanı programlama (T-SQL): procedure, function ve trigger yapıları ile iş süreçleri otomasyonu ve veritabanı seviyesinde iş mantığı optimizasyonu.",
        "Performans iyileştirme: indexleme ve sorgu optimizasyonu ile yanıt süreleri iyileştirildi ve büyük veri setlerinde verimlilik sağlandı.",
      ],
    },
    {
      id: "indis",
      company: "İndis Yazılım",
      role: "Yazılım Stajyeri",
      startDate: "Oca 2020",
      endDate: "Şub 2020",
      location: "Kayseri",
      type: "internship",
      bullets: [
        "Finansal sistem tasarımı: muhasebe sistemi tasarlanarak kullanıcı dostu arayüzlerle entegre edildi.",
        "Mentorluk ve SDLC: Aktif bir geliştirme döngüsüne dahil olarak ve yapılandırılmış mentorluk aracılığıyla SDLC pratiği edinildi.",
      ],
    },
    {
      id: "gamelab",
      company: "GameLab İstanbul",
      role: "Yazılım Stajyeri",
      startDate: "Haz 2019",
      endDate: "Tem 2019",
      location: "İstanbul",
      type: "internship",
      bullets: [
        "Oyun mekaniği ve optimizasyon: C++ ve çeşitli oyun teknolojileri ile geliştirme ve performans iyileştirme.",
        "Hata ayıklama: Yayımlanan oyun kod tabanında hata tespiti ve giderilmesiyle hata ayıklama yetkinliği pekiştirildi.",
      ],
    },
  ],

  skills: sharedSkills.map((g) => ({ category: g.tr, skills: g.skills })),

  projects: [
    {
      id: "logosoft",
      name: "Logosoft E-Ticaret Sistemi",
      company: "Runibex Technology Group",
      description: "Büyük ölçekli B2B ve B2C e-ticaret operasyonlarını yöneten, yüksek performanslı ve dağıtık mimariye sahip bir platform.",
      highlights: [
        "PostgreSQL entegre Event Bus pattern ile RabbitMQ üzerinden asenkron mikroservis mimarisi.",
        "Saga (State Machine) ve Inbox/Outbox desenleri ile dağıtık işlem yönetimi.",
        "LGTM stack, OpenTelemetry ve Aspire ile tam gözlemlenebilirlik.",
        "AWS OpenSearch geçişiyle ~%70 arama gecikmesi düşüşü.",
      ],
      stack: [".NET Core", "RabbitMQ", "PostgreSQL", "AWS OpenSearch", "AWS S3", "Redis", "Duende IdentityServer", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      id: "checklas",
      name: "Checklas Lastik Entegrasyon Projesi",
      company: "Tetris Solutions",
      description: "Filo kiralama süreçlerinde lastik yönetimini ve tedarikçi entegrasyonlarını otomatize eden mikroservis tabanlı bir çözüm.",
      highlights: [
        "RabbitMQ ve MassTransit ile ölçeklenebilir asenkron iletişim altyapısı.",
        "MSSQL üzerinde T-SQL optimizasyonları (~%50 iyileşme) ve Redis önbellekleme (~%40 okuma baskısı azalması).",
        "Fatura ve muhasebe entegrasyonu için SAP servisleri.",
      ],
      stack: ["RabbitMQ", "MassTransit", "MS SQL", "Redis", "SAP", "Jenkins", "Kubernetes"],
    },
    {
      id: "finance",
      name: "Ödeme & Finans Yönetim Sistemi",
      company: "Bağımsız Geliştirici / Proje Sahibi",
      description: "Şirketlerin gelir-gider akışlarını izlemelerini sağlayan, gerçek zamanlı bildirim altyapısına sahip kapsamlı bir finans yönetim sistemi.",
      highlights: [
        "Onion Architecture (Domain, Application, Infrastructure, Persistence, Presentation).",
        "CQRS & MediatR ile komut/sorgu ayrımı.",
        "JWT, 2FA, rol bazlı erişim (Admin, Muhasebe) güvenlik modeli.",
        "SignalR ile gerçek zamanlı bildirimler.",
        "OpenVPN korumalı ağda Hetzner VPS üzerinde Jenkins CI/CD ile dağıtım.",
      ],
      stack: [".NET", "PostgreSQL", "Entity Framework Core", "Redis", "SignalR", "Jenkins", "Seq", "Portainer"],
    },
    {
      id: "crawler-web",
      name: "Crawler Karavan Web Platformu",
      company: "Crawler Karavan A.Ş.",
      description: "Çok dilli yapıya sahip, dinamik fiyat teklifi oluşturabilen ve uçtan uca sipariş takibi sağlayan müşteri odaklı web sitesi.",
      highlights: [
        "Çoklu dil desteği, dinamik fiyatlandırma motoru, sipariş yönetim paneli.",
        "İş süreçlerini otomatize eden T-SQL yapıları ile stored procedures ve trigger'lar.",
      ],
      stack: ["ASP.NET MVC", "Entity Framework", "MS SQL", "HTML/CSS/JS"],
    },
    {
      id: "crawler-erp",
      name: "Crawler Karavan ERP Sistemi",
      company: "Crawler Karavan A.Ş.",
      description: "Karavan üretimi için geliştirilmiş kapsamlı ERP modülü. Her sipariş kendi ürün ağacını (BOM) taşır; mamül, yarı mamül ve hammadde hiyerarşisi üretim sürecini uçtan uca yönetir.",
      highlights: [
        "Her siparişe özgü dinamik ürün ağacı (BOM): mamül, yarı mamül ve hammadde hiyerarşisi.",
        "Stok eşiği aşıldığında otomatik satın alma talebi oluşturma ile tedarik sürekliliği.",
        "Haftalık üretim planlama ve iş emri yönetimi modülleri.",
        "T-SQL (Stored Procedures, Triggers, Functions) ile iş süreçleri otomasyonu ve veritabanı seviyesinde iş mantığı.",
        "Büyük veri setleri için indeksleme ve sorgu optimizasyonu ile yüksek performans.",
      ],
      stack: ["ASP.NET MVC", "MS SQL (T-SQL)", "Entity Framework", "HTML/CSS/JS"],
    },
  ],

  education: [
    { degree: "Lisans — Bilgisayar Mühendisliği", school: "Erciyes Üniversitesi", startYear: 2015, endYear: 2020 },
  ],

  certificates: [
    { name: "Güvenli Yazılım Geliştirme", issuer: "BGA Security",    year: 2024 },
    { name: "Tasarım Desenleri",          issuer: "Akın Kaldıroğlu", year: 2023 },
    { name: "Temiz Kod",                  issuer: "Akın Kaldıroğlu", year: 2022 },
  ],
};

// ─── English ─────────────────────────────────────────────────────────────────

const en: PortfolioData = {
  hero: {
    name: "Akif Kemal Aksu",
    title: "Senior Backend Developer",
    subtitle: ".NET & Microservices",
    tagline: "Building scalable distributed systems — one microservice at a time.",
    cvPath: "/cv-en.pdf",
    socials,
  },

  about: {
    bio: "Senior Backend Developer with 6+ years of experience specializing in scalable microservice architectures and modern web technologies. Strong expertise in .NET Core, .NET Aspire, and distributed systems (Saga, Outbox patterns). Experienced in performance optimization for high-traffic systems, event-driven architectures, and complex third-party integrations (SAP, payment providers). Designs reliable systems by effectively leveraging CI/CD pipelines, full-stack observability (LGTM stack), and container technologies.",
    avatarPath: "/avatar.jpg",
    location: "Istanbul, Turkey",
    email: "akifkemalaksu@gmail.com",
    phone: "+90 553 670 90 37",
  },

  experience: [
    {
      id: "runibex",
      company: "Runibex Technology Group",
      role: "Senior Backend Developer",
      startDate: "Mar 2024",
      endDate: "Dec 2025",
      location: "Istanbul",
      type: "full-time",
      projects: ["Logosoft E-commerce System", "Cylinda Global Service"],
      bullets: [
        "Distributed systems architecture: async communication over RabbitMQ using an Event Bus pattern integrated with PostgreSQL.",
        "Data consistency: distributed transaction management with Saga (State Machine) and Inbox/Outbox patterns.",
        "Observability & monitoring: LGTM (Loki, Grafana, Tempo, Mimir); centralized metrics/trace collection with OpenTelemetry Collector and Aspire.",
        "Search & performance: Cut product and catalog search latency by ~70% by migrating to AWS OpenSearch, enabling full-text and faceted filtering across large catalogs.",
        "Object storage: implemented file/media storage and management on AWS S3.",
        "DevOps: CI/CD with GitHub Actions; code reviews and SonarQube PoC work.",
        "Security: authentication and authorization with Duende IdentityServer (OAuth2/OpenID Connect).",
        "Legacy modernization: Modernized a legacy ASP.NET MVC and SOAP service layer, progressively migrating business logic toward the new microservice architecture.",
      ],
    },
    {
      id: "tetris",
      company: "Tetris Solutions",
      role: "Full Stack Developer",
      startDate: "Apr 2022",
      endDate: "Feb 2024",
      location: "Istanbul",
      type: "full-time",
      projects: ["Checklas Tire Integration", "Corporate ERP System"],
      bullets: [
        "High-traffic microservices architecture: designed scalable async communication across services with RabbitMQ and MassTransit.",
        "DevOps & delivery: Standardized multi-environment deployments with Jenkins and Kubernetes, eliminating manual release steps.",
        "Database & ERP engineering: dashboard enhancements and critical bug fixes; performance optimization on the Logo invoicing database.",
        "SQL optimization: Cut execution time by ~50% on critical stored procedures by profiling and rewriting T-SQL logic and indexes.",
        "Performance & caching: Reduced primary database read pressure by ~40% by introducing Redis caching for hot-path data.",
        "SAP migration & integration: Led invoicing and accounting integration with SAP services, refactoring the legacy billing stack to align with SAP's API contracts.",
      ],
    },
    {
      id: "crawler",
      company: "Crawler Karavan A.Ş.",
      role: "Full Stack Developer",
      startDate: "Jun 2020",
      endDate: "Apr 2022",
      location: "Istanbul",
      type: "full-time",
      projects: ["Crawler Karavan Web Platform", "Crawler Karavan ERP System"],
      bullets: [
        "E-commerce & customer experience: built web platforms with multilingual support, dynamic quotations, order tracking, and end-to-end process management.",
        "ERP & manufacturing module: Designed a comprehensive module including hierarchical Product Tree (BOM) structures, inventory/warehouse, and work order management.",
        "Production optimization: Automated BOM and weekly production planning; ensured supply continuity by auto-generating purchase requests when stock thresholds were breached.",
        "Database programming (T-SQL): automated business processes and optimized database-level business logic with procedures, functions, and triggers.",
        "Performance improvements: enhanced response times and efficiency for large datasets through indexing and query optimization.",
      ],
    },
    {
      id: "indis",
      company: "İndis Yazılım",
      role: "Software Intern",
      startDate: "Jan 2020",
      endDate: "Feb 2020",
      location: "Kayseri",
      type: "internship",
      bullets: [
        "Financial system design: designed an accounting system for tracking and reporting financial processes and integrated it with user-friendly interfaces.",
        "Mentorship & SDLC: Built foundational SDLC knowledge through structured mentorship and active participation in a live development cycle.",
      ],
    },
    {
      id: "gamelab",
      company: "GameLab Istanbul",
      role: "Software Intern",
      startDate: "Jun 2019",
      endDate: "Jul 2019",
      location: "Istanbul",
      type: "internship",
      bullets: [
        "Gameplay mechanics & optimization: contributed to gameplay feature development and performance improvements using C++ and various game technologies.",
        "Debugging: Strengthened debugging skills by identifying and resolving defects in a shipped game codebase.",
      ],
    },
  ],

  skills: sharedSkills.map((g) => ({ category: g.category, skills: g.skills })),

  projects: [
    {
      id: "logosoft",
      name: "Logosoft E-Commerce System",
      company: "Runibex Technology Group",
      description: "A high-performance, distributed platform managing large-scale B2B and B2C e-commerce operations.",
      highlights: [
        "Asynchronous microservices architecture via RabbitMQ with Event Bus pattern integrated with PostgreSQL.",
        "Distributed transaction management with Saga (State Machine) and Inbox/Outbox patterns.",
        "Full observability with LGTM stack, OpenTelemetry, and Aspire.",
        "~70% search latency reduction via AWS OpenSearch migration.",
      ],
      stack: [".NET Core", "RabbitMQ", "PostgreSQL", "AWS OpenSearch", "AWS S3", "Redis", "Duende IdentityServer", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      id: "checklas",
      name: "Checklas Tire Integration",
      company: "Tetris Solutions",
      description: "A microservices-based solution automating tire management and supplier integrations in fleet leasing processes.",
      highlights: [
        "Scalable async communication infrastructure with RabbitMQ and MassTransit.",
        "T-SQL optimizations (~50% execution time improvement) and Redis caching (~40% read pressure reduction) on MSSQL.",
        "Invoice and accounting integration with SAP services.",
      ],
      stack: ["RabbitMQ", "MassTransit", "MS SQL", "Redis", "SAP", "Jenkins", "Kubernetes"],
    },
    {
      id: "finance",
      name: "Payment & Finance Management System",
      company: "Independent Developer / Project Owner",
      description: "A comprehensive financial management system with real-time notification infrastructure, enabling companies to track income and expense flows efficiently.",
      highlights: [
        "Built with Onion Architecture (Domain, Application, Infrastructure, Persistence, Presentation).",
        "CQRS & MediatR for command/query separation.",
        "JWT-based authorization, 2FA, and role-based access control (Admin, Accounting).",
        "Real-time notifications via SignalR.",
        "Deployed on Hetzner VPS in an OpenVPN-protected network; automated CI/CD with Jenkins.",
      ],
      stack: [".NET", "PostgreSQL", "Entity Framework Core", "Redis", "SignalR", "Jenkins", "Seq", "Portainer"],
    },
    {
      id: "crawler-web",
      name: "Crawler Karavan Web Platform",
      company: "Crawler Karavan A.Ş.",
      description: "A customer-centric web platform featuring multilingual support, dynamic quoting, and end-to-end order tracking.",
      highlights: [
        "Multilingual architecture, dynamic pricing engine, order management dashboard.",
        "T-SQL structures (Stored Procedures, Triggers, Functions) automating business processes.",
      ],
      stack: ["ASP.NET MVC", "Entity Framework", "MS SQL", "HTML/CSS/JS"],
    },
    {
      id: "crawler-erp",
      name: "Crawler Karavan ERP System",
      company: "Crawler Karavan A.Ş.",
      description: "A comprehensive ERP system built for caravan manufacturing. Each order carries its own dynamic Product Tree (BOM), managing finished goods, semi-finished goods, and raw materials across the full production lifecycle.",
      highlights: [
        "Per-order dynamic BOM: hierarchical product tree covering finished goods, semi-finished goods, and raw materials.",
        "Automated purchase request generation when stock thresholds are breached — ensuring supply continuity.",
        "Weekly production planning and work order management modules.",
        "T-SQL (Stored Procedures, Triggers, Functions) for business process automation and database-level logic.",
        "Indexing and query optimization for high performance across large production datasets.",
      ],
      stack: ["ASP.NET MVC", "MS SQL (T-SQL)", "Entity Framework", "HTML/CSS/JS"],
    },
  ],

  education: [
    { degree: "B.Sc. — Computer Engineering", school: "Erciyes University", startYear: 2015, endYear: 2020 },
  ],

  certificates: [
    { name: "Secure Software Development", issuer: "BGA Security",    year: 2024 },
    { name: "Design Patterns",             issuer: "Akın Kaldıroğlu", year: 2023 },
    { name: "Clean Code",                  issuer: "Akın Kaldıroğlu", year: 2022 },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const portfolioData: { tr: PortfolioData; en: PortfolioData } = { tr, en };
