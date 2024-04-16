import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Search from "../views/Search";
function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default Content;
