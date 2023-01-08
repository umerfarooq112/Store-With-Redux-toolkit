import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { CartItemsQuantity } = useSelector((state) => state.cart);

  return (
    <div className="nab-bar flex justify-between bg-gray-100 p-[20px] items-center">
      <div>
        <h2 className="text-[24px] font-bold">Cart App</h2>
      </div>
      <div className="flex gap-[70px] items-center">
        <p>Total: {CartItemsQuantity}  </p>
        <button className="border-[#858585] border rounded-[10px] p-[5px] w-[130px]">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
