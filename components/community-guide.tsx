import { Music2, Gamepad2, Video, Share2 } from "lucide-react";

interface GuideGroup {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const guides: GuideGroup[] = [
  {
    title: "For Music Creators",
    description: "Unleash your creativity with unique horror soundscapes",
    features: [
      "Explore spine-chilling sound combinations",
      "Create atmospheric horror soundtracks",
      "Design rhythmic dark ambience"
    ],
    icon: <Music2 className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "For Gamers",
    description: "Experience interactive music creation like never before",
    features: [
      "Master dynamic rhythm patterns",
      "Discover hidden sound combinations",
      "Challenge advanced music modes"
    ],
    icon: <Gamepad2 className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "For Content Creators",
    description: "Enhance your content with unique Sprunkr sounds",
    features: [
      "Create custom horror game soundtracks",
      "Design unique streaming backgrounds",
      "Share creations with community"
    ],
    icon: <Video className="w-6 h-6" strokeWidth={1.5} />
  }
];

export function CommunityGuide() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading text-primary mb-4">
          Create with Sprunkr
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join our community and discover endless possibilities for creation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <div 
            key={index}
            className="group p-6 bg-gradient-to-b from-card/30 to-card/10 hover:from-card/40 hover:to-card/20 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {guide.icon}
              </div>
              <h3 className="text-xl font-heading text-primary">
                {guide.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {guide.description}
            </p>
            <ul className="space-y-2">
              {guide.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <Share2 className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 