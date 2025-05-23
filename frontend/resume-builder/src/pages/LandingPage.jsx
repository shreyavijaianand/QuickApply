import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HERO_IMG from '../assets/hero-img.png';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    // navigate("/dashboard") or open modal etc.
  };

  return (
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">QuickApply</div>
          <button
            className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* start header */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Build. Click.{" "}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#000000_0%,_#ff69b4_100%)] bg-[length:200%_200%] animate-text-shine">
                Hired.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Craft your perfect resume in minutes. Apply with confidence.
            </p>
            <button
              className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={handleCTA}
            >
              Begin
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={HERO_IMG}
              alt="Hero Image"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
