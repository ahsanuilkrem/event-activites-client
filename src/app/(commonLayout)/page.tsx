import { FeaturedEvents } from "@/src/components/modules/Home/FeaturedEvents";
import { Hero } from "@/src/components/modules/Home/Hero";
import { HowItWorks } from "@/src/components/modules/Home/HowItWorks";
import { PopularCategories } from "@/src/components/modules/Home/PopularCategories";
import { Testimonials } from "@/src/components/modules/Home/Testimonials";
import { TopRatedHosts } from "@/src/components/modules/Home/TopRatedHosts";
import { getEvent } from '@/src/services/host/hostEvent.service';



  const [EventsResponse] = await Promise.all([
    getEvent(),

  ]);

  const events = EventsResponse?.data || [];
  console.log(events)

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <FeaturedEvents events={events} />
      <HowItWorks />
      <PopularCategories />
      <TopRatedHosts />
      <Testimonials />
    </main>
    </>
  );
}
