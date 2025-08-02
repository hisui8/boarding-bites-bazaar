import { X, User, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Recipe {
  title: string;
  author: string;
  location: string;
  difficulty: number;
  ingredients: string[];
  instructions: string[];
  chefsComments: string;
}

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  if (!isOpen || !recipe) return null;

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
              {recipe.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{recipe.author}</span>
              </div>
              {recipe.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{recipe.location}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              {renderStars(recipe.difficulty)}
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-heading font-medium text-foreground mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-muted-foreground">{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-medium text-foreground mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-muted-foreground">{step}</li>
              ))}
            </ol>
          </div>
          
          {recipe.chefsComments && (
            <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
              <h3 className="font-heading font-medium text-foreground mb-2">Chef's Comments:</h3>
              <p className="text-sm italic text-muted-foreground">"{recipe.chefsComments}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};