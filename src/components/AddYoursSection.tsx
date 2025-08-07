import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Heart, Star, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddYoursSectionProps {
  images: string[];
}

export const AddYoursSection = ({ images }: AddYoursSectionProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target!.result as string]);
            toast({
              title: "Image uploaded!",
              description: "Your delicious creation has been added to the gallery.",
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const allImages = [...images, ...uploadedImages];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Add Yours - Student Creations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Share your culinary masterpieces! Upload photos of your creations and inspire fellow students around the world.
          </p>
          
          {/* Upload Options */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <label htmlFor="camera-upload" className="cursor-pointer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
            </label>
            <label htmlFor="gallery-upload" className="cursor-pointer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ImageIcon className="w-4 h-4 mr-2" />
                Choose from Gallery
              </Button>
            </label>
            
            {/* Camera Input */}
            <input
              id="camera-upload"
              type="file"
              accept="image/*"
              capture="environment"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            
            {/* Gallery Input */}
            <input
              id="gallery-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square">
                <img
                  src={image}
                  alt={`Student creation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Heart className="w-6 h-6 text-white" />
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Inspirational Message */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Get Inspired</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Every dish tells a story of comfort, creativity, and connection. These aren't just meals - 
            they're moments of joy shared across dorm rooms, study sessions, and late-night cooking adventures. 
            Your kitchen creations remind us that home isn't a place, it's a feeling we create together.
          </p>
        </div>
      </div>
    </section>
  );
};