import React from "react";

const projects = [
{
  title: "🚗 PARK-EASE",
  desc: "A smart parking system website that streamlines vehicle parking with real-time slot availability, booking, and admin management.",
  tech: ["HTML", "CSS", "JavaScript", "SQL", "Node.js"],
  link: "https://github.com/Y1311/PARK-EASE",
},
{
  title: "✊✋✌️ StonePaperScissors",
  desc: "A fully responsive web-based game with dynamic score tracking, animations, and persistent session storage for continuous play.",
  tech: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/Y1311/StonePaperScissors",
},
  {
    title: "🔐 Secure-Scribe",
    desc: "A smart password generator that creates strong, customizable passwords based on user-selected criteria, helping me understand core programming logic and interactivity.",
    tech: ["HTML", "CSS", "JavaScript "],
    link: "https://secure-scribe.netlify.app/",
  },
  {
    title: "🪑 Morden Chaitr",
    desc: "A stylish product showcase page that uses modern CSS techniques to switch chair colors and display product details interactively—all without using JavaScript.",
    tech: ["HTML", "CSS"],
    link: "https://mordenchair.netlify.app/",
  },
  {
    title: "🧠 Tic Tac Toe",
    desc: "An interactive Tic Tac Toe game with real-time win detection and game reset functionality.Helped me strengthen my JavaScript fundamentals and DOM event handling",
    tech: ["HTML", "CSS", "JavaScript "],
    link: "https://poetic-pothos-491214.netlify.app/",
  },
  {
    title: "⛅ weather-App",
    desc: "A weather app that fetches live data from an external API based on user location or city search.Helped me understand API integration, data fetching, and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript "],
    link: "https://stunning-dieffenbachia-f1688f.netlify.app/",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-300">
        <span className="inline-block border-b-4 border-blue-700">
          Projects
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-white/30 rounded-2xl p-6 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition duration-300 group hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-white group-hover:text-white/85 transition mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-cyan-600 px-2 py-1 rounded-md text-cyan-200 bg-cyan-600/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-cyan-300 hover:underline"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
