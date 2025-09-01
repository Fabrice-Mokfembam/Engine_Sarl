import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { video1, video3 } from '../../../assets/videos';




const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 1 ? 2 : 1));
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[89vh] w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          key={`video1-${currentVideo === 1 ? 'visible' : 'hidden'}`}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video1} type="video/webm" />
        </video>
        <video
          key={`video2-${currentVideo === 2 ? 'visible' : 'hidden'}`}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video3} type="video/webm" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
             <div className="z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {t('home.hero.title')} <span className="text-secondary">Engine SARL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('home.hero.description')}
          </p>
         
        </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10  shadow-lg transition-all duration-300 transform hover:scale-105">
              {t('buttons.explore')}
            </Link>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm font-bold py-5 px-10 shadow-lg transition-all duration-300 transform hover:scale-105">
              {t('buttons.contactUs')}
            </Link>
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;


