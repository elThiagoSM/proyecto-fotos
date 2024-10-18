import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="text-white text-2xl font-bold"
        >
          <img
            src="https://www.freeiconspng.com/thumbs/photography-logo/photography-logo-png-picture-22.png"
            alt="Logo"
            className="h-12 w-12"
          />
        </button>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div>
          <button onClick={handleProfileClick} className="text-white text-3xl">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
