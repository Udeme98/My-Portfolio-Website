import Header from "./components/Header";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";

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
