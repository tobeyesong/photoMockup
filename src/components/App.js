/** @format */
import LandingPage from "./Pages/LandingPage";
import GalleryPage from "./Pages/GalleryPage";
import PricingPage from "./Pages/PricingPage";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/about' element={<AboutModal />} />
        <Route path='/contact' element={<ContactModal />} />
        <Route path='/thanks' element={<MessageModal />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
