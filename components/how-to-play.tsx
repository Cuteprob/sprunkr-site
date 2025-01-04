import { cn } from "@/lib/utils";
import Image from "next/image";

interface Step {
  number: number;
  title: string;
  description: string;
  tips: string[];
  area: {
    name: string;
    hazards: string[];
  };
  image?: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Your Sprunki Sprunkr Character",
    description: "Begin your journey by selecting characters that match the iconic rhythm and energy of the soundtrack. Each character represents a key sonic element like percussion, synth lines, and bass drops that contribute to creating intense musical compositions.",
    tips: [
      "Discover the unique abilities of each character",
      "Listen to individual sound samples first",
      "Mix and match characters to build beats",
      "Select voices that work well together"
    ],
    area: {
      name: "Character Selection",
      hazards: [
        "Percussion: Drive the Sprunki Sprunkr beat",
        "Synth Lines: Create melodic intensity", 
        "Bass: Add powerful energy",
        "Support: Balance the composition"
      ]
    },
    image: "/howtoplay/step-1.webp"
  },
  {
    number: 2,
    title: "Create Your Sprunki Sprunkr Music Loop",
    description: "After selecting characters, arrange them strategically to create dynamic loops. Each sound element's position contributes to the iconic rhythm pattern, allowing you to craft your own unique musical interpretation.",
    tips: [
      "Experiment with loop arrangements",
      "Fine-tune sound timing",
      "Build layered Sprunki Sprunkr patterns",
      "Create dynamic variations"
    ],
    area: {
      name: "Loop Creation",
      hazards: [
        "Pattern Timing: Match the Sprunki Sprunkr beat",
        "Layer Balancing: Build intensity",
        "Sound Placement: Create flow",
        "Loop Dynamics: Add variation"
      ]
    },
    image: "/howtoplay/step-2.webp"
  },
  {
    number: 3,
    title: "Experience the Sprunki Sprunkr Horror Mode",
    description: "Unlock a bone-chilling twist in Sprunkr by clicking the black hat. This enthralling mode transforms your Sprunkr musical creation into an electrifying and eerie adventure, merging the beloved rhythm with spine-tingling elements. Please note: Before entering this mode, ensure you can handle intense horror elements.",
    tips: [
      "Drag the black hat to activate Sprunkr's dark side",
      "Prepare for spine-chilling Sprunkr sounds",
      "Experience the dark atmosphere",
      "Create haunting Sprunkr melodies"
    ],
    area: {
      name: "Sprunki Sprunkr Horror Experience",
      hazards: [
        "Dark Transformation: Intense visual effects",
        "Eerie Soundscape: Haunting Sprunkr atmosphere",
        "Horror Elements: Spine-chilling moments",
        "Thrilling Adventure: Mesmerizing Sprunkr twists"
      ]
    },
    image: "/howtoplay/step-3.webp"
  }
];

export function HowToPlay() {
  return (
    <section className="w-full max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-card/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border">
          <h2 className="text-2xl font-heading text-primary">
            Master Sprunki Sprunkr Music Gameplay
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to create powerful musical combinations while mastering the art of Sprunkr
        </p>
      </div>

      <div className="grid gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 bg-primary/5 border-b border-border p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-background font-heading text-lg">
                {step.number}
              </span>
              <h3 className="text-xl font-heading text-primary">
                {step.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Description Column */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Tips Column */}
                <div className="space-y-4">
                  <h4 className="font-heading text-foreground text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Tips
                  </h4>
                  <ul className="grid gap-2.5">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Area Info or Image */}
                <div className="space-y-4">
                  {step.image ? (
                    <>
                      <h4 className="font-heading text-foreground text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Preview
                      </h4>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/50">
                        <Image
                          src={step.image}
                          alt={`Step ${step.number}: ${step.title}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="font-heading text-foreground text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {step.area.name}
                      </h4>
                      <ul className="grid gap-2.5">
                        {step.area.hazards.map((hazard, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                              {hazard}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
