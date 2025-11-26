import HeroSection from "../../../components/SECTIONS/Hero/HeroSection";
import TrendingSection from "../../../components/SECTIONS/Trending/TrendingSection";
import ExportHub from "../../../components/SECTIONS/Banners/ExportHub";
import PopularSection from "../../../components/SECTIONS/Banners/PopularSection";
import TrustSection from "../../../components/SECTIONS/Banners/TrustSection";
import { useLoaderData } from "react-router";


function HomePage() {
  const product = useLoaderData()
  return (
    <div>
      <div className="p-5 md:px-25">
        <HeroSection></HeroSection>
        <PopularSection></PopularSection>
        <TrendingSection product={product}></TrendingSection>
        
        <ExportHub ></ExportHub>
        <TrustSection></TrustSection>
 
      </div>
    </div>
  );
}

export default HomePage;
