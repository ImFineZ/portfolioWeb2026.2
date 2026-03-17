// View - Projects section presentation component
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../models/PortfolioData';

interface ProjectsViewProps {
  projects: Project[];
}

export function ProjectsView({ projects }: ProjectsViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-4">
            <span className="text-[#00F5C4]">&lt;</span>Projects<span className="text-[#00F5C4]"> /&gt;</span>
          </h2>
          <p className="font-['DM_Sans'] text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60 mb-12">
            Some things I've built
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-white/40 border border-[#00F5C4]/20 rounded-lg overflow-hidden hover:border-[#00F5C4]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,196,0.15)] backdrop-blur-sm ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {project.featured && (
                          <span className="font-['Space_Mono'] text-xs px-2 py-1 bg-[#00F5C4]/20 text-[#00F5C4] rounded border border-[#00F5C4]/30">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Mono'] text-xl md:text-2xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-3 group-hover:text-[#00F5C4] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg bg-[#00F5C4]/10 hover:bg-[#00F5C4]/20 transition-colors group/icon"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-[#00F5C4] group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-lg bg-[#00F5C4]/10 hover:bg-[#00F5C4]/20 transition-colors group/icon"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-5 h-5 text-[#00F5C4] group-hover/icon:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <p className="font-['DM_Sans'] text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-['Space_Mono'] text-xs px-3 py-1 bg-[#0D0D0D]/50 dark:bg-[#0D0D0D]/50 light:bg-[#0A1628]/10 text-[#00F5C4] rounded-full border border-[#00F5C4]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#00F5C4]/0 via-[#00F5C4]/5 to-[#00F5C4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="font-['DM_Sans'] text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60">
              More projects coming soon...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
