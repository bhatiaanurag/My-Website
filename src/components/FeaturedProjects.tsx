import { motion } from 'motion/react';
import { categorizedProjects } from '@/src/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function FeaturedProjects() {
  // Take top 3 projects from different categories
  const featured = [
    categorizedProjects.powerbi[0],
    categorizedProjects.excel[0],
    categorizedProjects.sql[0],
  ].filter(Boolean);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Selected Work
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Featured <span className="italic font-serif font-light">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed"
            >
              A glimpse into my technical expertise across various data domains.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/projects" 
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 border-2 group")}
            >
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm rounded-[2.5rem] hover:border-primary/30 transition-all duration-500 group shadow-lg hover:shadow-2xl flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium mb-8 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1 gap-2 rounded-xl border-2 font-bold text-[10px] uppercase tracking-widest")}
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <Button size="sm" className="flex-1 gap-2 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
                      <ExternalLink className="w-3.5 h-3.5" /> Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
