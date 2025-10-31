import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AuthChoice() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white pt-20">
        <h1 className="text-4xl font-bold mb-8">Welcome to LocalLance</h1>
        <p className="text-lg mb-10 text-gray-200">Choose your role to continue</p>

        <div className="flex gap-6">
          <Link
            to="/login?role=client"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold text-white transition-all"
          >
            I'm a Client
          </Link>
          <Link
            to="/login?role=freelancer"
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl font-semibold text-white transition-all"
          >
            I'm a Freelancer
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
