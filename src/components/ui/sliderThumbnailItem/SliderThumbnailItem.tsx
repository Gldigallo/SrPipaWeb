import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderThumbnailItemProps {
  itemActive: number;
  id: number;
  image: string;
  name: string;
  onClick: () => void;
}

export const SliderThumbnailItem = ({
  itemActive,
  id,
  image,
  name,
  onClick,
}: SliderThumbnailItemProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className={cn(
        "transition-all duration-300 overflow-hidden relative after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150",
        itemActive === id
          ? "w-[650px] md:w-[350px]  brightness-200"
          : "w-[100px] md:w-[150px] brightness-50"
      )}
    >
      <section className="flex w-28">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover rounded-lg"
        />
      </section>
      <div
        className={cn(
          "absolute top-auto right-[10px] bottom-[20px] left-[10px] z-10 translate-y-[30px] blur-[20px] opacity-0 animation-delay-3",
          itemActive === id && "animate-show-content"
        )}
      >
        <h2 className="line-clamp-1 text-xs md:text-2xl text-start md:text-center font-bold ">
          {name}
        </h2>
      </div>
    </li>
  );
};
