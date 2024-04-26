import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TiStarFullOutline } from "react-icons/ti";
import { Separator } from "@/components/ui/separator";

interface ItemProps {}

const Item: FC<ItemProps> = () => {
  return (
    <div className="px-24 py-10">
      <div className="grid grid-cols-4 gap-10">
        <div>
          <div className="font-semibold text-xl">
            Go to Product page for more Products
          </div>
          <div className="underline text-[#727272]">View More</div>
        </div>
        {[0, 1].map((item, index) => (
          <div>
            <div className="bg-secondary_foregound rounded-xl p-4">
              <img
                src="/images/detailImage1.png"
                alt=""
                className="rounded-xl object-contain"
              />
            </div>
            <div className="mt-3 font-semibold text-lg">Asgaard Sofa</div>
            <div className="font-medium">Rp. 250.000</div>
            <div className="mt-2 flex flex-row gap-2 items-center">
                <div>4,7</div>
                <div className="flex flex-row gap-1">
                {
                    [0,1,2,3,4].map((item, index) => (
                        <TiStarFullOutline className="text-yellow-400"/>
                    ))
                }
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <Separator orientation="vertical" className="bg-secondary h-5 w-[2px]"/>
                    <div className="text-xs text-secondary">204 Review</div>
                </div>
            </div>
          </div>
        ))}
        <div>
          <div className="font-semibold text-lg">Add A Product</div>
          <div className="mt-3">
            <Select>
              <SelectTrigger className="w-full bg-primary text-white">
                <SelectValue placeholder="Choose a Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Meja">Meja</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator className="bg-[#E8E8E8] mt-10"/>

      <div className="grid grid-cols-4 gap-10">
        <div className="p-8 border-r space-y-6">
            <div className="text-xl font-semibold">
                General 
            </div>
            {
                [0,1,2].map((item, index) => (
                    <div>Sales Package</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>1 sectional sofa</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>1 Three Seater, 2 Single Seater</div>
                ))
            }
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="p-8 border-r space-y-6">
            <div className="text-xl font-semibold">
            Dimensions  
            </div>
            {
                [0,1,2].map((item, index) => (
                    <div>Width</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>265.32 cm</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>265.32 cm</div>
                ))
            }
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="p-8 border-r space-y-6">
            <div className="text-xl font-semibold">
            Warranty  
            </div>
            {
                [0,1,2].map((item, index) => (
                    <div>Warranty Summary</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>1 Year Manufacturing Warranty</div>
                ))
            }
        </div>
        <div className="p-8 border-r space-y-6">
            <div className="py-4"></div>
            {
                [0,1,2].map((item, index) => (
                    <div>1 Year Manufacturing Warranty</div>
                ))
            }
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Item;
