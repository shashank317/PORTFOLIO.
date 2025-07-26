import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import LightRays from "../components/LightRays";
import StarBorder from "../components/StarBorder";

const Landing = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAnimationComplete = () => {
    console.log("Landing animation completed!");
  };

  const handleEnterClick = () => {
    setIsLoading(true);

    // Optional fade-out animation before routing
    setTimeout(() => {
      navigate("/home");
    }, 1800); // gives smooth transition feel
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Light Rays */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#fcfafaff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0 z-0"
      />

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <BlurText
            text="Hello, I'm Shashank👋 Welcome to my Portfolio"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
            onAnimationComplete={handleAnimationComplete}
          />

          {!isLoading ? (
            <StarBorder
              as="button"
              onClick={handleEnterClick}
              className="text-white rounded-lg mt-4"
              color="cyan"
              speed="5s"
            >
              <ShinyText text="Enter Portfolio →" speed={3} />
            </StarBorder>
          ) : null}
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-cyan-300 mt-4 animate-pulse">Loading portfolio...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
