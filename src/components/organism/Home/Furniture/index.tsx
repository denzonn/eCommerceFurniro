import React, { FC } from 'react';

interface FurnitureProps {}

const Furniture: FC<FurnitureProps> = () => {
  return (
    <div className='py-10'>
        <div className='text-center'>
            <div className='text-[#616161] font-semibold'>Share your setup with</div>
            <div className='text-4xl font-bold'>#FuniroFurniture</div>
        </div>
        <div>
            <img src="/images/homeFurniture.png" alt="" className='w-full h-[85vh] object-cover'/>
        </div>
    </div>
  );
};

export default Furniture;