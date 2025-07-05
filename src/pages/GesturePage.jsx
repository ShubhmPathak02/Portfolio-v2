import React from "react";
import { SiArduino, SiPython, SiOpencv, SiGooglecolab } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function GestureBotPage() {
  // Added teamMembers array with LinkedIn URLs
  const teamMembers = [
    {
      name: "Shubham Pathak",
      link: "https://www.linkedin.com/in/shubham-pathak-41b4a732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Shranya Thakur",
      link: "https://www.linkedin.com/in/shranya-thakur-766bba323/",
    },
    {
      name: "Sonia Saini",
      link: "https://www.linkedin.com/in/sonia-saini-5a1570332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKdPZUve0T5qjuAqvOZSmTQ%3D%3D",
    },
    {
      name: "Sanskar Srivastava",
      link: "https://www.linkedin.com/in/sanskar-srivastava-9986b030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans px-6 py-10">
      <h1 className="text-2xl font-bold text-[#58a6ff] mb-6 flex items-center">
        Gesture Controlled Bot
        <a
          href="hhttps://github.com/ShubhmPathak02/Hand-Gesture-Controlled-Bot"
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
            src="/images/gestbot.jpg"
            alt="Gesture Bot"
            className="bg-[#0d1117] border border-[#30363d] rounded p-3 hover:shadow-[0_0_25px_5px_#58a6ff] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-48 h-44"
          />

          <div className="mt-4">
            <h3 className="text-lg text-[#c9d1d9] mb-2">Technologies Used:</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <SiArduino className="text-[#00979D] text-2xl" />,
                  name: "Arduino IDE",
                },
                {
                  icon: <SiPython className="text-[#3776AB] text-2xl" />,
                  name: "Python",
                },
                {
                  icon: <SiOpencv className="text-[#5C3EE8] text-2xl" />,
                  name: "OpenCV",
                },
                {
                  icon: <SiGooglecolab className="text-[#F9AB00] text-2xl" />,
                  name: "MediaPipe",
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

            <div className="mt-4">
              <h3 className="text-lg text-[#c9d1d9] mb-2">Achievements:</h3>
              <p className="text-sm text-[#8b949e]">🏆 Won Roboquest 2.0</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-6">
            <h2 className="font-medium text-[#58a6ff] mb-2">README.md</h2>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              This bot moves by capturing hand signs using OpenCV and MediaPipe.
              Real-time hand tracking enables the bot to understand gestures and
              move accordingly, providing a seamless human-machine interaction
              experience. The system integrates hardware (Arduino) and computer
              vision algorithms efficiently for responsive control. This project
              showcases the fusion of robotics and computer vision to create
              innovative automation solutions.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#c9d1d9] mb-2">Team</h2>
            <div className="text-sm text-[#8b949e] mb-2">
              Team Name: Roborangers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {/* Using teamMembers with LinkedIn links */}
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
              {["/images/gestteam1.jpg", "/images/gestteam2.jpg"].map(
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
