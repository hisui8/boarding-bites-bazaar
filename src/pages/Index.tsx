import { useState } from "react";
import { ChefHat, Coffee, Cookie, Soup, Apple, Zap, Heart, BookOpen, ExternalLink } from "lucide-react";
import { RecipeCardCompact } from "@/components/RecipeCardCompact";
import { RecipeModal } from "@/components/RecipeModal";
import { RecipeSection } from "@/components/RecipeSection";
import { AddYoursSection } from "@/components/AddYoursSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  console.log("Index component is rendering");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
    // Re-enable scrolling when modal closes
    document.body.style.overflow = 'unset';
  };

  const handleRecipeClickWithScroll = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
    // Disable scrolling when modal opens
    document.body.style.overflow = 'hidden';
  };

  // All recipes organized by category
  const recipes = {
    mains: [
      {
        title: "Chicken rice",
        author: "woh",
        location: "Korea",
        difficulty: 1,
        ingredients: ["Rotisserie chicken", "instant rice", "chili oil"],
        instructions: ["buy chicken", "shred it", "microwave rice", "put chicken on", "Chili oil", "put rest of chicken in freezer then repeat if necessary"],
        chefsComments: "Good protein and filling 👍 lel"
      },
      {
        title: "Aglio Oglio Pasta",
        author: "Mimi Smith",
        location: "HK/ Switzerland",
        difficulty: 2,
        ingredients: ["LOTS of garlic cloves", "1 shallot", "1 small chilli", "igloo seasoning", "salt", "pepper", "garlic/onion seasoning", "olive oil", "pasta of choice", "optional: mushrooms"],
        instructions: ["chop garlic into round slightly thick slices", "dice shallots", "chop chillies however you like", "(optional: chop mushrooms)", "boil water", "put pasta in water when starts to bubble/boil", "in a frying pan/saucepan, pour a good amount of olive oil and on low med heat pour in the garlic", "once it starts cooking add the onions and if needed for more oil you can add some", "add salt and pepper", "(opt: if u add mushrooms add in now)", "fry until golden and soft and then add chilli", "Once everything is soft and cooked add all of your seasoning", "drain your pasta fully cooked and mix with your garlic onion mixture", "feel free to top with Parmesan or cheese of choice but it is yummy as is as well! :) enjoy!"],
        chefsComments: "no not really my grandpa made it and I find it super comforting - it's just super yum and good for you because of the amount of garlic - comfort and happiness as it is a simple but very nice almost a little fancy looking dish. Hopefully you like this dish and good luck with boarding school cookbook <3"
      },
      {
        title: "Truffle Gnocchi",
        author: "Eric Sim",
        location: "Seoul",
        difficulty: 4,
        ingredients: ["Potato's", "truffles", "Parmesan", "White Wine", "black truffle butter", "mushrooms", "heavy cream", "garlic", "flour", "salt"],
        instructions: ["make mashed potatoes", "mix with flour", "make into gnocchi shape", "heat pan", "cook mushrooms with garlic", "add white wine to pan", "add heavy cream to pan", "add gnocchi", "plate with shredded truffles and truffle butter"],
        chefsComments: "Recommended to my by my father, liked it - I always liked the taste of truffle - aroma and something unique to Italian cuisine. Best of luck on the project I assume you're doing! The Sim family says hi!"
      },
      {
        title: "Japanese curry",
        author: "Lucia",
        location: "Irvine CA",
        difficulty: 3,
        ingredients: ["Japanese curry packet (golden curry)", "potatoes", "Carrots", "Onion", "Beef/chicken", "Rice"],
        instructions: ["Choose whatever protein you want or none at all. If your protein is beef, pork, chicken, or lamb, cut it into large bite (or two bite) sized pieces. Cut a medium to large onion into a medium dice.", "Saute your onions in some butter or vegetable oil. When the onions are translucent, add the terrestrial protein (but not fish or tofu yet - save those for later).", "When the protein is starting to brown, add about two cups of water. Cover and bring to a boil, then reduce to a simmer. Let simmer for about 10 minutes.", "Add the curry bricks and stir to dissolve. If you're making a fish or tofu curry, add that after the bricks are completely incorporated. Bring back to a simmer. Serve with/over rice or udon."],
        chefsComments: "I just make it with my friends often; very comforting dish and can take away your worries from terrible schoolwork. Yayyy this is great project Hisu 😁"
      },
      {
        title: "Quesadillas",
        author: "vL",
        location: "México",
        difficulty: 5,
        ingredients: ["oaxaca cheese", "corn tortilla"],
        instructions: ["Put tortilla in the stove and when it is hot from Both sides add the cheese in half the circle of the tortilla. When the cheese starts to melt fold the tortilla. Before doing that u can also add spinach"],
        chefsComments: "A real quesadilla"
      },
      {
        title: "soondobu",
        author: "WILLIAM LAWS 🗣️🗣️⁉️⁉️🔥🔥",
        location: "SAUDI ARABIA",
        difficulty: 1,
        ingredients: ["soondobu packet (around $15)", "Kalbi (around $45, but will last for several meals)", "water 🗣️"],
        instructions: ["boil water", "soup base in and kalbi", "dobu in", "wait for three minutes 🔥🔥", "EAT 🗣️🗣️🔥🔥⁉️⁉️"],
        chefsComments: "my mom makes it for me a lot and i make it for myself when i dont have time - its easy asf and its the only korean dish ik how to make - yummy COMMENTS"
      },
      {
        title: "西红柿炒鸡蛋",
        author: "anon",
        location: "Earth",
        difficulty: 1,
        ingredients: ["Eggs and tomato"],
        instructions: ["Scramble the eggs with some oil; put more oil in a pan before putting the sliced tomatoes in. Cook the tomatos for a while until they become soft and add the scrambled eggs in. Add some salt"],
        chefsComments: "It's just good"
      },
      {
        title: "Hamburg",
        author: "Shunsuki Honjonov",
        location: "Tokyo/Vancouver",
        difficulty: 3,
        ingredients: ["Onions", "eggs", "milk", "grounded beef", "can of demi-glace source", "breadcrumbs (or panko)"],
        instructions: ["Dice up onions", "Stir fry onions", "Take onions off the heat and mix them thoroughly with grounded beef along with some spice", "Make \"burger shape\" out of it", "Cook them", "Open the can and pour them in to the pan", "Done 👍"],
        chefsComments: "Back in 2014, my mother was busy with work so my grandma came over to our house to cook dinner. Eventually she taught me how to cook and the first thing she taught was this."
      },
      {
        title: "gigi hadid pasta",
        author: "gwen",
        location: "my boyfriend",
        difficulty: 2,
        ingredients: ["basic pasta ingredients but with vodka!"],
        instructions: ["you can search them up on the internet!"],
        chefsComments: "it just takes nice 🧑‍🍳"
      }
    ],
    snacks: [
      {
        title: "Teriyaki Sauce",
        author: "Metta",
        location: "My homeland is the Philippines, my heart is in Hong Kong, and my life is in Gill.",
        difficulty: 1,
        ingredients: ["1.5 TSP Brown Sugar", "1 TSP honey", "1/2 TSP Sesame Oil", "1/2 TSP garlic"],
        instructions: ["When I can't find something that I want to eat, there's always grilled chicken on the salad bar, broccoli, snow peas, and rice. So I make a quick teriyaki sauce.", "Mix all the sauce ingredients together in a bowl and microwave for about 30 seconds.", "Get some grilled chicken from the salad bar and other veggies that you want toss in the sauce and put back in the microwave for another 30 seconds.", "Spoon over a bowl of white rice and enjoy!"],
        chefsComments: "When I was a student, it wasn't common to have the diversity of dishes that we currently have today. When I missed home, I wanted a comfort food that was quick and always accessible. All the ingredients for the teriyaki sauce can be found during our meals - so I always had a go to meal when I needed something different from what was being served."
      },
      {
        title: "예찬원 바삭군 시즈닝 먹태",
        author: "julie ahn hehehe",
        location: "seoul/nj/suff",
        difficulty: 1,
        ingredients: ["예찬원 바삭군 시즈닝 먹태 청양마요맛, 30g, 2개 (or other flavors from 쿠팡)", "sorry i don't have good 추천 recipes 🥲🥲 this is the best i got hahah"],
        instructions: ["open the packet and eat it hehe"],
        chefsComments: "i didn't know that 황태 was packed with protein. apparently it's like 80 percent protein but yeah after i discovered this fact, it became my go to snack hi hisusususupernova 💛💛"
      },
      {
        title: "tunacado spring rolls",
        author: "kie",
        location: "new york",
        difficulty: 2,
        ingredients: ["canned tuna", "lemon", "spicy mayo", "avocado", "rice paper", "water", "soy sauce", "any other veggies"],
        instructions: ["open your can of tuna and drain it properly", "in a bowl, combine your tuna, juice of 1/2 of a lemon, any seasonings of your choice, 1/2 tbsp of soy sauce and 1 tbsp of spicy mayo", "chop up your avocado and any other veggies you want to add", "in a large enough bowl, add water", "submerge your rice paper in water for 20 or so secs (until its soft) - add in your fillings and wrap", "repeat step five until you have your desired amount (usually makes 4 rolls)", "enjoy with a side of soy sauce"],
        chefsComments: "i make it at home for lunch bc #proteingains"
      },
      {
        title: "Rice seaweed",
        author: "Lucieeee",
        location: "Fiji and Netherlands",
        difficulty: 1,
        ingredients: ["Microwaveable sticky rice", "soy sauce", "seaweed"],
        instructions: ["Microwave rice", "put soy sauce on rice", "grab rice with seaweed and enjoyyy"],
        chefsComments: "I lived in Korea and would always eat this as a snack I hope readers experience joy and happiness cuz this dish is fire Love you Hisu miss you very much"
      },
      {
        title: "Buffalo chicken dip",
        author: "Vanessa🩷🩷🩷",
        location: "Hamden ct",
        difficulty: 1,
        ingredients: ["Chicken (shredded)", "cream cheese", "Mexican cheese", "buffalo sauce", "maybe some salt and pepper"],
        instructions: ["Chicken", "shred the chicken", "add sour cream and buffalo sauce", "cheese on top and inside", "bake it or microwave it", "get a chip"],
        chefsComments: "I like buffalo chicken dip a lot and it's so easy to make at school"
      },
      {
        title: "Spam fried rice",
        author: "Coiney",
        location: "Homeless",
        difficulty: 2,
        ingredients: ["Spam", "day old rice", "scallions", "sesame oil", "eggs", "vegetable (wutever u want)", "soy sauce", "chile crisp", "sesame seeds"],
        instructions: ["Whisk eggs in a separate bowl, heat pan on high heat, once heated pour oil and wait until the oil starts smoking", "pour eggs into the heated oil and scramble until fluffy", "in a separate pan also on high fry off spam for 5ish min on medium heat", "rice and spam goes into pan with eggs, add WASHED vegetables and continue cooking", "add a dash of soy sauce and small amount of sesame oil, serve and top with chili crisp and sesame seeds"],
        chefsComments: "I threw ts tgth for my dad"
      },
      {
        title: "Beans on toast",
        author: "James Wareham",
        location: "Shanghai",
        difficulty: 1,
        ingredients: ["Bread", "beans", "cheese"],
        instructions: ["Microwave the beans for 2 minutes in a microwaveable container", "toast the bread", "put cheese on the bread and pour the beans over the top"],
        chefsComments: "It's British and it tastes good"
      }
    ],
    sweets: [
      {
        title: "MANGO MOCHI??? Matcha tiramisu, red velvet brownies/cookies omg, LAVA CAKE, fruit /lemon tartsssss, ive been tjinking abt banana bread lately 🤩🤩",
        author: "Josephine",
        location: "Hk",
        difficulty: 3,
        ingredients: ["Oh dear"],
        instructions: ["Uh oh"],
        chefsComments: "I just love food man"
      },
      {
        title: "Oreo Mug Cake",
        author: "Chloe Kim",
        location: "Wherever that makes me feel comfortable and welcomed",
        difficulty: 1,
        ingredients: ["Oreo", "Milk", "(Mug)"],
        instructions: ["Add the oreos into a mug", "Pour in the milk where about 1/4 of the mug is filled", "Crush the Oreos and stir until it is formed as a thick batter with the milk", "Pop the mug into the microwave for 1 1/2 minutes (adjust the time based on your preferences)"],
        chefsComments: "I accidentally discovered this dish while trying to melt the Oreos (idk what I was thinking…)"
      },
      {
        title: "Best Chocolate Chip Cookies",
        author: "Talia Baron",
        location: "New York",
        difficulty: 2,
        ingredients: ["3 cups All purpose flour", "2 cups sugar (can use 1 cup of brown and 1 cup of white or just 2 cups white)", "1 teaspoon baking soda", "1/2 teaspoon baking powder", "1 teaspoon salt", "2 eggs", "1 cup softened butter", "2 teaspoons vanilla extract", "2 cups chocolate chips", "*makes 36 standard sized cookies"],
        instructions: ["preheat oven 375 F", "medium bowl mix flour, baking soda, baking powder, and salt", "In separate bowl, cream together butter and sugar", "mix in eggs and vanilla into wet ingredients", "mix dry ingredients into wet ingredients until combined", "Add in chocolate chips", "roll into 2-3 tablespoon sized balls (or however big you want them)", "*I like to put more salt on top before putting them in the oven (optional)", "place on lined baking sheet and bake 8-10 minutes or until just barely golden", "let them sit on baking sheet for 5 mins and then let them cool on cooling rack"],
        chefsComments: "I first starting making these cookies during Covid and my family really loves them. They always ask me to make them for them when I'm home. I just really love chocolate chip cookies and they remind me of the cherished time that I spend with my family. I hope readers will experience the warmth and comfort of a good cookie :) I got this recipe from https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/#wprm-recipe-container-8678"
      }
    ],
    healthy: [
      {
        title: "Over night oats",
        author: "Kathryn",
        location: "California",
        difficulty: 2,
        ingredients: ["Water", "Oats", "Chia Seeds", "Milk or Yogurt", "Coco powder", "honey", "fruit"],
        instructions: ["grab a container the can seal", "add and equal amout of milk or yogurt with chia seeds and oats", "Mix", "add the toppings like coco powder and honey", "refrigerate overnight", "in the morning top with the fruit"],
        chefsComments: "I really value my time in the mornings so this is a super easy meal I can eat on the go while also getting a lot of nutrition."
      },
      {
        title: "superb smoothie for two 😍",
        author: "serafina",
        location: "Hong Kong",
        difficulty: 1,
        ingredients: ["BLENDER ESSENTIAL (borrow one from faculty, no illegal blenders allowed)", "1 Banana", "a cup of milk", "two handfuls of berries or other fruit (frozen or fresh)", "a decent amount of ice based on preference", "sweet yogurt (plain greek yogurt isn't tasty let's be real)", "honey or other sweetener if the fruit you use isn't ripe enough (usually not needed)"],
        instructions: ["Put it all in the blender and blend until smooth! Pour into two or more glasses. Hardest part is acquiring materials."],
        chefsComments: "Although this is a very basic recipe, I find that simple dishes are often the most comforting. This is the first thing my mom taught me to make, so I've had a million of these smoothies since I was little. If the smoothie doesn't turn out well, it's really fun to troubleshoot by adding in random things! The sky is the limit."
      },
      {
        title: "西红柿炒鸡蛋",
        author: "anon",
        location: "Earth",
        difficulty: 1,
        ingredients: ["Eggs and tomato"],
        instructions: ["Scramble the eggs with some oil; put more oil in a pan before putting the sliced tomatoes in. Cook the tomatos for a while until they become soft and add the scrambled eggs in. Add some salt"],
        chefsComments: "It's just good"
      }
    ],
    quick: [
      {
        title: "phibrodchefs",
        author: "Phoenix",
        location: "New Zealand",
        difficulty: 1,
        ingredients: ["Bread", "cheese", "lettuce", "mayonnaise", "chicken"],
        instructions: ["It's fr just a sandwich with extra mayo"],
        chefsComments: "Bros will for real taste heaven when they have it. Don't over do anything else apart from the mayonnaise. Just tastes like a nice summer meal tbh."
      },
      {
        title: "Ham and cheese griddle",
        author: "Jaxon Payne",
        location: "Portland oregon",
        difficulty: 2,
        ingredients: ["Sandwich bread specifically the subway type", "oil and vinegar", "cheese", "onion", "lettuce", "mayo", "Panini press"],
        instructions: ["Get bread", "Put ham on one side very small bit of mayo with the cheese on the other side. Fold together with small squirt of oil and vinegar.", "Panini press until cheese is melting out the sides.", "Eat like that or add lettuce and onions into sandwich, retomar quickly, cover with oil and vinegar."],
        chefsComments: "Every Sunday I eat this because dhall is closed and I get hungry and they only have this stuff out. It's awesome because it basically becomes a ham and cheese cracker if you press it right so you can throw like 4 of them down before you feel like you ate one actual sandwich"
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
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 hero-title">
            ⋆ The Ultimate Boarding School Cookbook ⋆
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed hero-description text-center">
            Food has this magical way of bringing people together, especially when you're far from home.<br/>
            Whether you're dealing with homesickness, celebrating a small victory, or just trying to make 
            your dorm room feel a little more like home, these student-tested recipes are here to help 
            you build community, one meal at a time 𐙚⋆.˚
          </p>
        </div>
      </header>


      {/* Category Navigation */}
      <div className="bg-primary py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <button
              onClick={() => scrollToSection('mains')}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="drop-shadow-lg bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                <ChefHat className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-primary-foreground text-center">Dorm-Friendly Mains</span>
            </button>
            <button
              onClick={() => scrollToSection('snacks')}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="drop-shadow-lg bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                <Coffee className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-primary-foreground text-center">Savory Snacks & Sides</span>
            </button>
            <button
              onClick={() => scrollToSection('sweets')}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="drop-shadow-lg bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                <Cookie className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-primary-foreground text-center">Sweet Treats</span>
            </button>
            <button
              onClick={() => scrollToSection('healthy')}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="drop-shadow-lg bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                <Apple className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-primary-foreground text-center">Light & Healthy</span>
            </button>
            <button
              onClick={() => scrollToSection('quick')}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="drop-shadow-lg bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                <Zap className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-primary-foreground text-center">Quick Bites & Hacks</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Get Inspired Section */}
        <div className="py-16">
          <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">*•̩̩͙✩•̩̩͙* Get Inspired *•̩̩͙✩•̩̩͙*</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-center leading-relaxed">
              Every dish tells a story of comfort, creativity, and connection &lt;3 These aren't just meals - they're moments of joy shared across dorm rooms and late-night cooking adventures! Your kitchen creations remind us that home isn't a place, it's a feeling we create together 𐙚⋆.˚
            </p>
          </div>
        </div>

        {/* Add Yours Section */}
        <AddYoursSection images={[
          "/lovable-uploads/ab62cb69-3e9a-42b6-b739-e32be31fc039.png",
          "/lovable-uploads/5fcae279-9ff4-4440-9436-075c82058d26.png",
          "/lovable-uploads/405e0730-6018-4417-b666-de9e5705172b.png",
          "/lovable-uploads/4ab7f9a7-5c7b-4a22-a386-1188af33aafb.png",
          "/lovable-uploads/97c400d4-385c-4647-a4f8-a3994101030d.png",
          "/lovable-uploads/518571a9-9c35-444f-a121-5a5c7ed12d42.png",
          "/lovable-uploads/de0a47be-ac27-4c82-8e81-7de9abe96d7d.png",
          "/lovable-uploads/2a085e41-428c-496e-bbd0-1949c5858ad9.png"
        ]} />

        <div id="recipe-sections" className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              *•̩̩͙✩•̩̩͙* Recipe Collections *•̩̩͙✩•̩̩͙*
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
              From quick midnight snacks to comfort food that reminds you of home, 
              we've got recipes for every mood and moment 𐙚⋆.˚
            </p>
          </div>

          {/* Dorm-Friendly Mains */}
          <RecipeSection
            id="mains"
            title="Dorm-Friendly Mains"
            description="Hearty meals you can make with minimal equipment that will actually fill you up and keep you going."
            icon={<ChefHat className="w-16 h-16" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {recipes.mains.map((recipe, index) => (
                <RecipeCardCompact 
                  key={index} 
                  title={recipe.title}
                  author={recipe.author}
                  difficulty={recipe.difficulty}
                  onClick={() => handleRecipeClickWithScroll(recipe)}
                />
              ))}
            </div>
          </RecipeSection>

          {/* Savory Snacks & Sides */}
          <RecipeSection
            id="snacks"
            title="Savory Snacks & Sides"
            description="Perfect for study sessions, movie nights, or when you need something satisfying between meals."
            icon={<Coffee className="w-16 h-16" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {recipes.snacks.map((recipe, index) => (
                <RecipeCardCompact 
                  key={index} 
                  title={recipe.title}
                  author={recipe.author}
                  difficulty={recipe.difficulty}
                  onClick={() => handleRecipeClickWithScroll(recipe)}
                />
              ))}
            </div>
          </RecipeSection>

          {/* Sweet Treats */}
          <RecipeSection
            id="sweets"
            title="Sweet Treats"
            description="Because sometimes you need a little sugar to get through the day (or night)."
            icon={<Cookie className="w-16 h-16" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {recipes.sweets.map((recipe, index) => (
                <RecipeCardCompact 
                  key={index} 
                  title={recipe.title}
                  author={recipe.author}
                  difficulty={recipe.difficulty}
                  onClick={() => handleRecipeClickWithScroll(recipe)}
                />
              ))}
            </div>
          </RecipeSection>

          {/* Light & Healthy */}
          <RecipeSection
            id="healthy"
            title="Light & Healthy"
            description="Nourishing options for when you want to feel good inside and out."
            icon={<Apple className="w-16 h-16" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {recipes.healthy.map((recipe, index) => (
                <RecipeCardCompact 
                  key={index} 
                  title={recipe.title}
                  author={recipe.author}
                  difficulty={recipe.difficulty}
                  onClick={() => handleRecipeClickWithScroll(recipe)}
                />
              ))}
            </div>
          </RecipeSection>

          {/* Quick Bites & Hacks */}
          <RecipeSection
            id="quick"
            title="Quick Bites & Hacks"
            description="Fast solutions for busy schedules and creative ways to upgrade basic ingredients."
            icon={<Zap className="w-16 h-16" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {recipes.quick.map((recipe, index) => (
                <RecipeCardCompact 
                  key={index} 
                  title={recipe.title}
                  author={recipe.author}
                  difficulty={recipe.difficulty}
                  onClick={() => handleRecipeClickWithScroll(recipe)}
                />
              ))}
            </div>
          </RecipeSection>
        </div>

        {/* Share Your Recipe Section */}
        <div className="py-16">
          <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">✧･ﾟ: Share Your Recipe :･ﾟ✧</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-center leading-relaxed">
              Have a go-to recipe that's gotten you through late-night study sessions or homesick moments? 
              Share it with fellow students and help build our community cookbook 𐙚⋆.˚
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a 
                href="https://forms.gle/zBjMQ477TwoaZuL78" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                ✧･ﾟ: Submit Your Recipe :･ﾟ✧
              </a>
            </Button>
          </div>
        </div>

      </div>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            Made with love by students, for students. Because everyone deserves a good meal, 
            no matter how far from home they are 𐙚⋆.˚
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;