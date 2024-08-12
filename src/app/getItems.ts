"use client";
import axios from "axios";

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

export const getItems = async (): Promise<Item[]> => {
  try {
    const { data } = await axios.get("https://bid-rush.vercel.app/items");

    if (data.items) {
      return data.items;
    }
    return [];
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const getItem = async (id: string): Promise<Item> => {
  const { data } = await axios.get(
    `https://bid-rush.vercel.app/singleitem/${id}`
  );
  if (data) {
    return data.item;
  }
  return {
    _id: "",
    Owner: "",
    ItemName: "",
    description: "",
    price: "",
    category: "",
    features: [],
    Images: [],
    __v: 0,
  };
};
