import { Metadata } from "next"
import { GameContainer } from "@/components/game-container"
import { Game, GameCategory } from "@/config/sprunkigame"
import { HowToPlay } from '@/components/how-to-play'
import { Features } from '@/components/features'
import { FAQ } from '@/components/faq'
import Link from "next/link"
import { GameDescription } from "@/components/game-description"
import { GamesSidebar } from "@/components/games-sidebar"
import { Comments } from "@/components/comments"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExploreGames } from '@/components/explore-games'
import { GameCollection } from '@/components/game-collection'
import { SoundFeatures } from '@/components/sound-features'
import { VisualEvolution } from '@/components/visual-evolution'
import { CommunityGuide } from '@/components/community-guide'

export const runtime = "edge";

// Sprunkr game data
const SprunkiphaseGame = {
  id: "sprunkr",
  title: "Play Sprunki Sprunkr Game Online Free",
  createdAt: "2025-1-3",
  description: "Sprunki Sprunkr is an innovative rhythm-based music creation game that allows players to compose unique musical pieces through an interactive and engaging platform.The game falls under the rhythm and music creation genre, combining elements of interactive gameplay with creative expression. It allows players to mix sounds and beats using animated characters in a vibrant visual environment.",
  iframeUrl: "https://games.sprunkimegalovania.org/game/sprunkr/index.html",
  image: "/sprunki-sprunkr.webp",
  rating: 5,
  categories: [
    GameCategory.SPRUNKI
  ],
  metadata: {
    title: "Sprunkr - Play Sprunki Sprunkr Game Online Free",
    description: "Play Sprunkr, the ultimate online music creation game! Enhanced sound design, real-time mixing & sharing. Join now!",
    keywords: ["sprunkr"]
  },
  controls: {
    fullscreenTip: "Click the fullscreen button to expand, press ESC to exit fullscreen",
    guide: {
      movement: [
        "Drag & Drop - Add sounds",
        "Click - Toggle sounds",
        "Space - Play/Pause",
        "R - Reset composition"
      ],
      actions: [
       
      ]
    }
  },
  features: [],
  faqs: [],
  video: {
    youtubeId: "seDij_-8bjI",
    title: "Sprunkr - Music Game Online",
    thumbnail: "/sprunki-sprunkr.webp"
  }
};

