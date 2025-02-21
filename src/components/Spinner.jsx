import React, { useState } from "react";

const Skeleton = () => (
  <div className="w-80 h-6 bg-gray-300 rounded-md animate-pulse"></div>
);

const LoaderExample = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleClick = () => {
    setLoading(true);
    setContent(""); // Clear content first

    setTimeout(() => {
      setLoading(false);
      setContent("Loading complete! 🎉");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-yellow-500">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Start Loading
      </button>

      {loading ? (
        <div className="flex flex-col items-center">
          {/* Image with Spinner Overlay */}
          <img src="" alt="" />
          <div className="relative">
            <img src="/loading.gif" alt="Loading" className="w-20 h-20 mt-4" />
            {/* Spinner Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-red-500 border-dashed rounded-full animate-spin"></div>
            </div>
          </div>

          <Skeleton />
        </div>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default LoaderExample;
