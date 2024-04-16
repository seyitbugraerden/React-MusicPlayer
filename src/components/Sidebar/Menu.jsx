import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

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
      </ul>
      <ul className="text-link font-bold mt-6">
        <li className="relative">
          <Link
            to="/collection"
            className={`flex h-12 gap-x-5 items-center   rounded  ps-8`}
          >
            <span className="hover:text-white transition delay-100 flex gap-x-4 flex-row">
              <HiOutlineBookmark style={{ fontSize: "24px" }} /> Kitaplığın
            </span>

            <FiPlus
              style={{ fontSize: "20px" }}
              className="absolute right-6  delay-100 transition hover:text-white"
            />
            <FaArrowRight
              style={{ fontSize: "16px" }}
              className="absolute right-1 delay-100  transition hover:text-white"
            />
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-x-4 pt-1 mx-auto w-100 ps-10">
        <li>
          <Link>Çalma Listesi</Link>
        </li>
        <li>
          <Link>Sanatçılar</Link>
        </li>
        <li>
          <Link>Albümler</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
