
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SellerCard } from "./SellerCard";

const sellers = [
  {
    id: 1,
    name: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    description: "Professional photographer specializing in portrait and landscape photography. Creating timeless memories through my lens.",
    followers: 12500,
    isTopSeller: true,
    isVerified: true,
    rating: 4.8,
    recentSales: 156,
    responseTime: "~1h",
    completion: 99,
  },
  {
    id: 2,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    description: "Digital artist and illustrator with a passion for creating unique character designs and concept art.",
    followers: 18900,
    isTopSeller: true,
    isVerified: true,
    rating: 4.9,
    recentSales: 230,
    responseTime: "~30m",
    completion: 100,
  },
  {
    id: 3,
    name: "Marcus Kim",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    description: "Experienced graphic designer specializing in brand identity and logo design. Let's bring your vision to life.",
    followers: 8700,
    isTopSeller: false,
    isVerified: true,
    rating: 4.7,
    recentSales: 89,
    responseTime: "~3h",
    completion: 95,
  },
  {
    id: 4,
    name: "Emma Watson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    description: "UI/UX designer with a focus on creating intuitive and beautiful digital experiences. 5+ years of experience.",
    followers: 21300,
    isTopSeller: true,
    isVerified: true,
    rating: 4.9,
    recentSales: 312,
    responseTime: "~1h",
    completion: 98,
  },
  {
    id: 5,
    name: "David Park",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&q=80",
    description: "Motion designer and animator creating engaging visual content for brands and businesses.",
    followers: 15400,
    isTopSeller: false,
    isVerified: true,
    rating: 4.6,
    recentSales: 145,
    responseTime: "~2h",
    completion: 96,
  },
];

export const SellersList = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Featured Sellers</h2>
          <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
            containScroll: "keepSnaps"
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            <CarouselItem className="pl-4 basis-0" /> {/* Starting padding */}
            {sellers.map((seller) => (
              <CarouselItem key={seller.id} className="pl-2 basis-[85%] sm:basis-[45%] lg:basis-[32%] xl:basis-[24%]">
                <SellerCard seller={seller} />
              </CarouselItem>
            ))}
            <CarouselItem className="pl-4 basis-0" /> {/* Ending padding */}
          </CarouselContent>
          <div className="max-w-7xl mx-auto relative">
            <CarouselPrevious className="hidden md:flex absolute -left-12 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm" />
            <CarouselNext className="hidden md:flex absolute -right-12 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
