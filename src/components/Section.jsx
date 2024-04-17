/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Section({ title, more = false, items }) {
  return (
    <div>
      <header className="flex flex-row justify-between items-center mb-2">
        <h1 className="text-xl text-white font-semibold tracking-tight">
          <Link
            to={more}
            className="uppercase font-bold hover:opacity-90 delay-100 transition"
          >
            {title}
          </Link>
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
      <div className="grid grid-cols-5 m:grid-cols-7 gap-x-6">
        {items.map((item) => (
          <>
            <div className="bg-footer group hover:bg-active relative">
              <Link className="flex flex-col  rounded p-4" key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="aspect-square rounded-2xl"
                  style={{minWidth:'100px'}}
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
              <div
                style={{
                  position: "absolute",
                  bottom: "90px",
                  right: "30px",
                }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Section;
