import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { FeaturedCategories } from "@/src/features/home/components/featured-categories";
import { FeaturedProducts } from "@/src/features/home/components/featured-products";
import { HomeHero } from "@/src/features/home/components/home-hero";
import { StoreBenefits } from "@/src/features/home/components/store-benefits";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HomeHero />
        <FeaturedCategories />
        <FeaturedProducts />
        <StoreBenefits />
      </main>
      <SiteFooter />
    </div>
  );
}
