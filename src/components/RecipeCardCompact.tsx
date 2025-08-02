import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardCompactProps {
  title: string;
  author: string;
  difficulty: number; // 1-5 stars
  onClick: () => void;
}

export const RecipeCardCompact = ({ 
  title, 
  author, 
  difficulty,
  onClick 
}: RecipeCardCompactProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-amber-400 text-amber-400' 
            : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  return (
    <div 
      className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3">
        by {author}
      </p>
      
      <div className="flex items-center gap-1">
        {renderStars(difficulty)}
      </div>
    </div>
  );
};