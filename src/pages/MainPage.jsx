import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiC,
} from "react-icons/si";

export default function GitHubClone() {
  const projects = [
    {
      name: "Gesture Controlled Bot",
      desc: "Bot controlled via hand gestures.",
      lang: "Python",
      color: "bg-[#3572A5]",
      stars: 15,
      forks: 4,
      localLink: "/gesture",
      githubLink:
        "https://github.com/ShubhmPathak02/Hand-Gesture-Controlled-Bot",
    },
    {
      name: "Smart Glasses",
      desc: "Smart Glasses for Alzheimer's patients.",
      lang: "Python",
      color: "bg-[#3572A5]",
      stars: 12,
      forks: 3,
      localLink: "/smart-glasses",
      githubLink: "https://github.com/ShubhmPathak02/Smart-Glasses",
    },
    {
      name: "Portfolio Website",
      desc: "My personal portfolio website.",
      lang: "React",
      color: "bg-[#61dafb]",
      stars: 20,
      forks: 5,
      localLink: "/portfolio",
      githubLink: "https://github.com/ShubhmPathak02/Portfolio-v2",
    },
  ];

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans">
      {/* Navbar */}
      <div className="bg-[#161b22] px-4 py-3 flex justify-between items-center">
        <div className="text-base font-normal text-[#c9d1d9]">
          Portfolio/shubhampathak
        </div>
        <div className="space-x-4 flex items-center">
          <input
            type="text"
            placeholder="Type / to search"
            className="bg-[#0d1117] border border-[#30363d] text-sm text-[#c9d1d9] px-2 py-1 rounded focus:outline-none"
          />
          <a
            href="/images/Resume(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#238636] hover:bg-[#2ea043] text-sm px-3 py-1 rounded text-white"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 flex">
        {/* Sidebar */}
        <div className="w-1/3 px-4">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-full w-40 h-40 mx-auto mb-4 transition-transform hover:scale-105 hover:shadow-[0_0_25px_5px_#58a6ff]"
          />
          <h1 className="text-xl font-semibold text-[#c9d1d9] text-center">
            Shubham Pathak
          </h1>
          <p className="text-center text-[#8b949e]">
            Web Developer | AI/ML | Robotics
          </p>
          <p className="text-center text-[#8b949e] mt-2 text-sm">
            1 follower · 1 following
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-[#8b949e]">
              <FaMapMarkerAlt className="text-[#8b949e]" />
              <span>Ghaziabad, Uttar Pradesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub className="text-[#8b949e]" />
              <a
                href="https://github.com/ShubhmPathak02"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-[#8b949e]" />
              <a
                href="https://www.instagram.com/whoisshubhamm_?igsh=ZzRzb2F2Nmpsampr"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-[#8b949e]" />
              <a
                href="https://www.linkedin.com/in/shubham-pathak-41b4a732b"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#8b949e]" />
              <a
                href="mailto:pathakshubham020206@gmail.com"
                className="hover:text-blue-400"
              >
                Email
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-medium text-[#58a6ff] mb-2">Achievements</h2>
            <ul className="mt-1 text-sm text-[#8b949e] space-y-1">
              <li>🏆 Won Roboquest 2.0</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-medium text-[#58a6ff] mb-2">Organizations</h2>
            <a
              href="https://www.robosocnith.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/logo.png"
                alt="organization"
                className="w-12 h-12 mt-2 hover:shadow-[0_0_15px_2px_#58a6ff]"
              />
            </a>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-2/3 space-y-6 px-4">
          {/* README Section */}
          <div className="bg-[#0d1117] border border-[#30363d] rounded p-4 hover:shadow-[0_0_25px_5px_#58a6ff]">
            <h2 className="font-medium text-[#58a6ff] ">README.md</h2>
            <div className="space-y-2 text-[#8b949e] text-sm">
              <p>
                👋 Hi there! I'm Shubham Pathak. From Ghaziabad Uttar Pradesh
              </p>
              <p>
                🎓 Currently pursuing my Bachelors of Technology in ECE from NIT
                HAMIRPUR
              </p>
              <p>🚀 Frontend Developer | Robotics Enthusiast | AI Learner</p>
              <p>
                💻 I love creating accessible, responsive, and fast web apps
                that deliver great user experiences.
              </p>
              <p>
                🤖 Currently working on robotics projects like
                gesture-controlled bots and smart automation.
              </p>
              <p>
                📚 Always learning and exploring new technologies in AI, Web
                Dev, and Embedded Systems.
              </p>
              <p>
                🎯 Goals: Contribute to open-source, build impactful tech, and
                share knowledge with the community.
              </p>
            </div>
          </div>

          {/* Pinned Projects */}
          <h2 className="font-medium text-[#c9d1d9] mb-2">Pinned Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="bg-[#0d1117] border border-[#30363d] rounded p-4 hover:shadow-[0_0_25px_5px_#58a6ff]"
              >
                <Link
                  to={proj.localLink}
                  className="text-sm text-[#58a6ff] font-semibold hover:underline"
                >
                  {proj.name}
                </Link>
                <p className="text-xs text-[#8b949e] mt-1">{proj.desc}</p>
                <div className="flex items-center text-xs text-[#8b949e] mt-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-1 ${proj.color}`}
                  ></span>
                  <span>{proj.lang}</span>
                  <div className="flex space-x-2 ml-auto">
                    <span className="flex items-center space-x-1">
                      <FaStar /> <span>{proj.stars}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCodeBranch /> <span>{proj.forks}</span>
                    </span>
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ======= Education Section (ADDED) ======= */}
          <div>
            <h2 className="font-medium text-[#c9d1d9] mb-4 text-xl">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* NIT Hamirpur Card */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded p-4 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                <a
                  href="https://nith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] font-semibold mb-1 hover:underline"
                >
                  NIT Hamirpur
                </a>
                <p className="text-[#8b949e] text-sm mb-1">
                  B.Tech - Electronics and Communication
                </p>
                <p className="text-[#8b949e] text-xs mb-2">Aug2024 - Present</p>
                <p className="text-[#8b949e] text-xs mb-2">
                  Grade: 9.05 CGPA(till 2nd sem)
                </p>
              </div>

              {/* Class 12 Card */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded p-4 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                <a
                  href="https://dhtsvmnehrunagar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] font-semibold mb-1 hover:underline"
                >
                  DHT Saraswati Vidya Mandir
                </a>
                <p className="text-[#8b949e] text-sm mb-1">Class 12 CBSE </p>
                <p className="text-[#8b949e] text-xs mb-2">2023</p>
                <p className="text-[#8b949e] text-xs mb-2">Percentage: 92.8%</p>
              </div>
            </div>
          </div>
          {/* ======= End Education Section ======= */}

          {/* Existing Skills Section */}
          <div>
            <h2 className="font-medium text-[#c9d1d9] mb-2">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <SiHtml5 className="text-[#e34c26]" />, name: "HTML5" },
                { icon: <SiCss3 className="text-[#1572b6]" />, name: "CSS3" },
                {
                  icon: <SiJavascript className="text-[#f7df1e]" />,
                  name: "JavaScript",
                },
                { icon: <SiReact className="text-[#61dafb]" />, name: "React" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0d1117] border border-[#30363d] rounded p-4 flex flex-col items-center hover:shadow-[0_0_20px_4px_#58a6ff]"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-[#c9d1d9]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Existing Languages Section */}
          <div>
            <h2 className="font-medium text-[#c9d1d9] mb-2">Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <SiC className="text-[#555555]" />, name: "C" },
                {
                  icon: <SiPython className="text-[#3776ab]" />,
                  name: "Python",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0d1117] border border-[#30363d] rounded p-4 flex flex-col items-center hover:shadow-[0_0_20px_4px_#58a6ff]"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-[#c9d1d9]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[#8b949e] text-xs py-4 border-t border-[#30363d] mt-8">
        © 2025 Shubham Pathak | Built with Hardwork
      </div>
    </div>
  );
}
