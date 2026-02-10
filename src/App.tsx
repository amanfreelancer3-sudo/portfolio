import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonial" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
