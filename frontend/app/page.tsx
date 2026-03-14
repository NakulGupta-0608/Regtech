export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">

      <h1 className="text-6xl font-bold text-blue-400 mb-6">
        EduShield
      </h1>

      <p className="text-lg text-gray-300 mb-10">
        AI Powered Coaching Institute Compliance Platform
      </p>

      <div className="flex gap-6">

        <a href="/register">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800">
            Institute Registration
          </button>
        </a>

        <a href="/complaint">
          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-800">
            Complaint Portal
          </button>
        </a>

        <a href="/admin">
          <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-800">
            Admin Dashboard
          </button>
        </a>

      </div>

    </main>
  );
}