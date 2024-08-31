import Header from "./components/Header";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Projects />
      </BrowserRouter>
    </>
  );
};
export default App;
