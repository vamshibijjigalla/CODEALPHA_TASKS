import { HeroSection } from "@/components/ui/hero-section";
import { MilestoneCard } from "@/components/ui/milestone-card";
import { CapabilityCard } from "@/components/ui/capability-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Code, 
  Music, 
  Microscope,
  Rocket,
  Sparkles,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const milestones = [
    {
      year: "2017",
      title: "Transformer Architecture",
      description: "The \"Attention is All You Need\" paper introduces the transformer architecture, revolutionizing how AI processes language.",
      impact: "Foundation for GPT, BERT, and modern LLMs"
    },
    {
      year: "2018",
      title: "GPT-1 Released",
      description: "OpenAI releases the first GPT model, demonstrating the power of unsupervised pre-training for language tasks.",
      impact: "117M parameters"
    },
    {
      year: "2020",
      title: "GPT-3 Breakthrough",
      description: "GPT-3 shows unprecedented language capabilities with 175 billion parameters, sparking the AI renaissance.",
      impact: "175B parameters"
    },
    {
      year: "2022",
      title: "ChatGPT Launch",
      description: "ChatGPT democratizes AI access, reaching 100 million users in just 2 months and changing how people interact with AI.",
      impact: "100M+ users"
    },
    {
      year: "2023",
      title: "GPT-4 & Multimodal AI",
      description: "GPT-4 introduces vision capabilities and more sophisticated reasoning, while competitors rapidly advance.",
      impact: "Multimodal capabilities"
    },
    {
      year: "2024",
      title: "AI Agents & Reasoning",
      description: "AI systems begin to show advanced reasoning capabilities and autonomous agent behavior.",
      impact: "Agent-based AI",
      isActive: true
    }
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "AI can understand, generate, and manipulate human language with remarkable fluency.",
      examples: [
        "Translation between 100+ languages",
        "Code generation and debugging",
        "Creative writing and storytelling",
        "Complex question answering"
      ],
      level: "Current" as const
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "AI systems can interpret and understand visual information from images and videos.",
      examples: [
        "Medical image analysis",
        "Autonomous vehicle perception",
        "Art and image generation",
        "Real-time video processing"
      ],
      level: "Current" as const
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "AI can write, debug, and optimize code across multiple programming languages.",
      examples: [
        "Full application development",
        "Algorithm optimization",
        "Bug detection and fixing",
        "Documentation generation"
      ],
      level: "Current" as const
    },
    {
      icon: Brain,
      title: "Advanced Reasoning",
      description: "Next-generation AI systems with enhanced logical reasoning and problem-solving.",
      examples: [
        "Mathematical theorem proving",
        "Scientific hypothesis generation",
        "Complex strategic planning",
        "Multi-step problem solving"
      ],
      level: "Emerging" as const
    },
    {
      icon: Microscope,
      title: "Scientific Discovery",
      description: "AI systems that can accelerate research and make novel scientific discoveries.",
      examples: [
        "Drug discovery and design",
        "Climate modeling",
        "Materials science",
        "Genomics research"
      ],
      level: "Emerging" as const
    },
    {
      icon: Rocket,
      title: "Artificial General Intelligence",
      description: "AI systems with human-level cognitive abilities across all domains.",
      examples: [
        "Cross-domain expertise",
        "Human-like learning",
        "Creative problem solving",
        "Autonomous goal setting"
      ],
      level: "Future" as const
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>How AI is Going - Tracking Artificial Intelligence Progress</title>
      <meta name="description" content="Explore the rapid evolution of artificial intelligence from breakthrough to breakthrough. Track AI progress, milestones, and future predictions." />
      
      <div className="min-h-screen bg-background">
        <HeroSection />
        
        {/* AI Timeline Section */}
        <section id="ai-timeline" className="py-20 px-6 scroll-mt-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                AI Evolution Timeline
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones that have shaped the current AI landscape and continue to drive innovation forward.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in hover:scale-102 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <MilestoneCard {...milestone} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Capabilities Section */}
        <section className="py-20 px-6 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                AI Capabilities Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From current achievements to emerging possibilities and future potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CapabilityCard {...capability} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Trends Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                What's Next for AI?
              </h2>
              <p className="text-xl text-muted-foreground">
                The trajectory of AI development suggests remarkable changes ahead.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm animate-fade-in hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Exponential Growth
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI capabilities are advancing at an unprecedented pace, with model performance 
                  doubling every few months across various benchmarks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Model sizes growing from millions to trillions of parameters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Training efficiency improvements reducing costs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    New architectures emerging beyond transformers
                  </li>
                </ul>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-glow-accent animate-fade-in hover:scale-105" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Emerging Paradigms
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  New approaches to AI development are reshaping how we think about 
                  machine intelligence and its applications.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Multi-modal AI combining text, vision, and audio
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Autonomous AI agents and decision-making systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Human-AI collaboration frameworks
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;