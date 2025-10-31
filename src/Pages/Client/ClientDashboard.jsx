import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "../../Components/Navbar";

export default function ClientDashboard() {
  const [location, setLocation] = useState("");
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const searchRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const actionsRef = useRef(null);
  const actionCardsRef = useRef([]);

  const services = [
    {
      id: 1,
      name: "Home Cleaning",
      icon: "🧹",
      description: "Professional home cleaning services",
      price: "₹299",
      rating: 4.8,
      reviews: 1250,
    },
    {
      id: 2,
      name: "Plumbing",
      icon: "🔧",
      description: "Expert plumbing repairs and installations",
      price: "₹199",
      rating: 4.7,
      reviews: 890,
    },
    {
      id: 3,
      name: "Electrical Work",
      icon: "⚡",
      description: "Licensed electricians for all your needs",
      price: "₹249",
      rating: 4.9,
      reviews: 756,
    },
    {
      id: 4,
      name: "Carpentry",
      icon: "🔨",
      description: "Custom furniture and woodwork",
      price: "₹349",
      rating: 4.6,
      reviews: 634,
    },
    {
      id: 5,
      name: "Painting",
      icon: "🎨",
      description: "Interior and exterior painting services",
      price: "₹399",
      rating: 4.8,
      reviews: 892,
    },
    {
      id: 6,
      name: "Gardening",
      icon: "🌱",
      description: "Lawn care and garden maintenance",
      price: "₹179",
      rating: 4.5,
      reviews: 543,
    },
  ];

  useEffect(() => {
    // Check if refs are available before animating
    if (!titleRef.current || !subtitleRef.current || !searchRef.current) return;

    const tl = gsap.timeline();

    // Initial setup: hide elements
    gsap.set([titleRef.current, subtitleRef.current, searchRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(serviceCardsRef.current.filter(Boolean), {
      opacity: 0,
      y: 30,
      scale: 0.9,
    });
    gsap.set(actionCardsRef.current.filter(Boolean), {
      opacity: 0,
      y: 40,
    });

    // Animate hero section
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        searchRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Animate service cards with stagger
    tl.to(serviceCardsRef.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1,
    });

    // Animate action cards
    tl.to(actionCardsRef.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role="client" />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Find Trusted Freelancers Near You
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl mb-8 text-blue-100"
            >
              Book verified professionals for all your home and business needs
            </p>

            {/* Location Search */}
            <div
              ref={searchRef}
              className="max-w-md mx-auto"
            >
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-transparent"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold transition-colors text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div
        ref={servicesRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Popular Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceCardsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">⭐</span>
                    <span className="ml-1 text-gray-700 font-medium">
                      {service.rating}
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">
                      ({service.reviews})
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">
                    {service.price}
                  </span>
                </div>

                <Link
                  to="/client/browse"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div
        ref={actionsRef}
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              ref={(el) => (actionCardsRef.current[0] = el)}
              to="/client/browse"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-xl hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Browse Freelancers</h3>
              <p className="text-blue-100">Find the perfect professional for your needs</p>
            </Link>

            <Link
              ref={(el) => (actionCardsRef.current[1] = el)}
              to="/client/bookings"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
              <p className="text-green-100">Manage your upcoming and past services</p>
            </Link>

            <div
              ref={(el) => (actionCardsRef.current[2] = el)}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-purple-100">Get help from our customer service team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
