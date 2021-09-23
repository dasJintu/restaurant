import Link from "next/link";
import Navbar from "../components/Navbar";
import useStore from "../components/store";

function Menu() {
  const menu = useStore((state) => state.menu);
  return (
    <div className="container">
      <h1 className="text-center font-serif mt-24 mb-6 text-4xl font-bold text-gray-800">
        BURGERS AND SIDES
      </h1>
      <p className="text-center text-lg text-gray-600 mb-24">
        Our menu ranges from your old school to some mind blowing custom burgers
        and sides.
      </p>
      <div className="mb-24">
        {menu.map((item) => (
          <div key={item.id} className="mb-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-700">{item.name}</h1>
              <p className="text-gray-600 italic">{item.ingredients}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-red-400 italic">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
