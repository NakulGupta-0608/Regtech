export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50">

      <h1 className="text-5xl font-bold text-blue-900 mb-6">
        EduShield
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        AI Powered Coaching Institute Compliance Platform
      </p>

      <div className="flex gap-6">

        <a href="/register">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
    Institute Registration
  </button>
</a>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          Complaint Portal
        </button>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800">
          Admin Dashboard
        </button>

      </div>

    </main>
  );
}