import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Search from "./pages/Search";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
}

export default App;
