'use server'


interface Item {
  _id: string,
  Owner: string,
  ItemName: string,
  description: string,
  price: string,
  category: string,
  features: string[],
  Images: string[],
  __v: number,
}

export const getItems = async (): Promise<Item[]> => {
  try {
    const response =  await fetch('https://bid-rush.vercel.app/items');
    const res = await response.json();

    if (res.items) {
      return res.items;
    }
    return [];
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};


export const getItem = async (id:string) :Promise<Item>=> {
  const response = await fetch(`https://bid-rush.vercel.app/singleitem/${id}`);
  const res = await response.json();
  if(res){
    return res.item
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
    __v: 0
  }
  
};
