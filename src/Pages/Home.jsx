import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-black via-gray-800 to-black text-white">
        <h1 className="text-5xl font-extrabold mb-6">🚀 SpaceX Explorer</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Explore rockets, missions, launches and the journey of SpaceX.
        </p>
        <Link
          to="/rockets"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg"
        >
          Explore Rockets
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">🌌 About SpaceX</h2>
        <p className="text-lg leading-relaxed">
          SpaceX designs, develops, manufactures and launches advanced rockets
          and spacecraft. Founded by Elon Musk in 2002, its mission is to make
          humanity multiplanetary and push the boundaries of space exploration.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">🌍 Our Vision</h2>
        <p className="text-lg max-w-3xl mx-auto">
          SpaceX aims to reduce space transportation costs and enable the
          colonization of Mars. From reusable rockets to next-gen spacecraft,
          every mission brings us closer to the stars.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">🚀 Rockets</h3>
          <p>
            Discover SpaceX’s incredible lineup of rockets built to carry humans
            and satellites into orbit.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">🛰️ Missions</h3>
          <p>
            Learn about historic missions that redefined space exploration and
            future plans beyond Earth.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">🌌 Future</h3>
          <p>
            Explore the path to Mars, deep space travel, and humanity’s future
            among the stars.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="mb-8 text-lg">
          Take a closer look at the powerful rockets that make space exploration
          possible.
        </p>
        <Link
          to="/rockets"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg"
        >
          Start Exploring →
        </Link>
      </section>
    </div>
  );
}
