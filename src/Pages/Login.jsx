import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Login() {
  const [params] = useSearchParams();
  const role = params.get("role") || "client";
  const navigate = useNavigate();

  const handleLogin = () => {
    // temporary redirect
    if (role === "client") navigate("/client/dashboard");
    else navigate("/freelancer/dashboard");
  };

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
            {role} Login
          </h2>

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
          <button
            onClick={handleLogin}
            className="w-full bg-white text-gray-900 font-semibold p-3 rounded-lg hover:bg-gray-200 transition"
          >
            Login as {role}
          </button>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to={`/signup?role=${role}`}
              className="text-yellow-300 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
