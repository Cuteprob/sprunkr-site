import React from 'react';

interface Feature {
  title: string;
  description: string[];
  highlight: string;
  category: 'evolution' | 'gameplay' | 'technical' | 'characters';
}

const features: Feature[] = [
  {
    title: "Sprunki Megalovania Musical Combat",
    description: [
      "Rhythmic Battles: Engage in combat synchronized to the iconic Megalovania soundtrack beats and rhythms.",
      "Musical Companions: Summon melodic allies that enhance your combat abilities through Sprunki Megalovania's signature sound.",
      "Dynamic Sound Combat: Experience gameplay where every action contributes to the evolving Sprunki Megalovania composition.",
      "Adaptive Musical Challenges: Face increasingly complex patterns that blend combat and musical elements.",
      "Harmonic Combat Styles: Switch between different musical approaches to create your unique battle rhythm."
    ],
    highlight: "Combat System", 
    category: 'gameplay'
  },
  {
    title: "Sprunki Megalovania Character Ensemble",
    description: [
      "Rhythmic Healers: Experience the soothing melodies of Sky and Mr. Tree, whose nature-inspired sounds provide healing support in Sprunki Megalovania's dynamic battles.",
      "Beat Warriors: Master the high-energy combat rhythms of Clukr and Brud, delivering powerful offensive beats that sync with the iconic Sprunki Megalovania soundtrack.",
      "Melody Mages: Channel the mystical sounds of Wenda and Vineria, whose elegant musical patterns create mesmerizing crowd control effects.",
      "Tech Virtuosos: Harness the precise mechanical rhythms of Mr. Fun Computer and Oren to craft intricate musical combinations.",
      "Diverse Specialists: Discover unique sound signatures from Gray, Raddy, Tunner and others that add depth to your Sprunki Megalovania compositions."
    ],
    highlight: "Characters",
    category: 'characters'
  },
  {
    title: "Immersive Sound Design & Musical Creation",
    description: [
      "Interactive Sound Creation: Sprunki Megalovania lets you craft unique musical experiences by combining distinct character sounds and rhythms.",
      "Rich Sound Palette: From ethereal melodies to dynamic beats, each character brings their own musical personality to your compositions.",
      "Real-time Music Mixing: Experience Sprunki Megalovania's innovative sound system that dynamically blends and evolves based on your creative choices.",
      "Seamless Integration: Visual animations and sound effects work together to create an engaging audiovisual experience.",
      "Progressive Sound Journey: Discover new musical elements and combinations as you explore deeper into Sprunki Megalovania's world."
    ],
    highlight: "Sound Design",
    category: 'technical'
  },
  {
    title: "Advanced Game Mechanics",
    description: [
      "Passive Item System: Your companion provides constant support and enables powerful transformations.",
      "Randomized Triggers: Each playthrough features unique transformation conditions for varied gameplay.",
      "Strategic Depth: Master the timing of transformations and defensive maneuvers.",
      "Sound Integration: Maintain musical rhythm while engaging in intense combat sequences.",
      "Progressive Challenge: Unlock new abilities and face increasingly complex enemy patterns."
    ],
    highlight: "Game Systems",
    category: 'technical'
  },
];

export function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-heading text-primary mb-4">
          Sprunki Megalovania Features
        </h2>
        <p className="text-muted-foreground">
          Discover the latest innovations and improvements in Sprunki Megalovania
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border border-border"
          >
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-border p-4">
              <h3 className="text-xl font-heading text-primary flex-1">
                {feature.title}
              </h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {feature.highlight}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid gap-4">
                {feature.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
