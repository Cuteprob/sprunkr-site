interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Sprunki Megalovania?",
    answer: "Sprunki Megalovania is the latest evolution in our music creation series, featuring innovative gameplay mechanics that blend character abilities with sound elements. It introduces unique sound environments and character-specific musical styles, creating an immersive experience that encourages creativity and musical exploration.",
    category: "General",
  },
  {
    question: "What makes the sound design unique?",
    answer: "Sprunki Megalovania features an exciting modular sound system that integrates the iconic 'Megalovania' soundtrack into a dynamic universe. Each character contributes unique musical elements - from intense percussion and driving bass lines to ethereal melodies - creating an interactive environment where players can craft fast-paced, energetic compositions through real-time mixing and arrangement.",
    category: "General",
  },
  {
    question: "How do I create music in Sprunki Megalovania?",
    answer: "Music creation is intuitive and engaging. Experiment with different musical environments, mix character sounds in real-time, and discover interactive sound combinations. The game features a gradual learning curve that introduces complexity as you progress, making it accessible for both beginners and experienced creators.",
    category: "General",
  },
  {
    question: "What customization options are available?",
    answer: "Players can personalize their experience through sound processing options, adjustable effect parameters, and flexible style adaptation. You can tailor characters to your preferences and create unique performances through various combinations of sounds and effects.",
    category: "General",
  },
  {
    question: "How does the progression system work?",
    answer: "The game features a multi-phase learning curve that gradually introduces new complexities. As you progress, you'll unlock more advanced sound composition techniques, discover new character combinations, and develop your musical creativity through interactive exploration.",
    category: "General",
  },
  {
    question: "Do I need to download anything to play Sprunki Megalovania?",
    answer: "No, Sprunki Megalovania is a browser-based game that runs directly in your web browser. You don't need to download or install any additional software. Simply visit our website and start creating music immediately.",
    category: "General",
  },
  {
    question: "Can I play Sprunki Megalovania on mobile?",
    answer: "Yes, Sprunki Megalovania is fully optimized for mobile devices. The intuitive touch interface and responsive design ensure a smooth music creation experience whether you're on a smartphone or tablet.",
    category: "General",
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
          Find answers about Sprunki Megalovania's music creation, characters, and features
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
