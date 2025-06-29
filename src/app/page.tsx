'use client';

import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [animationData, setAnimationData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    // Create download link for the APK file
    const link = document.createElement('a');
    link.href = '/app/Zephyr.apk';
    link.download = 'Zephyr.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Load animation data with error handling and loading optimization
    const loadAnimation = async () => {
      try {
        const response = await fetch('/gif/Animation - 1751208672444.json');
        if (!response.ok) {
          throw new Error('Failed to load animation');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading animation:', error);
        // Could set a fallback animation or skip animation
      }
    };

    // Delay loading animation to improve initial page load
    const timeoutId = setTimeout(loadAnimation, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let currentPosition = 0;
    const screenshots = [
      { element: '.screenshot-1', positions: ['center', 'left', 'right'] },
      { element: '.screenshot-2', positions: ['right', 'center', 'left'] },
      { element: '.screenshot-3', positions: ['left', 'right', 'center'] }
    ];

    const updatePositions = () => {
      screenshots.forEach((screenshot) => {
        const element = document.querySelector(screenshot.element);
        if (element) {
          const position = screenshot.positions[currentPosition];
          
          // Remove all position classes
          element.classList.remove('screenshot-center', 'screenshot-left', 'screenshot-right');
          
          // Add current position class
          element.classList.add(`screenshot-${position}`);
        }
      });
      
      currentPosition = (currentPosition + 1) % 3;
    };

    // Initial positioning
    updatePositions();

    // Set up interval for rotation
    const interval = setInterval(updatePositions, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white scroll-smooth">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zephyr Weather App",
            "description": "Beautiful weather app with real-time updates, global coverage, and 24-hour forecasts",
            "applicationCategory": "Weather",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            },
            "author": {
              "@type": "Person",
              "name": "Tanvir Anjum Apurbo"
            }
          })
        }}
      />
      
      <style jsx global>{`
        .screenshot-center {
          transform: translateX(0) scale(1.1);
          opacity: 1;
          z-index: 30;
        }
        
        .screenshot-left {
          transform: translateX(-120px) scale(0.8);
          opacity: 0.7;
          z-index: 20;
        }
        
        .screenshot-right {
          transform: translateX(120px) scale(0.8);
          opacity: 0.7;
          z-index: 20;
        }

        @media (min-width: 640px) {
          .screenshot-center {
            transform: translateX(0) scale(1.2);
          }
          
          .screenshot-left {
            transform: translateX(-150px) scale(0.8);
            opacity: 0.8;
          }
          
          .screenshot-right {
            transform: translateX(150px) scale(0.8);
            opacity: 0.8;
          }
        }

        @media (min-width: 768px) {
          .screenshot-left {
            transform: translateX(-200px) scale(0.8);
          }
          
          .screenshot-right {
            transform: translateX(200px) scale(0.8);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/icon/zephyr-icon.png"
              alt="Zephyr Logo"
              width={32}
              height={32}
              className="sm:w-10 sm:h-10 mr-2 sm:mr-3"
            />
            <h1 className="text-xl sm:text-2xl font-bold">Zephyr</h1>
          </div>
          <div className="hidden sm:flex space-x-4 lg:space-x-6">
            <a href="#features" className="text-sm lg:text-base hover:text-amber-300 transition-colors">Features</a>
            <a href="#screenshots" className="text-sm lg:text-base hover:text-amber-300 transition-colors">Screenshots</a>
            <a href="#download" className="text-sm lg:text-base hover:text-amber-300 transition-colors">Download</a>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              className="text-white p-2" 
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="#features" 
                className="text-white hover:text-amber-300 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#screenshots" 
                className="text-white hover:text-amber-300 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Screenshots
              </a>
              <a 
                href="#download" 
                className="text-white hover:text-amber-300 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Experience Weather <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Like Never Before</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200 max-w-lg mx-auto lg:mx-0">
              Zephyr brings you accurate forecasts with a beautiful interface. Stay prepared with real-time updates and stunning visualizations.
            </p>
            <a href="#download" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white inline-flex items-center text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Now
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-slate-600/20 to-indigo-700/20 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-sm">
              {animationData ? (
                <div className="flex items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px]">
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] rounded-2xl"
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-br from-slate-600/10 to-indigo-700/10 rounded-2xl">
                  <div className="animate-pulse text-slate-400 text-sm sm:text-base">Loading animation...</div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 sm:-bottom-10 -right-5 sm:-right-10 w-20 h-20 sm:w-40 sm:h-40 bg-indigo-500 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 w-20 h-20 sm:w-40 sm:h-40 bg-slate-500 rounded-full opacity-15 blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Why Choose Zephyr?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center sm:text-left">
              <div className="bg-slate-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-sm sm:text-base text-slate-200">Get minute-by-minute weather updates with our advanced forecasting technology.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center sm:text-left">
              <div className="bg-indigo-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-sm sm:text-base text-slate-200">Access accurate weather data from anywhere in the world with our extensive network.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="bg-amber-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">24h Forecast</h3>
              <p className="text-sm sm:text-base text-slate-200">Get detailed hourly forecasts for the next 24 hours to plan your day perfectly.</p>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">App Screenshots</h2>
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center mt-8 sm:mt-12 md:mt-16">
            {/* Screenshot 1 - starts in center */}
            <div className="absolute transition-all duration-1000 ease-in-out screenshot-1 screenshot-center bg-gradient-to-br from-cyan-300 to-cyan-500 p-1 rounded-2xl sm:rounded-3xl shadow-2xl">
              <Image
                src="/screenshots/Screenshot_1751123714.jpg"
                alt="Weather forecast screenshot"
                width={200}
                height={350}
                className="sm:w-[240px] sm:h-[420px] md:w-[280px] md:h-[500px] rounded-2xl object-cover"
              />
            </div>
            
            {/* Screenshot 2 - starts on right */}
            <div className="absolute transition-all duration-1000 ease-in-out screenshot-2 screenshot-right bg-gradient-to-br from-emerald-300 to-emerald-500 p-1 rounded-2xl sm:rounded-3xl shadow-2xl">
              <Image
                src="/screenshots/Screenshot_1751124591.jpg"
                alt="Weekly forecast screenshot"
                width={200}
                height={350}
                className="sm:w-[240px] sm:h-[420px] md:w-[280px] md:h-[500px] rounded-2xl object-cover"
              />
            </div>
            
            {/* Screenshot 3 - starts on left */}
            <div className="absolute transition-all duration-1000 ease-in-out screenshot-3 screenshot-left bg-gradient-to-br from-amber-300 to-amber-500 p-1 rounded-2xl sm:rounded-3xl shadow-2xl">
              <Image
                src="/screenshots/Screenshot_20250629_192208.jpg"
                alt="Radar view screenshot"
                width={200}
                height={350}
                className="sm:w-[240px] sm:h-[420px] md:w-[280px] md:h-[500px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-600/20 to-indigo-700/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Experience Zephyr?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200 max-w-2xl mx-auto">Download our app now and stay ahead of the weather with accurate forecasts and beautiful visualizations.</p>
            <button onClick={handleDownload} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white inline-flex items-center text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Zephyr
            </button>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300">Available for Android</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <Image
                src="/icon/zephyr-icon.png"
                alt="Zephyr Logo"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8 mr-2"
              />
              <h2 className="text-lg sm:text-xl font-bold">Zephyr</h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
              <a href="https://doc-hosting.flycricket.io/zephyr-privacy-policy/9034b063-3217-4664-8371-8f4374816cde/privacy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-300 transition-colors">Privacy Policy</a>
              <a href="https://doc-hosting.flycricket.io/zephyr-terms-of-use/91603ae9-4c90-4738-9249-3bb268b93e24/terms" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-300 transition-colors">Terms of Service</a>
              <a href="https://www.linkedin.com/in/tanvir-anjum-apurbo-2a8b1620b/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-300 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 text-center text-slate-400 text-xs sm:text-sm">
            <p>© 2025 Zephyr Weather App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
