import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Accordion from "./components/Accordion";
import BgColorGenerator from "./components/BgColorGenerator";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/ImageSlider";
import DarkLightTheme from "./components/DarkLightTheme";
import ScrollIndicator from "./components/ScrollIndicator";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/bg-color" element={<BgColorGenerator />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/dark-light" element={<DarkLightTheme />} />
        <Route path="/scroll-indicator" element={<ScrollIndicator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;