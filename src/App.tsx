import Header from "./components/Header";
import Hero from "./sections/Hero";
import { BrowserRouter } from "react-router-dom";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
};
export default App;
