
import Image from "next/image";
import Header from './Header'
import axios from "axios";
import { Display } from "./Display";
import { getItems } from "./getItems";
export default function Home() {


axios.defaults.baseURL = "https://bid-rush.vercel.app/"

getItems();
  return (
 <>
<Header/>
 <Display/>

 </>
  );
}
