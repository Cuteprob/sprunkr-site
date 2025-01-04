interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Sprunkr and how does it relate to Incredibox?",
    answer: "Sprunkr is an innovative rhythm game that combines the intuitive music creation tools of Incredibox with unique gameplay mechanics. It features multiple versions including the original Sprunkr, Sprunkr 2.0, and Sprunkr 4 OC, each offering distinct musical experiences with character customization and creative sound mixing capabilities.",
    category: "General",
  },
  {
    question: "What are the different versions of Sprunkr available?",
    answer: "Sprunkr comes in several exciting versions: The original Sprunkr (featuring classic gameplay mechanics), Sprunkr 2.0 (with enhanced graphics and improved sound systems), and Sprunkr 4 OC (featuring 41 unique characters and hidden secrets). Each version offers its own unique features and musical possibilities.",
    category: "Versions",
  },
  {
    question: "How do I create music in Sprunkr?",
    answer: "Creating music is intuitive and fun. Simply select characters from the roster, drag and drop them onto the stage to layer different beats, melodies, and effects. You can experiment with various combinations, adjust volumes, and create unique compositions. Each character brings their own distinct sound loops and animations to your mix.",
    category: "Gameplay",
  },
  {
    question: "What makes Sprunki Sprunkr 2.0 different from the original version?",
    answer: "Sprunki Sprunkr 2.0 introduces significant improvements including enhanced character designs, smoother animations, refined soundscapes, and improved gameplay mechanics. It features better graphics, more dynamic sound effects, and a more polished user interface while maintaining the core music creation experience that players love.",
    category: "Versions",
  },
  {
    question: "What special features are available in Sprunkr 4 OC?",
    answer: "Sprunkr 4 OC expands the gameplay with 41 unique characters (including secret ones), new sound combinations, and special animations. It features the return of Mr. Fun Computer with a new performance style, hidden content to discover, and an extensive range of musical possibilities for creating unique tracks.",
    category: "Features",
  },
  {
    question: "Can I share my Sprunkr creations with others?",
    answer: "Yes! Sprunkr encourages creativity and community sharing. You can save your musical creations and share them with the community. This feature allows you to showcase your unique compositions and get inspired by other players' creations.",
    category: "Community",
  },
  {
    question: "Is there a horror mode in Sprunkr?",
    answer: "Yes, Sprunkr features a special horror mode that combines rhythm gameplay with spine-tingling elements inspired by Five Nights at Freddy's. This mode, part of the Sprunki Retake universe, offers a unique fusion of music creation and horror atmosphere, creating an entirely new gaming experience.",
    category: "Features",
  },
  {
    question: "What makes Sprunkr's sound design unique?",
    answer: "Sprunkr's sound design stands out through its diverse collection of loops, effects, and character-specific sounds. Each version of Sprunkr brings its own unique soundscape, from the classic beats of the original to the enhanced audio quality in Sprunki Sprunkr 2.0 and the extensive sound library in Sprunkr 4 OC.",
    category: "Features",
  }
];

export function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-heading text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Find answers about Sprunki Sprunkr's music creation, characters, and features
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid gap-8">
        {Object.entries(
          faqs.reduce((acc, faq) => {
            const category = faq.category || 'General';
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(faq);
            return acc;
          }, {} as Record<string, FAQItem[]>)
        ).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <div className="grid gap-4">
              {items.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border"
                >
                  <div className="border-b border-border p-4">
                    <h4 className="text-lg font-heading text-primary">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
