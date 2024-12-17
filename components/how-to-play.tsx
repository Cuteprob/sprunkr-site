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
    title: "Choose Your Sprunki Megalovania Character",
    description: "Begin your Sprunki Megalovania journey by selecting characters that match the iconic rhythm and energy of the soundtrack. Each character represents a key sonic element like percussion, synth lines, and bass drops that contribute to creating intense musical compositions.",
    tips: [
      "Explore different Sprunki Megalovania character roles",
      "Preview each character's unique sound",
      "Test character combinations for rhythm",
      "Find characters that complement each other"
    ],
    area: {
      name: "Character Selection",
      hazards: [
        "Percussion: Drive the Sprunki Megalovania beat",
        "Synth Lines: Create melodic intensity", 
        "Bass: Add powerful energy",
        "Support: Balance the composition"
      ]
    },
    image: "/features/step-1.png"
  },
  {
    number: 2,
    title: "Create Your Sprunki Megalovania Music Loop",
    description: "After selecting characters, arrange them strategically to create dynamic Sprunki Megalovania loops. Each sound element's position contributes to the iconic Sprunki Megalovania rhythm pattern, allowing you to craft your own unique musical interpretation.",
    tips: [
      "Experiment with loop arrangements",
      "Fine-tune sound timing",
      "Build layered Sprunki Megalovania patterns",
      "Create dynamic variations"
    ],
    area: {
      name: "Loop Creation",
      hazards: [
        "Pattern Timing: Match the Sprunki Megalovania beat",
        "Layer Balancing: Build intensity",
        "Sound Placement: Create flow",
        "Loop Dynamics: Add variation"
      ]
    },
    image: "/features/step-2.png"
  },
  {
    number: 3,
    title: "Perfect Your Sprunki Megalovania Mix",
    description: "Explore the dynamic world of Sprunki Megalovania mixing by experimenting with different sound combinations. Layer fast-paced beats, bold melodies, and rich harmonies to capture the high-energy essence of the iconic Sprunki Megalovania soundtrack.",
    tips: [
      "Blend multiple sound layers",
      "Experiment with Sprunki Megalovania rhythms",
      "Balance melody and harmony",
      "Create energetic variations"
    ],
    area: {
      name: "Mix Mastery",
      hazards: [
        "Beat Layering: High-energy rhythm",
        "Melody Integration: Bold sound design",
        "Harmony Balance: Rich textures",
        "Dynamic Control: Energy flow"
      ]
    },
    image: "/features/step-3.png"
  },
  {
    number: 4,
    title: "Tips for Success in Sprunki Megalovania",
    description: "Take your Sprunki Megalovania creations to the next level by exploring advanced composition techniques. Learn to weave complex patterns and layer sounds to create rich, dynamic musical experiences in Sprunki Megalovania that inspire and energize.",
    tips: [
      "Start with simple foundations",
      "Gradually add complexity",
      "Experiment with combinations", 
      "Draw inspiration from others"
    ],
    area: {
      name: "Creative Expression",
      hazards: [
        "Pattern Building: Layer progressively",
        "Sound Balance: Mix elements naturally",
        "Flow Control: Maintain musical energy",
        "Creative Freedom: Express your style"
      ]
    }
  },
  {
    number: 5,
    title: "Join the Sprunki Megalovania Community",
    description: "Share your Sprunki Megalovania strategies and musical compositions with the Sprunki Megalovania community. Learn from other players, discover new techniques, and contribute to the evolving meta.",
    tips: [
      "Record your best combinations",
      "Share successful strategies",
      "Study community discoveries",
      "Participate in challenges"
    ],
    area: {
      name: "Community Engagement",
      hazards: [
        "Strategy Sharing: Help others grow",
        "Technique Exchange: Learn new moves",
        "Challenge Participation: Test skills",
        "Community Events: Special rewards"
      ]
    }
  }
];

export function HowToPlay() {
  return (
    <section className="w-full max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-card/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border">
          <h2 className="text-2xl font-heading text-primary">
            Master Sprunki Megalovania Combat Music
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to create powerful musical combinations while mastering the art of combat in Sprunki Megalovania
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
