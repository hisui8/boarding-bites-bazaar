import { ChefHat, Coffee, Cookie, Apple, Zap, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const recipeCategories = [
  { title: "Home", id: "top", icon: Home },
  { title: "Dorm-Friendly Mains", id: "mains", icon: ChefHat },
  { title: "Savory Snacks & Sides", id: "snacks", icon: Coffee },
  { title: "Sweet Treats", id: "sweets", icon: Cookie },
  { title: "Light & Healthy", id: "healthy", icon: Apple },
  { title: "Quick Bites & Hacks", id: "quick", icon: Zap },
];

export function AppSidebar() {
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent className="bg-card">
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground font-heading">
            Recipe Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recipeCategories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(category.id)}
                    className="hover:bg-primary/10 text-foreground"
                  >
                    <category.icon className="h-4 w-4 text-primary" />
                    <span>{category.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
