import React, { useState } from "react";

const ChickenSpinner = () => (
  <div className="relative w-24 h-24">
    {/* Chicken body */}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full animate-[wobble_1s_ease-in-out_infinite]"
    >
      {/* Body */}
      <ellipse cx="50" cy="60" rx="25" ry="20" fill="#f4a460" />

      {/* Head */}
      <circle cx="75" cy="45" r="15" fill="#f4a460" />

      {/* Comb */}
      <path d="M 75 30 L 80 35 L 85 30 L 90 35 L 85 40" fill="#ff0000" />

      {/* Beak */}
      <path d="M 85 45 L 95 48 L 85 51" fill="#ffa500" />

      {/* Eye */}
      <circle cx="80" cy="42" r="2" fill="black" />

      {/* Legs */}
      <path
        d="M 40 75 L 35 90 M 60 75 L 65 90"
        stroke="#cd853f"
        strokeWidth="3"
        className="animate-[walk_0.5s_ease-in-out_infinite]"
      />

      {/* Tail feathers */}
      <path
        d="M 25 50 Q 15 40 25 30"
        stroke="#f4a460"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 28 52 Q 18 42 28 32"
        stroke="#f4a460"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  </div>
);

const GracefulLoader = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleClick = () => {
    setLoading(true);
    setContent("");

    setTimeout(() => {
      setLoading(false);
      setContent("Murgi says hello! 🐔");
    }, 10000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#9c95a1] via-[#e6a5a5] to-[#d9d8d7] space-y-8">
      {/* <button
        onClick={handleClick}
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
       
      </button> */}
      <img
        className="h-35"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/a64c4754053637.594b42320b7c8.gif"
        alt=""
      />

      {loading ? (
        <div className="flex flex-col items-center space-y-6">
          <ChickenSpinner />
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      ) : (
        <p className="text-xl font-medium text-gray-800">{content}</p>
      )}
    </div>
  );
};

// Add custom animations
const style = document.createElement("style");
style.textContent = `
  @keyframes loading {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  @keyframes wobble {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }
  
  @keyframes walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
`;
document.head.appendChild(style);

export default GracefulLoader;
