import SecondFooter from "@/components/layouts/SecondFooter";
import SecondHero from "@/components/organism/SecondHero";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
  return (
    <div>
      <SecondHero page="Cart" />

      <div className="py-10 grid grid-cols-3 gap-8 px-24">
        <div className="col-span-2">
          <div className="bg-secondary_foregound w-full p-4 flex flex-row gap-4 font-medium items-center">
            <div className="w-[20%]"></div>
            <div className="w-[25%]">Product</div>
            <div className="w-[20%]">Price</div>
            <div className="w-[10%]">Quantity</div>
            <div className="w-[20%]">Subtotal</div>
            <div className="w-[5%]"></div>
          </div>
          <div className="w-full p-4 flex flex-row gap-4 text-secondary items-center">
            <div className="bg-[#b88f2f2f] p-2 rounded-xl w-[20%]">
              <img
                src="/images/detailImage1.png"
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="w-[25%]">Asgaard sofa</div>
            <div className="w-[20%]">Rp. 250,000.00</div>
            <div className="w-[10%] text-center">1</div>
            <div className="w-[20%]">Rp. 250,000.00</div>
            <div className="w-[5%]">
              <FaTrashAlt className="text-primary" />
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-secondary_foregound px-4 py-6 flex flex-col items-center">
          <div className="text-3xl font-semibold">Cart Totals</div>
          <div className="mt-6 space-y-2">
            {[0, 1].map((item, index) => (
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium">
                  {index === 0 ? "Subtotal" : ""}
                </div>
                <div className="text-secondary">Rp. 250.000</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="font-medium">Total</div>
              <div className="text-primary text-lg font-semibold">
                Rp. 250.000
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button className="bg-transparent border border-black px-8">Check Out</Button>
          </div>
        </div>
      </div>

      <SecondFooter />
    </div>
  );
}
