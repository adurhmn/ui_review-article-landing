"use client";
import { Activity, Command, Navigation, TrendingUp } from "@/app/_assets/icons";
import Ellipse from "@/app/_assets/imgs/section2/ellipse";
import ImgPresentation from "@/app/_assets/imgs/section2/presentation.png";
import Rectangle from "@/app/_assets/imgs/section2/rectangle";

// write 30 word description for each
const CardData = [
  {
    title: "Hashtag Growth",
    desc: "Follow a hashtag growth total posts, videos and images.",
    icon: <Activity />,
  },
  {
    title: "Influencers",
    desc: "Follow a hashtag growth total posts, videos and images.",
    icon: <Command />,
  },
  {
    title: "Most Influencial Post",
    desc: "Follow a hashtag growth total posts, videos and images.",
    icon: <Navigation />,
  },
  {
    title: "Trending",
    desc: "Follow a hashtag growth total posts, videos and images.",
    icon: <TrendingUp />,
  },
];

export default function Section2() {
  return (
    <section className="mt-28 w-full flex items-center justify-center">
      <div className="max-w-[1200px] mx-6">
        <span className="h1 flex justify-center gap-2">
          <h1>What we</h1>
          <h1 className="text-x-blue">can do?</h1>
        </span>
        <div className="flex justify-between mt-6 gap-4 flex-wrap">
          {CardData.map(({ icon, title, desc }, ind) => (
            <div
              key={ind}
              className="h-[260px] w-[260px] flex flex-col justify-center items-start"
            >
              <span className="p-2 rounded-lg border-[2px] border-x-blue mb-8">
                {icon}
              </span>
              <h2 className="h4-bold mb-2">{title}</h2>
              <p className="h5">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <div className="relative min-w-[50%]">
            <img
              src={ImgPresentation.src}
              alt={"Presentation Image"}
              className="bg-transparent object-contain h-full w-full"
            />
            <Ellipse className="absolute bottom-3 left-3 -translate-x-1/2 translate-y-1/2 -z-10" />
          </div>
          <div className="py-[50px] px-[65px] relative">
            <h1 className="h1 mb-6">Great Digital Product Agency since 2016</h1>
            <p className="h5">
              Our Business Plan is a written document describing a
              company&apos;s core business activites, Objectives, and how it
              plans to achieve its goals. Our goal is to provide our client high
              quality Product with modern idea accordingly their budgets and
              according thir reuirements.
            </p>
            <Rectangle className="absolute top-8 left-8 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
