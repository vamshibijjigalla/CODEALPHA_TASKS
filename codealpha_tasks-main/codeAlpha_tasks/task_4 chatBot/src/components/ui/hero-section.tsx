import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-brain.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            How AI is Going
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Tracking the rapid evolution of artificial intelligence from breakthrough to breakthrough, 
            exploring where we've been and where we're heading next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => {
                const timelineSection = document.getElementById('ai-timeline');
                timelineSection?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Explore AI Progress
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const timelineSection = document.getElementById('ai-timeline');
                timelineSection?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              }}
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
            >
              View Timeline
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse shadow-glow-accent delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-glow-sm delay-500"></div>
      </div>
    </section>
  );
};