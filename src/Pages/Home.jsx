import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";

export default function Home() {
  const containerRef = useRef(null);
  const titleLettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const bgElementsRef = useRef([]);
  const logoRef = useRef(null);

  const titleText = "LocalLance - Find Local Talent";

  useEffect(() => {
    document.title = "LocalLance - Find Local Talent";
  }, []);

  useEffect(() => {
    // Clear any existing animations
    gsap.killTweensOf("*");

    const tl = gsap.timeline();

    // Initial setup: hide elements
    gsap.set(titleLettersRef.current, {
      opacity: 0,
      y: 30,
      rotateX: -90,
    });
    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: 50,
    });
    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8,
    });
    gsap.set(logoRef.current, {
      opacity: 0,
      scale: 0.5,
      rotateY: -180,
    });
    gsap.set(bgElementsRef.current, {
      scale: 0,
      opacity: 0,
    });

    // Animate background elements
    gsap.to(bgElementsRef.current, {
      scale: 1,
      opacity: 0.2,
      duration: 2,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Animate logo first
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    // Premium letter-by-letter animation for title
    tl.to(titleLettersRef.current, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Add hover animations
    const button = buttonRef.current;
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden pt-20"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            ref={(el) => (bgElementsRef.current[0] = el)}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
          ></div>
          <div
            ref={(el) => (bgElementsRef.current[1] = el)}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
          ></div>
          <div
            ref={(el) => (bgElementsRef.current[2] = el)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl"
          ></div>
        </div>

        <div className="relative z-10">
          {/* Logo Display */}
          <div
            ref={logoRef}
            className="mb-8 flex justify-center"
          >
            <Logo size="text-6xl" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent flex justify-center flex-wrap">
            {titleText.split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (titleLettersRef.current[index] = el)}
                className="inline-block"
                style={{ display: letter === " " ? "inline-block" : "inline-block", width: letter === " " ? "0.5em" : "auto" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Discover and connect with top-tier freelancers in your area. Transform your projects with expert talent at your fingertips.
          </p>

          <Link
            ref={buttonRef}
            to="/auth-choice"
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform inline-block"
          >
            Get Started Today
          </Link>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
      </div>
      <Footer />
    </>
  );
}
