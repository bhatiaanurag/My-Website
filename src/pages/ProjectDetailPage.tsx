import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getProjectById } from '@/src/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowLeft, ExternalLink, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-40 pb-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <p className="text-muted-foreground mb-10">The project you are looking for does not exist or has been moved.</p>
        <Link to="/projects">
          <Button variant="outline" className="rounded-full gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -z-10 opacity-[0.05] pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-primary blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} 
            className="group rounded-full hover:bg-primary/10 hover:text-primary transition-all gap-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Back
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Image & Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl mb-12 group">
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "italic font-serif font-light" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button className="rounded-full h-14 px-8 gap-3 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all font-bold uppercase tracking-widest text-xs">
                  View on GitHub <Github className="w-5 h-5" />
                </Button>
              </a>
              {/* If there was a live demo link, it could go here */}
            </div>
          </motion.div>

          {/* Right Column: Descriptions & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Meta info */}
            <div className="grid grid-cols-2 gap-8 p-8 rounded-[2rem] bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Tag className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Category</span>
                </div>
                <div className="text-lg font-bold capitalize">Data Analysis</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Industry</span>
                </div>
                <div className="text-lg font-bold">Standard</div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                The Insight
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground/80">
                {project.description}
              </p>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Skills Used Section */}
            <div className="space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Technical Toolkit
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.skillsUsed.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-6 py-3 rounded-full text-base font-bold bg-muted/50 border-border/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8 border-t border-border/40">
              <p className="text-sm text-muted-foreground italic mb-6">
                * This project represents a real-world application of data analytics methodologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
