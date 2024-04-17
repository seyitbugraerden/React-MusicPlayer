import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
function Menu() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Song 1",
      description: "Desc 1",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ef89e23678018c6d8630825/1/tr/default",
      type: "Sanatçı",
      owner: "Buğra Erden",
    },
    {
      id: "2",
      title: "Song 2",
      description: "Desc 2",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4371a18ab0eb25feaba154d3/2/tr/default",
      type: "Çalma Listesi",
      owner: "Buğra erden",
    },
    {
      id: "3",
      title: "Song 3",
      description: "Desc 3",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb28da7480a223ede516f57159/3/tr/default",
      type: "Albüm",
      owner: "Zeynep Aktaş",
    },
    {
      id: "4",
      title: "Song 4",
      description: "Desc 4",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebaf38c0565f1b25edd75334ee/4/tr/default",
      type: "Sanatçı",
      owner: "Zeynep Aktaş",
    },
    {
      id: "5",
      title: "Song 5",
      description: "Desc 5",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebbc7571668a90592e6ecac62b/5/tr/default",
      type: "Çalma Listesi",
      owner: "Zeynep Aktaş",
    },
  ]);
  let location = useLocation();
  useEffect(() => {
    location;
  }, []);
  return (
    <>
      <nav className="nav-1">
        <ul className="text-link font-bold mt-8">
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
              className={`flex h-12 gap-x-5 items-center  rounded de ps-8 ${
                location.pathname === "/collection" ? "bg-active " : ""
              }`}
            >
              <span
                className={`flex h-12 gap-x-5 items-center hover:text-white transition rounded delay-100 ${
                  location.pathname === "/collection"
                    ? "bg-active text-white"
                    : ""
                }`}
              >
                <HiOutlineBookmark style={{ fontSize: "24px" }} /> Kitaplığın
              </span>

              <FiPlus
                style={{ fontSize: "20px" }}
                className="absolute right-6  delay-100 transition hover:text-white"
              />
            </Link>
          </li>
        </ul>
        {selectedFilter ? (
          <ul
            className="flex flex-row gap-x-4  pt-4 mx-auto w-100 ps-8 items-center"
            style={{ fontSize: "14px" }}
          >
            <li
              onClick={() => {
                setSelectedFilter("");
              }}
            >
              <LiaTimesSolid style={{ fontSize: "20px", cursor: "pointer" }} />
            </li>
            <li className="ps-2">{selectedFilter}</li>
          </ul>
        ) : (
          <ul
            className="flex flex-row justify-around gap-x-3 pt-4  mx-auto w-100 ps-5"
            style={{ fontSize: "14px" }}
          >
            <li>
              <Link
                onClick={(e) => {
                  setSelectedFilter(e.target.textContent);
                }}
              >
                Çalma Listesi
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  setSelectedFilter(e.target.textContent);
                }}
              >
                Sanatçılar
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  setSelectedFilter(e.target.textContent);
                }}
              >
                Albümler
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <nav
        className="mt-4 ps-9 overflow-auto"
        id="style-1"
        style={{ maxHeight: "calc(100% - 18rem)" }}
      >
        <ul>
          {items.map((item) => (
            <>
              {item.type !== "Çalma Listesi" && item.type !== "Albüm" ? (
                <Link>
                  <li className="flex flex-row items-center py-3 hover:bg-active cursor-pointer">
                    <img
                      src={item.image}
                      alt="item_img"
                      className="rounded h-12"
                    />
                    <div className="pl-4">
                      <h2>{item.owner}</h2>
                      <p className="text-detail flex-row flex items-center opacity-80 uppercase">
                        {item.type}
                      </p>
                    </div>
                  </li>
                </Link>
              ) : (
                <Link>
                  <li className="flex flex-row items-center py-3 hover:bg-active cursor-pointer">
                    <img
                      src={item.image}
                      alt="item_img"
                      className="rounded h-12"
                    />
                    <div className="pl-4">
                      <h2>{item.title}</h2>
                      <p className="text-detail flex-row flex items-center opacity-80 uppercase">
                        {item.type} <PiDotOutlineFill /> {item.owner}
                      </p>
                    </div>
                  </li>
                </Link>
              )}
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
