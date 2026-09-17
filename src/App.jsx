import { useEffect } from "react";
import AppRoutes from "./router/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CustomCursor from "./components/common/CustomCursor.jsx";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import "./App.css";

function App() {
  // Initializes Lenis smooth scroll for the whole app
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
