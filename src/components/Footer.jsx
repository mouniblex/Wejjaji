// Footer.jsx
import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaBehance,
  FaRegEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#0A0A1A] text-white py-12 px-6 md:px-16 border-t border-[#1E1E2E] overflow-hidden">
      {/* Stars Background (Tailwind only) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Bigger twinkling stars */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`big-${i}`}
            className="absolute w-2 h-2 bg-violet-400 rounded-full opacity-80 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-4">
            <div className="text-xl font-bold">WEJJAJI </div> 
            <img className="w-7" src="https://flagsapi.com/DE/flat/64.png" />
            <img className="w-7" src="https://flagsapi.com/MA/flat/64.png" />
          </div>
          <p className="text-gray-400 max-w-sm mb-3">
            With Wejjaji, your content gets the attention it deserves—because
            great thumbnails aren’t optional, they’re essential.
          </p>
          <p className="text-xs text-gray-500">
            We aim to deliver top-tier thumbnail designs that not only attract
            attention but also drive measurable growth for digital creators.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/cv.pdf"
                download="/cv.pdf"
                className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded-full inline-flex items-center gap-2 text-sm transition"
              >
                👨‍💻 Download my CV
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4">Contact us</h3>
          <p className="text-gray-400 mb-3">
            Available 24h/24h. Ready to answer your questions.
          </p>
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <FaRegEnvelope />
            <a
              href="mailto:Medanir.eloijaji@gmail.com"
              className="hover:text-white transition"
            >
              Medanir.eloijaji@gmail.com
            </a>
          </div>
          <div className="flex gap-4 text-xl text-violet-400">
            <a
              href="https://www.instagram.com/wejjaji.de/?hl=fr"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/wejjaji" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.behance.net/medanireloijaji" target="_blank">
              <FaBehance />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=212657751083"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1E1E2E] my-8 relative"></div>

      {/* Bottom Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-4">
        <p>All rights reserved © {new Date().getFullYear()}</p>

        {/* Designer Credit */}
        <a href="https://www.instagram.com/7mounib/?hl=fr" target="_blank"><h2 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-white via-gray-800 to-white bg-[length:200%_auto] animate-gradient">
          Created by MOUNIB
        </h2></a>

        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 70% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
                75% {
              background-position: 25% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 4s ease infinite;
          }
        `}</style>
      </div>
    </footer>
  );
}
