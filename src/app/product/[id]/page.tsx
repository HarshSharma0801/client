
'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/app/Header";
import { getItem } from "@/app/getItems";
import {  useDispatch } from "react-redux";
import { CartActions } from "@/redux/reducers/CartSlice";
import { Card } from "@/design/Card";
interface item {
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


const SingleItem = async({params}:{params:{id:string}}) => {
 const dispatch = useDispatch()
const Item = await getItem(params.id);
  
const AddItem = (data: item) => {
  toast.success("Product added to Cart !");
  dispatch(CartActions.AddToCart(data));
};
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between pr-10">
          <div>
            <h1 className="md:text-4xl text-2xl font-smeibold">
              {Item && Item.ItemName}
            </h1>
          </div>

          <div>
            <p className="md:text-3xl text-xl">
              at only{" "}
              <span className="font-semibold">
                {" "}
                <span className="h-6">₹ </span> {Item && Item.price}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="font-normal text-2xl text-gray-600 dark:text-gray-400">
            in {Item && Item.category} category
          </p>
        </div>
        <div className="flex md:flex-row justify-center flex-col gap-8">
          {Item &&
            Item.Images.map((image , index) => {
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
                className="bg-gray-200 aspect-video md:w-[300px] md:h-[320px] w-[250px]  h-[308px] rounded-lg overflow-hidden">
                  <img src={image} alt="photo" className="p-2 w-full h-full" />
                </Card>
              );
            })}
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-lg">Description</h1>
          <p className=" text-lg md:text-lg text-gray-600">
            {Item && Item.description}
          </p>
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-lg">Features</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4">
            {Item &&
              Item.features.map((item) => {
                return (
                  <div className="pt-3 flex text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 px-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                      />
                    </svg>{" "}
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="py-3">
            <button className="p-3 px-6 text-xl bg-lightdark text-black rounded-xl ">
              Buy Now
            </button>
          </div>
          <div className="py-3">
            <button
              onClick={()=>{
                AddItem(Item)
              } }
              className="p-3 px-6 text-xl text-black bg-light  rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
