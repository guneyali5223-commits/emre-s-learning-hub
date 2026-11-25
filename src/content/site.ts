export type Lang = "en" | "tr";

export const LANGS: Lang[] = ["en", "tr"];

type Section = {
  label: string;
  id: string;
};

export type Content = {
  nav: Section[];
  hero: {
    name: string;
    role: string;
    line: string;
    levels: string[];
    primary: string;
    secondary: string;
    caption: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    facts: { k: string; v: string }[];
  };
  lessons: {
    kicker: string;
    title: string;
    note: string;
    groups: { language: string; levels: string[]; line: string }[];
  };
  approach: {
    kicker: string;
    big1: string;
    big2: string;
    body: string;
    points: string[];
  };
  beyond: {
    kicker: string;
    title: string;
    body: string;
    places: string[];
  };
  more: {
    kicker: string;
    title: string;
    body: string;
    tags: string[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    instagram: string;
    whatsapp: string;
    email: string;
  };
  footer: string;
};

export const content: Record<Lang, Content> = {
  en: {
    nav: [
      { label: "About", id: "about" },
      { label: "Lessons", id: "lessons" },
      { label: "Approach", id: "approach" },
      { label: "Beyond", id: "beyond" },
      { label: "Contact", id: "contact" },
    ],
    hero: {
      name: "Emre Güney",
      role: "English & Dutch Teacher",
      line: "Learn the language. Use it in real life.",
      levels: ["English · A1–B2", "Dutch · A1–B1"],
      primary: "Explore lessons",
      secondary: "Get to know me",
      caption: "Photo coming soon",
    },
    about: {
      kicker: "About me",
      title: "I'm Emre. I teach English and Dutch.",
      body: [
        "I studied English Language Teaching at Yıldız Technical University and have been teaching for five years. I work with teenagers, university students and adults, including people learning English for work or starting Dutch from scratch.",
        "We follow a plan, but there's always time for questions and conversation. I want you to feel comfortable trying, even when you're not sure how to say something yet.",
      ],
      facts: [
        { k: "Yıldız Technical University", v: "English Language Teaching" },
        { k: "5 years", v: "of active teaching" },
        { k: "All ages", v: "teens, students, adults" },
        { k: "Two languages", v: "English & Dutch" },
      ],
    },
    lessons: {
      kicker: "Lessons",
      title: "English or Dutch. Let's start where you are.",
      note: "In our first conversation, we talk about your level and what you need the language for. Then we plan the lessons together.",
      groups: [
        {
          language: "English",
          levels: ["A1", "A2", "B1", "B2"],
          line: "Build the basics, practise speaking and work on what you find difficult.",
        },
        {
          language: "Dutch",
          levels: ["A1", "A2", "B1"],
          line: "For everyday life, work or study — or because you'd like to learn.",
        },
      ],
    },
    approach: {
      kicker: "My approach",
      big1: "Don't just learn the language.",
      big2: "Use it.",
      body: "We work on grammar and vocabulary, then use them in conversation. Getting an exercise right matters, but so does being able to ask a question or tell someone about your day.",
      points: [
        "You don't need perfect sentences to join a conversation.",
        "We use podcasts, songs and everyday conversations.",
        "There's plenty of time for you to speak.",
        "You'll know what we're working on and why.",
        "When something goes wrong, we work through it together.",
        "We put new words to use, not just on a list.",
      ],
    },
    beyond: {
      kicker: "Beyond the classroom",
      title: "There's practice outside the lesson, too.",
      body: "Sometimes we practise in a café. Other times, it's a small task during the week: writing an email, watching something or starting a conversation. In the next lesson, we talk about how it went.",
      places: ["a chat at a café", "an email you need to send", "a film to talk about", "a small task for the week"],
    },
    more: {
      kicker: "A little more Emre",
      title: "Outside lessons: writing, poetry and music.",
      body: "I write poetry and listen to a lot of music. Sometimes a song or a line I've read finds its way into a lesson.",
      tags: ["writing", "poetry", "music"],
    },
    contact: {
      kicker: "Contact",
      title: "Say hello.",
      body: "Have a question about lessons? Send me a message. We can talk about what you'd like to learn.",
      instagram: "Instagram",
      whatsapp: "Message me on WhatsApp",
      email: "Email",
    },
    footer: "Emre Güney · English & Dutch Teacher",
  },
  tr: {
    nav: [
      { label: "Hakkımda", id: "about" },
      { label: "Dersler", id: "lessons" },
      { label: "Yaklaşımım", id: "approach" },
      { label: "Ders Dışında", id: "beyond" },
      { label: "İletişim", id: "contact" },
    ],
    hero: {
      name: "Emre Güney",
      role: "İngilizce & Hollandaca Öğretmeni",
      line: "Dili öğren. Gerçek hayatta kullan.",
      levels: ["İngilizce · A1–B2", "Hollandaca · A1–B1"],
      primary: "Dersleri gör",
      secondary: "Beni tanı",
      caption: "Fotoğraf yakında",
    },
    about: {
      kicker: "Hakkımda",
      title: "Ben Emre. İngilizce ve Hollandaca öğretiyorum.",
      body: [
        "Yıldız Teknik Üniversitesi İngilizce Öğretmenliği mezunuyum. Beş yıldır lise ve üniversite öğrencileriyle, yetişkinlerle çalışıyorum. İş için İngilizce öğrenen de var, Hollandacaya sıfırdan başlayan da.",
        "Dersleri bir planla yürütüyorum ama sorulara ve sohbete de yer ayırıyorum. Bir şeyi nasıl söyleyeceğinden emin olmadığında bile çekinmeden denemeni istiyorum.",
      ],
      facts: [
        { k: "Yıldız Teknik Üniversitesi", v: "İngilizce Öğretmenliği" },
        { k: "5 yıl", v: "aktif öğretmenlik" },
        { k: "Her yaş", v: "lise, üniversite, yetişkin" },
        { k: "İki dil", v: "İngilizce & Hollandaca" },
      ],
    },
    lessons: {
      kicker: "Dersler",
      title: "İngilizce ya da Hollandaca. Seviyenden başlayalım.",
      note: "İlk konuşmamızda seviyeni ve dili ne için öğrenmek istediğini konuşuyoruz. Dersleri de buna göre birlikte planlıyoruz.",
      groups: [
        {
          language: "İngilizce",
          levels: ["A1", "A2", "B1", "B2"],
          line: "Temelleri öğrenmek, konuşma pratiği yapmak, zorlandığın konuları çalışmak için.",
        },
        {
          language: "Hollandaca",
          levels: ["A1", "A2", "B1"],
          line: "Günlük hayat, iş, eğitim için ya da sadece öğrenmek istediğin için.",
        },
      ],
    },
    approach: {
      kicker: "Yaklaşımım",
      big1: "Dili sadece öğrenme.",
      big2: "Kullan.",
      body: "Dil bilgisi ve kelime çalışıyoruz, sonra bunları konuşurken kullanıyoruz. Alıştırmayı doğru yapmak önemli; birine soru sorabilmek, gününü anlatabilmek de öyle.",
      points: [
        "Konuşmak için kusursuz cümleler kurman gerekmiyor.",
        "Podcast, şarkı ve günlük konuşmalardan yararlanıyoruz.",
        "Derste senin konuşmana bolca zaman ayırıyoruz.",
        "Neyi, neden çalıştığımızı biliyorsun.",
        "Hata yaptığında birlikte üzerinde duruyoruz.",
        "Yeni kelimeleri sadece not almıyoruz, kullanıyoruz.",
      ],
    },
    beyond: {
      kicker: "Ders dışında",
      title: "Pratik dersten sonra da devam ediyor.",
      body: "Bazen bir kafede pratik yapıyoruz. Bazen de hafta içinde yapacağın küçük bir şey seçiyoruz: e-posta yazmak, bir şey izlemek ya da sohbet başlatmak. Sonraki derste nasıl geçtiğini konuşuyoruz.",
      places: ["kafede bir sohbet", "göndermen gereken bir e-posta", "üzerine konuşacağımız bir film", "hafta için küçük bir görev"],
    },
    more: {
      kicker: "Derslerin dışında ben",
      title: "Biraz yazı, biraz şiir, bolca müzik.",
      body: "Şiir yazıyorum, çok müzik dinliyorum. Bazen bir şarkı ya da okuduğum bir cümle derse de konu oluyor.",
      tags: ["yazmak", "şiir", "müzik"],
    },
    contact: {
      kicker: "İletişim",
      title: "Bir merhaba de.",
      body: "Derslerle ilgili merak ettiğin bir şey varsa bana yaz. Ne öğrenmek istediğini konuşalım.",
      instagram: "Instagram",
      whatsapp: "WhatsApp’tan yaz",
      email: "E-posta",
    },
    footer: "Emre Güney · İngilizce & Hollandaca Öğretmeni",
  },
};

export const links = {
  instagram: "https://instagram.com/bellelucht",
  whatsapp: "https://wa.me/905542091354",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=guneyali5223@gmail.com",
};
