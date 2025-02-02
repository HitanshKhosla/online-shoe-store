import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>

      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP: ₹ 19 695.00
          </div>
          <div className="text-md font-medium text-black/[0.5] hidden md:block">
            Men&apos;s Golf Shoes
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">UK 6</option>
                <option value="1">UK 6.5</option>
                <option value="1">UK 7</option>
                <option value="1">UK 7.5</option>
                <option value="1">UK 8</option>
                <option value="1">UK 8.5</option>
                <option value="1">UK 9</option>
                <option value="1">UK 9.5</option>
                <option value="1">UK 10</option>
                <option value="1">UK 10.5</option>
                <option value="1">UK 11</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1 text-black/[0.5]">
            <div className="font-semibold">Quantity:</div>
            <select className="hover:text-black">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
              <option value="1">9</option>
              <option value="1">10</option>
            </select>
          </div>

          <div >
            <RiDeleteBin6Line className="cursor-pointer my-auto text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
