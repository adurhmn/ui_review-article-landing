import {
  Activity,
  Command,
  Navigation,
  Search,
  TrendingUp,
} from "@/app/_assets/icons";
import BoxSearch from "@/app/_assets/imgs/section3/box-search";
import ChartSquare from "@/app/_assets/imgs/section3/chart-square";
import Code from "@/app/_assets/imgs/section3/code";
import DotsPattern from "@/app/_assets/imgs/section3/dots-pattern";
import EmptyWallet from "@/app/_assets/imgs/section3/empty-wallet";
import LargeRectangle from "@/app/_assets/imgs/section3/large-rectangle";
import Rectangle from "@/app/_assets/imgs/section3/rectangle";
import { IIconProps } from "@/app/_utils/types";

const Card = ({
  Icon,
  title,
  desc,
}: {
  Icon: (props: IIconProps) => React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center rounded-[32px] border-x-blue border-[1px] w-[300px] h-[350px] p-4 text-center stroke-x-blue bg-white">
      <div className="h-[100px] w-[100px] flex items-center justify-center bg-x-blue-light rounded-[32px]">
        <Icon className={"h-[45px] w-[45px] text-x-blue"} />
      </div>
      <h1 className="h3">{title}</h1>
      <p className="h6">{desc}</p>
    </div>
  );
};

export default function Section3() {
  return (
    <section className="mt-28 w-full flex items-center justify-center relative">
      <div className="w-full max-w-[1200px] h-[800px] mx-6 relative flex justify-around">
        <div className="h-full flex flex-col items-center justify-center gap-8 max-w-[40%]">
          <span className="relative">
            <h1 className="h1">How can we help your Business?</h1>
            <Rectangle className="absolute -top-8 -left-12 -z-10" />
          </span>
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <span className="relative w-full">
            <DotsPattern className="absolute left-8" />
          </span>
        </div>
        <div className="flex flex-col gap-8 pt-8">
          <Card
            Icon={BoxSearch}
            title={"Business Idea Planning"}
            desc={"Protocols apart from aengage models, pricing billing"}
          />
          <Card
            Icon={Code}
            title={"Development Website and App"}
            desc={"Protocols apart from aengage models, pricing billing"}
          />
        </div>
        <div className="flex flex-col gap-8">
          <Card
            Icon={EmptyWallet}
            title={"Financial Planning System"}
            desc={"Protocols apart from aengage models, pricing billing"}
          />
          <Card
            Icon={ChartSquare}
            title={"Market Analysis Project"}
            desc={"Protocols apart from aengage models, pricing billing"}
          />
        </div>
      </div>
      <LargeRectangle className="absolute right-0 top-8 -z-10" />
    </section>
  );
}
