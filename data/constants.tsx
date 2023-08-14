// (site)/page.tsx
export const images: string[] = [
  "https://images.unsplash.com/photo-1643609873467-15cfffe782be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1602660187275-7275b639d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80",
  "https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1603361233308-b3ec0f7c0a16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80",
  "https://images.unsplash.com/photo-1603027862808-3661a3fb6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80",
];

// about/page.tsx
export const aboutSections = [
  {
    title: "About Us",
    src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    content: "About",
  },
  {
    title: "Project History",
    src: "https://images.unsplash.com/photo-1522442676585-c751dab71864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: "History",
  },
  {
    title: "Acknowledgements",
    src: "https://images.unsplash.com/photo-1556564195-1405a4585db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YWlyc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    content: "Acknowledgements",
  },
  {
    title: "Terminology and Abbreviations",
    src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: "Terms",
  },
];

// about/components/AboutContent.tsx
export const aboutTrackContent = [
  {
    title: "Understanding Glosses",
    content:
      "Glosses are annotations made by medieval thinkers as they engaged with a text, serving as crucial witnesses to early and advanced study, usage, and interpretation of seminal texts from western medieval society, like the Bible, works of Aristotle, or Roman legal compilations.",
  },
  {
    title: "The Overlooked Significance",
    content:
      "Despite the essential role of glosses, scholarship has largely emphasized the Ordinary Gloss, the final standardized versions. This bias has unfortunately overshadowed the diverse voices of many medieval thinkers whose annotations haven't made it into the Ordinary Gloss.",
  },
  {
    title: "Our Solution: A Digital Platform",
    content:
      "To rectify this historical oversight, this project endeavors to create a digital platform to gather, organize, and share thousands of glosses from numerous manuscripts. This platform fosters collaboration, allowing scholars worldwide to add and interlink gloss data for a comprehensive understanding.",
  },
  {
    title: "Towards a Global Community",
    content:
      "We aim to form a vibrant community of medievalists. This platform will facilitate the input of metadata about manuscripts and glosses, thereby weaving a comprehensive web of data. It will serve as a nexus for understanding not only the content of glosses but also the communication networks they hint at in pre-modern Europe.",
  },
  {
    title: "Technical Advancements",
    content:
      "Leveraging tools like the TPEN application and the Rerum API, the project introduces cutting-edge methods to encode and annotate transcriptions. Through Linked Data and Web Annotation standards, we aim for superior usability, discoverability, and data interlinking.",
  },
  {
    title: "Challenges of Representation",
    content:
      "Identifying, distinguishing, and connecting glosses present unique challenges. This platform ensures meaningful organization of vast data, helping scholars understand individual glosses and their shared themes. Advanced tools also trace gloss influences and the routes of their transmission.",
  },
  {
    title: "Supporting Broader Humanities",
    content:
      "By melding traditional manuscript study with digital tools, we significantly bolster medievalists' capabilities to research glosses. We aim to unveil voices that have been sidelined over centuries, shining a spotlight on their invaluable insights and interpretations.",
  },
  {
    title: "The Broader Impact",
    content:
      "The implications of this research in medieval studies are monumental. Glosses offer a lens into medieval society's core disciplines, from theology to law. Our digital platform's tools unlock a dimension previously unattainable, allowing cross-disciplinary and interdisciplinary study that promises to reshape our understanding of the medieval intellectual landscape.",
  },
];

// about/components/HistoryContent.tsx
export const historySections = [
  {
    date: "May 15",
    image: "/images/may_pict.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi eos maiores reprehenderit non ",
  },
  {
    date: "June 15",
    image: "/images/june_pict.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi.",
  },
  {
    date: "July 15",
    image: "/images/july_pict.png",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit laboriosam nostrum esse neque voluptates quidem.",
  },
  {
    date: "August 15",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis ab corporis sequi delectus aliquam atque iusto? Facilis.",
  },
];

// about/components/TermsContent.tsx
export const terms = [
  {
    title: "Gloss",
    desc: "A gloss is an individual version of an explanation or interpretation found in one or more manuscripts. It provides brief marginal or interlinear annotations explaining the meaning of a word or wording in a text.",
  },
  {
    title: "Meta-Gloss",
    desc: "A meta-gloss represents the abstract idea of a gloss, of which various individual glosses are instances or versions.",
  },
  { title: "Glossary", desc: "A curated collection of glosses." },
];

// about/components/TermsContent.tsx
export const abbreviations = [
  {
    title: "Mt",
    desc: "This stands for the Gospel of Matthew, a part of the Bible. It is used as an authoritative text for the context of some glosses.",
  },
  {
    title: "[##:##]",
    desc: "A canonical reference system common in theological studies, where the numbers before and after the colon respectively represent the chapter and verse of a book from the Bible, e.g., Matthew 5:16 refers to Chapter 5, Verse 16 of the Gospel of Matthew.",
  },
];

// about/page.tsx
export const glossesSections = [
  {
    title: "Browse all glosses",
    src: "",
    content: "All",
  },
  {
    title: "Browse by Book",
    src: "",
    content: "Book",
  },
  {
    title: "Browse By Theme",
    src: "",
    content: "Theme",
  },
  {
    title: "Browse By Tag",
    src: "",
    content: "Tag",
  },
];
