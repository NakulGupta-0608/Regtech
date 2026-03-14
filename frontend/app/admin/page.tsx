export default function Admin() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8 text-blue-900">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Registered Institutes</h2>
          <p className="text-3xl mt-4">0</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Complaints Received</h2>
          <p className="text-3xl mt-4">0</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Risk Alerts</h2>
          <p className="text-3xl mt-4">0</p>
        </div>

      </div>

    </main>
  );
}