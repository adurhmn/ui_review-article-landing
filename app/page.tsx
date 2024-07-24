import Hero from "./_components/app/hero";
import NavBar from "./_components/app/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-screen h-screen">
      <NavBar />
      <Hero />
    </main>
  );
}
