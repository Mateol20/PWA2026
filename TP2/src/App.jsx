import { useState } from "react";

import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Home />
      <Footer/>
    </>
  );
}

export default App;
