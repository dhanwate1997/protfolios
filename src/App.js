import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
