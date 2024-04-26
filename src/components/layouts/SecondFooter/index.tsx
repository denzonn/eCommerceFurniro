import React, { FC } from 'react';
import { GoTrophy } from 'react-icons/go';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TbDiscountCheck, TbTruckDelivery } from 'react-icons/tb';

interface SecondFooterProps {}

const SecondFooter: FC<SecondFooterProps> = () => {
  return (
    <div className='w-full bg-[#FAF3EA] font-semibold py-20 grid grid-cols-4 justify-center items-center gap-4 mt-10'>
        <div className='flex flex-row gap-2 justify-center'>
            <div><GoTrophy className='text-5xl'/></div>
            <div className='flex flex-col'>
                <div className='text-xl'>High Quality</div>
                <div className='text-secondary_text font-medium'>crafted from top materials</div>
            </div>
        </div>
        <div className='flex flex-row gap-2 justify-center'>
            <div><TbDiscountCheck className='text-5xl'/></div>
            <div className='flex flex-col'>
                <div className='text-xl'>Warranty Protection</div>
                <div className='text-secondary_text font-medium'>Over 2 years</div>
            </div>
        </div>
        <div className='flex flex-row gap-2 justify-center'>
            <div><TbTruckDelivery className='text-5xl'/></div>
            <div className='flex flex-col'>
                <div className='text-xl'>Free Shipping</div>
                <div className='text-secondary_text font-medium'>Order over Rp. 200.000</div>
            </div>
        </div>
        <div className='flex flex-row gap-2 justify-center'>
            <div><MdOutlineSupportAgent className='text-5xl'/></div>
            <div className='flex flex-col'>
                <div className='text-xl'>24 / 7 Support</div>
                <div className='text-secondary_text font-medium'>Dedicated support</div>
            </div>
        </div>
    </div>
  );
};

export default SecondFooter;