import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <a className="flex h-12 items-center" href="">
            <IoHomeOutline style={{ fontSize: "24px" }} className="me-5" />
            Ana sayfa
          </a>
        </li>
        <li>
          <a className="flex h-12 items-center" href="">
            <IoSearch style={{ fontSize: "24px" }} className="me-5" />
            Ara
          </a>
        </li>
        <li>
          <a className="flex h-12 items-center" href="">
            <GiBookshelf style={{ fontSize: "24px" }} className="me-5" />
            Kitaplığın
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
