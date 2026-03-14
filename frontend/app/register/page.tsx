export default function Register() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Institute Registration
      </h1>

      <form className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">

        <input
          type="text"
          placeholder="Institute Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Owner Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Maximum Student Capacity"
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800">
          Submit Registration
        </button>

      </form>

    </main>
  );
}