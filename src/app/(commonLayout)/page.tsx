import { FeaturedEvents } from "@/src/components/modules/Home/FeaturedEvents";
import { Hero } from "@/src/components/modules/Home/Hero";
import { HowItWorks } from "@/src/components/modules/Home/HowItWorks";
import { PopularCategories } from "@/src/components/modules/Home/PopularCategories";
import { Testimonials } from "@/src/components/modules/Home/Testimonials";
import { TopRatedHosts } from "@/src/components/modules/Home/TopRatedHosts";




export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <PopularCategories />
      <TopRatedHosts />
      <Testimonials />
    </main>
    </>
  );
}
