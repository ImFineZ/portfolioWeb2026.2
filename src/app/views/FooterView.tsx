// View - Footer presentation component
import { Heart, Terminal } from 'lucide-react';

export function FooterView() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[#00F5C4]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60">
            <Terminal className="w-4 h-4 text-[#00F5C4]" />
            <span>© {currentYear} Greivin. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[#E8E8E8]/60 dark:text-[#E8E8E8]/60 light:text-[#0A1628]/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-[#00F5C4] fill-[#00F5C4] animate-pulse" />
            <span>and React</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-['Space_Mono'] text-xs text-[#00F5C4]/40">
            // console.log("Thanks for visiting! 🚀")
          </p>
        </div>
      </div>
    </footer>
  );
}
