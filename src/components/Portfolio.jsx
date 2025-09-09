import { useState } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Heart, Clock, Star, Image as ImageIcon, X } from "lucide-react";

// YouTube images
import yt1 from "../assets/youtube/Seltix-Agadir.png";
import yt2 from "../assets/youtube/Seltix-Mohamed-6-Tower.png";
import yt3 from "../assets/youtube/IMG_1234.PNG";
import yt4 from "../assets/youtube/KOREA.jpg";
import yt5 from "../assets/youtube/Zouhair-Shoes.png";
import yt6 from "../assets/youtube/IMG_1183.PNG";
import yt7 from "../assets/youtube/Hamrita-fl-hind.png";
import yt8 from "../assets/youtube/SLS Podcast 2-2.png";
import yt9 from "../assets/youtube/Ja3bu9 Kawalis 1.png";

// IG Reels images
import igR1 from "../assets/igReels/binarReel.png";
import igR2 from "../assets/igReels/wijhati3.png";
import igR3 from "../assets/igReels/SLS2.png";
import igR4 from "../assets/igReels/Wijhati1.jpg";
import igR5 from "../assets/igReels/WEGRUND.png";
import igR6 from "../assets/igReels/wijhati2.png";
import igR7 from "../assets/igReels/SLS1.png";
import igR8 from "../assets/igReels/BinarCount.png";
import igR9 from "../assets/igReels/SLS2.png";

// (optional) IG Posts images
// import post1 from "../assets/igPosts/";
// import post2 from "../assets/igPosts/";
// import post3 from "../assets/igPosts/";

export default function Portfolio() {
  const [active, setActive] = useState("YouTube");
  const [selectedImage, setSelectedImage] = useState(null);

  const youtubeImages = [yt1, yt2, yt3, yt4, yt5, yt6, yt7, yt8, yt9];
  const reelsImages = [igR1, igR2, igR3, igR4, igR5, igR6, igR7, igR8, igR9];
  // const postsImages = [];

  const categories = [
    { name: "YouTube", icon: FaYoutube },
    { name: "IG Posts", icon: FaInstagram },
    { name: "IG Reels", icon: MdOutlineVideoLibrary },
  ];

  const stats = [
    { icon: <Heart className="w-12 h-12 text-purple-400" />, value: "100%", label: "Satisfaction" },
    { icon: <Clock className="w-12 h-12 text-purple-400" />, value: "2h", label: "Fast delivery" },
    { icon: <Star className="w-12 h-12 text-purple-400" />, value: "+90", label: "Client trust us" },
    { icon: <ImageIcon className="w-12 h-12 text-purple-400" />, value: "+500", label: "Assets" },
  ];

  // Reusable grid renderer with custom aspect ratio
  const renderImageGrid = (images, aspect = "16/9") => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 md:px-8">
      {images.map((img, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedImage(img)}
          className="rounded-2xl overflow-hidden cursor-pointer transition transform hover:scale-[1.02] 
                     border-2 border-purple-500 hover:border-purple-600 hover:shadow-lg"
        >
          <div className={`w-full aspect-[${aspect}]`}>
            <img
              src={img}
              alt={`Portfolio item ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const content = {
    YouTube: renderImageGrid(youtubeImages, "16/9"),
    "IG Reels": renderImageGrid(reelsImages, "9/16"),
    // "IG Posts": renderImageGrid(postsImages, "1/1"),
  };

  return (
    <section className="flex flex-col items-center text-center py-27">
      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-[#0f1335]">
              {item.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h1 id="portfolio" className="text-3xl font-bold mb-6">Our Portfolio</h1>
      <p className="text-gray-400 mb-12">
        Our diverse portfolio showcases stunning designs across platforms
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-white border-purple-600 text-purple-600"
                  : "bg-transparent border-purple-500 text-white hover:bg-purple-600 hover:text-white"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-purple-500" : "text-white"}`} />
              <span className="font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content */}
      <div className="w-full max-w-6xl">{content[active]}</div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-400 cursor-pointer"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full preview"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
