import { motion, AnimatePresence } from 'motion/react';
import { Database, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { contactInfo } from '@/src/data';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Database className="w-4 h-4 sm:w-5 h-5" />
            </div>
            <span className="font-georgia font-bold text-lg sm:text-xl tracking-tight">Anurag Bhatia</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary relative py-2",
                  location.pathname === item.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a href={contactInfo.resume} target="_blank" rel="noreferrer">
              <Button variant="default" size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/40 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-bold tracking-tight transition-colors",
                    location.pathname === item.href 
                      ? "bg-primary/5 text-primary" 
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <a href={contactInfo.resume} target="_blank" rel="noreferrer">
                  <Button className="w-full rounded-xl h-12 font-bold uppercase tracking-widest">
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
