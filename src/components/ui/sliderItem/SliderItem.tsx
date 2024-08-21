import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderItemProps {
  itemActive: number;
  id: number;
  name: string;
  image: string;
  desc: string;
}

export const SliderItem = ({
  itemActive,
  id,
  image,
  name,
  desc,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500",
        itemActive === id ? "opacity-100 z-10" : "opacity-0"
      )}
    >
      <div className="relative w-full h-full">
        <Image src={image} alt="Image" fill className="object-cover" />
      </div>
      <div className=" absolute left-[3%] top-[11.5%] w-[328px] h-[350px] sm:w-[590px] lg:w-[800px] z-10">
        <h2
          className={cn(
            "text-[26px] sm:text-5xl lg:text-7xl tracking-[10px] text-white font-bold translate-y-[30px] blur-[20px] opacity-0 animation-delay-2",
            itemActive === id && "animate-show-content"
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "uppercase text-sm sm:text-xl lg:text-2xl text-white translate-y-[30px] blur-[20px] opacity-0 animation-delay-4",
            itemActive === id && "animate-show-content"
          )}
        >
          {desc}
        </p>
        <button
          className={cn(
            "mt-4 text-sm sm:text-xl lg:text-2xl text-white font-bold border animation-delay-6 animate-show-content"
          )}
        >
          VER PRODUCTOS
        </button>
      </div>
    </li>
  );
};
