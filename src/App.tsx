import Header from "./components/Header";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <div className="container mx-auto"></div>
      </BrowserRouter>
    </>
  );
};
export default App;
