import "./App.css";

import { Router, Routes, Route } from "react-router-dom";
import landing from "./pages/landing.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={landing} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
