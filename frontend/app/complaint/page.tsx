export default function Complaint() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-8 text-red-700">
        Student Complaint Portal
      </h1>

      <form className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">

        <input
          type="text"
          placeholder="Student Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Institute Name"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Write your complaint..."
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-800">
          Submit Complaint
        </button>

      </form>

    </main>
  );
}