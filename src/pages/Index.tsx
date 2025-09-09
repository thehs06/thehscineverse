import Navbar from '@/components/Navbar';
import { Shield, Zap, Star, Clock, Users } from 'lucide-react';

const Index = () => {
  const demoSections = [
    {
      id: 'home',
      title: 'Welcome to CineVerse',
      subtitle: 'The Ultimate Superhero Movie Universe',
      icon: Zap,
      description: 'Experience the most comprehensive collection of superhero content, from classic comics to blockbuster movies.'
    },
    {
      id: 'movies',
      title: 'Epic Movies',
      subtitle: 'Blockbuster Adventures Await',
      icon: Star,
      description: 'Discover the greatest superhero films ever made, from origin stories to universe-spanning epics.'
    },
    {
      id: 'characters',
      title: 'Legendary Characters',
      subtitle: 'Heroes & Villains of All Time',
      icon: Shield,
      description: 'Explore the rich histories and powers of your favorite heroes and the villains they face.'
    },
    {
      id: 'upcoming',
      title: 'Upcoming Releases',
      subtitle: 'Future Adventures Coming Soon',
      icon: Clock,
      description: 'Stay ahead of the curve with exclusive previews and release dates for upcoming superhero content.'
    },
    {
      id: 'timeline',
      title: 'Universe Timeline',
      subtitle: 'Navigate the Multiverse',
      icon: Users,
      description: 'Follow the interconnected stories across multiple universes and timelines.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-primary">
            CineVerse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Enter a universe where heroes rise, villains fall, and legends are born.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:text-glow-primary transition-all duration-300 hover:glow-primary">
              Explore Universe
            </button>
            <button className="glass-card px-8 py-4 rounded-xl font-semibold text-foreground hover:text-primary hover:text-glow-primary transition-all duration-300">
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Demo Sections */}
      {demoSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen flex items-center justify-center py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <section.icon className="h-16 w-16 mx-auto mb-6 text-primary pulse-glow" />
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow-primary">
                {section.title}
              </h2>
              <h3 className="text-xl md:text-2xl text-accent mb-6">
                {section.subtitle}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {section.description}
              </p>
              
              {/* Demo Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item}
                    className="glass-morphism p-6 rounded-xl hover:glass-morphism-hover transition-all duration-300 hover:glow-primary group"
                  >
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      <section.icon className="h-12 w-12 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2">Feature {item}</h4>
                    <p className="text-sm text-muted-foreground">
                      Experience the next level of superhero entertainment with cutting-edge technology.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="glass-card py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary text-glow-primary">CineVerse</span>
          </div>
          <p className="text-muted-foreground">
            Built with superhero-grade technology. © 2024 CineVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
