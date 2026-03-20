import React from "react";
import devopsCert from "../assets/devops-cert.jpg";
import deloitteCert from "../assets/deloitte-cert.jpg";

const CERTIFICATIONS = [
  {
    title: "DevOps Certification",
    issuer: "Tutedude • March 2026",
    description:
      "Completed DevOps Certification from Tutedude, gaining hands-on experience in Linux, Git, Docker, Kubernetes, Terraform, AWS, and CI/CD pipelines.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "CI/CD"],
    image: devopsCert,
    link: devopsCert,
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte • November 2025",
    description:
      "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard and gained practical experience in real-world software development tasks.",
    skills: ["Software Development", "Dashboard Design", "Problem Solving"],
    image: deloitteCert,
    link: deloitteCert,
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-slate-400">
            My DevOps and software development learning journey with hands-on experience.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={idx}
            className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
          >
            
            {/* Top Image Section */}
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-950 p-4 flex items-center justify-center relative overflow-hidden">
              
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full object-contain rounded-xl"
              />

              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
            </div>

            {/* Content */}
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {cert.issuer}
              </p>

              <p className="text-slate-400 text-sm mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded border border-blue-500/20 uppercase tracking-tighter"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition-all w-full sm:w-auto transform active:scale-95"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;