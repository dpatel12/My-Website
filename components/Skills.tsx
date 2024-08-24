"use client";

import React from 'react';
import { cn } from '@/utils/cn';

const skills = {
    'Programming Languages': [
        { name: 'Java', icon: 'java.svg' },
        { name: 'Python', icon: 'python.svg' },
        { name: 'JavaScript', icon: 'js.svg' },
        { name: 'C++', icon: 'cpp.svg' },
        { name: 'C', icon: 'C.png' },
        { name: 'TypeScript', icon: 'ts.svg' },
        { name: 'SQL', icon: 'sql.svg' },
        { name: 'React', icon: 're.svg' },
        { name: 'HTML', icon: 'html.svg' },
        { name: 'CSS', icon: 'css.svg' },
        { name: 'Powershell', icon: 'Powershell.svg' },
        
        
    ],
    'Frameworks & Libraries': [
        { name: 'JUnit', icon: 'JUnit.png' },
        { name: 'Spring Boot', icon: 'Spring.svg' },
        { name: 'jQuery', icon: 'jQuery.svg' },
        { name: 'Tailwind CSS', icon: 'tail.svg' },
        { name: 'Bootstrap', icon: 'Bootstrap.svg' },
        { name: 'Next.js', icon: 'next.svg' },
        { name: 'ASP.NET', icon: 'dotnet.svg' },
        { name: 'Material UI', icon: 'materialui.svg' },
      ],
    'Developer Tools': [
      { name: 'Git', icon: 'git.svg' },
      { name: 'Maven', icon: 'apachemaven.svg' },
      { name: 'ArgoCD', icon: 'argo.svg' },
      { name: 'Jenkins', icon: 'Jenkins.svg' },
      { name: 'Docker', icon: 'dock.svg' },
      { name: 'Kubernetes', icon: 'Kubernetes.svg' },
      { name: 'MongoDB', icon: 'MongoDB.svg' },
      { name: 'Postman', icon: 'Postman.svg' },
    ],

    'APIs & Cloud Services': [
        { name: 'OpenAI API', icon: 'openaireal.svg' },
        { name: 'Firebase', icon: 'firebase.svg' },
        { name: 'Vercel', icon: 'vercelwhite.jpeg' },
        { name: 'Stripe', icon: 'stripe.svg' },
        { name: 'AWS', icon: 'aws.svg' },
        { name: 'Clerk', icon: 'clerk.jpeg' },
      ],
    
    'Project Management': [
      { name: 'Jira', icon: 'Jira.svg' },
      { name: 'Microsoft365', icon: 'microsoft365.svg' },
      { name: 'Confluence', icon: 'confluence.svg' },
      { name: 'Figma', icon: 'figma.svg' },
      { name: 'Sharepoint', icon: 'sharepoint.svg' },
    ],
  };
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20">
        <h1 className="heading">
          Tools and technologies I have{' '}
          <span className="text-purple">worked with</span>
        </h1>
        {Object.keys(skills).map((category, idx) => (
          <div key={category} className={`mb-10 ${idx === 0 ? 'mt-10' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-1 gap-y-6">
              {skills[category as keyof typeof skills].map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="group w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-2 border border-gray-300 rounded-lg flex flex-col items-center justify-between transition-transform transform hover:scale-105"
                >
                  {/* Image Section */}
                  <div className="flex-grow flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  {/* Name Section */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 py-1">
                    <span className="block text-center text-white text-xs font-medium">
                        {skill.name}
                    </span>
                </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Skills;