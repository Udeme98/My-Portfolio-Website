import Header from "./components/Header";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
      </BrowserRouter>
    </>
  );
};
export default App;
