import { useState } from "react";
import useStore from "./store";

function SubMenu() {
  const menu = useStore((state) => state.menu);
  return (
    <section className="bg-submenu-image bg-cover">
      <div className="container py-24 flex justify-end">
        <div className="max-w-md text-white">
          <h2 className="text-2xl font-serif italic text-red-500 mb-4">
            only the best
          </h2>
          <h1 className="text-4xl font-serif">BURGERS & SIDES</h1>
          <p className="my-6">
            Our menu ranges from your old school to some mind blowing custom
            burgers and sides.
          </p>
          <div className="mt-5">
            {menu.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center space-y-2"
                >
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-red-500 italic">{item.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubMenu;
