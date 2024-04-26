"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";

interface ProductProps {
  item: string;
  type: number;
}

const Product: FC<ProductProps> = ({ item, type }) => {
  const [isHover, setIsHover] = useState<boolean>();
  const router = useRouter()

  return (
    <Card
      className="bg-[#F4F5F7] border-none shadow-none rounded-sm relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)} 
      onClick={() => router.push('/meja-bagus')}
    >
      <img
        src={item}
        alt=""
        className="w-full h-[320px] object-cover rounded-t-sm"
      />
      <div className="p-4">
        <div className="text-xl">Syltherine</div>
        <div className="text-secondary_text font-normal">
          Stylish cafe chair
        </div>
        <div className="flex flex-row gap-2 mt-2 items-center">
          <div className="text-primary_text text-lg font-semibold">
            Rp 2.500.000
          </div>
          <div className="text-secondary_text_foregound font-normal text-xs line-through">
            Rp 3.500.000
          </div>
        </div>
      </div>

      {type === 1 ? (
        <div className="absolute top-4 right-4 rounded-full bg-[#E97171] text-white w-12 h-12 text-sm flex justify-center items-center">
          -30 %
        </div>
      ) : type === 2 ? (
        <div className="absolute top-4 right-4 rounded-full bg-[#2EC1AC] text-white w-12 h-12 text-sm flex justify-center items-center">
          New
        </div>
      ) : (
        <div></div>
      )}

      {isHover ? (
        <div>
          <div className="absolute top-0 left-0 bg-primary_text w-full h-full transition duration-300 opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <div>
              <Button className="bg-white text-primary px-16 py-5 font-bold ">
                Add to Cart
              </Button>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 mt-4 text-white">
              <a href="">
                <div className="flex flex-row gap-1 items-center">
                  <IoMdShare /> Share
                </div>
              </a>
              <a href="">
                <div className="flex flex-row gap-1 items-center">
                  <MdCompareArrows /> Compare
                </div>
              </a>
              <a href="">
                <div className="flex flex-row gap-1 items-center">
                  <FaRegHeart /> Like
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default Product;
