import logo from "../img/logo.png";
import Menu from "./Sidebar/Menu";

function Sidebar() {
  return (
    <aside className="w-80 py-7 min-h-80">
      <img src={logo} alt="logo" className="h-8 mb-2 ps-8 " />
      <Menu class="bg-white" />
    </aside>
  );
}

export default Sidebar;
