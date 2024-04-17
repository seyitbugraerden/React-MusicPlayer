import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Menu from "./Sidebar/Menu";

function Sidebar() {
  return (
    <aside
      className="py-7 min-h-80 w-[350px] flex-shrink"
      style={{ minWidth: "350px" }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="h-14 mb-2 ps-8 " />
      </Link>
      <Menu class="bg-white" />
    </aside>
  );
}

export default Sidebar;
