import Hero from "./_components/app/hero";
import NavBar from "./_components/app/navbar";
import Section2 from "./_components/app/section2";
import Section3 from "./_components/app/section3";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-screen h-screen overflow-y-auto">
      <NavBar />
      <Hero />
      <Section2 />
      <Section3/>
    </main>
  );
}
