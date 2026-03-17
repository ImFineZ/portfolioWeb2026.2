// View - About section presentation component
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Terminal, Zap } from 'lucide-react';

interface AboutViewProps {
  bio: string;
}

export function AboutView({ bio }: AboutViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-4">
            <span className="text-[#00F5C4]">&lt;</span>About<span className="text-[#00F5C4]"> /&gt;</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-[#0A1628]/5 border border-[#00F5C4]/20 rounded-lg p-8 backdrop-blur-sm hover:border-[#00F5C4]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,196,0.1)]">
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-['Space_Mono'] text-[#00F5C4]/60 text-sm">01</span>
                  <Terminal className="w-5 h-5 text-[#00F5C4] mt-0.5" />
                </div>
                <div className="font-['Space_Mono'] text-xs text-[#00F5C4]/40 mb-3">
                  // biography.md
                </div>
                <p className="font-['DM_Sans'] text-base leading-relaxed text-[#E8E8E8]/80 dark:text-[#E8E8E8]/80 light:text-[#0A1628]/80">
                  {bio}
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-[#0A1628]/5 border border-[#00F5C4]/20 rounded-lg p-6 backdrop-blur-sm hover:border-[#00F5C4]/40 transition-all duration-300"
              >
                <Code2 className="w-6 h-6 text-[#00F5C4] mb-3" />
                <div className="font-['Space_Mono'] text-sm text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] font-semibold mb-2">
                  Focus Areas
                </div>
                <ul className="font-['DM_Sans'] text-sm text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70 space-y-1">
                  <li>• Full-stack Development</li>
                  <li>• System Design</li>
                  <li>• Cloud Solutions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-[#0A1628]/5 border border-[#00F5C4]/20 rounded-lg p-6 backdrop-blur-sm hover:border-[#00F5C4]/40 transition-all duration-300"
              >
                <Zap className="w-6 h-6 text-[#00F5C4] mb-3" />
                <div className="font-['Space_Mono'] text-sm text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] font-semibold mb-2">
                  Currently
                </div>
                <p className="font-['DM_Sans'] text-sm text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
                  Building projects with modern frameworks and exploring cloud architecture.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
