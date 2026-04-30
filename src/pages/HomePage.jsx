import HeroSection from "../components/home/HeroSection";
import NewCategory from "../components/home/NewCategory";
import TrandingProducts from "../components/home/TrandingProducts";
import ScrollDrivenMarquee from "../components/RandomComponents/ScrollDrivenMarquee";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      {/* <ScrollDrivenMarquee /> */}
      <NewCategory />
      <TrandingProducts />
    </main>
  );
};

export default HomePage;
