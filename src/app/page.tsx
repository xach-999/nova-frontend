import { HomeHero } from "@/src/features/home/components/home-hero";
import { SiteHeader } from "@/src/components/layout/site-header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HomeHero />
      </main>
    </div>
  );
}
