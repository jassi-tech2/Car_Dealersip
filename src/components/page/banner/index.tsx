import Banner from "./banner";

const bannerItems = [
  { image: "/src/assets/svg/Tabpanel.svg", text: "Welcome to Our Dealership!" },
  { image: "/src/assets/svg/Tabpanel2.svg", text: "Find Your Dream Car Today" },
  { image: "/src/assets/svg/Tabpanel3.svg", text: "Best Deals in Town" },
];

const Bannner = () => <Banner items={bannerItems} interval={4000} />;

export default Bannner;