const games = [
  {
    id: "sprunkr",
    title: "Sprunki Sprunkr",
    createdAt: "2024-1-1",
    description: "Original Sprunki Sprunkr game",
    image: "/sprunki-sprunkr.webp",
    iframeUrl: "https://data.sprunk.world/game/sprunkr/index.html",
    rating: 5,
    categories: [GameCategory.SPRUNKI],
    metadata: {
      title: "Sprunki Sprunkr",
      description: "Original Sprunki Sprunkr",
      keywords: ["sprunkr"]
    },
    controls: {
      fullscreenTip: "Click the fullscreen button to expand Sprunkr, press ESC to exit fullscreen",
      guide: {
        movement: [
          "Drag & Drop - Add sounds",
          "Click - Toggle sounds",
          "Space - Play/Pause",
          "R - Reset composition"
        ],
        actions: []
      }
    },
    features: [],
    faqs: []
  },
  {
    id: "sprunkr-2",
    title: "Sprunki Sprunkr 2.0",
    createdAt: "2024-1-2",
    description: "Sprunki Sprunkr 2.0 version",
    image: "/sprunki-sprunkr-2.webp",
    iframeUrl: "https://game.sprunkiretake.net/Incredibox-Sprunkr-2.html",
    rating: 5,
    categories: [GameCategory.SPRUNKI],
    metadata: {
      title: "Sprunki Sprunkr 2.0",
      description: "Sprunki Sprunkr 2.0",
      keywords: ["sprunkr"]
    },
    controls: {
      fullscreenTip: "Click the fullscreen button to expand, press ESC to exit fullscreen",
      guide: {
        movement: [
          "Drag & Drop - Add sounds",
          "Click - Toggle sounds",
          "Space - Play/Pause",
          "R - Reset composition"
        ],
        actions: []
      }
    },
    features: [],
    faqs: []
  },
  {
    id: "sprunkr-4-oc",
    title: "Sprunkr 4 OC",
    createdAt: "2024-1-3",
    description: "Sprunkr 4 OC version",
    image: "/sprunkr-4-oc.webp",
    iframeUrl: "https://play.sprunkiretake.net/sprunkr-4-oc",
    rating: 5,
    categories: [GameCategory.SPRUNKI],
    metadata: {
      title: "Sprunkr 4 OC",
      description: "Sprunkr 4 OC",
      keywords: ["sprunkr"]
    },
    controls: {
      fullscreenTip: "Click the fullscreen button to expand, press ESC to exit fullscreen",
      guide: {
        movement: [
          "Drag & Drop - Add sounds",
          "Click - Toggle sounds",
          "Space - Play/Pause",
          "R - Reset composition"
        ],
        actions: []
      }
    },
    features: [],
    faqs: []
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-heading text-primary tracking-tight">
              Play Sprunkr - Incredibox Style Music Game Online
            </h1>
            <h2 className="text-lg md:text-xl italic font-heading text-muted-foreground tracking-wide">
              Experience Sprunkr: a bone-chilling yet mesmerizing new experience. 
            </h2>
          </div>

          {/* Game Container */}
          <div id="game" className="w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <Tabs defaultValue={games[0].id} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 p-1 bg-card/0 backdrop-blur-sm rounded-2xl">
                  {games.map((game) => (
                    <TabsTrigger 
                      key={game.id} 
                      value={game.id} 
                      className="relative px-4 py-3 font-heading text-lg md:text-xl font-semibold
                      text-foreground/80 bg-card/40
                      rounded-xl transition-all duration-300 
                      hover:text-primary hover:bg-card/60
                      data-[state=active]:text-primary data-[state=active]:bg-background
                      data-[state=active]:shadow-game data-[state=active]:scale-105
                      data-[state=active]:border data-[state=active]:border-border
                      hover:shadow-game hover:scale-105
                      data-[state=active]:after:content-[''] data-[state=active]:after:absolute 
                      data-[state=active]:after:bottom-[-2px] data-[state=active]:after:left-0 
                      data-[state=active]:after:w-full data-[state=active]:after:h-[2px]
                      data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#00a6ff] 
                      data-[state=active]:after:to-[#b200ff] data-[state=active]:after:rounded-full
                      data-[state=active]:after:animate-pulse"
                    >
                      {game.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {games.map((game) => (
                  <TabsContent key={game.id} value={game.id}>
                    <GameContainer game={game} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
          {/* Game Description Section */}
          <div className="space-y-12">
            <GameDescription game={SprunkiphaseGame} />
                 {/* Related Games & Comments */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Games Sidebar - Left Side (2/3 width) */}
                <div className="md:col-span-1">
                  <h2 className="text-xl font-heading mb-4">More Hot Games</h2>
                  <GamesSidebar 
                    currentGameId={SprunkiphaseGame.id} 
                    gameCategories={SprunkiphaseGame.categories} 
                  />
                </div>
                
                {/* Comments - Right Side (1/3 width) */}
                <div className="md:col-span-1">
                <h2 className="text-xl font-heading mb-4">Comments</h2>
                  <Comments />
                </div>
              </div>
            </div>
            <HowToPlay />
            <Features />
            <ExploreGames />
            <GameCollection />
            <SoundFeatures />
            <VisualEvolution />
            <CommunityGuide />
            <FAQ />
            
            {/* Call to Action Section */}
            <section className="max-w-4xl mx-auto space-y-4 bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-heading text-primary">
                    Ready to Create Your Musical Masterpiece?
                  </h2>
                  <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                    Join millions of players worldwide and experience the thrill of creating energetic music compositions!
                  </p>
                  <div className="pt-4">
                    <Link 
                      href="#game"
                      className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
                      scroll={true}
                    >
                      <h3 className="text-xl text-white font-heading">Start Playing Now</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </main>
    </div>
  );
}

// Metadata optimization
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Play Sprunkr - Incredibox Style Music Game Online",
    description: "Sprunkr is a free  incredibox style game that allows you to create amazing music with new characters, enhanced sound design and real-time mixing.",
    keywords: ["sprunkr", "music creation game"],
    openGraph: {
      title: "Sprunkr -  Incredibox Style Music Game Online",
      description: "Join millions playing Sprunkr! Create unique music with new characters, enhanced sound design & real-time mixing.",
      images: ["/sprunki-sprunkr.webp"],
      type: "website",
      url: "https://sprunkr.site"
    },
    twitter: {
      card: "summary_large_image",
      title: "Sprunkr -  Incredibox Style Music Game Online",
      description: "Create amazing music with Sprunkr! New characters, enhanced sound design & real-time mixing. Start   your musical journey today!",
      images: ["/sprunki-sprunkr.webp"],
    },
    alternates: {
      canonical: "https://sprunkr.site"
    }
  };
}
