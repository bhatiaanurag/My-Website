import { motion } from 'motion/react';
import { categorizedProjects } from '@/src/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Github, ExternalLink, FileSpreadsheet, Database, BarChart3, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const categories = [
    { id: 'excel', label: 'Excel', icon: FileSpreadsheet },
    { id: 'sql', label: 'SQL', icon: Database },
    { id: 'powerbi', label: 'Power BI', icon: BarChart3 },
    { id: 'eda', label: 'EDA', icon: Search },
  ];

  return (
    <div className="pt-40 pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
            Portfolio Showcase
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
            Technical <span className="italic font-serif font-light">Projects</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            A curated collection of my work in data analysis, visualization, and statistical modeling.
          </p>
        </motion.div>

        <Tabs defaultValue="excel" className="w-full">
          <div className="flex justify-start sm:justify-center mb-12 md:mb-16 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
            <TabsList className="p-1 bg-muted/50 border border-border/50 rounded-2xl h-auto gap-1 flex-nowrap sm:flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all whitespace-nowrap"
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(categorizedProjects).map(([key, projects]) => (
            <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {projects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm rounded-[2.5rem] hover:border-primary/30 transition-all duration-500 group shadow-lg hover:shadow-2xl">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                          <p className="text-white text-sm font-medium">View Project Details</p>
                        </div>
                      </div>
                      <CardHeader className="p-8 pb-4">
                        <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <p className="text-muted-foreground text-base leading-relaxed font-medium mb-8">
                          {project.description}
                        </p>
                        <div className="flex gap-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex-1 gap-2 rounded-2xl border-2 font-bold text-xs uppercase tracking-widest")}
                          >
                            <Github className="w-4 h-4" /> GitHub
                          </a>
                          <Button size="lg" className="flex-1 gap-2 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
                            <ExternalLink className="w-4 h-4" /> Case Study
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
            <Database className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to unlock the power of your <span className="italic font-serif font-light">data?</span></h2>
            <p className="text-primary-foreground/80 text-base md:text-lg font-medium mb-10 leading-relaxed">
              Whether you have a specific project in mind or just want to explore the possibilities, I'm here to help you make data-driven decisions.
            </p>
            <Link 
              to="/contact" 
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full px-10 h-14 text-base font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all")}
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
