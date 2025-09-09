import Navbar from '@/components/Navbar';
import { Shield, Zap, Star, Clock, Users } from 'lucide-react';

// Hero Images
import heroBackground from '@/assets/hero-background.jpg';
import moviesHero from '@/assets/movies-hero.jpg';
import charactersHero from '@/assets/characters-hero.jpg';
import upcomingHero from '@/assets/upcoming-hero.jpg';
import timelineHero from '@/assets/timeline-hero.jpg';

// Card Images
import movieCard1 from '@/assets/movie-card-1.jpg';
import movieCard2 from '@/assets/movie-card-2.jpg';
import movieCard3 from '@/assets/movie-card-3.jpg';
import characterCard1 from '@/assets/character-card-1.jpg';
import characterCard2 from '@/assets/character-card-2.jpg';
import characterCard3 from '@/assets/character-card-3.jpg';
import upcomingCard1 from '@/assets/upcoming-card-1.jpg';
import upcomingCard2 from '@/assets/upcoming-card-2.jpg';
import upcomingCard3 from '@/assets/upcoming-card-3.jpg';
import timelineCard1 from '@/assets/timeline-card-1.jpg';
import timelineCard2 from '@/assets/timeline-card-2.jpg';
import timelineCard3 from '@/assets/timeline-card-3.jpg';

const Index = () => {
  const demoSections = [
    {
      id: 'home',
      title: 'Welcome to CineVerse',
      subtitle: 'The Ultimate Superhero Movie Universe',
      icon: Zap,
      description: 'Experience the most comprehensive collection of superhero content, from classic comics to blockbuster movies.',
      heroImage: heroBackground,
      cards: [movieCard1, characterCard1, upcomingCard1]
    },
    {
      id: 'movies',
      title: 'Epic Movies',
      subtitle: 'Blockbuster Adventures Await',
      icon: Star,
      description: 'Discover the greatest superhero films ever made, from origin stories to universe-spanning epics.',
      heroImage: moviesHero,
      cards: [movieCard1, movieCard2, movieCard3]
    },
    {
      id: 'characters',
      title: 'Legendary Characters',
      subtitle: 'Heroes & Villains of All Time',
      icon: Shield,
      description: 'Explore the rich histories and powers of your favorite heroes and the villains they face.',
      heroImage: charactersHero,
      cards: [characterCard1, characterCard2, characterCard3]
    },
    {
      id: 'upcoming',
      title: 'Upcoming Releases',
      subtitle: 'Future Adventures Coming Soon',
      icon: Clock,
      description: 'Stay ahead of the curve with exclusive previews and release dates for upcoming superhero content.',
      heroImage: upcomingHero,
      cards: [upcomingCard1, upcomingCard2, upcomingCard3]
    },
    {
      id: 'timeline',
      title: 'Universe Timeline',
      subtitle: 'Navigate the Multiverse',
      icon: Users,
      description: 'Follow the interconnected stories across multiple universes and timelines.',
      heroImage: timelineHero,
      cards: [timelineCard1, timelineCard2, timelineCard3]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-primary">
            CineVerse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground max-w-2xl mx-auto leading-relaxed">
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
      {demoSections.slice(1).map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        >
          {/* Section Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${section.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <section.icon className="h-16 w-16 mx-auto mb-6 text-primary pulse-glow" />
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow-primary">
                {section.title}
              </h2>
              <h3 className="text-xl md:text-2xl text-accent mb-6">
                {section.subtitle}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                {section.description}
              </p>
              
              {/* Enhanced Demo Cards with Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.cards.map((cardImage, cardIndex) => (
                  <div 
                    key={cardIndex}
                    className="glass-morphism rounded-xl overflow-hidden hover:glass-morphism-hover transition-all duration-300 hover:glow-primary group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cardImage} 
                        alt={`${section.title} feature ${cardIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4">
                        <section.icon className="h-8 w-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-2 text-foreground">
                        {section.id === 'movies' && ['Latest Blockbuster', 'Action Epic', 'Premium Experience'][cardIndex]}
                        {section.id === 'characters' && ['Heroic Legend', 'Dark Nemesis', 'United Force'][cardIndex]}
                        {section.id === 'upcoming' && ['Release Countdown', 'Behind Scenes', 'Exclusive Preview'][cardIndex]}
                        {section.id === 'timeline' && ['Cosmic Events', 'Multiverse Portal', 'Chronicle Archive'][cardIndex]}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Experience the next level of superhero entertainment with cutting-edge technology and immersive storytelling.
                      </p>
                    </div>
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
