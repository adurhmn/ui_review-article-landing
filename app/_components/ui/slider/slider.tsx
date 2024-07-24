// take all control and be opinionated

import cn from "@/app/_utils/cn";
import { ISliderProps } from "./type";
import { useMemo, useState } from "react";

// animation is final, just do UI + basic funcs first
// horizontal slider component
export default function Slider({
  slides,
  activeSlide: activeSlideDefault,
  onNavigate,
  contentBox,
}: ISliderProps) {
  const [activeSlide, setActiveSlide] = useState(
    activeSlideDefault || slides[0].key
  );

  const component = useMemo(() => {
    return slides.filter(({ key }) => activeSlide === key)[0].component;
  }, [activeSlide, slides]);

  return (
    <div className="flex flex-col gap-3 items-center">
      {/* should have fixed height (typically max height) */}
      <div
        className={cn(
          "w-full",
          typeof contentBox?.height === "number" &&
            `h-[${contentBox.height}px]`,
          typeof contentBox?.width === "number" && `h-[${contentBox.width}px]`
        )}
      >
        {component}
      </div>
      <div className="flex gap-2">
        {slides.map(({ key }) => (
          <span
            key={key}
            className={cn(
              "rounded-full h-2 w-5 bg-x-blue-light",
              activeSlide === key && "bg-x-blue"
            )}
            onClick={() => setActiveSlide(key)}
          />
        ))}
      </div>
    </div>
  );
}
