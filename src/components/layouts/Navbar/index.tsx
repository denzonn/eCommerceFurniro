"use client";
import React, { FC, useState } from "react";
import { IoBagCheckOutline, IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const router = useRouter()

  return (
    <nav className="h-20 w-full bg-white flex flex-row items-center justify-between px-12">
      <div className="flex flex-row gap-x-4 items-center">
        <img src="/images/logo.png" alt="" className="w-10" />
        <img src="/images/logoName.png" alt="" className="h-5" />
      </div>
      <div>
        <ul className="flex flex-row gap-x-12 text-sm">
          <li>
            <a
              href="/"
              className={`${
                pathname === "/" ? "text-primary font-semibold" : ""
              } hover:text-primary hover:font-semibold font-medium`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className={`${
                pathname === "/shop" ? "text-primary font-semibold" : ""
              } hover:text-primary hover:font-semibold font-medium`}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/comparison"
              className={`${
                pathname === "/comparison" ? "text-primary font-semibold" : ""
              } hover:text-primary hover:font-semibold font-medium`}
            >
              Comparison
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-primary font-semibold" : ""
              } hover:text-primary hover:font-semibold font-medium`}
            >
              Contact
            </a>
          </li>
          <li>
            <div
              onClick={() => signIn()}
              className={`${
                pathname === "/contact" ? "text-primary font-semibold" : ""
              } hover:text-primary hover:font-semibold font-medium`}
            >
              Login
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row gap-x-8 items-center">
          <li className="text-xl relative" onClick={() => setIsInputOpen(true)}>
            {isInputOpen ? (
              <>
                <div className="relative">
                  <div className="absolute top-0 right-0 -translate-y-1/2 flex flex-row gap-3 items-center">
                    <div>
                      <Input
                        type="text"
                        placeholder="Find Product ..."
                        className="w-52"
                      />
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsInputOpen(false);
                      }}
                    >
                      <MdCancel />
                    </div>
                  </div>
                </div>
                <div className="px-[10px]"></div>
              </>
            ) : (
              <IoSearch />
            )}
          </li>

          <li className="text-xl">
            <FaRegHeart />
          </li>
          <li
            className="text-2xl relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <IoCartOutline />
            {isCartOpen ? (
              <div className="absolute top-14 right-0 bg-white px-6 py-8 z-20 shadow-sm text-base">
                <div className="flex flex-row justify-between gap-4 min-w-[400px]">
                  <div className="border-b pb-4 font-semibold w-full text-2xl">
                    Shopping Cart
                  </div>
                  <div className="mt-1 text-secondary">
                    <IoBagCheckOutline className="text-2xl" />
                  </div>
                </div>
                <div className="max-h-[30vh] overflow-auto scrolling">
                  <div className="mt-4 flex flex-row gap-4 items-center">
                    <div className="w-[35%]">
                      <img
                        src="/images/detailImage.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="w-[50%] ">
                      <div>Asgaard sofa</div>
                      <div className="flex flex-row gap-3">
                        <div>1</div>
                        <div>x</div>
                        <div className="text-primary font-medium">
                          Rp. 250.000,00
                        </div>
                      </div>
                    </div>
                    <div className="w-[15%] flex justify-center">
                      <MdCancel className="text-xl" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row gap-4 items-center">
                    <div className="w-[35%]">
                      <img
                        src="/images/detailImage.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="w-[50%] ">
                      <div>Asgaard sofa</div>
                      <div className="flex flex-row gap-3">
                        <div>1</div>
                        <div>x</div>
                        <div className="text-primary font-medium">
                          Rp. 250.000,00
                        </div>
                      </div>
                    </div>
                    <div className="w-[15%] flex justify-center">
                      <MdCancel className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-row justify-between items-center">
                  <div>Subtotal</div>
                  <div className="font-semibold text-primary">
                    Rp. 500.000,00
                  </div>
                </div>

                <Separator className="mt-8 bg-[#D9D9D9]" />

                <div className="mt-8 grid grid-cols-3 gap-4 w-full ">
                  <Button className="bg-transparent border border-[#D9D9D9]">
                    Cart
                  </Button>
                  <Button className="bg-transparent border border-[#D9D9D9]">
                    Checkout
                  </Button>
                  <Button className="bg-transparent border border-[#D9D9D9]">
                    Comparison
                  </Button>
                </div>
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
