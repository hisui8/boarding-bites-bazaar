import { ReactNode } from "react";

interface RecipeSectionProps {
  id?: string;
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export const RecipeSection = ({ id, title, description, icon, children }: RecipeSectionProps) => {
  return (
    <section id={id}>
      <div className="text-center py-12">
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-3 section-title">✧･ﾟ: {title} :･ﾟ✧</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto section-description">{description}</p>
      </div>
      <div className="pb-12">
        {children}
      </div>
    </section>
  );
};