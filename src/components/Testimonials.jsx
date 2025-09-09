import { Star } from "lucide-react";
import Binar from "../assets/profiles/ahmedEss.jpg";
import wijhati from "../assets/profiles/wijhati.jpg";
import hamrita from "../assets/profiles/hamrita.jpg";
import botato from "../assets/profiles/botato.jpg";
import sls from "../assets/profiles/SLS.jpg";
import ja3bu9 from "../assets/profiles/ja3bu9.jpg";





const testimonials = [
  {
    name: "BOTATO",
    country: "Morocco",
    followers: "762k",
    photo: botato,
    review:
      "Great team to work with, very understanding of my needs. They’ve done over 30+ thumbnails for me, and I’m always very satisfied with their professionalism!",
  },
  {
    name: "Adam Hamrita",
    country: "Morocco",
    followers: "738k",
    photo: hamrita,
    review:
      "Excellent designs, it’s like they have superpowers — they know exactly what they’re doing, and you will be wowed!",
  },
  {
    name: "Ja3bu9",
    country: "Morocco",
    followers: "55.6k",
    photo: ja3bu9,
    review:
      "I usually make a draft for my channel, and they get things done professionally. Love the communication and workflow!",
  },
  {
    name: "WIJHATI",
    country: "Morocco",
    followers: "32.2k",
    photo: wijhati,
    review:
      "Great quality YouTube thumbnails! Love the partnership, definitely recommended!",
  },
  {
    name: "SLS",
    country: "Morocco",
    followers: "51.2k",
    photo: sls,
    review:
      "Awesome thumbnails! They are always willing to make adjustments to get the thumbnails exactly how you want them.",
  },
  {
    name: "Ahmed Amine Essabbane",
    country: "Morocco",
    followers: "(Binar CEO) 10.2k",
    photo: Binar,
    review:
      "He does an excellent job at creating my thumbnails. Communication is seamless, and they are incredibly responsive to feedback.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 text-white">
      <div  id="testimonials" className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Customer reviews</h2>
        <p className="text-gray-400 mb-12">
          You focus on creating content; we’ll focus on getting viewers to notice you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#161b3d] p-6 rounded-2xl shadow-lg text-left flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-yellow-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 mb-6">{t.review}</p>

              {/* User info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500"
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.country}</p>
                  <span className="text-sm text-purple-400 font-medium">
                    {t.followers} followers
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
