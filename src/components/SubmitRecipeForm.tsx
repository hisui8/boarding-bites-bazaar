import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const SubmitRecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    recipeTitle: '',
    difficulty: '',
    ingredients: '',
    instructions: '',
    location: '',
    chefsComments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.recipeTitle || !formData.difficulty || !formData.ingredients || !formData.instructions) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, recipe title, difficulty, ingredients, and instructions are required.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would submit to a backend
    toast({
      title: "Recipe submitted! 🍳",
      description: "Thank you for sharing your recipe with the community. It will be reviewed and added to the cookbook soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      recipeTitle: '',
      difficulty: '',
      ingredients: '',
      instructions: '',
      location: '',
      chefsComments: ''
    });
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
      <div className="text-center mb-6">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Share Your Recipe</h3>
        <p className="text-muted-foreground">
          Have a go-to recipe that's gotten you through late-night study sessions or homesick moments? 
          Share it with fellow students and help build our community cookbook!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Where You Call Home</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Chicago, IL"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="recipeTitle">Recipe Title *</Label>
          <Input
            id="recipeTitle"
            value={formData.recipeTitle}
            onChange={(e) => setFormData({ ...formData, recipeTitle: e.target.value })}
            placeholder="Give your recipe a catchy name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="difficulty">Difficulty Level *</Label>
          <Select value={formData.difficulty} onValueChange={(value) => setFormData({ ...formData, difficulty: value })}>
            <SelectTrigger>
              <SelectValue placeholder="How challenging is this recipe?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy - Anyone can do this!</SelectItem>
              <SelectItem value="Medium">Medium - Some cooking skills needed</SelectItem>
              <SelectItem value="Hard">Hard - For the ambitious chef</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ingredients">Ingredients *</Label>
          <Textarea
            id="ingredients"
            value={formData.ingredients}
            onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
            placeholder="List each ingredient on a new line&#10;1 cup flour&#10;2 eggs&#10;1/2 cup milk"
            rows={6}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="instructions">Step-by-Step Instructions *</Label>
          <Textarea
            id="instructions"
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            placeholder="Number each step clearly&#10;1. Mix dry ingredients in a large bowl&#10;2. Add wet ingredients and stir until combined&#10;3. Cook in pan for 2-3 minutes"
            rows={8}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="chefsComments">Chef's Comments</Label>
          <Textarea
            id="chefsComments"
            value={formData.chefsComments}
            onChange={(e) => setFormData({ ...formData, chefsComments: e.target.value })}
            placeholder="Share the story behind this recipe, any tips, or what it means to you..."
            rows={4}
          />
        </div>
        
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Send className="w-4 h-4 mr-2" />
          Submit Recipe
        </Button>
      </form>
    </div>
  );
};