import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-16">Where I've Shipped</h2>

        <div className="space-y-0">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="group relative border-l border-gray-200 pl-8 pb-16 last:pb-0">
               <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-gray-300 bg-white group-hover:border-black group-hover:bg-black transition-colors duration-300"></div>
              
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-gray-500 font-mono text-sm pt-1">
                  {exp.period}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-gray-500 text-base">{exp.company}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm leading-relaxed max-w-xl">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;