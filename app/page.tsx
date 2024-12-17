import { Metadata } from "next"
import { GameContainer } from "@/components/game-container"
import { Rating } from "@/components/ui/rating"
import { GamesSidebar } from "@/components/games-sidebar"
import { Game, GameCategory } from "@/config/sprunkigame"
import { GameVideo } from "@/components/game-video"
import { HowToPlay } from '@/components/how-to-play'
import { Features } from '@/components/features'
import { FAQ } from '@/components/faq'
import Link from "next/link"

export const runtime = "edge";

// Sprunki Phase 4 game data
const SprunkiphaseGame: Game = {
  id: "sprunki-megalovania-org",
  title: "Sprunki Megalovania - Free Online Music Creation Game",
  createdAt: "2024-12-17",
  description: "Experience Sprunki Megalovania, the latest evolution in online music creation! Featuring new characters like Sky, Clukr, and Gray, this version brings enhanced sound design, dynamic gameplay mechanics, and innovative musical composition tools. Create, mix, and share your unique musical creations with our vibrant community. Join millions of players worldwide in this immersive musical journey!",
  iframeUrl: "https://games.sprunkimegalovania.org/game/sprunki-megalovania/index.html",
  image: "/sprunki-megalovania.webp",
  rating: 5,
  categories: [
    GameCategory.SPRUNKIPHASE
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
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-heading text-primary tracking-tight">
              Play Sprunki Megalovania - Incredibox Style Music Game Online
            </h1>
            <h2 className="text-lg md:text-xl italic font-heading text-muted-foreground tracking-wide">
              Experience Sprunki Megalovania: The Evolution of Incredibox-Style Gaming
            </h2>
          </div>

          {/* Game Container */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 items-start">
              <div id="game" className="w-full px-4 md:px-8 lg:px-12 flex justify-center">
                <div className="w-full max-w-4xl">
                  <GameContainer game={SprunkiphaseGame} />
                </div>
              </div>
              {/* <div className="w-full">
                <GamesSidebar currentGameId={SprunkiphaseGame.id} gameCategories={SprunkiphaseGame.categories} />
              </div> */}
            </div>
          </div>
        </div>

        {/* Game Description Section */}
        <div className="space-y-12">
          <section className="flex flex-col md:flex-row items-start gap-8 max-w-4xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <div className="w-[120px] h-[120px] flex-shrink-0 rounded-2xl overflow-hidden bg-primary/10 p-0 shadow-game">
              <img
                src="/sprunki-megalovania.webp"
                alt="Sprunki Megalovania"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading text-primary">
                  Sprunki Megalovania: Evolution of Musical Innovation
                </h2>
                <div className="flex items-center gap-2">
                  <Rating 
                    initialRating={5} 
                    isReadOnly 
                    size="md"
                    showReviewSystem={true}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground">
                  Welcome to Sprunki Megalovania, an exciting online music game that brings the iconic "Megalovania" soundtrack into the dynamic Sprunki universe. Experience fast-paced beats and unforgettable energy as you create your own musical masterpieces in this interactive environment.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Sprunki Megalovania is playable directly in your browser with no downloads required. Jump right in and start mixing beats, creating rhythms, and exploring the vibrant musical world of Sprunki Megalovania. The intuitive controls and seamless online gameplay make it easy to dive into this energetic music creation experience anytime, anywhere.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-heading text-primary">
                  Watch Sprunki Megalovania in Action
                </h3>
                {SprunkiphaseGame.video && (
                  <GameVideo 
                    youtubeId={SprunkiphaseGame.video.youtubeId}
                    title={SprunkiphaseGame.video.title}
                    clipId={SprunkiphaseGame.video.clipId}
                    clipTime={SprunkiphaseGame.video.clipTime}
                    thumbnail={SprunkiphaseGame.video.thumbnail}
                  />
                )}
              </div>

              
            </div>
          </section>
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
