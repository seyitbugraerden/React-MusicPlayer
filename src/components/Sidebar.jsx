import logo from "../img/logo.png";
import Menu from "./Sidebar/Menu";

function Sidebar() {
  return (
    <aside className="w-60 py-7 ps-8">
      <img src={logo} alt="logo" className="h-6 mb-2" />
      <Menu />
    </aside>
  );
}

export default Sidebar;
