export default function Pricing() {
  const phone = "212657751083"; // Your WhatsApp number

  const plans = [
    {
      name: "Basic",
      price: "$20",
      desc: "1 Thumbnail Design",
      features: [
        "1 thumbnail",
        "2 Revisions",
        "24h Delivery",
        "Source file PSD (locked)",
        "3/5h Delivery (locked)",
      ],
      included: [0, 1, 2], // indexes of enabled features
      button: {
        text: "Order Now",
        message: "Hello, I would like to order the BASIC pack ($20) with 1 thumbnail design.",
      },
      highlight: false,
    },
    {
      name: "Creator",
      price: "$180",
      desc: "10 Thumbnails Designs",
      features: [
        "10 thumbnails",
        "24h Delivery",
        "Unlimited revisions",
        "Source file PSD",
        "3/5h Delivery",
      ],
      included: [0, 1, 2, 3, 4],
      button: {
        text: "Order Now",
        message: "Hello, I would like to order the CREATOR pack ($120) with 10 thumbnails.",
      },
      highlight: true, // Popular plan
    },
    {
      name: "Beast",
      price: "$380",
      desc: "20 Thumbnails Designs",
      features: [
        "20 thumbnails",
        "2 Revisions",
        "24h Delivery",
        "Source file PSD",
        "3/5h Delivery",
      ],
      included: [0, 1, 2, 3, 4],
      button: {
        text: "Order Now",
        message: "Hello, I would like to order the BEAST pack ($380) with 20 thumbnails.",
      },
      highlight: false,
    },
  ];

  const enterpriseMessage =
    "Hello, I’m interested in your ENTERPRISE solution for custom thumbnail packs. Can we discuss a tailored package for high-volume needs?";

  return (
    <section className="py-20 px-4 md:px-8">
      {/* Heading */}
      <h2 id="pricing" className="text-4xl font-bold text-center mb-4">
        The right price for you, whoever you are
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Creator or faceless channel, we tailor pricing to your needs.
      </p>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-2xl shadow-lg flex flex-col justify-between ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-700 to-purple-800 border-2 border-purple-400"
                : "bg-[#0f1335]"
            }`}
          >
            {/* Title & Price */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                {plan.highlight && (
                  <span className="px-3 py-1 text-xs font-semibold text-purple-700 bg-white rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-2">{plan.desc}</p>
              <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      plan.included.includes(i)
                        ? "text-gray-200"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    <span>✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                plan.button.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                plan.highlight
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-gray-900 hover:bg-gray-800 text-white"
              }`}
            >
              {plan.button.text}
            </a>
          </div>
        ))}
      </div>

      {/* Enterprise Card */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#0f1335] p-6 rounded-xl shadow-lg">
          {/* Left side */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gray-900 rounded-md mb-3">
              ENTREPRISE
            </span>
            <p className="text-gray-300 text-lg max-w-2xl">
              Custom thumbnail packs tailored for agencies and faceless
              channels— designed to meet your high-volume needs.
            </p>
          </div>

          {/* Right side */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              enterpriseMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-block px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
