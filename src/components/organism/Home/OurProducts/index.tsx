import { Card } from '@/components/ui/card';
import React, { FC } from 'react';

interface OurProductsProps {}

const data = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product5.png",
    "/images/product6.png",
    "/images/product7.png",
    "/images/product8.png",
]

const OurProducts: FC<OurProductsProps> = () => {
  return (
    <div className='py-10 px-32'>
        <div className='text-center text-primary_text text-3xl font-bold'>Our Products</div>
        <div className='text-primary_text font-semibold grid grid-cols-4 gap-4'>
            {data.map((item, index) => (
                <Card key={index}>
                    
                </Card>
            ))}
        </div>
    </div>
  );
};

export default OurProducts;