import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { BestSellers } from "@/src/features/home/components/best-sellers";
import { FeaturedProducts } from "@/src/features/home/components/featured-products";
import { GenderCategories } from "@/src/features/home/components/gender-categories";
import { HomeHero } from "@/src/features/home/components/home-hero";
import { PromoBanner } from "@/src/features/home/components/promo-banner";
import { ShopByType } from "@/src/features/home/components/shop-by-type";
import { StoreBenefits } from "@/src/features/home/components/store-benefits";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HomeHero />
        <GenderCategories />
        <ShopByType />
        <PromoBanner />
        <FeaturedProducts />
        <BestSellers />
        <StoreBenefits />
      </main>
      <SiteFooter />
    </div>
  );
}
