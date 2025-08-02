import { ChefHat, Coffee, Cookie, Soup, Apple, Zap, Heart, BookOpen } from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeSection } from "@/components/RecipeSection";
import { SubmitRecipeForm } from "@/components/SubmitRecipeForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Sample recipes for each section
  const sampleRecipes = {
    mains: [
      {
        title: "Microwave Mac & Cheese Deluxe",
        author: "Sarah Chen",
        location: "Boston, MA",
        difficulty: "Easy" as const,
        ingredients: [
          "1 cup elbow pasta",
          "1/2 cup shredded cheddar cheese",
          "2 tbsp milk",
          "1 tbsp butter",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Cook pasta in microwave-safe bowl with water for 2-3 minutes",
          "Drain and add cheese, milk, and butter",
          "Microwave for 30 seconds and stir",
          "Season with salt and pepper"
        ],
        chefsComments: "This saved me during finals week when the dining hall was closed. Add some hot sauce for extra comfort!"
      }
    ],
    snacks: [
      {
        title: "Study Buddy Trail Mix",
        author: "Marcus Johnson",
        location: "Denver, CO",
        difficulty: "Easy" as const,
        ingredients: [
          "1 cup mixed nuts",
          "1/2 cup dried fruit",
          "1/4 cup dark chocolate chips",
          "1 tbsp coconut flakes"
        ],
        instructions: [
          "Mix all ingredients in a large bowl",
          "Store in airtight container",
          "Grab handfuls during study sessions"
        ],
        chefsComments: "Perfect brain food for those long library nights. The chocolate keeps me motivated!"
      }
    ],
    sweets: [
      {
        title: "Homesick Chocolate Mug Cake",
        author: "Emma Rodriguez",
        location: "Austin, TX",
        difficulty: "Easy" as const,
        ingredients: [
          "4 tbsp flour",
          "4 tbsp sugar",
          "2 tbsp cocoa powder",
          "3 tbsp milk",
          "3 tbsp vegetable oil",
          "Pinch of salt"
        ],
        instructions: [
          "Mix dry ingredients in a microwave-safe mug",
          "Add wet ingredients and stir until smooth",
          "Microwave for 90 seconds",
          "Let cool for 1 minute before eating"
        ],
        chefsComments: "When I'm missing my mom's baking, this little cake reminds me that I'm loved, even from afar."
      }
    ],
    comfort: [
      {
        title: "Instant Ramen Upgrade Bowl",
        author: "David Kim",
        location: "Seattle, WA",
        difficulty: "Medium" as const,
        ingredients: [
          "1 pack instant ramen",
          "1 egg",
          "Green onions",
          "Sriracha",
          "Sesame oil",
          "Frozen vegetables"
        ],
        instructions: [
          "Cook ramen according to package directions",
          "Add frozen vegetables in last 2 minutes",
          "Crack egg into hot broth and stir",
          "Top with green onions, sriracha, and sesame oil"
        ],
        chefsComments: "Turns college staple food into something that actually makes you feel human again."
      }
    ],
    healthy: [
      {
        title: "Dorm Room Power Bowl",
        author: "Zoe Williams",
        location: "Portland, OR",
        difficulty: "Easy" as const,
        ingredients: [
          "Pre-cooked quinoa",
          "Canned black beans",
          "Avocado",
          "Cherry tomatoes",
          "Lime juice",
          "Olive oil",
          "Salt and pepper"
        ],
        instructions: [
          "Drain and rinse black beans",
          "Combine quinoa and beans in bowl",
          "Top with diced avocado and tomatoes",
          "Dress with lime juice and olive oil"
        ],
        chefsComments: "When the dining hall pizza is calling but your body needs real nutrition. This bowl has saved my energy levels!"
      }
    ],
    quick: [
      {
        title: "PB&J French Toast Hack",
        author: "Tyler Brooks",
        location: "Nashville, TN",
        difficulty: "Easy" as const,
        ingredients: [
          "2 slices bread",
          "Peanut butter",
          "Jelly",
          "1 egg",
          "Splash of milk",
          "Butter"
        ],
        instructions: [
          "Make a PB&J sandwich",
          "Beat egg with milk in shallow dish",
          "Dip sandwich in egg mixture",
          "Cook in buttered pan for 2-3 minutes each side"
        ],
        chefsComments: "Breakfast and lunch had a baby, and it's delicious. Perfect for those weird meal times between classes."
      }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="gradient-warm py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-background/20 p-4 rounded-full">
              <ChefHat className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            The Ultimate Boarding School Cookbook
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Food has this magical way of bringing people together, especially when you're far from home. 
            Whether you're dealing with homesickness, celebrating a small victory, or just trying to make 
            your dorm room feel a little more like home, these student-tested recipes are here to help 
            you build community, one meal at a time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('recipe-sections')}
              variant="secondary" 
              size="lg"
              className="bg-background/90 text-foreground hover:bg-background"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Browse Recipes
            </Button>
            <Button 
              onClick={() => scrollToSection('submit-recipe')}
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Heart className="w-4 h-4 mr-2" />
              Share Your Recipe
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4">
        {/* Recipe Sections */}
        <div id="recipe-sections" className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recipe Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From quick midnight snacks to comfort food that reminds you of home, 
              we've got recipes for every mood and moment.
            </p>
          </div>

          {/* Dorm-Friendly Mains */}
          <RecipeSection
            title="Dorm-Friendly Mains"
            description="Hearty meals you can make with minimal equipment that will actually fill you up and keep you going."
            icon={<ChefHat className="w-16 h-16" />}
          >
            {sampleRecipes.mains.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>

          {/* Savory Snacks & Sides */}
          <RecipeSection
            title="Savory Snacks & Sides"
            description="Perfect for study sessions, movie nights, or when you need something satisfying between meals."
            icon={<Coffee className="w-16 h-16" />}
          >
            {sampleRecipes.snacks.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>

          {/* Sweet Treats */}
          <RecipeSection
            title="Sweet Treats"
            description="Because sometimes you need a little sugar to get through the day (or night)."
            icon={<Cookie className="w-16 h-16" />}
          >
            {sampleRecipes.sweets.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>

          {/* Comfort Bowls & Soups */}
          <RecipeSection
            title="Comfort Bowls & Soups"
            description="Warm, cozy meals for when you need a hug in food form."
            icon={<Soup className="w-16 h-16" />}
          >
            {sampleRecipes.comfort.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>

          {/* Light & Healthy */}
          <RecipeSection
            title="Light & Healthy"
            description="Nourishing options for when you want to feel good inside and out."
            icon={<Apple className="w-16 h-16" />}
          >
            {sampleRecipes.healthy.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>

          {/* Quick Bites & Hacks */}
          <RecipeSection
            title="Quick Bites & Hacks"
            description="Fast solutions for busy schedules and creative ways to upgrade basic ingredients."
            icon={<Zap className="w-16 h-16" />}
          >
            {sampleRecipes.quick.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </RecipeSection>
        </div>

        {/* Submit Recipe Section */}
        <div id="submit-recipe" className="py-16">
          <SubmitRecipeForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground">
            Made with love by students, for students. Because everyone deserves a good meal, 
            no matter how far from home they are.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;