import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Aboutalamvillas from "./Components/AboutAlamVillas/Aoutalamvillas"
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
        {/* <Home /> */}
        <Aboutalamvillas/>
      <Footer />
    </>
  );
}

export default App;
