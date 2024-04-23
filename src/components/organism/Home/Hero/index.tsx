import { Button } from '@/components/ui/button';
import React, { FC } from 'react';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className='w-full h-[88vh] relative'>
        <img src="/images/hero.png" alt="" className='w-full h-full object-cover'/>
        <div className='absolute bottom-20 right-16 px-8 pt-16 pb-8 w-[40vw] bg-primary_foregound rounded-xl'>
            <div className='font-semibold'>New Arrival</div>
            <div className='text-5xl font-bold text-primary tracking-wide leading-tight'>Discover Our <br /> New Collection</div>
            <div className='mt-2 font-medium'>Embark on a journey of style and elegance with our latest arrivals. Discover Our New Collection and redefine your fashion statement.</div>
            <div className='mt-8'>
                <a href="">
                    <Button className='text-white px-10 py-6'>Buy Now</Button>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Hero;