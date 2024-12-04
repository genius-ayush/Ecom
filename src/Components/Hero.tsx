import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full  lex">
      {/* Background Image */}
      <div className="w-full relative">
        <img
          src="store/hero.webp"
          className="w-full object-contain"
          alt="Hero"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-16 md:px-24 lg:px-56">
          <div className="max-w-md">
            <h1 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-mono leading-tight">
              Reusable Face Mask
            </h1>
            <button
              className="bg-black text-white px-6 py-3 text-sm sm:text-base md:text-lg font-semibold rounded mt-6 md:mt-10 hover:bg-sky-700"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
