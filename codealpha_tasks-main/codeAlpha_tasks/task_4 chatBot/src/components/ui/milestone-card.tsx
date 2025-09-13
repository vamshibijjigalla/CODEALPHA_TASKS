import { Card } from "@/components/ui/card";

interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
  impact: string;
  isActive?: boolean;
}

export const MilestoneCard = ({ year, title, description, impact, isActive = false }: MilestoneCardProps) => {
  return (
    <Card className={`relative p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group ${
      isActive ? 'shadow-glow-primary border-primary/70' : 'hover:shadow-glow-sm'
    }`}>
      <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
        <div className="w-3 h-3 bg-background rounded-full"></div>
      </div>
      
      <div className="pl-8">
        <div className="text-primary font-mono text-sm mb-2">{year}</div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
          {impact}
        </div>
      </div>
    </Card>
  );
};