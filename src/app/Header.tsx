"use client";
import Link from "next/link";
import Cart from "./cart";
import { useState } from "react";
import { useSelector } from "react-redux";

type state = {
  Cart: { items: []; totalAmount: number; totalQuantity: number };
};

const Header = () => {
 
  const [isCart , setIsCart] = useState(false)
  const CartClicked = ()=>{
   setIsCart(prev=>{
    return !prev
   })
  }
  const RemoveCartClicked = ()=>{
   setIsCart(false)
  }
  const TotalItems = useSelector((state: state) => state.Cart.totalQuantity);

  return (
    <>
    {isCart && <Cart remove={RemoveCartClicked}/>}
      <div className="flex justify-between md:justify-around items-center  w-[100%] text-white bg-black p-4 ">
        <div>
          <Link href={"/"} className="text-3xl  cursor-pointer">
            NextMarket
          </Link>
        </div>
        <div className="flex gap-1 justify-center md:hidden">
          <div className=" flex">
            <button
              onClick={CartClicked}
              className="border flex p-2 rounded-full hover:bg-white hover:text-black border-white"
            >
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
              <span className="rounded-[30px] text-black bg-white  px-[1rem]">
                {TotalItems}
              </span>
            </button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex  justify-center rounded-2xl bg-white ">
          <input
            type="text"
            className="text-black text-xl rounded-2xl w-[35vw] outline-none  font-semibold p-3"
            placeholder="search"
          />
          <div className="text-center flex justify-center items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className="md:flex hidden ">
          <button
            onClick={CartClicked}
            className="border flex p-3 rounded-full hover:bg-white hover:text-black border-white"
          >
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </span>
            <span className="rounded-[30px] text-black bg-white  px-[1rem]">
              {TotalItems}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
