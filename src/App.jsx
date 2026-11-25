import Accordion from "./components/Accordion/Accordion";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <Hero />
      <Accordion />
      <Footer />
    </div>
  );
};

export default App;
