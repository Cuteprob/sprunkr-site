'use client'

import { Game } from "@/config/sprunkigame"
import { Rating } from "@/components/ui/rating"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/config/icons"
import { GameVideo } from "@/components/game-video"
import ShareButtons from '@/components/ShareButtons'

interface GameDescriptionProps {
  game: Game
}

export function GameDescription({ game }: GameDescriptionProps) {
  console.log(game.image)
  return (
    <section className="max-w-7xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-2">
        <div className="flex justify-between items-start">
          {/* Left side with logo */}
          <div className="flex gap-6">
            <div className="w-[120px] h-[120px] rounded-lg border border-border overflow-hidden bg-card">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.png'
                }}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-heading text-primary">
                {game.title}
              </h2>
              <Rating 
                initialRating={game.rating} 
                isReadOnly 
                size="md"
                showReviewSystem={true}
              />
            </div>
          </div>

          {/* Right side with platforms and share */}
          <div className="flex flex-col gap-4">
            <div className="text-base">
              <h3 className="text-muted-foreground">Platforms:</h3>
              <div className="flex gap-2 mt-1">
                <span className="p-3 bg-card rounded-lg text-xl">🖥️</span>
                <span className="p-3 bg-card rounded-lg text-xl">📱</span>
              </div>
            </div>
            <div className="text-base">
              <h3 className="text-muted-foreground">Share on:</h3>
              <div className="flex gap-2 mt-1">
                <ShareButtons 
                  title={`Play ${game.title}`}
                  description="Experience the evolution of music creation"
                  variant="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation and Content */}
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="border-b border-border w-full justify-start rounded-none bg-transparent p-0">
          <TabsTrigger 
            value="overview" 
            className="pb-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-0 bg-transparent"
          >
            {Icons.home}
            <h3>Overview</h3>
          </TabsTrigger>
          <TabsTrigger 
            value="gameplays"
            className="pb-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-0 bg-transparent"
          >
            {Icons.gameplays}
            <h3>Gameplays</h3>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Controls Section - Left Side */}
            <div className="md:w-[400px]">
              <h3 className="text-xl font-heading mb-4">Controls:</h3>
              <div className="flex items-start gap-6">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] text-primary">
                    {Icons.mouse}
                  </div>
                </div>
                <div>
                  <div className="font-heading mb-2 text-primary">INTERACTION</div>
                  <ul className="space-y-2 text-muted-foreground">
                    {game.controls.guide.movement.map((control, index) => (
                      <li key={index}>{control}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Description - Right Side */}
            <div className="flex-1 text-lg space-y-4 text-muted-foreground">
              <p>{game.description}</p>
              <p>Sprunki Sprunkr is the original version of the game, featuring the same gameplay mechanics and character customization options as the original Incredibox game.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gameplays">
          <div className="space-y-4">
            <h2 className="text-l font-heading mb-4">Watch Gameplay</h2>
            {game.video && (
              <div className="max-w-md mx-auto">
                <GameVideo 
                  youtubeId={game.video.youtubeId}
                  title={game.video.title}
                  clipId={game.video.clipId}
                  clipTime={game.video.clipTime}
                  thumbnail={game.video.thumbnail}
                />
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
} 