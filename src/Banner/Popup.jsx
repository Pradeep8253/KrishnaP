import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // Close the popup after 10 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        {/* Banner */}
        <div className="bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Special Offer!</h2>
          <p className="text-sm">Get 20% off on your first purchase.</p>
        </div>

        {/* Popup Content */}
        <div className="mt-4">
          <p className="text-gray-700">
            Welcome to our website! Don't miss out on our exclusive deals. Click the button below to
            close this popup.
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;