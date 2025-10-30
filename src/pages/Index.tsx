import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      title: 'Философия света в портретной съёмке',
      date: '15 октября 2025',
      excerpt: 'Свет — это не просто инструмент, это язык, на котором мы говорим с камерой и зрителем.'
    },
    {
      title: 'Минимализм в современной фотографии',
      date: '8 октября 2025',
      excerpt: 'Меньше — значит больше. Как убрать лишнее и оставить только суть.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-light tracking-wider">ALEXANDER NOIR</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm tracking-widest hover:text-primary transition-colors">ГЛАВНАЯ</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm tracking-widest hover:text-primary transition-colors">ПОРТФОЛИО</button>
              <button onClick={() => scrollToSection('about')} className="text-sm tracking-widest hover:text-primary transition-colors">ОБО МНЕ</button>
              <button onClick={() => scrollToSection('services')} className="text-sm tracking-widest hover:text-primary transition-colors">УСЛУГИ</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm tracking-widest hover:text-primary transition-colors">БЛОГ</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm tracking-widest hover:text-primary transition-colors">КОНТАКТЫ</button>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={portfolioImages[0].url} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight">
            Capturing<br/>Moments
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-12">
            Фотография как искусство видеть невидимое
          </p>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg tracking-widest"
          >
            СМОТРЕТЬ РАБОТЫ
          </Button>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-4 tracking-tight animate-fade-in">Портфолио</h2>
          <p className="text-muted-foreground text-lg mb-16 animate-fade-in">Избранные работы</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm tracking-widest text-muted-foreground mb-1">{image.category}</p>
                <h3 className="text-xl font-serif">{image.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-muted animate-fade-in">
              <img 
                src={portfolioImages[0].url} 
                alt="About" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Фотография для меня — это способ остановить мгновение и сохранить эмоцию. 
                Каждый кадр — это диалог между светом, тенью и человеческой душой.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Моя работа вдохновлена классиками американской фотографии: Ричардом Аведоном, 
                Ирвингом Пенном, Анни Лейбовиц. Я стремлюсь создавать изображения, 
                которые живут вне времени.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                За 15 лет работы я сотрудничал с ведущими изданиями и брендами, 
                но главное для меня — оставаться верным своему видению.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in">
              <Icon name="Camera" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Портретная съёмка</h3>
              <p className="text-muted-foreground mb-6">
                Индивидуальные и семейные портреты, созданные с вниманием к деталям и атмосфере.
              </p>
              <p className="text-primary font-light">от $500</p>
            </div>
            
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Icon name="Sparkles" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Editorial</h3>
              <p className="text-muted-foreground mb-6">
                Концептуальные съёмки для журналов, брендов и рекламных кампаний.
              </p>
              <p className="text-primary font-light">от $2000</p>
            </div>
            
            <div className="p-8 border border-border hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Icon name="Heart" size={48} className="mb-6 text-primary" />
              <h3 className="text-2xl font-serif mb-4">Свадебная съёмка</h3>
              <p className="text-muted-foreground mb-6">
                Документальный стиль, который сохраняет подлинность момента и эмоций.
              </p>
              <p className="text-primary font-light">от $3000</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="min-h-screen py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Блог</h2>
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
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 tracking-tight animate-fade-in">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-serif mb-4">Давайте работать вместе</h3>
                <p className="text-muted-foreground">
                  Заполните форму или напишите напрямую. Я отвечу в течение 24 часов.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>hello@alexandernoir.com</span>
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
                  placeholder="Ваше имя" 
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
                  placeholder="Тема" 
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Сообщение" 
                  rows={6}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg tracking-widest"
              >
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm tracking-widest">
            © 2025 ALEXANDER NOIR. ALL RIGHTS RESERVED.
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
