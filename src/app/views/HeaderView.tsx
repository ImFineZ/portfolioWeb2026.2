// View - Header presentation component
import { Moon, Sun } from 'lucide-react';

interface HeaderViewProps {
  theme: 'dark' | 'light';
  isScrolled: boolean;
  onThemeToggle: () => void;
  onNavigate: (section: string) => void;
}

export function HeaderView({ theme, isScrolled, onThemeToggle, onNavigate }: HeaderViewProps) {
  const sections = ['about', 'skills', 'projects', 'contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#0D0D0D]/90 dark:bg-[#0D0D0D]/90 light:bg-[#F5F5F0]/90 backdrop-blur-md shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('hero')}
          className="font-['Space_Mono'] text-xl font-bold text-[#00F5C4] hover:opacity-80 transition-opacity"
        >
          &lt;G /&gt;
        </button>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 font-['DM_Sans'] text-sm">
            {sections.map(section => (
              <li key={section}>
                <button
                  onClick={() => onNavigate(section)}
                  className="text-[#E8E8E8] dark:text-[#E8E8E8] light:text-[#0A1628] hover:text-[#00F5C4] transition-colors capitalize"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          
          <button
            onClick={onThemeToggle}
            className="p-2.5 rounded-lg bg-[#00F5C4]/10 hover:bg-[#00F5C4]/20 transition-all duration-300 group border border-[#00F5C4]/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[#00F5C4] group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-[#00F5C4] group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
