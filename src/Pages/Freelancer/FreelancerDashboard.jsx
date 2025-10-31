import Navbar from "../../Components/Navbar";

export default function FreelancerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <Navbar role="freelancer" />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">Freelancer Dashboard</h1>
        <p className="text-lg text-gray-200">
          Manage your profile, services, and bookings easily.
        </p>
      </div>
    </div>
  );
}
