export enum GameCategory {
  // 游戏类型分类 (主分类)
  SPRUNKIPHASE = "Sprunki Phase Games",      
  SPRUNKI = "Sprunki Games",     
  INCREDIBOX = "Incredibox Games",  
  MUSIC = "Music Games",     
  MOD = "Mod Games", 
  HALLOWEEN = "Halloween Games",     
  NEW = "New Games",
  HOT = "Hot Games",
  FEATURED = "Featured Games",
}

export interface Game {
  id: string;
  title: string;
  description: string;
  iframeUrl: string;
  image: string;
  rating: number;
  categories: GameCategory[];  // 使用合并后的分类系统
  createdAt: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  controls: {
    fullscreenTip: string;
    guide: {
      movement: string[];
      actions: string[];
      special?: string[];
    };
  };
  features: string[];  // 游戏特定的特性列表
  faqs: {
    question: string;
    answer: string;
    category: 'gameplay' | 'technical' | 'features' | 'general' | 'tips' | 'audio';
  }[];
  video?: {
    youtubeId: string;    // YouTube 视频 ID
    clipId?: string;    // 可选的片段ID
    clipTime?: string;  // 可选的片段时间
    title: string;        // 视频标题
    thumbnail: string;   // 添加封面图字段
  };
}

export const games: Game[] = [
  {
    id: "sprunki-phase-0",
    title: "Sprunki Phase 0",
    createdAt: "2024-01-01",
    description: "Sprunki Phase 0 is a fun and engaging music creation game that allows players to mix and match adorable Sprunki characters to create their own unique tunes. It combines simplicity with creativity, making music accessible to everyone.",
    iframeUrl: "https://iframegame.com/embed/sprunki-babies/index.html",
    image: "/games/sprunki-phase-0.webp",
    rating: 4.8,
    categories: [
      GameCategory.MUSIC,
      GameCategory.FEATURED,
      GameCategory.HOT,
      GameCategory.SPRUNKIPHASE,
      GameCategory.INCREDIBOX,
      GameCategory.SPRUNKI
    ],
    metadata: {
      title: "Sprunki Phase 0 - Create Music with Baby Sprunkis | Free Online Game",
      description: "Play Sprunki Phase 0 and create unique tunes with adorable baby Sprunki characters! Mix sounds, make music, and unleash your creativity in this fun music creation game.",
      keywords: [
        "sprunki phase 0",
        "baby sprunki",
      ]
    },
    controls: {
      fullscreenTip: "Click the fullscreen button for the best Sprunki Phase 0 experience",
      guide: {
        movement: [
          "Drag & Drop: Move characters",
          "Click: Activate/Deactivate sounds",
          "Spacebar: Reset all sounds"
        ],
        actions: [
          "Right Click: Remove sound",
          "Double Click: Special animation",
          "Scroll: Browse characters"
        ]
      }
    },
    features: [
      "Intuitive drag-and-drop interface",
      "Unique baby Sprunki characters",
      "Multiple sound combinations",
      "Real-time music creation",
      "Easy-to-follow tutorials",
      "Mobile-optimized gameplay",
      "High-quality sound output",
      "Creative sandbox environment"
    ],
    faqs: [
      {
        question: "What is Sprunki Phase 0?",
        answer: "Sprunki Phase 0 is a music creation game featuring baby Sprunki characters. It's designed as an entry point to the Sprunki Phase series, perfect for beginners and young players.",
        category: 'general'
      },
      {
        question: "How do I create music in Sprunki Phase 0?",
        answer: "Simply drag and drop baby Sprunki characters onto the canvas. Each character adds unique sounds to your mix, creating a fun and interactive music-making experience.",
        category: 'gameplay'
      },
      {
        question: "Is Sprunki Phase 0 suitable for children?",
        answer: "Yes! Sprunki Phase 0 is specifically designed for players of all ages, with a kid-friendly interface and intuitive controls that make music creation accessible and fun.",
        category: 'general'
      },
      {
        question: "Can I save my Sprunki Phase 0 creations?",
        answer: "Yes, you can save your musical creations and share them with friends. The game includes features for storing and sharing your favorite mixes.",
        category: 'technical'
      },
      {
        question: "What makes Sprunki Phase 0 unique?",
        answer: "Sprunki Phase 0 features adorable baby Sprunki characters, each with unique sounds. The game combines cute visuals with engaging sound mixing options in a creative sandbox environment.",
        category: 'features'
      },
      {
        question: "Are there tutorials available?",
        answer: "Yes, Sprunki Phase 0 includes easy-to-follow tutorials that help new players understand how to create music, choose characters, and use all available features.",
        category: 'gameplay'
      },
      {
        question: "What devices can I play Sprunki Phase 0 on?",
        answer: "Sprunki Phase 0 is optimized for both desktop and mobile devices. You can play it on any device with a modern web browser and internet connection.",
        category: 'technical'
      },
      {
        question: "How does Sprunki Phase 0 differ from other versions?",
        answer: "Sprunki Phase 0 is designed as an introduction to the series, featuring simpler mechanics and baby versions of the characters, making it perfect for newcomers.",
        category: 'features'
      }
    ],
    video: {
      youtubeId: "NSRrrdJHAMc",
      title: "Sprunki Phase 0 Gameplay Tutorial",
      thumbnail: "/sprunki-phase.webp"
    }
  },
];

// 辅助函数
// 1. 获取单个分类的游戏
export const getGamesByCategory = (category: GameCategory) => {
  return games.filter(game => game.categories.includes(category));
};

// 2. 获取多个分类的游戏（满足任意一个分类即可）
export const getGamesByCategories = (categories: GameCategory[]) => {
  return games.filter(game => 
    categories.some(category => game.categories.includes(category))
  );
};

// 3. 获取同时满足多个分类的游戏
export const getGamesByAllCategories = (categories: GameCategory[]) => {
  return games.filter(game => 
    categories.every(category => game.categories.includes(category))
  );
};

// 4. 按分类类型获取游戏
export const getGamesByCategoryType = (type: 'main') => {
  const categoryGroups = {
    main: [
      GameCategory.SPRUNKIPHASE,
      GameCategory.INCREDIBOX,
      GameCategory.SPRUNKI,
      GameCategory.HALLOWEEN,
      GameCategory.MOD, 
      GameCategory.NEW,
      GameCategory.HOT,
      GameCategory.FEATURED,
      GameCategory.MUSIC,
    ],
  };

  return categoryGroups[type];
};

// 获取主分类游戏
export const getGamesByMainCategory = (category: GameCategory) => {
  const mainCategories = [
    GameCategory.SPRUNKIPHASE,
    GameCategory.INCREDIBOX,
    GameCategory.SPRUNKI,
    GameCategory.HALLOWEEN,
    GameCategory.MOD, 
    GameCategory.NEW,
    GameCategory.HOT,
    GameCategory.FEATURED,
    GameCategory.MUSIC,
  ];
  
  if (!mainCategories.includes(category)) {
    return [];
  }
  
  return games.filter(game => game.categories.includes(category));
}; 