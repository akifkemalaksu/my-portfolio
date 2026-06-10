export interface Translations {
  nav: {
    links: {
      about: string;
      experience: string;
      skills: string;
      projects: string;
      contact: string;
    };
    downloadCv: string;
  };
  hero: {
    greeting: string;
    typewriterPhrases: string[];
    downloadCv: string;
    contactMe: string;
  };
  about: {
    heading: string;
    yearsLabel: string;
    technologiesLabel: string;
    projectsLabel: string;
  };
  experience: { heading: string };
  skills: { heading: string };
  projects: { heading: string };
  contact: {
    heading: string;
    subtitle: string;
    directContact: string;
    sendMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    emailSubject: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<"tr" | "en", Translations> = {
  tr: {
    nav: {
      links: {
        about:      "Hakkımda",
        experience: "Deneyim",
        skills:     "Beceriler",
        projects:   "Projeler",
        contact:    "İletişim",
      },
      downloadCv: "CV İndir",
    },
    hero: {
      greeting: "Merhaba, ben",
      typewriterPhrases: [
        "Kıdemli Backend Geliştirici",
        ".NET & Mikroservis Uzmanı",
        "Dağıtık Sistem Mimarı",
        "Temiz Kod Savunucusu",
      ],
      downloadCv: "CV İndir",
      contactMe:  "İletişime Geç",
    },
    about: {
      heading:            "01. Hakkımda",
      yearsLabel:         "Yıl Deneyim",
      technologiesLabel:  "Teknoloji",
      projectsLabel:      "Ana Proje",
    },
    experience: { heading: "02. Deneyim" },
    skills:     { heading: "03. Teknik Yetkinlikler" },
    projects:   { heading: "04. Projeler" },
    contact: {
      heading:           "05. İletişim",
      subtitle:          "Bir projeniz mi var ya da fırsatları mı değerlendirmek istiyorsunuz? Her zaman ilginç sohbetlere açığım.",
      directContact:     "Doğrudan İletişim",
      sendMessage:       "Mesaj Gönder",
      namePlaceholder:   "Adınız",
      emailPlaceholder:  "E-posta adresiniz",
      messagePlaceholder:"Mesajınız",
      sendButton:        "Gönder",
      emailSubject:      "İletişim Formu",
      successTitle:      "Mesajınız hazır!",
      successBody:       "E-posta uygulamanız açıldı. Göndermek için sadece göndere tıklayın.",
      sendAnother:       "Başka bir mesaj gönder",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: {
      links: {
        about:      "About",
        experience: "Experience",
        skills:     "Skills",
        projects:   "Projects",
        contact:    "Contact",
      },
      downloadCv: "CV",
    },
    hero: {
      greeting: "Hi, I'm",
      typewriterPhrases: [
        "Senior Backend Developer",
        ".NET & Microservices Expert",
        "Distributed Systems Architect",
        "Clean Code Advocate",
      ],
      downloadCv: "Download CV",
      contactMe:  "Contact Me",
    },
    about: {
      heading:            "01. About Me",
      yearsLabel:         "Years of Experience",
      technologiesLabel:  "Technologies",
      projectsLabel:      "Major Projects",
    },
    experience: { heading: "02. Experience" },
    skills:     { heading: "03. Technical Skills" },
    projects:   { heading: "04. Projects" },
    contact: {
      heading:           "05. Get In Touch",
      subtitle:          "Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations.",
      directContact:     "Direct Contact",
      sendMessage:       "Send a Message",
      namePlaceholder:   "Your Name",
      emailPlaceholder:  "Your Email",
      messagePlaceholder:"Your Message",
      sendButton:        "Send Message",
      emailSubject:      "Portfolio Inquiry",
      successTitle:      "Your message is ready!",
      successBody:       "Your email client has opened. Just hit send to deliver your message.",
      sendAnother:       "Send another message",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
