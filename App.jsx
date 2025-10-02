import { useState } from "react";
import "./css/style.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Navigation theme={theme} setTheme={setTheme} />
      <HeroSection />
    </div>
  );
}
