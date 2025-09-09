import { MessageSquare, Wallet, Layers, RefreshCw, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Say Hello",
      desc: "You simply reach out to us via email with your request — quick, easy, friendly.",
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "02",
      title: "Discuss Your Project",
      desc: "We discuss your video topic, style preferences, pricing details, and delivery timeline together.",
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "03",
      title: "Confirm & Pay",
      desc: "Once everything’s confirmed, you securely send the payment to officially get started.",
      icon: <Wallet className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "04",
      title: "We Start Designing",
      desc: "We design a bold, high-impact thumbnail that grabs attention and drives results fast.",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "05",
      title: "Revisions (If Needed)",
      desc: "Need small tweaks? We’ll adjust the thumbnail quickly until you’re fully satisfied.",
      icon: <RefreshCw className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "06",
      title: "Delivery & Growth",
      desc: "We deliver your final assets and support your growth journey with designs that keep your brand thriving.",
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">How We Do The Work</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        We follow a proven, transparent process that delivers measurable, reliable results — every time.
      </p>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f1335] shadow-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600/20">
              {step.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg text-white">
                {step.id} {step.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="flex justify-center">
        <a
          href="https://wa.me/212657751083"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-b from-blue-800 to-purple-950 hover:bg-purple-700 text-white font-medium transition-all duration-300 shadow-lg"
        >
          👉 Get Custom Thumbnail
        </a>
      </div>
    </section>
  );
}
