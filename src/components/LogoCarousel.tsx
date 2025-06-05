
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  title: string;
  description: string;
  image: string;
  client: string;
  industry: string;
  year: string;
}

interface LogoCarouselProps {
  isOpen: boolean;
  onClose: () => void;
  logos: Logo[];
  initialIndex: number;
}

export const LogoCarousel = ({ isOpen, onClose, logos, initialIndex }: LogoCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (api && isOpen) {
      api.scrollTo(initialIndex);
    }
  }, [api, initialIndex, isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentLogo = logos[current - 1] || logos[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl mx-auto p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="text-white" size={24} />
        </button>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={logo.id}>
                <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[70vh]">
                  <div className="flex-1 flex items-center justify-center bg-white rounded-2xl p-8 lg:p-12 min-h-[400px]">
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1 text-white space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-2">{logo.title}</h2>
                      <p className="text-purple-400 text-lg">{logo.client}</p>
                    </div>
                    
                    <p className="text-white/80 text-lg leading-relaxed">
                      {logo.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <div className="text-sm text-white/60 mb-1">Industry</div>
                        <div className="text-white font-medium">{logo.industry}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Year</div>
                        <div className="text-white font-medium">{logo.year}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
          <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
        </Carousel>

        <div className="flex items-center justify-center mt-6 space-x-4">
          <div className="text-white/60 text-sm">
            {current} of {count}
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 === current ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
