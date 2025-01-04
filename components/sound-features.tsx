import { Music, Waves, Layers } from "lucide-react";

interface SoundFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: SoundFeature[] = [
  {
    title: "Dynamic Soundscapes",
    description: "Create rich, layered musical experiences with real-time mixing capabilities. Blend multiple sound elements and adjust them on the fly to craft your perfect composition.",
    icon: <Layers className="w-8 h-8 text-primary" />
  },
  {
    title: "Horror-Themed Audio",
    description: "Immerse yourself in spine-chilling atmospheres inspired by FNAF. Experience unique horror elements seamlessly integrated with rhythmic musical patterns.",
    icon: <Waves className="w-8 h-8 text-primary" />
  },
  {
    title: "Interactive Sound Design",
    description: "Intuitive drag-and-drop system for sound manipulation. Discover endless possibilities through character interactions and innovative loop combinations.",
    icon: <Music className="w-8 h-8 text-primary" />
  }
];

export function SoundFeatures() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading text-primary mb-4">
          The Sound of Sprunkr
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experience the unique audio elements that make Sprunkr a groundbreaking musical horror adventure
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group p-6 bg-gradient-to-b from-card/30 to-card/10 hover:from-card/40 hover:to-card/20 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading text-primary group-hover:text-primary/90">
                {feature.title}
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 