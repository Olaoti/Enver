import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
