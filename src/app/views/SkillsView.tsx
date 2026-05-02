// View - Skills section presentation component
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Skill } from '../models/PortfolioData';

interface SkillsViewProps {
  skills: Skill[];
}

export function SkillsView({ skills }: SkillsViewProps) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[#0A0A0A]/50 dark:bg-[#0A0A0A]/50 light:bg-[#E8E8E8]/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-4">
            <span className="text-[#00F5C4]">&lt;</span>{t('skills.heading')}<span className="text-[#00F5C4]"> /&gt;</span>
          </h2>
          <p className="font-['DM_Sans'] text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60 mb-12">
            {t('skills.subtitle')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-[#1A1A1A]/40 dark:bg-[#1A1A1A]/40 light:bg-white/60 border border-[#00F5C4]/20 rounded-lg p-4 text-center hover:border-[#00F5C4] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,196,0.3)] hover:-translate-y-1 cursor-default backdrop-blur-sm"
              >
                <div className="font-['Space_Mono'] text-sm font-medium text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] group-hover:text-[#00F5C4] transition-colors">
                  {skill.name}
                </div>
                <div className="absolute inset-0 bg-[#00F5C4]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-[#0A1628]/5 border border-[#00F5C4]/20 rounded-lg p-6 backdrop-blur-sm"
          >
            <div className="font-['Space_Mono'] text-xs text-[#00F5C4]/60 mb-2">
              // console.log()
            </div>
            <p className="font-['DM_Sans'] text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
              {t('skills.learningPrefix')} <span className="text-[#00F5C4]">{t('skills.learningTopic1')}</span>,{' '}
              <span className="text-[#00F5C4]">{t('skills.learningTopic2')}</span>, {t('skills.learningAnd')}{' '}
              <span className="text-[#00F5C4]">{t('skills.learningTopic3')}</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
