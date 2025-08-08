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
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const processFiles = (files: FileList | File[]) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
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
      }
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      processFiles(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files) {
      processFiles(files);
    }
  };

  const allImages = [...images, ...uploadedImages];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            ੈ✩‧₊˚ Add Yours - Student Creations ˚₊‧✩ੈ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-center leading-relaxed">
            Share your culinary masterpieces! Upload photos of your creations and inspire fellow students around the world 𐙚⋆.˚
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Unified Upload Area */}
        <div className="mb-12">
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 transition-all duration-300 cursor-pointer ${
              isDragOver 
                ? 'border-primary bg-primary/5 scale-105' 
                : 'border-muted-foreground/25 hover:border-primary hover:bg-primary/5'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <div className="text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">✧･ﾟ: Upload Your Own! :･ﾟ✧</h3>
              <p className="text-muted-foreground mb-4">
                Drag & drop your images here, or click to browse
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Camera className="w-4 h-4 mr-2" />
                ✧･ﾟ: Choose Photos :･ﾟ✧
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Supports camera roll, computer files, and drag & drop
              </p>
            </div>
            
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Inspirational Message */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">＊*•̩̩͙✩•̩̩͙*˚ Get Inspired ˚*•̩̩͙✩•̩̩͙*˚＊</h3>
          <p className="text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            Every dish tells a story of <strong>comfort, creativity, and connection</strong> {"<3"} These aren't just meals - 
            they're <strong>moments of joy</strong> shared across dorm rooms and late-night cooking adventures! 
            Your kitchen creations remind us that <strong>home isn't a place, it's a feeling</strong> we create together 𐙚⋆.˚
          </p>
        </div>
      </div>
    </section>
  );
};