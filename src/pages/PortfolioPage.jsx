import React from "react";
import { SiReact, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function PortfolioPage() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans px-6 py-10">
      <h1 className="text-2xl font-bold text-[#58a6ff] mb-6 flex items-center">
        Portfolio Website
        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-[#c9d1d9] hover:text-[#58a6ff]"
        >
          <FaGithub className="text-xl" />
        </a>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src="/images/port.png"
            alt="Portfolio"
            className="bg-[#0d1117] border border-[#30363d] rounded p-3 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-48 h-44"
          />

          <div className="mt-4">
            <h3 className="text-lg text-[#c9d1d9] mb-2">Technologies Used:</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <SiReact className="text-[#61dafb] text-2xl" />,
                  name: "React",
                },
                {
                  icon: <SiJavascript className="text-[#f7df1e] text-2xl" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiHtml5 className="text-[#e34c26] text-2xl" />,
                  name: "HTML5",
                },
                {
                  icon: <SiCss3 className="text-[#1572b6] text-2xl" />,
                  name: "CSS3",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-[#161b22] p-2 rounded border border-[#30363d]"
                >
                  {tech.icon}
                  <span className="text-sm text-[#c9d1d9]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-6">
            <h2 className="font-medium text-[#58a6ff] mb-2">README.md</h2>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              This is my personal portfolio website built using React. It
              showcases my projects, achievements, and contact information. The
              design mimics the GitHub profile style, offering a familiar and
              clean interface. You can find detailed project pages, technologies
              used, and links to GitHub repositories.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-[#8b949e] text-xs py-4 border-t border-[#30363d] mt-8">
        © 2025 Shubham Pathak | Built with ❤️
      </div>
    </div>
  );
}
