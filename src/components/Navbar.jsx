import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { CiShare1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const navigate = useNavigate();

  const items = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          className="flex flex-row justify-between items-center text-[16px] my-2"
        >
          Hesap <CiShare1 />
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          className="flex flex-row justify-between items-center text-[16px] my-2"
        >
          Profil <CgProfile />
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          className="flex flex-row justify-between items-center text-[16px] my-2"
        >
          Çıkış <IoIosLogOut />
        </a>
      ),
      key: "2",
    },
  ];

  return (
    <nav className="flex flex-row items-center justify-between py-8 px-8 pe-16">
      <span className="flex flex-row items-center gap-4">
        <IoIosArrowBack
          onClick={() => {
            navigate(-1);
          }}
          className="hover:bg-white hover:opacity-70"
          style={{
            fontSize: "30px",
            backgroundColor: "rgba(0,0,0,.7)",
            borderRadius: "50%",
            padding: "1px 6px 1px 2px",
            cursor: "pointer",
          }}
        />
        <IoIosArrowForward
          onClick={() => {
            navigate(+1);
          }}
          className="hover:bg-white hover:opacity-70"
          style={{
            fontSize: "30px",
            backgroundColor: "rgba(0,0,0,.7)",
            borderRadius: "50%",
            padding: "1px 2px 1px 6px",
            cursor: "pointer",
          }}
        />
        <span className="relative overflow-visible">
          <CiSearch
            style={{
              position: "absolute",
              zIndex: "99",
              color: "black",
              fontSize: "30px",
              top: "4px",
              left: "10px",
            }}
          />
          <input
            className="bg-white text-black w-[400px] py-2 border-0 outline-none focus:border-0 focus:outline-none active:border-0 active:outline-none relative rounded-full"
            placeholder="Sanatçı, Albüm veya Çalma Listesi"
            style={{ zIndex: "0", paddingLeft: "50px" }}
          />
        </span>
      </span>

      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        className="cursor-pointer items-center justify-end flex flex-row hover:opacity-90 w-[220px]"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img
              src="https://pbs.twimg.com/profile_images/1553439218914959360/RhXOxJgZ_400x400.jpg"
              className="h-10 rounded-full"
            />{" "}
            Buğra Erden
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </nav>
  );
}

export default Navbar;
