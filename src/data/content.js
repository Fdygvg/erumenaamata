export const siteData = {
  // Hero Section - Editor Mode
  hero: {
    headline: "Let's do the clean up job on your rough draft and turn it into a flawless, polished manuscript.",
    subheadline: "Professional editing services backed by the Amata creative dynasty heritage.",
  },

  // Hero Section - Author Mode
  authorHero: {
    name: "Erumena Akpoghene-Adaiah",
    headline: "Preserving Culture, Crafting Stories, Inspiring Hearts",
    tagline: "Award winning author and daughter of the Amata creative dynasty, celebrating Niger Delta heritage through literature.",
    image: "/authorimage.jpg",
  },

  // Services
  services: [
    {
      id: 1,
      title: "Proofreading",
      description: "Grammar verification, punctuation, spelling, and typo resolution for publishing-ready manuscripts",
      icon: "fa-solid fa-spell-check",
    },
    {
      id: 2,
      title: "Copyediting",
      description: "Enhancing flow, clarity, sentence structure, and cultural authenticity with Niger Delta expertise",
      icon: "fa-solid fa-pen-to-square",
    },
    {
      id: 3,
      title: "Stylistic Editing",
      description: "Refining tone, vocabulary, and regional dialogue drawing from Amata dynasty storytelling heritage",
      icon: "fa-solid fa-palette",
    },
    {
      id: 4,
      title: "Original Copywriting",
      description: "Crafting compelling, culturally-grounded content with decades of media and literary experience",
      icon: "fa-solid fa-lightbulb",
    },
    {
      id: 5,
      title: "Ghostwriting",
      description: "Full-length book authorship under your name, capturing your unique voice and vision with complete confidentiality",
      icon: "fa-solid fa-user-secret",
    },
  ],

  // Document Types
  documentTypes: [
    "Essays",
    "Manuscripts",
    "Resumes",
    "Emails",
    "Academic Papers",
    "Business Documents",
  ],

  // Books (3 books with covers)
  books: [
    {
      id: 1,
      title: "The Dimpsey Chronicles",
      genre: "Children's Fiction",
      year: 2019,
      description: "In the oil rich town of Warri, five year old Efeturi Johnson, fondly called Dimpsey, wins hearts with her unforgettable dimples. From becoming an overnight singing sensation at home to learning that charm alone won't save her from consequences, Dimpsey discovers every action ripples outward. A vivid peek into South South Nigerian childhood, complete with local games, cultural heritage, and lessons woven into every escapade.",
      coverFront: "/book img 1 front.png",
      coverBack: null,
      purchaseUrl: "#",
      demoVideo: null,
    },
    {
      id: 2,
      title: "From Bamboo to Bloom",
      genre: "Coming of Age Fiction",
      year: 2023,
      description: "Ofuafo, the Bamboo Prince, carries privilege like a crown until life teaches him that true strength is quiet, not commanding. Set in rural Nigeria, this lyrical story follows a boy who bends before he blossoms, shaped by humility, mentorship, and the gentle hands that refuse to give up on him. A story about bullying, growth, and the slow, tender work of becoming your best self.",
      coverFront: "/book img 2 front.png",
      coverBack: "/book img 2 back.png",
      purchaseUrl: "https://selar.com/l18u43y444",
      demoVideo: "/book2demovideo.mp4",
    },
    {
      id: 3,
      title: "The Grandma Cookies Chronicles",
      genre: "Children's Adventure",
      year: "Coming Soon",
      description: "Welcome to Grandma Cookies' kitchen, where every recipe teaches a lesson and every missing crumb is a mystery waiting to be solved. When a mountain of Chin Chin vanishes before the Community Festival, Grandma and her little detectives set out to crack the case. What they find is sweeter than any treat: forgiveness, teamwork, and the kind of love that brings a whole community together. A heartwarming series rich with Nigerian culture and kitchen magic.",
      coverFront: "/book img 3 front.png",
      coverBack: null,
      purchaseUrl: "#",
      demoVideo: null,
      comingSoon: true,
    },
  ],

  // Pricing
  pricing: {
    tagline: "Affordable rates and guaranteed confidentiality",
    note: "Custom quotes available based on project scope and timeline.",
  },

  // Baking & Books Section (Author Mode)
  bakingCorner: {
    title: "The Confectionery Corner",
    subtitle: "Where Stories Meet Sweetness",
    description: "To me, writing and baking are the same art form. Both require premium ingredients, careful measurements, immense patience, and the right amount of time to rise into something beautiful. When I'm not editing manuscripts, I craft custom baked goods that bring families together.",
    specialties: [
      "Custom Celebration Cakes",
      "Traditional Confectioneries",
      "Baking & Storytelling Youth Workshops"
    ],
    bakedCreations: [
      { id: 1, image: "/bakedcreation1.jpg", alt: "Custom celebration cake" },
      { id: 2, image: "/bakedcreation2.jpg", alt: "Traditional confectionery" },
      { id: 3, image: "/bakedcreation3.jpg", alt: "Artisanal baked creation" },
      { id: 4, image: "/bakedcreation4.jpg", alt: "Specialty cake design" },
      { id: 5, image: "/bakedcreation5.jpg", alt: "Festive baked good" },
      { id: 6, image: "/bakedcreation6.jpg", alt: "Premium confectionery" },
      { id: 7, image: "/bakedcreation7.jpg", alt: "Gourmet creation" },
    ]
  },

  // About
  editorAbout: {
    bio: "Hailing from the legendary Amata creative dynasty, storytelling and manuscript development are part of my heritage. As the sister of veteran Nollywood actor Fred Amata, I grew up surrounded by scriptwriting, filmmaking, and literary arts. With decades of media and literary experience in Nigeria, I help authors refine their manuscripts into polished masterpieces while protecting their authentic voice and cultural authenticity.",
    credentials: [
      "Winner, African Writers Tribe Awards 2025",
      "Daughter of the Amata Creative Dynasty",
      "Founder of The Reading Circle",
      "Member of Warri Literary Society",
      "Children's Literacy Advocate",
    ],
  },

  authorAbout: {
    bio: "Erumena Akpoghene-Adaiah (née Amata) is an award-winning author, editor, and passionate community advocate based in Delta State, Nigeria. As the founder of 'The Reading Circle' and a proud member of the 'Warri Literary Society', she dedicates her time to promoting child literacy, mentoring upcoming writers, and preserving Niger Delta cultural heritage through storytelling.",
    credentials: [
      "Winner, African Writers Tribe Awards 2025",
      "Founder of The Reading Circle",
      "Member of Warri Literary Society",
      "Children's Rights & Literacy Advocate",
      "Inspirational Speaker & Cultural Storyteller",
    ],
  },

  // Contact
  contact: {
    email: "eruvwu2012@gmail.com",
    whatsapp: "https://wa.me/2348033119934",
  },

  // Testimonials (optional)
  testimonials: [
    {
      id: 1,
      name: "Client Name",
      text: "Outstanding work. My manuscript was transformed.",
      role: "Author",
    },
  ],
};
