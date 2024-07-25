import cn from "@/app/_utils/cn";
import { Slider } from "../../ui/slider";
import { roboto } from "@/app/_assets/fonts";
import { ArrowRight } from "@/app/_assets/icons";
import HeroDotsPattern from "@/app/_assets/imgs/hero/dots-pattern";
import HeroDoor from "@/app/_assets/imgs/hero/door";
import HeroMan from "@/app/_assets/imgs/hero/man";
import HeroInfo1 from "@/app/_assets/imgs/hero/info-1";
import HeroInfo2 from "@/app/_assets/imgs/hero/info-2";
import { Button } from "../../ui/button";

const IntroSlide = () => {
  return (
    <div className="h-[481px] w-full rounded-[32px] bg-x-white-sky flex">
      <section className="h1 w-[560px] p-12 py-6">
        <span>
          <h1>Hi! I Am</h1>
          <h1 className="bg-void-gradient bg-clip-text text-transparent">
            Romeo Saha
          </h1>
        </span>
        {/* 20 word lorem ipsum */}
        <p className={cn("h6 mt-2", roboto.className)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="w-40 text-center">
            <h4 className="h3">500k+</h4>
            <p className={cn("h6-bold", roboto.className)}>
              Users use this app
            </p>
          </div>
          <div className="w-40 text-center">
            <h4 className="h3">100k+</h4>
            <p className={cn("h6-bold", roboto.className)}>
              Users review this app
            </p>
          </div>
          <div className="w-40 text-center">
            <h4 className="h3">1k+</h4>
            <p className={cn("h6-bold", roboto.className)}>
              Users use this app
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-10 h6-bold">
          <Button>Read Now</Button>
          <Button
            variant={"ghost"}
            rightIcon={<ArrowRight className="size-5" />}
          >
            Sign up
          </Button>
        </div>
      </section>
      <section className="w-[600px] relative h-full">
        <HeroDotsPattern className="absolute left-[84px] top-[300px]" />
        <HeroDoor className="absolute left-1/2 -translate-x-1/2 bottom-0" />
        <HeroMan className="absolute left-1/2 -translate-x-1/2 bottom-0" />
        <HeroInfo1 className="absolute bottom-0 left-0" />
        <HeroInfo2 className="absolute top-0 right-0" />
      </section>
    </div>
  );
};

export default function Home() {
  return (
    <Slider
      contentBoxClass={"h-[481px]"}
      slides={[
        { key: "SLider1", component: <IntroSlide /> },
        {
          key: "SLider2",
          component: (
            <div className="h-[481px] w-full rounded-[32px] bg-x-white-sky flex">
              slider 2
            </div>
          ),
        },
        {
          key: "SLider3",
          component: (
            <div className="h-[481px] w-full rounded-[32px] bg-x-white-sky flex">
              slider 3
            </div>
          ),
        },
      ]}
    />
  );
}
