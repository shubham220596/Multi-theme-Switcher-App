import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

export default function Home() {
   const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res) => {
            console.log(res);
            return res.json()
        }).then(data => setProducts(data));
   }, []);
   return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the theme switcher app</h1>
            <p className="mb-4">Here are some sample product data:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id} className="p-4 rounded shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-white theme2:bg-gray-800 theme2:text-white">
                    <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain"></img>
                    <h2 className="text-lg mt-2 font-semibold">{product.title}</h2>
                    <p>${product.price}</p>
                </div>
              ))}
            </div>
        </div>
   )
}