import React, { FC } from 'react';
import Product from './Product';
import { Button } from '@/components/ui/button';

interface ProductViewProps {}

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
    {
      "image": "/images/product5.png",
      "type": 0
    },
    {
      "image": "/images/product6.png",
      "type": 2
    },
    {
      "image": "/images/product7.png",
      "type": 0
    },
    {
      "image": "/images/product8.png",
      "type": 2
    },
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
    {
      "image": "/images/product5.png",
      "type": 0
    },
    {
      "image": "/images/product6.png",
      "type": 2
    },
    {
      "image": "/images/product7.png",
      "type": 0
    },
    {
      "image": "/images/product8.png",
      "type": 2
    },
  ];

const ProductView: FC<ProductViewProps> = () => {
  return (
    <div className="py-10 px-24 z-10 relative">
      <div className="text-primary_text font-semibold grid grid-cols-4 gap-8 mt-8">
        {data.map((item, index) => (
          <Product key={index} item={item.image} type={item.type}/>
        ))}
      </div>
      <div className="mt-10 flex flex-row gap-4 justify-center">
            <Button className='text-black bg-secondary_foregound'>Prev</Button>
            <Button className='text-white'>1</Button>
            <Button className='text-black bg-secondary_foregound'>2</Button>
            <Button className='text-black bg-secondary_foregound'>3</Button>
            <Button className='text-black bg-secondary_foregound'>Next</Button>
      </div>
    </div>
  );
};

export default ProductView;