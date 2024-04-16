import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";

import liked from "../../img/liked_songs.png";
function Menu() {
  const [selectedFilter, setSelectedFilter] = useState("");
  let location = useLocation();
  useEffect(() => {
    location;
  }, []);

  return (
    <>
      <nav className="nav-1">
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
        style={{ maxHeight: "calc(100% - 15rem)" }}
      >
        <ul>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center my-3">
            <img src={liked} alt="item_img" className="rounded h-12" />
            <div className="pl-4">
              <h2>Beğenilen Şarkılar</h2>
              <p className="text-detail flex-row flex items-center opacity-80">
                Çalma Listesi <PiDotOutlineFill /> Buğra
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
