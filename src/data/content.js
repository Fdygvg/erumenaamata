export const siteData = {
  // Hero Section - Editor Mode
  hero: {
    headline: "Let's do the clean up job on your rough draft and turn it into a flawless, polished manuscript.",
    subheadline: "Professional editing services for authors, academics, and professionals.",
  },

  // Hero Section - Author Mode
  authorHero: {
    name: "Author Name",
    headline: "Stories that resonate, words that inspire",
    tagline: "Award-winning author of fiction and poetry, crafting narratives that touch the soul.",
    image: "/authorimage.jpeg",
  },

  // Services
  services: [
    {
      id: 1,
      title: "Proofreading",
      description: "Grammar check, punctuation, spelling and typos",
      icon: "fa-solid fa-spell-check",
    },
    {
      id: 2,
      title: "Copyediting",
      description: "Improving flow, clarity and sentence structure",
      icon: "fa-solid fa-pen-to-square",
    },
    {
      id: 3,
      title: "Stylistic Editing",
      description: "Enhancing tone and vocabulary",
      icon: "fa-solid fa-palette",
    },
    {
      id: 4,
      title: "Original Copywriting",
      description: "Crafting compelling, original content",
      icon: "fa-solid fa-lightbulb",
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

  // Books (2 books with covers)
  books: [
    {
      id: 1,
      title: "Book Title One",
      genre: "Fiction",
      year: 2022,
      description: "A compelling story about...",
      coverFront: "/book img 1 front.png",
      coverBack: null, // No back cover
      purchaseUrl: "#", // Placeholder
    },
    {
      id: 2,
      title: "Book Title Two",
      genre: "Non-Fiction",
      year: 2023,
      description: "An insightful exploration of...",
      coverFront: "/book img 2 front.png",
      coverBack: "/book img 2 back.png",
      purchaseUrl: "#", // Placeholder
    },
  ],

  // Pricing
  pricing: {
    tagline: "Affordable rates and guaranteed confidentiality",
    note: "Custom quotes available based on project scope and timeline.",
  },

  // About
  editorAbout: {
    bio: "With decades of experience in editing and writing, I help authors and professionals perfect their written work. My passion is transforming rough drafts into polished, professional manuscripts.",
    credentials: [
      "Professional Editor",
      "Certified Copyeditor",
      "Over 500 manuscripts edited",
    ],
  },

  authorAbout: {
    bio: "As a published author and storyteller, I weave narratives that explore the human experience. My work has been featured in numerous publications and has touched readers around the world.",
    credentials: [
      "Published Author",
      "Award-Winning Writer",
      "Creative Writing Mentor",
    ],
  },

  // Contact
  contact: {
    email: "eruvwu2012@gmail.com",
    phone: "08033119934",
    availability: "Available for projects of all sizes",
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
