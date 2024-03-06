import React, { useState, useEffect, useRef } from "react";
import { PhoneIncomingIcon } from "@heroicons/react/solid";

const ContactSellerButton = ({ Phone }) => {
  const [showPhone, setShowPhone] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowPhone(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the component
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        className="flex bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-xl"
        onClick={() => setShowPhone(!showPhone)}
      >
        <div className="flex flex-row items-center">
          <PhoneIncomingIcon className="h-8 px-1" />
          <div className="ml-2 pr-2">Contact</div>
        </div>
      </button>
      {showPhone && (
        <div className="absolute bg-green-700 text-white top-0 py-3 px-3 font-bold rounded-xl z-20">
          {Phone}
        </div>
      )}
    </div>
  );
};

export default ContactSellerButton;
