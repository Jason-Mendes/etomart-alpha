import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import AuthenticatedLoginModal from './AuthenticatedLoginModal';
import AuthenticatedSignupModal from './AuthenticatedSignupModal';

const LPNavBar = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showAuthenticatedLoginModal, setShowAuthenticatedLoginModal] = useState(false); 
  const [showAuthenticatedSignupModal, setShowAuthenticatedSignupModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavbarSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleAuthenticatedLoginClick = () => {
    setShowAuthenticatedLoginModal(true);
  };

  const handleAuthenticatedSignupClick = () => {
    setShowAuthenticatedSignupModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setShowForgotPasswordModal(false);
    setShowAuthenticatedLoginModal(false);
    setShowAuthenticatedSignupModal(false);
  };

  return (
    <div>
      <style>
        {`
          .sticky {
            position: fixed;
            z-index: 100;
            width: 100%;
          }

          .flex-container {
            display: flex;
            align-items: center;
            gap: 6px;
          }
        `}
      </style>

      <nav id="lpnavbar" className={`bg-[#f9f9f9] px-4 ${isNavbarSticky ? 'sticky' : ''}`}>
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center mt-6 mb-4">
            <h1 className="-mt-2 text-3xl font-shrikhand text-[#ee9613] whitespace-nowrap">
              <Link to="/LandingPage">Etomart</Link>
            </h1>
          </div>

          {/* Buttons container */}
          <div className="flex-container">
            <button onClick={handleLoginClick} className="hover:bg-black hover:text-white font-Agbalumo h-[35px] px-4 bg-[#ee9613] text-Black rounded">
              Login
            </button>
            <button onClick={handleSignupClick} className="hover:bg-black hover:text-white font-Agbalumo h-[35px] px-4 bg-[#ee9613] text-Black rounded">
              Sign Up
            </button>
            <button onClick={handleForgotPasswordClick} className=" hidden hover:bg-black hover:text-white font-Agbalumo h-[35px] px-4 bg-[#ee9613] text-Black rounded">
            Forgot Password
            </button>
            <button onClick={handleAuthenticatedLoginClick} className="hidden hover:bg-black hover:text-white font-Agbalumo h-[35px] px-4 bg-[#ee9613] text-Black rounded">
            Authenticated Log in
            </button>
            <button onClick={handleAuthenticatedSignupClick} className="hidden hover:bg-black hover:text-white font-Agbalumo h-[35px] px-4 bg-[#ee9613] text-Black rounded">
            Authenticated Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* Render modals */}
      <LoginModal
        showModal={showLoginModal}
        closeModal={closeModals}
        openSignupModal={() => {
          closeModals();
          setShowSignupModal(true);
        }}
        openForgotPasswordModal={() => {
          closeModals();
          setShowForgotPasswordModal(true);
        }}
        openAuthenticatedLoginModal={() => {
          closeModals();
          setShowAuthenticatedLoginModal(true);
        }}
        openAuthenticatedSignupModal={() => {
          closeModals();
          setShowAuthenticatedSignupModal(true);
        }}
      />
      <SignupModal showModal={showSignupModal} closeModal={closeModals}
      openLoginModal={() => {
          closeModals();
          setShowLoginModal(true);
        }}
        openForgotPasswordModal={() => {
          closeModals();
          setShowForgotPasswordModal(true);
        }}
        openAuthenticatedLoginModal={() => {
          closeModals();
          setShowAuthenticatedLoginModal(true);
        }}
        openAuthenticatedSignupModal={() => {
          closeModals();
          setShowAuthenticatedSignupModal(true);
        }}
      />
      <ForgotPasswordModal
        showModal={showForgotPasswordModal}
        closeModal={closeModals}
      />
      <AuthenticatedLoginModal
        showModal={showAuthenticatedLoginModal}
        closeModal={closeModals}
      />
      <AuthenticatedSignupModal
        showModal={showAuthenticatedSignupModal}
        closeModal={closeModals}
      />
    </div>
  );
};

export default LPNavBar;