import React, { useState } from "react";

const LoadingSpinner = () => (
  <div className="relative w-16 h-16">
    {/* Outer ring */}
    <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
    {/* Inner ring */}
    <div className="absolute inset-2 border-4 border-purple-200 rounded-full animate-spin border-t-purple-500 animate-[spin_1.5s_linear_infinite]"></div>
    {/* Center dot */}
    <div className="absolute inset-[30%] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
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
      setContent("Loading complete! ✨");
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#9c95a1] via-[#e6a5a5] to-[#d9d8d7] space-y-8">
      <button
        onClick={handleClick}
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
        Start Loading
      </button>

      {loading ? (
        <div className="flex flex-col items-center space-y-6">
          <LoadingSpinner />
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

// Add custom animation
const style = document.createElement("style");
style.textContent = `
  @keyframes loading {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;
document.head.appendChild(style);

export default GracefulLoader;
