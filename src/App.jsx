import NavBar from "./components/NavBar";
import Hero from "./components/HeroSa";
import MainSa from "./components/MainSa";
import FooterSa from "./components/FooterSa";

const App = () => {
  return (
    <div className="w-full h-full">
      <div className="md:h-full lg:h-screen flex flex-col h-[300px]">
        <NavBar />
        <Hero />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <MainSa />
      </div>
      <FooterSa />
    </div>
  );
};

export default App;
