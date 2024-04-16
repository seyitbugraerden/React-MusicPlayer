import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Menu() {
  let location = useLocation();
  useEffect(() => {
    location;
  }, []);

  return (
    <nav>
      <ul className="text-link font-bold">
        <li>
          <Link
            to="/"
            className={`flex h-12 gap-x-5 items-center hover:text-white transition rounded delay-100 ps-8 ${
              location.pathname === "/" ? "bg-active text-white" : ""
            }`}
          >
            <IoHomeOutline style={{ fontSize: "24px" }} />
            Ana sayfa
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className={`flex h-12 gap-x-5 items-center hover:text-white transition rounded delay-100 ps-8 ${
              location.pathname === "/search" ? "bg-active text-white" : ""
            }`}
          >
            <IoSearch style={{ fontSize: "24px" }} />
            Ara
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/collection"
            className={`flex h-12 gap-x-5 items-center hover:text-white transition rounded delay-100 ps-8 ${
              location.pathname === "/collection" ? "bg-active text-white" : ""
            }`}
          >
            <HiOutlineBookmark style={{ fontSize: "24px" }} />
            Kitaplığın
            <FiPlus
              style={{ fontSize: "20px" }}
              className="absolute right-0.5"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
