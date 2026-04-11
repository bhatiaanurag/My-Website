import { Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border/40 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Database className="w-5 h-5" />
            </div>
            <span className="font-georgia font-bold text-[17px] tracking-tight">Anurag Bhatia</span>
          </div>
          
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
            © {new Date().getFullYear()} Professional Portfolio. All Rights Reserved.
          </div>
          
          <div className="flex gap-10">
            <a href="/" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/projects" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="/contact" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
