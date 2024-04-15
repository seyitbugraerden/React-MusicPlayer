import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Trending from "./trending";
import Favourites from "./favourites";
import Player from "./player";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default Home;
