import type { TimelineEvent } from '../types';

export const eventsData: TimelineEvent[] = [
  { 
    id: "babbage-1822", 
    year: 1822, 
    title: "Mechanical Era: Babbage's Difference Engine", 
    description: "Charles Babbage designed one of the first mechanical calculators to solve polynomial equations using a method called \"differences.\" This laid the groundwork for the idea of computing machines.", 
    category: "Mechanical Era", 
    imageURL: "/assets/babbage.webp", 
    link: "https://en.wikipedia.org/wiki/Difference_engine" 
  },
  { 
    id: "eniac-1946", 
    year: 1946, 
    title: "Electronic Era: ENIAC", 
    description: "ENIAC was the first general-purpose, programmable electronic computer. It used around 17,000 vacuum tubes and could perform 5,000 calculations per second.", 
    category: "Electronic Era", 
    imageURL: "/assets/eniac.jpg", 
    link: "https://en.wikipedia.org/wiki/ENIAC" 
  },
  { 
    id: "univac-1951", 
    year: 1951, 
    title: "Commercial Era: UNIVAC I", 
    description: "UNIVAC I was the first computer built for business use in the U.S. Famously, it predicted the 1952 U.S. election results on live TV.", 
    category: "Commercial Era", 
    imageURL: "/assets/univac-1.JPG", 
    link: "https://en.wikipedia.org/wiki/UNIVAC_I" 
  },
  { 
    id: "intel-1971", 
    year: 1971, 
    title: "Microprocessor Revolution: Intel 4004", 
    description: "The Intel 4004 was the world’s first microprocessor on a single chip. This innovation made computers smaller, more affordable, and opened the door to personal computing.", 
    category: "Microprocessor Era", 
    imageURL: "/assets/intel-C4004.jpg", 
    link: "https://en.wikipedia.org/wiki/Intel_4004" 
  },
  { 
    id: "ibm-1981", 
    year: 1981, 
    title: "PC Era: IBM Personal Computer", 
    description: "IBM’s personal computer became the gold standard for desktops. It made computing more accessible and brought PCs into everyday homes and workplaces.", 
    category: "PC Era", 
    imageURL: "/assets/ibm-personal-computer.png", 
    link: "https://en.wikipedia.org/wiki/IBM_Personal_Computer" 
  },
  { 
    id: "iphone-2007", 
    year: 2007, 
    title: "Mobile & AI Era: iPhone Launch", 
    description: "The launch of the iPhone sparked the mobile computing revolution, combining a sleek design, touchscreen interface, and app ecosystem.", 
    category: "Mobile & AI Era", 
    imageURL: "/assets/mobile-ai-era.png", 
    link: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)" 
  },
  { 
    id: "alphago-2016", 
    year: 2016, 
    title: "AI Breakthrough: AlphaGo", 
    description: "Google DeepMind’s AlphaGo defeated the world champion Go player, demonstrating the capabilities of deep learning and AI.", 
    category: "AI Era", 
    imageURL: "/assets/AlphaGO.jpg", 
    link: "https://en.wikipedia.org/wiki/AlphaGo" 
  },
  { 
    id: "chatgpt-2023", 
    year: 2023, 
    title: "Generative AI Era: ChatGPT", 
    description: "OpenAI’s ChatGPT popularized large language models, enabling conversational AI for millions of users worldwide.", 
    category: "AI Era", 
    imageURL: "/assets/chatgpt.jpeg", 
    link: "https://en.wikipedia.org/wiki/ChatGPT" 
  }
];
