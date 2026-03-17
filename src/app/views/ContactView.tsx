// View - Contact section presentation component
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Github, Mail, Instagram, MessageCircle } from 'lucide-react';
import { SocialLink } from '../models/PortfolioData';

interface ContactViewProps {
  socialLinks: SocialLink[];
  availability: string;
}

const iconMap = {
  'linkedin': Linkedin,
  'github': Github,
  'mail': Mail,
  'message-circle': MessageCircle,
  'instagram': Instagram
};

export function ContactView({ socialLinks, availability }: ContactViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A0A0A]/50 dark:bg-[#0A0A0A]/50 light:bg-[#E8E8E8]/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-4">
            <span className="text-[#00F5C4]">&lt;</span>Contact<span className="text-[#00F5C4]"> /&gt;</span>
          </h2>
          <p className="font-['DM_Sans'] text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60 mb-12">
            Let's connect and build something amazing together
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#1A1A1A]/40 dark:bg-[#1A1A1A]/40 light:bg-white/60 border border-[#00F5C4]/20 rounded-lg p-6 hover:border-[#00F5C4] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,196,0.2)] hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#00F5C4]/10 rounded-lg group-hover:bg-[#00F5C4]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#00F5C4] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-['Space_Mono'] text-sm font-semibold text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-1 group-hover:text-[#00F5C4] transition-colors">
                        {social.name}
                      </div>
                      <div className="font-['DM_Sans'] text-sm text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60 truncate">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F5C4]/0 to-[#00F5C4]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-[#1A1A1A]/30 dark:bg-[#1A1A1A]/30 light:bg-[#0A1628]/5 border border-[#00F5C4]/20 rounded-lg p-8 text-center backdrop-blur-sm"
          >
            <div className="font-['Space_Mono'] text-xs text-[#00F5C4]/60 mb-3">
              // availability.status
            </div>
            <p className="font-['DM_Sans'] text-lg text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] mb-2">
              {availability}
            </p>
            <p className="font-['DM_Sans'] text-sm text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60">
              Feel free to reach out for projects, opportunities, or just to say hi!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
