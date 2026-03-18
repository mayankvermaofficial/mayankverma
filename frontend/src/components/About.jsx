import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const roles = [
    { icon: <Brain className="w-6 h-6 text-neon" />, title: "Thinker", desc: "Strategizing solutions before they become problems." },
    { icon: <User className="w-6 h-6 text-neon" />, title: "Observer", desc: "Noticing the patterns others miss in the chaos." },
    { icon: <Lightbulb className="w-6 h-6 text-neon" />, title: "Solver", desc: "Turning complex roadblocks into simple pathways." },
  ];

  return (
    <section className="min-h-screen w-full py-24 px-6 flex flex-col items-center justify-center bg-dark/50">
      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-neon pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">Who am I?</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Name's <span className="text-white font-semibold">Mayank</span> and I am a thinker, observer and solver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-gray-800 hover:border-neon/50 transition-colors group"
            >
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {role.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">{role.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 p-8 md:p-12 rounded-3xl border border-gray-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-[100px] rounded-full"></div>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            Since AI was not there to teach me things I wanted to do, I had to go with the flow and learn Marketing. 
            (Well, I have done CSE as well, which is why I know how to talk to the computer).
          </p>
          
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 text-neon flex-shrink-0 mt-1" />
            <p className="text-white text-lg md:text-xl font-medium">
              But with AI, I learnt <span className="text-neon">Agent deployment</span>, Prompt engineering, Fullstack dev, 
              Psychology, GEO optimization, Content writing in one day and learning others when required to.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
