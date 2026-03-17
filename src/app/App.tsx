// Main App - Orchestrates MVC components
import { useThemeController } from './controllers/useThemeController';
import { useScrollController } from './controllers/useScrollController';
import { useTypingController, useBlinkingCursor } from './controllers/useTypingController';
import { personalInfo, skills, projects, socialLinks } from './models/PortfolioData';
import { HeaderView } from './views/HeaderView';
import { HeroView } from './views/HeroView';
import { AboutView } from './views/AboutView';
import { SkillsView } from './views/SkillsView';
import { ProjectsView } from './views/ProjectsView';
import { ContactView } from './views/ContactView';
import { FooterView } from './views/FooterView';

export default function App() {
  // Controllers
  const { theme, toggleTheme } = useThemeController();
  const { isScrolled, scrollToSection } = useScrollController();
  const displayedTagline = useTypingController(personalInfo.tagline);
  const showCursor = useBlinkingCursor();

  // Handler for CV download
  const handleDownloadCV = () => {
    console.log('Download CV clicked');
    // Implement CV download logic here
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#F5F5F0] text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] transition-colors duration-500">
      <HeaderView 
        theme={theme}
        isScrolled={isScrolled}
        onThemeToggle={toggleTheme}
        onNavigate={scrollToSection}
      />
      
      <main>
        <HeroView
          name={personalInfo.name}
          title={personalInfo.title}
          displayedTagline={displayedTagline}
          showCursor={showCursor}
          onDownloadCV={handleDownloadCV}
        />
        
        <AboutView bio={personalInfo.bio} />
        
        <SkillsView skills={skills} />
        
        <ProjectsView projects={projects} />
        
        <ContactView 
          socialLinks={socialLinks}
          availability={personalInfo.availability}
        />
      </main>
      
      <FooterView />
    </div>
  );
}
