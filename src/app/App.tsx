// Main App - Orchestrates MVC components
import { useTranslation } from 'react-i18next';
import { useThemeController } from './controllers/useThemeController';
import { useScrollController } from './controllers/useScrollController';
import { useTypingController, useBlinkingCursor } from './controllers/useTypingController';
import { useLanguageController } from './controllers/useLanguageController';
import { personalInfo, skills, projects, socialLinks } from './models/PortfolioData';
import { HeaderView } from './views/HeaderView';
import { HeroView } from './views/HeroView';
import { AboutView } from './views/AboutView';
import { SkillsView } from './views/SkillsView';
import { ProjectsView } from './views/ProjectsView';
import { ContactView } from './views/ContactView';
import { FooterView } from './views/FooterView';

export default function App() {
  const { t } = useTranslation();

  // Controllers
  const { theme, toggleTheme } = useThemeController();
  const { isScrolled, scrollToSection } = useScrollController();
  const { language, toggleLanguage } = useLanguageController();
  const displayedTagline = useTypingController(t('hero.tagline'));
  const showCursor = useBlinkingCursor();

  const handleDownloadCV = () => {
    console.log('Download CV clicked');
  };

  const translatedProjects = projects.map((project, i) => ({
    ...project,
    description: t(`projects.descriptions.${i}`),
  }));

  return (
    <div className="min-h-screen bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#F5F5F0] text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] transition-colors duration-500">
      <HeaderView
        theme={theme}
        isScrolled={isScrolled}
        language={language}
        onThemeToggle={toggleTheme}
        onLanguageToggle={toggleLanguage}
        onNavigate={scrollToSection}
      />

      <main>
        <HeroView
          name={personalInfo.name}
          title={t('hero.title')}
          displayedTagline={displayedTagline}
          showCursor={showCursor}
          onDownloadCV={handleDownloadCV}
        />

        <AboutView bio={t('about.bio')} />

        <SkillsView skills={skills} />

        <ProjectsView projects={translatedProjects} />

        <ContactView
          socialLinks={socialLinks}
          availability={t('contact.availability')}
        />
      </main>

      <FooterView />
    </div>
  );
}
