import { motion } from 'motion/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight, BarChart3, Database, LineChart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import DataChart from './DataChart';

export default function Hero() {
  return (
    <section id="about" className="relative pt-40 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-[0.03] pointer-events-none">
        <Database className="w-[600px] h-[600px] text-primary rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Data Analyst Aspirant
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Decoding <span className="text-primary">Data</span>.<br />
              Driving <span className="italic font-serif font-light">Decisions</span>.
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-lg leading-relaxed font-medium">
              Hi, I'm <span className="text-foreground font-georgia">Anurag Bhatia</span>. I bridge the gap between complex datasets and strategic business growth through advanced analytics and visualization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link 
                to="/projects" 
                className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all")}
              >
                Explore Projects <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base border-2 hover:bg-muted transition-all")}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 -z-10" />
              <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] -rotate-3 -z-10" />
              
              <div className="w-full h-full rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl relative group">
                <img 
                  src="/images/profile.jpg" 
                  alt="profile"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/90 backdrop-blur-xl rounded-[2rem] border border-border/50 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Growth Analytics</p>
                        <p className="text-[9px] text-muted-foreground font-medium">Real-time data insights</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-foreground">+24.5%</p>
                    </div>
                  </div>
                  
                  <div style={{ width: "100%", height: "400px" }}>
                    <DataChart />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
