import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/ff6e0a5b-b2b3-4365-a204-b56446de2a75/files/e0211d55-a270-41f3-aa3e-82b1f27b5df5.jpg',
      title: 'Portrait Study I',
      category: 'Portrait'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ff6e0a5b-b2b3-4365-a204-b56446de2a75/files/2a23452a-4500-4523-9411-a590e1044b92.jpg',
      title: 'Landscape Minimalism',
      category: 'Landscape'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ff6e0a5b-b2b3-4365-a204-b56446de2a75/files/3cc0f44b-a0fc-466f-a071-8f239ecfe22b.jpg',
      title: 'Editorial Fashion',
      category: 'Editorial'
    }
  ];

  const blogPosts = [
    {
      title: 'The Philosophy of Light in Portrait Photography',
      date: 'October 15, 2025',
      excerpt: 'Light is not just a tool, it is the language through which we speak with the camera and the viewer.'
    },
    {
      title: 'Minimalism in Contemporary Photography',
      date: 'October 8, 2025',
      excerpt: 'Less is more. How to remove the excess and leave only the essence.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-light tracking-wider">BURKOVICH</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm tracking-widest hover:text-primary transition-colors">HOME</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm tracking-widest hover:text-primary transition-colors">PORTFOLIO</button>
              <button onClick={() => scrollToSection('about')} className="text-sm tracking-widest hover:text-primary transition-colors">ABOUT</button>
              <button onClick={() => scrollToSection('services')} className="text-sm tracking-widest hover:text-primary transition-colors">SERVICES</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm tracking-widest hover:text-primary transition-colors">BLOG</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm tracking-widest hover:text-primary transition-colors">CONTACT</button>
            </div>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button>
                  <Icon name="Menu" size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">HOME</button>
                  <button onClick={() => scrollToSection('portfolio')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">PORTFOLIO</button>
                  <button onClick={() => scrollToSection('about')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">ABOUT</button>
                  <button onClick={() => scrollToSection('services')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">SERVICES</button>
                  <button onClick={() => scrollToSection('blog')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">BLOG</button>
                  <button onClick={() => scrollToSection('contact')} className="text-lg tracking-widest hover:text-primary transition-colors text-left">CONTACT</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src={portfolioImages[0].url} 
            alt="Hero" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div 
          className="relative z-10 text-center px-6 animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
        >
          <h2 className="text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight">
            Capturing<br/>Moments
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-12">
            Photography as the art of seeing the invisible
          </p>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg tracking-widest"
          >
            VIEW WORK
          </Button>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-4 tracking-tight animate-fade-in">Portfolio</h2>
          <p className="text-muted-foreground text-lg mb-16 animate-fade-in">Selected Works</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 relative">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"></div>
                </div>
                <p className="text-sm tracking-widest text-muted-foreground mb-1">{image.category}</p>
                <h3 className="text-xl font-serif">{image.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32 px-6 bg-card relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-muted animate-fade-in group">
              <img 
                src={portfolioImages[0].url} 
                alt="About" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Photography for me is a way to stop a moment and preserve an emotion. 
                Each frame is a dialogue between light, shadow, and the human soul.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My work is inspired by the classics of American photography: Richard Avedon, 
                Irving Penn, Annie Leibovitz. I strive to create images that live outside of time.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Over 15 years of work, I have collaborated with leading publications and brands, 
                but the most important thing for me is to remain true to my vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in">
              <Icon name="Camera" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Portrait Photography</h3>
              <p className="text-muted-foreground mb-6">
                Individual and family portraits created with attention to detail and atmosphere.
              </p>
              <p className="text-primary font-light">from $500</p>
            </div>
            
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Icon name="Sparkles" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Editorial</h3>
              <p className="text-muted-foreground mb-6">
                Conceptual shoots for magazines, brands, and advertising campaigns.
              </p>
              <p className="text-primary font-light">from $2000</p>
            </div>
            
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Icon name="Heart" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Wedding Photography</h3>
              <p className="text-muted-foreground mb-6">
                Documentary style that preserves the authenticity of the moment and emotions.
              </p>
              <p className="text-primary font-light">from $3000</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="min-h-screen py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Blog</h2>
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="border-b border-border pb-12 last:border-b-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-sm text-muted-foreground tracking-widest mb-3">{post.date}</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Read more <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Contact</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-serif mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground">
                  Fill out the form or write directly. I will respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>hello@burkovich.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>New York, NY</span>
                </div>
              </div>
              <div className="flex gap-6 pt-6">
                <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <form className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <Input 
                  placeholder="Your name" 
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Message" 
                  rows={6}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg tracking-widest"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm tracking-widest">
            © 2025 BURKOVICH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-6 animate-fade-in-slow cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;