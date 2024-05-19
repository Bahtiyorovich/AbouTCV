import { Carousel } from "@material-tailwind/react";
import { CRFirst, CRThree, CRTwo, CRFour } from "../assets";
 
export function CarouselCustom() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={3000}
      className="rounded-xl w-[78%] md:w-[30%]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={CRFirst}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={CRTwo}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={CRThree}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={CRFour}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}