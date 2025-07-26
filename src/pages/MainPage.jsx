import { useNavigate } from "react-router-dom";
import { FaCode, FaUser, FaProjectDiagram } from "react-icons/fa";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight">Sumit.dev</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <button onClick={() => navigate("/projects")} className="hover:underline">
            Projects
          </button>
          <button onClick={() => navigate("/about")} className="hover:underline">
            About
          </button>
          <button onClick={() => navigate("/contact")} className="hover:underline">
            Contact
          </button>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">👋 Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I'm Sumit, a passionate developer who loves building beautiful and performant web experiences.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <FaCode className="text-4xl mx-auto mb-4 text-cyan-400" />
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <p className="text-sm text-gray-400">React, FastAPI, Python, TailwindCSS, Node.js, Docker, PostgreSQL, and more.</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <FaProjectDiagram className="text-4xl mx-auto mb-4 text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-sm text-gray-400">Explore my featured projects showcasing frontend, backend, and full-stack work.</p>
          <button
            onClick={() => navigate("/projects")}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
          >
            View Projects
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <FaUser className="text-4xl mx-auto mb-4 text-pink-400" />
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-sm text-gray-400">Learn about my background, what drives me, and where I'm headed next.</p>
          <button
            onClick={() => navigate("/about")}
            className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
