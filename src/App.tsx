import Header from "./components/Header";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto">
          <Hero />
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
