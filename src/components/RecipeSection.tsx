import { ReactNode } from "react";

interface RecipeSectionProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export const RecipeSection = ({ title, description, icon, children }: RecipeSectionProps) => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {children}
      </div>
    </section>
  );
};