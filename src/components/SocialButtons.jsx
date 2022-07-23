import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex flex-row items-end justify-end space-x-1">
      <a href="https://facebook.com/narcdev">
        <FaFacebookSquare className="text-gray-400 w-5 h-5 cursor-pointer hover:text-soft-red" />
      </a>
      <a href="https://instagram.com/rockreyad">
        <FaInstagramSquare className="text-gray-400 w-5 h-5 cursor-pointer hover:text-soft-red" />
      </a>
      <a href="https://www.linkedin.com/in/rockreyad/">
        <FaLinkedinIn className="text-gray-400 w-5 h-5 cursor-pointer hover:text-soft-red" />
      </a>
    </div>
  );
};

export default SocialButtons;
