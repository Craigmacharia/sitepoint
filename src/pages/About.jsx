import { useState, useRef } from "react";
import { 
  FaPlay, 
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaHistory, 
  FaBullseye, 
  FaUsers, 
  FaHandshake,
  FaAward,
  FaMapMarkerAlt,
  FaChartLine,
  FaExpand,
  FaCompress
} from "react-icons/fa";

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxItem, setCurrentLightboxItem] = useState(null);
  const [videoStates, setVideoStates] = useState({});
  const videoRefs = useRef({});

  // Sample gallery images with overlay text
  const galleryImages = [
    {
      id: 1,
      src: "pt7.jpg",
      alt: "Property Development",
      title: "Modern Development",
      description: "Strategic land development in prime locations",
      overlayText: "Our team carefully selects and develops land in areas with high growth potential and excellent infrastructure."
    },
    {
      id: 2,
      src: "pt3.jpg",
      alt: "Site Inspection",
      title: "Expert Inspection",
      description: "Thorough land verification process",
      overlayText: "Every plot undergoes rigorous inspection and verification to ensure quality and legal compliance."
    },
    {
      id: 3,
      src: "pt2.jpg",
      alt: "Client Meeting",
      title: "Client Consultation",
      description: "Personalized investment guidance",
      overlayText: "We provide one-on-one consultations to help clients make informed investment decisions."
    }
  ];

  // Gallery videos - using local video files
  const galleryVideos = [
    {
      id: 1,
      thumbnail: "vd8.mp4",
      videoSrc: "vd7.mp4",
      title: "Property Tour",
      description: "Virtual tour of our prime properties",
      overlayText: "Experience our properties through detailed virtual tours that showcase every feature."
    },
    {
      id: 2,
      thumbnail: "/video-thumb2.jpg", // You can use a frame from ptv.mp4 as thumbnail
      videoSrc: "/ptv.mp4",
      title: "Client Testimonials",
      description: "Hear from our satisfied customers",
      overlayText: "Listen to real stories from clients who have successfully invested with us."
    }
  ];

  // Company milestones
  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started operations in Nairobi" },
    { year: "2017", title: "First Development", description: "Completed first residential project" },
    { year: "2019", title: "Expansion", description: "Expanded to 5 counties" },
    { year: "2022", title: "Award", description: "Best Real Estate Company" },
    { year: "2024", title: "Milestone", description: "500+ Properties Sold" }
  ];

  const handleImageClick = (index, type) => {
    setLightboxOpen(true);
    setCurrentLightboxItem(type === 'image' ? galleryImages[index] : galleryVideos[index]);
  };

  const handleVideoPlayPause = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates(prev => ({
          ...prev,
          [videoId]: { ...prev[videoId], playing: true }
        }));
      } else {
        video.pause();
        setVideoStates(prev => ({
          ...prev,
          [videoId]: { ...prev[videoId], playing: false }
        }));
      }
    }
  };

  const handleVideoVolume = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      const isMuted = video.muted;
      video.muted = !isMuted;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], muted: !isMuted }
      }));
    }
  };

  const handleVideoFullscreen = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    }
  };

  const handleVideoEnded = (videoId) => {
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { ...prev[videoId], playing: false }
    }));
  };

  const handleVideoTimeUpdate = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      const progress = (video.currentTime / video.duration) * 100;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], progress }
      }));
    }
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 fade-in">
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#243C8F" }}>
          About Site Point Properties
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
          We are a trusted real estate company specializing in providing genuine, 
          affordable land with ready title deeds across Kenya's most promising locations.
        </p>
      </div>

      {/* Company Story */}
      <div className="row align-items-center mb-5 fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="glass-card p-4 rounded-3">
            <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              <FaHistory className="me-2" />
              Our Story
            </h2>
            <p style={{ lineHeight: "1.7", color: "#555" }}>
              Founded with a vision to make property ownership accessible and secure, 
              Site Point Properties has grown to become one of Kenya's most trusted 
              real estate companies. We combine deep market knowledge with unwavering 
              integrity to deliver exceptional value to our clients.
            </p>
            <p style={{ lineHeight: "1.7", color: "#555" }}>
              Over the years, we've helped hundreds of individuals and families 
              secure their dream properties, providing not just land but lasting 
              investments for future generations.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="glass-card p-4 rounded-3">
            <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              <FaBullseye className="me-2" />
              Our Mission & Vision
            </h2>
            <div className="mb-4">
              <h5 className="fw-semibold mb-2" style={{ color: "#1AA6A6" }}>Mission</h5>
              <p style={{ color: "#555" }}>
                To provide genuine, affordable land with transparent processes, 
                empowering Kenyans to invest confidently in their future.
              </p>
            </div>
            <div>
              <h5 className="fw-semibold mb-2" style={{ color: "#1AA6A6" }}>Vision</h5>
              <p style={{ color: "#555" }}>
                To be East Africa's most trusted real estate partner, recognized 
                for integrity, quality, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-5 fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#243C8F" }}>
          Our Core Values
        </h2>
        <div className="row g-4">
          {[
            {
              icon: FaHandshake,
              title: "Integrity",
              description: "We operate with honesty and transparency in all our dealings.",
              color: "#243C8F"
            },
            {
              icon: FaUsers,
              title: "Client Focus",
              description: "Our clients' success and satisfaction are our top priority.",
              color: "#1AA6A6"
            },
            {
              icon: FaAward,
              title: "Excellence",
              description: "We strive for the highest standards in everything we do.",
              color: "#243C8F"
            },
            {
              icon: FaMapMarkerAlt,
              title: "Strategic Insight",
              description: "Deep market knowledge guides our property selection.",
              color: "#1AA6A6"
            },
            {
              icon: FaChartLine,
              title: "Growth",
              description: "We help our clients build wealth through smart investments.",
              color: "#243C8F"
            }
          ].map((value, index) => (
            <div className="col-md-4 col-lg-2-4" key={index}>
              <div className="glass-card h-100 p-4 text-center rounded-3 slide-up" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <value.icon size={40} style={{ color: value.color }} className="mb-3" />
                <h5 className="fw-bold mb-2" style={{ color: "#243C8F" }}>
                  {value.title}
                </h5>
                <p className="text-muted small mb-0">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Gallery Section - Images */}
      <div className="mb-5 fade-in" style={{ animationDelay: "0.5s" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#243C8F" }}>
          Our Gallery
        </h2>
        <p className="text-center text-muted mb-4">
          A glimpse into our work and properties
        </p>
        
        <div className="row g-4 mb-5">
          <div className="col-12">
            <h4 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              <span style={{ color: "#1AA6A6" }}>01.</span> Image Gallery
            </h4>
          </div>
          
          {galleryImages.map((image, index) => (
            <div className="col-md-4" key={image.id}>
              <div 
                className="gallery-item position-relative overflow-hidden rounded-3 cursor-pointer"
                onMouseEnter={() => setActiveImageIndex(index)}
                onMouseLeave={() => setActiveImageIndex(null)}
                onClick={() => handleImageClick(index, 'image')}
              >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  {/* Image with fallback */}
                  <div 
                    className="w-100 h-100"
                    style={{
                      background: `linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "4rem"
                    }}
                  >
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div style="text-align: center; padding: 20px;">
                              <div style="font-size: 3rem; margin-bottom: 10px;">🏡</div>
                              <div style="font-weight: 600;">${image.title}</div>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div style={{ textAlign: "center", padding: "20px" }}>
                        <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🏡</div>
                        <div style={{ fontWeight: "600" }}>{image.title}</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay that appears on hover */}
                  <div 
                    className={`gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4`}
                    style={{
                      backgroundColor: "rgba(36, 60, 143, 0.9)",
                      color: "white",
                      opacity: activeImageIndex === index ? 1 : 0,
                      transition: "all 0.4s ease",
                      transform: activeImageIndex === index ? "translateY(0)" : "translateY(100%)"
                    }}
                  >
                    <h5 className="fw-bold mb-2">{image.title}</h5>
                    <p className="small mb-3" style={{ opacity: 0.9 }}>{image.description}</p>
                    <p className="small mb-0" style={{ opacity: 0.8 }}>{image.overlayText}</p>
                  </div>
                  
                  {/* Title that shows when not hovering */}
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-3"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      color: "white",
                      opacity: activeImageIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    <h6 className="fw-bold mb-0">{image.title}</h6>
                    <small>{image.description}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Gallery */}
        <div className="row g-4">
          <div className="col-12">
            <h4 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              <span style={{ color: "#1AA6A6" }}>02.</span> Video Gallery
            </h4>
          </div>
          
          {galleryVideos.map((video, index) => {
            const videoState = videoStates[video.id] || { playing: false, muted: true, progress: 0 };
            
            return (
              <div className="col-md-6" key={video.id}>
                <div 
                  className="video-gallery-item position-relative overflow-hidden rounded-3"
                  onMouseEnter={() => setActiveVideoIndex(index)}
                  onMouseLeave={() => setActiveVideoIndex(null)}
                >
                  <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                    {/* Video Player */}
                    <div className="w-100 h-100 position-relative">
                      <video
                        ref={el => videoRefs.current[video.id] = el}
                        className="w-100 h-100 object-fit-cover"
                        poster={video.thumbnail}
                        muted={videoState.muted}
                        onPlay={() => setVideoStates(prev => ({
                          ...prev,
                          [video.id]: { ...prev[video.id], playing: true }
                        }))}
                        onPause={() => setVideoStates(prev => ({
                          ...prev,
                          [video.id]: { ...prev[video.id], playing: false }
                        }))}
                        onEnded={() => handleVideoEnded(video.id)}
                        onTimeUpdate={() => handleVideoTimeUpdate(video.id)}
                        onClick={() => handleVideoPlayPause(video.id)}
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Controls Overlay */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)",
                          opacity: activeVideoIndex === index || videoState.playing ? 1 : 0.7,
                          transition: "all 0.3s ease"
                        }}
                      >
                        {/* Progress bar */}
                        <div className="progress mb-2" style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.3)" }}>
                          <div 
                            className="progress-bar" 
                            style={{ 
                              width: `${videoState.progress}%`,
                              backgroundColor: "#1AA6A6"
                            }}
                          ></div>
                        </div>
                        
                        {/* Control buttons */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-2">
                            <button
                              className="btn btn-sm p-1 rounded-circle"
                              style={{ 
                                backgroundColor: "rgba(255,255,255,0.2)",
                                border: "none",
                                color: "white",
                                width: "32px",
                                height: "32px"
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVideoPlayPause(video.id);
                              }}
                            >
                              {videoState.playing ? <FaPause size={14} /> : <FaPlay size={14} />}
                            </button>
                            
                            <button
                              className="btn btn-sm p-1 rounded-circle"
                              style={{ 
                                backgroundColor: "rgba(255,255,255,0.2)",
                                border: "none",
                                color: "white",
                                width: "32px",
                                height: "32px"
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVideoVolume(video.id);
                              }}
                            >
                              {videoState.muted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                            </button>
                            
                            <span className="text-white small ms-2">
                              {video.title}
                            </span>
                          </div>
                          
                          <button
                            className="btn btn-sm p-1 rounded-circle"
                            style={{ 
                              backgroundColor: "rgba(255,255,255,0.2)",
                              border: "none",
                              color: "white",
                              width: "32px",
                              height: "32px"
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoFullscreen(video.id);
                            }}
                          >
                            <FaExpand size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Initial play button for when video is not playing */}
                      {!videoState.playing && (
                        <div 
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{
                            opacity: activeVideoIndex === index ? 1 : 0.7,
                            transition: "all 0.3s ease",
                            pointerEvents: "none"
                          }}
                        >
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "60px",
                              height: "60px",
                              backgroundColor: "rgba(26, 166, 166, 0.8)",
                              border: "2px solid white",
                              backdropFilter: "blur(5px)"
                            }}
                          >
                            <FaPlay size={24} color="white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Video info overlay on hover */}
                    <div 
                      className={`position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-end`}
                      style={{
                        background: "linear-gradient(to top, rgba(36, 60, 143, 0.9), transparent 50%)",
                        color: "white",
                        opacity: activeVideoIndex === index && !videoState.playing ? 1 : 0,
                        transition: "all 0.4s ease",
                        pointerEvents: "none"
                      }}
                    >
                      <h5 className="fw-bold mb-1">{video.title}</h5>
                      <p className="small mb-2" style={{ opacity: 0.9 }}>{video.description}</p>
                      {video.overlayText && (
                        <p className="small mb-0" style={{ opacity: 0.8, fontSize: "0.85rem" }}>
                          {video.overlayText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team CTA */}
      <div className="text-center fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="glass-card p-5 rounded-3" style={{ 
          background: "linear-gradient(135deg, rgba(36, 60, 143, 0.05) 0%, rgba(26, 166, 166, 0.05) 100%)"
        }}>
          <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
            Meet Our Team
          </h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Our experienced team of real estate professionals is dedicated to 
            helping you find the perfect property investment.
          </p>
          <a 
            href="/contact" 
            className="btn px-5 py-3"
            style={{
              backgroundColor: "#1AA6A6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600"
            }}
          >
            Contact Our Team
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(36, 60, 143, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(36, 60, 143, 0.08);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(36, 60, 143, 0.15);
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .slide-up {
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .gallery-item:hover, .video-gallery-item:hover {
          transform: translateY(-5px);
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .object-fit-cover {
          object-fit: cover;
        }
        
        .col-lg-2-4 {
          width: 20%;
          flex: 0 0 auto;
        }
        
        video {
          outline: none;
        }
        
        video::-webkit-media-controls {
          display: none !important;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .col-lg-2-4 {
            width: 50%;
            flex: 0 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .col-lg-2-4 {
            width: 100%;
            flex: 0 0 auto;
          }
          
          .video-gallery-item {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}