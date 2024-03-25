import { getItems } from "./getItems";
import { useState , useEffect } from "react";
import { Card } from "@/design/Card";
import Link from "next/link";
interface Item {
  _id: string;
  Owner: string;
  ItemName: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  Images: string[];
  __v: number;
}

export const Display = async()=>{
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

const Items:Item[] = await getItems();

return <>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-6 p-5">
        {Items.length > 0 &&
          Items.map((Item:Item , index) => {
            return (
              <Card 
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index*0.25,
                ease: "easeInOut",
                duration: 0.5,
              }}
              viewport={{ amount: 0 }}
              className=" md:mt-2 md:w-[300px] md:h-[320px] w-[250px]  h-[308px]  bg-white border border-gray-300 rounded-lg  shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
                <div className="bg-gray-200 aspect-video	 rounded-lg overflow-hidden">
                  <img
                    src={Item.Images[0]}
                    alt="photo"
                    className="p-2 w-full h-full"
                  />
                </div>
                <div className="p-3">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {Item.ItemName}
                    </h5>
                  </a>

                  <p className="font-normal text-base text-gray-600 dark:text-gray-400">
                    {Item.category} at
                  </p>
                  <div className="mt-2 flex justify-between">
                    <p className=" font-normal text-base text-black dark:text-gray-400">
                      <span className="font-bold   text-xl">
                        <div className="flex gap-1 justify-center text-center items-center">
                       
                       <span className="h-6">₹ </span> {Item.price}
                        </div>
                   
                      </span>{" "}
                    </p>
                   
                      <Link
                      href={`/product/${Item._id}`}
                        className="text-base text-black hover:underline"
                      >
                        view details
                      </Link>
                   
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
</>    

}