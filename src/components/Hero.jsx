import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-[#000000]">
      {/* Floating stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple stars */}
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-10 left-1/4 opacity-70"></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/3 right-1/5 opacity-50"></div>
        <div className="absolute w-1 h-1 bg-purple-200 rounded-full top-1/6 right-9 opacity-60"></div>

        {/* Blue stars */}
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-20 left-1/3 opacity-60"></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-1/5 right-1/3 opacity-70"></div>
        <div className="absolute w-1 h-1 bg-blue-500 rounded-full bottom-10 right-1/4 opacity-50"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full top-1/4 left-1/6 opacity-70"></div>

        {/* Gray / white stars */}
        <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-6 left-1/5 opacity-60"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-12 right-1/6 opacity-80"></div>
        <div className="absolute w-1 h-1 bg-gray-200 rounded-full bottom-1/4 right-1/3 opacity-50"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/8 left-1/8 opacity-70"></div>

        {/* Yellow stars */}
        <div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full bottom-1/6 left-1/2 opacity-90"></div>
        <div className="absolute w-1 h-1 bg-yellow-300 rounded-full top-1/5 left-1/3 opacity-80"></div>
      </div>

      {/* Badge */}
      <span className="relative z-10 flex items-center space-x-2 bg-gradient-to-r from-[#000000] to-indigo-900  text-white text-sm font-medium px-4 py-1 rounded-full border border-purple-600 shadow-md mb-6">
        <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
        <span>Available for work</span>
      </span>

      {/* Heading */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-4xl">
        Increase your CTR with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          Eye Catching Thumbnails
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-6 text-lg text-gray-400 max-w-2xl">
        Thumbnails That Make Small Channels Big and Big Channels Unstoppable!
      </p>

      {/* Buttons */}
      <div className="relative z-10 mt-10 flex flex-col md:flex-row gap-4">
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
};

export default Hero;
