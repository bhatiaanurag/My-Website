import { motion } from 'motion/react';
import { skills } from '@/src/data';
import { 
  Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, ResponsiveContainer 
} from 'recharts';

// Correcting imports for Card
import { 
  Card as ShadcnCard, 
  CardContent as ShadcnCardContent, 
  CardHeader as ShadcnCardHeader, 
  CardTitle as ShadcnCardTitle 
} from '@/components/ui/card';

export default function Skills() {
  // Flatten skills for a radar chart overview
  const radarData = skills.flatMap(cat => cat.items).slice(0, 6);

  return (
    <section id="skills" className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            A comprehensive overview of my analytical toolkit and specialized skills in data science and business intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <ShadcnCard className="h-full border-border/40 bg-card/50 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl">
              <ShadcnCardHeader className="pb-0">
                <ShadcnCardTitle className="text-lg sm:text-xl font-bold tracking-tight">Skill Distribution</ShadcnCardTitle>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">Core Competencies</p>
              </ShadcnCardHeader>
              <ShadcnCardContent className="h-[300px] sm:h-[400px] min-h-[300px] p-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="var(--border)" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="name" tick={{ fontSize: 9, fill: 'var(--muted-foreground)', fontWeight: 600 }} />
                    <Radar
                      name="Proficiency"
                      dataKey="level"
                      stroke="var(--primary)"
                      fill="var(--primary)"
                      fillOpacity={0.15}
                      strokeWidth={3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ShadcnCardContent>
            </ShadcnCard>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ShadcnCard className="h-full border-border/40 bg-card/50 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] hover:border-primary/30 transition-all duration-500 group shadow-lg hover:shadow-xl">
                  <ShadcnCardHeader className="flex flex-row items-center gap-4 sm:gap-5 pb-4 sm:pb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <ShadcnCardTitle className="text-lg sm:text-xl font-bold tracking-tight">{category.category}</ShadcnCardTitle>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-0.5">Specialization</p>
                    </div>
                  </ShadcnCardHeader>
                  <ShadcnCardContent className="space-y-5 sm:space-y-6">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="space-y-2 sm:space-y-2.5">
                        <div className="flex justify-between text-xs sm:text-sm font-bold tracking-tight">
                          <span>{skill.name}</span>
                          <span className="text-primary/60">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="h-full bg-primary rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </ShadcnCardContent>
                </ShadcnCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </section>
  );
}
