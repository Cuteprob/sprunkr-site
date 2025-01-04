import React from 'react';

interface Feature {
  title: string;
  description: string[];
  highlight: string;
  category: 'evolution' | 'gameplay' | 'technical' | 'characters';
}

const features: Feature[] = [
  {
    title: "Sprunki Sprunkr Horror Evolution",
    description: [
      "Transform your musical experience with Sprunkr's bone-chilling horror mode, featuring dark atmospheres and spine-tingling soundscapes",
      "Master Sprunkr's unique blend of rhythm-based gameplay and horror elements, inspired by classic horror games",
      "Unlock eerie sound combinations and haunting visual effects as you progress through the dark universe"
    ],
    highlight: "Horror Mode",
    category: "evolution"
  },
  {
    title: "Dynamic Music Creation System",
    description: [
      "Create mesmerizing musical compositions using Sprunkr's intuitive drag-and-drop interface",
      "Blend multiple sound layers with Sprunkr's advanced mixing tools to craft your unique soundscape",
      "Experience real-time sound manipulation as you experiment with Sprunkr's diverse audio elements",
      "Watch your music come alive with the responsive character animations"
    ],
    highlight: "Music Creation",
    category: "gameplay"
  },
  {
    title: "Immersive Rhythm Integration",
    description: [
      "Synchronize with Sprunkr's dynamic beat system that adapts to your musical choices",
      "Explore Sprunkr's vast library of original sounds and rhythmic patterns",
      "Build complex musical arrangements through Sprunkr's innovative loop-based composition system"
    ],
    highlight: "Rhythm System",
    category: "technical"
  },
  {
    title: "Interactive Character Ensemble",
    description: [
      "Choose from Sprunkr's diverse cast of characters, each with unique sound signatures",
      "Combine different character abilities to create rich, layered musical experiences",
      "Discover hidden character interactions and special sound combinations exclusive to Sprunki Sprunkr's horror mode"
    ],
    highlight: "Unique Characters",
    category: "characters"
  }
];

export function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-heading text-primary mb-4">
          Sprunki Sprunkr Features
        </h2>
        <p className="text-muted-foreground">
          Discover the latest innovations and improvements
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
