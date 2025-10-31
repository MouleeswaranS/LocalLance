import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "./Logo";

export default function Navbar({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Check if refs are available before animating
    if (!navbarRef.current || !logoRef.current || !linksRef.current) return;

    const tl = gsap.timeline();

    // Animate navbar entrance
    gsap.set([logoRef.current, linksRef.current], {
      opacity: 0,
      y: -30,
    });

    tl.to(navbarRef.current, {
      backgroundColor: "rgba(37, 99, 235, 0.9)",
      duration: 0.5,
      ease: "power2.out",
    })
      .to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        linksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    // Add scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbarRef.current, {
          backgroundColor: "rgba(37, 99, 235, 0.95)",
          backdropFilter: "blur(20px)",
          duration: 0.3,
        });
      } else {
        gsap.to(navbarRef.current, {
          backgroundColor: "rgba(37, 99, 235, 0.9)",
          backdropFilter: "blur(10px)",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
    };
  }, []);

  const handleLogout = () => {
    // Temporary logout navigation (will connect to backend later)
    navigate("/");
  };

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md shadow-md z-50 border-b border-white/20" style={{ backgroundColor: 'rgba(37, 99, 235, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        {/* Logo */}
        <Link
          ref={logoRef}
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Logo size="text-xl" />
        </Link>

        {/* Desktop Links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-6 font-medium">
          {role === "client" ? (
            <>
              <Link
                to="/client/dashboard"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                Dashboard
              </Link>
              <Link
                to="/client/browse"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                Browse Freelancers
              </Link>
              <Link
                to="/client/bookings"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                My Bookings
              </Link>
            </>
          ) : role === "freelancer" ? (
            <>
              <Link
                to="/freelancer/dashboard"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                Dashboard
              </Link>
              <Link
                to="/freelancer/services"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                My Services
              </Link>
              <Link
                to="/freelancer/bookings"
                className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform"
              >
                Bookings
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform">
                Home
              </Link>
              <Link to="/auth-choice" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform">
                Login / Register
              </Link>
            </>
          )}

          {/* Logout Button */}
          {(role === "client" || role === "freelancer") && (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-lg hover:opacity-80 font-semibold transition-all duration-300 hover:scale-105 transform"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-md flex flex-col items-center py-4 text-white space-y-3 font-medium border-t border-white/20">
          {role === "client" ? (
            <>
              <Link
                to="/client/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/client/browse"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Browse Freelancers
              </Link>
              <Link
                to="/client/bookings"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                My Bookings
              </Link>
            </>
          ) : role === "freelancer" ? (
            <>
              <Link
                to="/freelancer/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/freelancer/services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                My Services
              </Link>
              <Link
                to="/freelancer/bookings"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Bookings
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
                Home
              </Link>
              <Link to="/auth-choice" className="hover:text-yellow-300 transition-colors duration-300">
                Login / Register
              </Link>
            </>
          )}

          {(role === "client" || role === "freelancer") && (
            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-lg hover:opacity-80 font-semibold transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
