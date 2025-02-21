
import { Award, ImageIcon, ShieldCheck, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryImageProps = {
  image: string;
  name: string;
  index: number;
  total: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  isZoomed: boolean;
  mousePosition: { x: number; y: number };
  onZoom: (isZoomed: boolean) => void;
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
};

export function GalleryImage({
  image,
  name,
  index,
  total,
  stockStatus,
  isZoomed,
  mousePosition,
  onZoom,
  onMouseMove,
  onMouseLeave
}: GalleryImageProps) {
  return (
    <div className="relative group">
      <div 
        className={cn(
          "relative w-full h-full overflow-hidden transition-all duration-300",
          isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in',
          !isZoomed && "group-hover:scale-[1.02]"
        )}
        onClick={() => onZoom(!isZoomed)}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={image}
          alt={`${name} - View ${index + 1}`}
          className={cn(
            "w-full h-full object-cover transition-all duration-300",
            isZoomed ? 'scale-150' : 'scale-100'
          )}
          style={isZoomed ? {
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
          } : undefined}
        />
        
        {!isZoomed && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium shadow-lg w-fit">
          <Award className="w-3.5 h-3.5" />
          Premium Quality
        </div>
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium shadow-lg w-fit">
            <ImageIcon className="w-3.5 h-3.5" />
            {index + 1}/{total}
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium shadow-lg w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Product
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-50">
        <div 
          className={cn(
            "px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg",
            "font-medium text-xs tracking-wide animate-in fade-in-50",
            "border transition-all duration-300",
            stockStatus === 'In Stock' && "bg-green-500/10 text-green-500 border-green-500/20",
            stockStatus === 'Low Stock' && "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 animate-pulse",
            stockStatus === 'Out of Stock' && "bg-red-500/10 text-red-500 border-red-500/20"
          )}
        >
          {stockStatus}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-50">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium shadow-lg">
          {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
          {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
        </div>
      </div>
    </div>
  );
}
