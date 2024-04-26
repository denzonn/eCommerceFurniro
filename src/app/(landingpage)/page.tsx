import BrowseRange from "@/components/organism/Home/BrowseRange";
import Furniture from "@/components/organism/Home/Furniture";
import Hero from "@/components/organism/Home/Hero";
import InspirationRoom from "@/components/organism/Home/InspirationRoom";
import OurProducts from "@/components/organism/Home/OurProducts";

export default function Home() {
  return (
    <main>
      <Hero/>

      <BrowseRange/>

      <OurProducts/>

      <InspirationRoom/>

      <Furniture />
    </main>
  );
}
