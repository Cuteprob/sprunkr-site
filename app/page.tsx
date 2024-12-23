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

export const runtime = "edge";

// Sprunki Phase 4 game data
const SprunkiphaseGame: Game = {
  id: "sprunki-megalovania-org",
  title: "Sprunki Megalovania - Free Online Music Creation Game",
  createdAt: "2024-12-17",
  description: "Sprunki Megalovania, an exciting online music game that brings the iconic 'Megalovania' soundtrack into the dynamic Sprunki universe. Experience fast-paced beats and unforgettable energy as you create your own musical masterpieces in this interactive environment.\n\nSprunki Megalovania is playable directly in your browser with no downloads required. Jump right in and start mixing beats, creating rhythms, and exploring the vibrant musical world of Sprunki Megalovania.",
  iframeUrl: "https://games.sprunkimegalovania.org/game/sprunki-megalovania/index.html",
  image: "/sprunki-megalovania.webp",
  rating: 5,
  categories: [
    GameCategory.SPRUNKI
  ],
  metadata: {
    title: "Sprunki Megalovania - Best Free Online Music Creation Game | Make Music Online",
    description: "Play Sprunki Megalovania, the ultimate online music creation game! Enhanced sound design, real-time mixing & sharing. Join now!",
    keywords: ["sprunki megalovania"]
  },
  controls: {
    fullscreenTip: "Click the fullscreen button to expand Sprunki Megalovania, press ESC to exit fullscreen",
    guide: {
      movement: [
        "Drag & Drop - Add sounds",
        "Click - Toggle sounds",
        "Space - Play/Pause",
        "R - Reset composition"
      ],
      actions: [
        "S - Save creation",
        "M - Toggle mute",
        "F - Toggle fullscreen",
        "H - Show/Hide controls"
      ]
    }
  },
  features: [],
  faqs: [],
  video: {
    youtubeId: "seDij_-8bjI",
    title: "Sprunki Megalovania - Music Game Online",
    thumbnail: "/sprunki-megalovania.webp"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-heading text-primary tracking-tight">
              Play Sprunki Megalovania - Incredibox Style Music Game Online
            </h1>
            <h2 className="text-lg md:text-xl italic font-heading text-muted-foreground tracking-wide">
              Experience Sprunki Megalovania: The Evolution of Incredibox-Style Gaming
            </h2>
          </div>

          {/* Game Container */}
          <div id="game" className="w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <GameContainer game={SprunkiphaseGame} />
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
            <FAQ />
            
            {/* Call to Action Section */}
            <section className="max-w-4xl mx-auto space-y-4 bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-heading text-primary">
                    Ready to Create Your Musical Masterpiece?
                  </h2>
                  <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                    Join millions of players worldwide in Sprunki Megalovania and experience the thrill of creating energetic music compositions!
                  </p>
                  <div className="pt-4">
                    <Link 
                      href="#game"
                      className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
                      scroll={true}
                    >
                      Start Playing Sprunki Megalovania Now
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
    title: "Play Sprunki Megalovania - Incredibox Style Music Game Online",
    description: "Sprunki Megalovania is a free  incredibox style game that allows you to create amazing music with new characters, enhanced sound design and real-time mixing.",
    keywords: ["sprunki megalovania", "music creation game"],
    openGraph: {
      title: "Sprunki Megalovania -  Incredibox Style Music Game Online",
      description: "Join millions playing Sprunki Megalovania! Create unique music with new characters, enhanced sound design & real-time mixing.",
      images: ["/sprunki-megalovania.webp"],
      type: "website",
      url: "https://sprunkimegalovania.org"
    },
    twitter: {
      card: "summary_large_image",
      title: "Sprunki Megalovania -  Incredibox Style Music Game Online",
      description: "Create amazing music with Sprunki Megalovania! New characters, enhanced sound design & real-time mixing. Start   your musical journey today!",
      images: ["/twitter-image.jpg"],
    },
    alternates: {
      canonical: "https://sprunkimegalovania.org"
    }
  };
}
