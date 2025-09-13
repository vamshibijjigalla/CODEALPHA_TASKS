import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  level: "Current" | "Emerging" | "Future";
}

export const CapabilityCard = ({ icon: Icon, title, description, examples, level }: CapabilityCardProps) => {
  const levelColors = {
    Current: "bg-primary/20 text-primary border-primary/30",
    Emerging: "bg-accent/20 text-accent border-accent/30", 
    Future: "bg-muted/30 text-muted-foreground border-muted"
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow-sm">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${levelColors[level]}`}>
              {level}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Examples:</h4>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5 text-xs">•</span>
              {example}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};