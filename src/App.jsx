import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";

// pages
import { Home,Create,Update } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;