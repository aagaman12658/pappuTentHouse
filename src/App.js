import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import CallToActionSectionOne from './Components/CallToActionSectionOne';
import FaqSection from './Components/FaqSection';
import CallToActionSectionTwo from './Components/CallToActionSectionTwo';
import HeroSection from './Components/HeroSection';
import ImageGallery from './Components/ImageGallery';
import VideoGallery from './Components/VideoGallery';

function App() {
  const contactUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  const videoGalleryRef = useRef(null);
  const imageGalleryRef = useRef(null);
  const faqSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOurTeams = () => {
    ourTeamRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToImageGallery = () => {
    imageGalleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideoGallery = () => {
    videoGalleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFaqSection = () => {
    faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServicesSection = () => {
    servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App relative z-50">
      <NavBar
        scrollToContactUs={scrollToContactUs}
        scrollToOurTeams={scrollToOurTeams}
        scrollToImageGallery={scrollToImageGallery}
        scrollToVideoGallery={scrollToVideoGallery}
        scrollToFaqSection={scrollToFaqSection}
        scrollToServicesSection={scrollToServicesSection}
        scrollToHome={scrollToHome}
      />
      <>
        <div ref={homeRef}>
          <HeroSection />
        </div>
        <div className="relative -z-10" ref={servicesSectionRef}>
          <CallToActionSectionTwo />
          <CallToActionSectionOne />
        </div>
        <div className="relative -z-10" ref={faqSectionRef}>
          <FaqSection />
        </div>
        <div className="relative -z-10" ref={imageGalleryRef}>
          <ImageGallery />
        </div>
        <div className="relative -z-10" ref={videoGalleryRef}>
          <VideoGallery />
        </div>
        <div className="relative -z-10" ref={ourTeamRef}>
          <OurTeam />
        </div>
        <div className="relative -z-10" ref={contactUsRef}>
          <ContactUs />
        </div>
      </>

      <Footer
        scrollToContactUs={scrollToContactUs}
        scrollToOurTeams={scrollToOurTeams}
        scrollToImageGallery={scrollToImageGallery}
        scrollToVideoGallery={scrollToVideoGallery}
        scrollToFaqSection={scrollToFaqSection}
        scrollToServicesSection={scrollToServicesSection}
        scrollToHome={scrollToHome}
      />
    </div>
  );
}

export default App;