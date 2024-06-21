import "./App.css";
import Home from "./components/Home"
import About from "./components/About"
import About2 from "./components/About2"
import About3 from "./components/About3"
import Work from "./components/Work"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <About />
      <About2 />
      <About3 />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
