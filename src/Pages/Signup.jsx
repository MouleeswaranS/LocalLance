import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Signup() {
  const [params] = useSearchParams();
  const role = params.get("role") || "client";

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen flex items-center justify-center ${
          role === "client"
            ? "bg-gradient-to-br from-blue-600 to-indigo-700"
            : "bg-gradient-to-br from-green-600 to-emerald-700"
        } text-white pt-20`}
      >
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-bold mb-6 text-center capitalize">
            {role} Signup
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none placeholder-gray-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none placeholder-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none placeholder-gray-200"
          />

          {role === "freelancer" && (
            <input
              type="text"
              placeholder="Service Category (e.g., Plumber, Electrician)"
              className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none placeholder-gray-200"
            />
          )}

          <button className="w-full bg-white text-gray-900 font-semibold p-3 rounded-lg hover:bg-gray-200 transition">
            Create {role} Account
          </button>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link
              to={`/login?role=${role}`}
              className="text-yellow-300 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
