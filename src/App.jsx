import { useEffect } from "react";
import Home from "./components/home";
import VisitorCounter from "./visitCounter";
import { initGA, trackPageView } from "./utils/analytics";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <VisitorCounter />
      <Home />
    </div>
  );
}

export default App;
