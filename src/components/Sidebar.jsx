import logo from "../img/logo.png";
import Menu from "./Sidebar/Menu";

function Sidebar() {
  return (
    <aside className="w-72 py-7">
      <img src={logo} alt="logo" className="h-6 mb-2 ps-8" />
      <Menu />
    </aside>
  );
}

export default Sidebar;
