// View - Hero section presentation component
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface HeroViewProps {
  name: string;
  title: string;
  displayedTagline: string;
  showCursor: boolean;
  onDownloadCV: () => void;
}

export function HeroView({ name, title, displayedTagline, showCursor, onDownloadCV }: HeroViewProps) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-[#00F5C4] font-['DM_Sans'] text-sm tracking-wider uppercase">
              {t('hero.greeting')}
            </p>
            <h1 className="font-['Space_Mono'] text-5xl md:text-7xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628]">
              {name}
              <span className={`inline-block w-1 h-12 md:h-16 ml-1 bg-[#00F5C4] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </h1>
            <h2 className="font-['DM_Sans'] text-xl md:text-2xl text-[#E8E8E8]/80 dark:text-[#E8E8E8]/80 light:text-[#0A1628]/80">
              {title}
            </h2>
          </div>

          <p className="font-['Space_Mono'] text-base md:text-lg text-[#00F5C4]/90 min-h-[3rem]">
            {displayedTagline}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownloadCV}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#00F5C4] text-[#0D0D0D] font-['DM_Sans'] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,196,0.5)]"
          >
            <span className="relative z-10">{t('hero.downloadCV')}</span>
            <Download className="relative z-10 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#F5F5F0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#00F5C4] opacity-0 group-hover:opacity-100 transition-opacity">
              <span>{t('hero.downloadCV')}</span>
              <Download className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="bg-[#1A1A1A]/50 dark:bg-[#1A1A1A]/50 light:bg-[#0A1628]/10 border border-[#00F5C4]/30 rounded-lg p-6 font-['Space_Mono'] text-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00F5C4]/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60 text-xs ml-2">terminal.tsx</span>
              </div>
              <div className="space-y-2">
                <div className="text-[#E8E8E8]/40 dark:text-[#E8E8E8]/40 light:text-[#0A1628]/40">
                  <span className="text-[#00F5C4]">const</span> greivin = {'{'}
                </div>
                <div className="pl-4 text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
                  role: <span className="text-[#00F5C4]">"{t('hero.terminal.role')}"</span>,
                </div>
                <div className="pl-4 text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
                  skills: [<span className="text-[#00F5C4]">"JavaScript"</span>, <span className="text-[#00F5C4]">"Python"</span>],
                </div>
                <div className="pl-4 text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
                  passion: <span className="text-[#00F5C4]">"{t('hero.terminal.passion')}"</span>,
                </div>
                <div className="pl-4 text-[#E8E8E8]/70 dark:text-[#E8E8E8]/70 light:text-[#0A1628]/70">
                  status: <span className="text-[#00F5C4]">"{t('hero.terminal.status')}"</span>
                </div>
                <div className="text-[#E8E8E8]/40 dark:text-[#E8E8E8]/40 light:text-[#0A1628]/40">
                  {'}'};
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-[#00F5C4]">$</span>
                  <span className={`inline-block w-2 h-4 ml-1 bg-[#00F5C4] ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
