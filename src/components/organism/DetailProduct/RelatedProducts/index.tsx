import React, { FC } from "react";
import Products from "./Products";

interface RelatedProductsProps {}

const data = [
  {
    "image": "/images/product1.png",
    "type": 1
  },
  {
    "image": "/images/product2.png",
    "type": 2
  },
  {
    "image": "/images/product3.png",
    "type": 0
  },
  {
    "image": "/images/product4.png",
    "type": 1
  },
];

const RelatedProducts: FC<RelatedProductsProps> = () => {
  return (
    <div className="pb-20 px-24">
      <div className="text-center text-primary_text text-4xl font-bold">
        Our Products
      </div>
      <div className="text-primary_text font-semibold grid grid-cols-4 gap-8 mt-8">
        {data.map((item, index) => (
          <Products key={index} item={item.image} type={item.type}/>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="" className="rounded-sm border border-primary px-16 py-2 text-primary font-semibold">Show More</a>
      </div>
    </div>
  );
};

export default RelatedProducts;
