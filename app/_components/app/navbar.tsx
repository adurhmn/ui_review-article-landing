import { ubuntu } from "@/app/_assets/fonts";
import { Bookmark, Moon, Search } from "@/app/_assets/icons";
import LogoHero from "@/app/_assets/icons/logo-hero";
import cn from "@/app/_utils/cn";

export default function NavBar() {
  return (
    <section className="flex items-center justify-between pt-10 px-8 max-w-[1200px] w-full mx-auto">
      <LogoHero />
      <div className="relative w-[45%] min-w-[150px]">
        <input
          className="py-3 px-5 pr-12 rounded-lg bg-x-slate-200 placeholder:opacity-50 h-12 w-full"
          placeholder="Find the book you are looking for"
        />
        <button className="absolute right-5 top-[50%] translate-y-[-50%] p-2">
          <Search />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2">
          <Bookmark />
        </button>
        <button className="p-2">
          <Moon />
        </button>
        <button className={cn(ubuntu.className, "text-[18px] font-[400] p-2")}>
          EN
        </button>
        <button className="rounded-lg bg-x-blue h-12 w-12 flex items-center justify-center font-bold text-lg text-white">
          J
        </button>
      </div>
    </section>
  );
}

