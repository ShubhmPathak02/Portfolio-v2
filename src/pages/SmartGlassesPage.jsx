import React from "react";
import { SiPython, SiOpencv, SiSqlite, SiRaspberrypi } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SmartGlassesPage() {
  const teamMembers = [
    {
      name: "Nitya Pal",
      link: "https://www.linkedin.com/in/nitya-pal-a0a140258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Rishab Sharma",
      link: "https://www.linkedin.com/in/rishabh-sharma-01628528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sarthak Katiyar",
      link: "https://www.linkedin.com/in/sarthak-katiyar-598159293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Shubham Pathak",
      link: "https://www.linkedin.com/in/shubham-pathak-41b4a732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Shranya Thakur",
      link: "https://www.linkedin.com/in/shranya-thakur-766bba323/",
    },
    {
      name: "Atul Koundal",
      link: "https://www.linkedin.com/in/atul-koundal-396185328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Saumya Jaiswal",
      link: "https://www.linkedin.com/in/saumyajaiswal9794?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { name: "Peeyush", link: "https://www.linkedin.com/in/peeyush" },
  ];

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans px-6 py-10">
      <h1 className="text-2xl font-bold text-[#58a6ff] mb-6 flex items-center">
        Smart Glasses for Alzheimer's Patients
        <a
          href="https://github.com/ShubhmPathak02/Smart-Glasses"
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
            src="/images/smtgls.jpg"
            alt="Smart Glasses"
            className="bg-[#0d1117] border border-[#30363d] rounded p-3 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-48 h-44"
          />

          <div className="mt-4">
            <h3 className="text-lg text-[#c9d1d9] mb-2">Technologies Used:</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <SiPython className="text-[#3776AB] text-2xl" />,
                  name: "Python",
                },
                {
                  icon: <SiOpencv className="text-[#5C3EE8] text-2xl" />,
                  name: "OpenCV",
                },
                {
                  icon: <SiSqlite className="text-[#003B57] text-2xl" />,
                  name: "SQLite",
                },
                {
                  icon: <SiRaspberrypi className="text-[#C51A4A] text-2xl" />,
                  name: "Raspberry Pi 5",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
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
              Smart glasses for Alzheimer's patients built on Raspberry Pi 5.
              These glasses capture the environment in real-time, perform image
              captioning, extract text from the surroundings, and store the
              information in an SQL database. The goal is to assist patients
              with memory loss by providing them with contextual awareness and
              storing life moments in a structured form. The combination of edge
              computing and AI enables offline functionality, ensuring privacy
              and reliability.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#c9d1d9] mb-2">Team</h2>
            <div className="text-sm text-[#8b949e] mb-2">
              Team Name: Roborangers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#161b22] border border-[#30363d] rounded p-3 text-center text-xs text-[#c9d1d9] hover:border-[#58a6ff]"
                >
                  <p>{member.name}</p>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-6">
              {["/images/smtteam1.jpg", "/images/smtteam2.jpg"].map(
                (src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Team Photo ${idx + 1}`}
                    className="bg-[#0d1117] border border-[#30363d] rounded p-3 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-48 h-44"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#8b949e] text-xs py-4 border-t border-[#30363d] mt-8">
        © 2025 Shubham Pathak | Built with ❤️
      </div>
    </div>
  );
}
