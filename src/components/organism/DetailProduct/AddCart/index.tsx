"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Value } from "@radix-ui/react-select";
import React, { FC, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io5";

interface AddCartProps {}

const detailImage = [
  "/images/detailImage1.png",
  "/images/detailImage2.png",
  "/images/detailImage3.png",
  "/images/detailImage4.png",
];

const AddCart: FC<AddCartProps> = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 px-24 pt-10">
        <div className="flex flex-row gap-2 w-full">
          <div className="w-[20%] flex flex-col gap-4">
            {detailImage.map((item, index) => (
              <div className="bg-secondary_foregound rounded-xl h-[100px] w-[100px] flex justify-center items-center p-2">
                <img src={item} alt="" className="object-contain" />
              </div>
            ))}
          </div>
          <div className="w-[80%]">
            <div className="bg-secondary_foregound rounded-xl flex h-[450px] justify-center items-center p-2">
              <img src="/images/detailImage.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="pl-10">
          <div className="text-3xl font-medium">Asgaard sofa</div>
          <div className="text-secondary text-xl font-medium mt-2">
            Rp. 250,000.00
          </div>
          <div className="flex flex-row gap-4 mt-3 items-center text-secondary">
            <div className="flex flex-row gap-2 ">
              {[0, 1, 2, 3, 4].map((item, index) => (
                <div key={index}>
                  <GoStarFill className="text-yellow-300" />
                </div>
              ))}
            </div>
            <Separator orientation="vertical" className="border h-6" />
            <div className="text-sm">5 Customer Review</div>
          </div>
          <div className="mt-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="mt-6">
            <div className="text-secondary">Size</div>
            <div className="flex flex-row gap-4 mt-2">
              <div className="bg-primary rounded-xl h-10 w-10 flex justify-center items-center p-2 text-white hover:bg-primary hover:text-white">
                <div className="text-sm ">L</div>
              </div>
              <div className="bg-secondary_foregound rounded-xl h-10 w-10 flex justify-center items-center p-2 hover:bg-primary hover:text-white">
                <div className="text-sm">XL</div>
              </div>
              <div className="bg-secondary_foregound rounded-xl h-10 w-10 flex justify-center items-center p-2 hover:bg-primary hover:text-white">
                <div className="text-sm">XS</div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-2 border rounded-md">
              <div
                className="flex flex-row gap-2 py-3 px-6 cursor-pointer"
                onClick={decreaseQuantity}
              >
                <div>-</div>
              </div>
              <div>{quantity}</div>
              <div
                className="flex flex-row gap-2 py-3 px-6 cursor-pointer"
                onClick={increaseQuantity}
              >
                <div>+</div>
              </div>
            </div>
            <div className="border py-3 px-10 rounded-md">Add To Cart</div>
            <div className="border py-3 px-10 rounded-md">+ Compare</div>
          </div>

          <div className="flex flex-row gap-3 text-secondary border-t mt-14 pt-10">
            <div className="leading-10">
              <div>SKU</div>
              <div>Category</div>
              <div>Tags</div>
              <div>Share</div>
            </div>
            <div className="leading-10">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="leading-10">
              <div>SS001</div>
              <div>Sofas</div>
              <div>Sofa, Chair, Home, Shop</div>
              <div className="flex flex-row items-center gap-4 py-2 text-black">
                <div>
                  <FaFacebook className="text-xl" />
                </div>
                <div>
                  <IoLogoWhatsapp className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-t py-20 mb-20 mt-10 px-24 flex justify-center">
        <Tabs defaultValue="description" >
          <TabsList className="grid w-[600px] mx-auto grid-cols-3">
            <TabsTrigger
              value="description"
              className={`${
                selectedTab === "description" ? "text-black" : "text-secondary"
              }`}
              onClick={() => setSelectedTab("description")}
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="addition"
              className={`${
                selectedTab === "addition" ? "text-black" : "text-secondary"
              }`}
              onClick={() => setSelectedTab("addition")}
            >
              Addition
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className={`${
                selectedTab === "reviews" ? "text-black" : "text-secondary"
              }`}
              onClick={() => setSelectedTab("reviews")}
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-secondary w-full mt-6 px-28">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.

            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </TabsContent>
          <TabsContent value="addition" className="text-secondary w-full mt-6 px-28">sadasd</TabsContent>
          <TabsContent value="reviews" className="text-secondary w-full mt-6 px-28">sadasd</TabsContent>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

export default AddCart;
