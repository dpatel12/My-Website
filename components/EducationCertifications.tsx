'use client';
import React from "react";
import { education, certificationsData } from "@/data"; // Adjust the path as necessary

const EducationCertifications = () => {
  return (
    <section id="education" className="py-20">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">Education</span> & <span className="text-purple">Certifications</span>
        </h1>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white-100 mb-6">Education</h2>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
            {education.map((item) => (
              <div key={item.id} className="relative flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className="w-16 h-16 mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3> {/* Adjusted margin */}
                    <p className="text-sm text-white-100">{item.institution}</p> {/* Removed margin to avoid extra spacing */}
                  </div>
                </div>
                <div className="mt-4 text-sm text-white-200">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white-100 mb-6">Certifications</h2>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
            {certificationsData.map((item) => (
              <div key={item.id} className="relative flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className="w-16 h-16 mr-3" 
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3> {/* Adjusted margin */}
                    <p className="text-sm text-white-100">{item.institution}</p> {/* Removed margin to avoid extra spacing */}
                  </div>
                  {/* Place the banner here */}
                  {item.banner && (
                      <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 mt-2 inline-block">
                        {item.banner}
                      </div>
                    )}
                </div>
                <div className="mt-4 text-sm text-white-200">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
