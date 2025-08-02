import { Clock, User, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  title: string;
  author: string;
  location: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  chefsComments: string;
  image?: string;
}

export const RecipeCard = ({ 
  title, 
  author, 
  location, 
  difficulty, 
  ingredients, 
  instructions, 
  chefsComments,
  image 
}: RecipeCardProps) => {
  const getDifficultyClass = (level: string) => {
    switch (level) {
      case 'Easy': return 'difficulty-easy';
      case 'Medium': return 'difficulty-medium';
      case 'Hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  return (
    <div className="recipe-card">
      {image && (
        <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground">
          Recipe Image Placeholder
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h3 className="font-heading font-semibold text-xl text-foreground">{title}</h3>
        <Badge className={getDifficultyClass(difficulty)}>{difficulty}</Badge>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-heading font-medium text-foreground mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-muted-foreground">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-medium text-foreground mb-2">Instructions:</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            {instructions.map((step, index) => (
              <li key={index} className="text-muted-foreground">{step}</li>
            ))}
          </ol>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
          <h4 className="font-heading font-medium text-foreground mb-2">Chef's Comments:</h4>
          <p className="text-sm italic text-muted-foreground">"{chefsComments}"</p>
        </div>
      </div>
    </div>
  );
};