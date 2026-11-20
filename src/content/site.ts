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
      title: "I'm Emre. I teach languages people actually speak.",
      body: [
        "I studied English Language Teaching at Yıldız Technical University and I've been teaching for five years now — teenagers, university students, adults who need English for work, people starting Dutch from zero.",
        "I don't teach one age group or one type of learner. What stays the same is the way we work: planned lessons, real conversations, and a lot of room to try things out loud.",
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
      title: "Two languages, your level.",
      note: "Every lesson is shaped around where you are, where you want to get, and what you actually need the language for. We plan it together in the first conversation.",
      groups: [
        {
          language: "English",
          levels: ["A1", "A2", "B1", "B2"],
          line: "From first sentences to comfortable, confident conversation.",
        },
        {
          language: "Dutch",
          levels: ["A1", "A2", "B1"],
          line: "For moving, working, studying — or simply being curious.",
        },
      ],
    },
    approach: {
      kicker: "My approach",
      big1: "Don't just learn the language.",
      big2: "Use it.",
      body: "Lessons are structured, but the goal is never a perfect exercise sheet. The goal is you, saying what you mean, to someone who understands you.",
      points: [
        "Communication comes before perfection.",
        "Real material: podcasts, menus, emails, songs, arguments.",
        "You speak more than I do.",
        "Every lesson has a plan and a purpose.",
        "Mistakes are data, not damage.",
        "A language is used, not memorised.",
      ],
    },
    beyond: {
      kicker: "Beyond the classroom",
      title: "A language doesn't stay at a desk.",
      body: "Whenever it makes sense, we take the lesson somewhere it becomes real — ordering, asking, explaining, getting lost and finding the words for it. Sometimes that's a café, sometimes it's a task you do alone during the week and bring back.",
      places: ["a café conversation", "a real email you have to send", "a film you argue about", "a week-long small challenge"],
    },
    more: {
      kicker: "A little more Emre",
      title: "I teach languages. I write. I listen to far too much music.",
      body: "Poetry taught me that a sentence can be built carefully and still sound alive. That's more or less what I want from a language lesson too.",
      tags: ["writing", "poetry", "music"],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk.",
      body: "Tell me your level, your goal and your schedule — a couple of sentences is enough to start.",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      email: "Email",
    },
    footer: "Emre Güney · English & Dutch Teacher",
  },
  tr: {
    nav: [
      { label: "Hakkımda", id: "about" },
      { label: "Dersler", id: "lessons" },
      { label: "Yaklaşımım", id: "approach" },
      { label: "Sınıfın Dışı", id: "beyond" },
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
      title: "Ben Emre. İnsanların gerçekten konuştuğu dili öğretiyorum.",
      body: [
        "Yıldız Teknik Üniversitesi İngilizce Öğretmenliği mezunuyum ve beş yıldır aktif olarak ders veriyorum — lise öğrencileri, üniversiteliler, işi için İngilizceye ihtiyaç duyan yetişkinler, sıfırdan Hollandacaya başlayanlar.",
        "Tek bir yaş grubuna ya da tek bir öğrenci tipine odaklanmıyorum. Değişmeyen şey çalışma biçimimiz: planlı dersler, gerçek konuşmalar ve sesli deneme yapmak için bolca alan.",
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
      title: "İki dil, senin seviyen.",
      note: "Her ders; bulunduğun yer, gitmek istediğin yer ve dile gerçekte ne için ihtiyaç duyduğun etrafında şekilleniyor. Bunu ilk konuşmamızda birlikte planlıyoruz.",
      groups: [
        {
          language: "İngilizce",
          levels: ["A1", "A2", "B1", "B2"],
          line: "İlk cümlelerden rahat ve kendinden emin konuşmaya.",
        },
        {
          language: "Hollandaca",
          levels: ["A1", "A2", "B1"],
          line: "Taşınmak, çalışmak, okumak için — ya da sadece merak ettiğin için.",
        },
      ],
    },
    approach: {
      kicker: "Yaklaşımım",
      big1: "Dili sadece öğrenme.",
      big2: "Kullan.",
      body: "Dersler planlı ilerler ama amaç kusursuz bir alıştırma sayfası değildir. Amaç, demek istediğin şeyi söyleyebilmen ve karşındakinin seni anlamasıdır.",
      points: [
        "İletişim, kusursuzluktan önce gelir.",
        "Gerçek materyal: podcast, menü, e-posta, şarkı, tartışma.",
        "Derste benden çok sen konuşursun.",
        "Her dersin bir planı ve bir amacı vardır.",
        "Hata, zarar değil veridir.",
        "Dil ezberlenmez, kullanılır.",
      ],
    },
    beyond: {
      kicker: "Sınıfın dışı",
      title: "Dil masa başında kalmaz.",
      body: "Mümkün olduğunda dersi, dilin gerçekleştiği bir yere taşıyoruz — sipariş vermek, soru sormak, anlatmak, kaybolup kelimesini bulmak. Bazen bu bir kafe, bazen hafta içinde tek başına yapıp derse getirdiğin küçük bir görev.",
      places: ["bir kafe sohbeti", "göndermen gereken gerçek bir e-posta", "tartıştığın bir film", "bir haftalık küçük bir görev"],
    },
    more: {
      kicker: "Biraz daha Emre",
      title: "Dil öğretiyorum. Yazıyorum. Fazlasıyla müzik dinliyorum.",
      body: "Şiir bana bir cümlenin özenle kurulup yine de canlı kalabileceğini öğretti. Bir dil dersinden istediğim şey de aşağı yukarı bu.",
      tags: ["yazmak", "şiir", "müzik"],
    },
    contact: {
      kicker: "İletişim",
      title: "Konuşalım.",
      body: "Seviyeni, hedefini ve programını yaz — başlamak için birkaç cümle yeterli.",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      email: "E-posta",
    },
    footer: "Emre Güney · İngilizce & Hollandaca Öğretmeni",
  },
};

export const links = {
  instagram: "https://instagram.com/bellelucht",
  whatsapp: "https://wa.me/905434312397",
  email: "mailto:hello@emreguneyteacher.com",
};
