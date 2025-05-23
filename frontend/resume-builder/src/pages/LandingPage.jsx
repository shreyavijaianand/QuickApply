import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HERO_IMG from '../assets/hero-img.png';

import Modal from '../components/Modal'; 
import Login from '../pages/Auth/Login'; 
import SignUp from '../pages/Auth/SignUp'; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(true);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    
  };

  return (
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">QuickApply</div>
          <button
            className="bg-pink-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
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
              alt="Hero"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* features section */}
        <section className="mt-5">
          <h2 className="text-2xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">Resume Hub</h3>
              <p className="text-gray-600">
                View, manage, and organize all your resumes in one simple dashboard.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">Custom Color Themes</h3>
              <p className="text-gray-600">
                Personalize your resume’s palette to reflect your style and tone.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">One-Click PDF Export</h3>
              <p className="text-gray-600">
                Download a clean, professional PDF of your resume in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* footer */}
        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          QuickApply
        </div>
      </div>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signUp" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
