/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function Section({ title, more = false, items }) {
  return (
    <>
      <header className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h1>
        {more && (
          <Link
            to={more}
            className="uppercase text-xs font-bold hover:opacity-90 delay-100 transition text-link"
          >
            Tümünü gör
          </Link>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <>
            <div className="relative bg-footer group hover:bg-active">
              <Link className="flex flex-col  rounded p-4" key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="aspect-square rounded-2xl"
                />
                <h5
                  className="font-medium mt-2"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-link text-s"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.description}
                </p>
              </Link>
              <Link
                className="absolute right-8 top-[170px] hover:scale-110 group-focus:opacity-100 transition delay-75 opacity-0 group-hover:opacity-100"
                to="/search"
              >
                <IoIosPlay className="text-5xl bg-green-500 rounded-full px-2 pl-3 text-white" />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Section;
