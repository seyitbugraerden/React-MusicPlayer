import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

function Menu() {
  return (
    <nav>
      <ul className="text-link font-bold">
        <li>
          <a className="flex h-12 gap-x-5 items-center text-white bg-active rounded ps-8" href="">
            <IoHomeOutline style={{ fontSize: "24px" }} />
            Ana sayfa
          </a>
        </li>
        <li>
          <a
            className="flex h-12 gap-x-5 items-center hover:text-white transition rounded delay-100 ps-8"
            href=""
          >
            <IoSearch style={{ fontSize: "24px" }}  />
            Ara
          </a>
        </li>
        <li className="relative">
          <a
            className="flex h-12 gap-x-3 items-center hover:text-white transition rounded delay-100 mt-5 ps-8"
            href=""
          >
            <HiOutlineBookmark style={{ fontSize: "24px" }} />
            Kitaplığın
            <FiPlus
              style={{ fontSize: "20px" }}
              className="absolute right-0.5"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
