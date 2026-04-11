import { socialLinks } from '@/src/data';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

export default function SocialBar() {
  const links = [
    { name: 'LinkedIn', href: socialLinks.linkedin, icon: Linkedin },
    { name: 'GitHub', href: socialLinks.github, icon: Github },
    { name: 'Naukri', href: socialLinks.naukri, icon: ExternalLink },
    { name: 'Glassdoor', href: socialLinks.glassdoor, icon: ExternalLink },
    { name: 'Indeed', href: socialLinks.indeed, icon: ExternalLink },
  ];

  return (
    <div className="bg-background border-t border-border/40 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mr-4">Professional Networks</span>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 hover:text-primary transition-all duration-300 group"
            >
              <link.icon className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
