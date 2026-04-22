import { motion } from 'motion/react';
import { contactInfo } from '@/src/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const infoItems = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MapPin, label: 'Location', value: contactInfo.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: contactInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'Follow on GitHub', href: contactInfo.github },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL;

    if (!webAppUrl) {
      console.error('Google Sheets WebApp URL not configured. Please add VITE_GOOGLE_SHEETS_WEBAPP_URL to your environment variables.');
      setStatus('error');
      return;
    }

    try {
      // Create a form data object to send as URL encoded or JSON depending on script setup
      // Most simple Apps Scripts handle POST with JSON well
      await fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Apps Script Web Apps
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      // Since we use 'no-cors', we can't check response.ok
      // But if it doesn't throw, it's usually fine
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
            Let's <span className="italic font-serif font-light">Connect</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-1 space-y-4 md:space-y-8">
            {infoItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-0.5 sm:mb-1">{item.label}</div>
                  <div className="font-bold text-sm sm:text-base tracking-tight break-all sm:break-normal">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="shadow-2xl border-border/40 bg-card/50 backdrop-blur-sm rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-6 sm:p-10 pb-2 sm:pb-4">
                <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">Send a Message</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">I'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="p-6 sm:p-10">
                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Full Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                        className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-2 focus:border-primary transition-all" 
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Email Address</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com" 
                        className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-2 focus:border-primary transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry" 
                      className="h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-2 focus:border-primary transition-all" 
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..." 
                      className="min-h-[150px] sm:min-h-[180px] rounded-xl sm:rounded-2xl bg-background/50 border-2 focus:border-primary transition-all p-4 sm:p-5" 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full gap-3 h-14 sm:h-16 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                  >
                    {status === 'loading' ? (
                      <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : status === 'success' ? (
                      <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </Button>

                  {status === 'error' && (
                    <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <p className="text-destructive text-xs font-bold text-center">
                        {!import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL 
                          ? "Configuration Missing: Please add 'VITE_GOOGLE_SHEETS_WEBAPP_URL' to the project Secrets in the Settings menu."
                          : "Something went wrong. Please try again or contact me directly via email."}
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
