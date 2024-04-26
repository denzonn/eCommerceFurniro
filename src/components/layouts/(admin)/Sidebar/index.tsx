"use client";
import React, { FC, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { IoLogOutOutline, IoPulseOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const [isCategoryOpen, setCategoryIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="py-10 pl-10 w-full text-white">
      <div className="w-full flex flex-row gap-3 items-center text-3xl font-bold">
        <FaDatabase />
        <div>Furniro</div>
      </div>
      <div className="mt-10">
        <ul className="flex flex-col space-y-2">
          <a
            href="/admin/dashboard"
            className={`flex flex-row gap-2 items-center py-4 pl-4 rounded-l-full relative ${
              pathname === "/admin/dashboard" ? "bg-admin text-primary" : ""
            }`}
          >
            <FiHome />
            <li className="text-sm side">Dashboard</li>
          </a>
          <div>
            <div
              className={`flex flex-row gap-2 items-center py-4 pl-4 hover:cursor-pointer rounded-l-full ${
                pathname === "/admin/category" || pathname === "/admin/category-general-data" ? "bg-admin text-primary" : ""
              }`}
              onClick={() => setCategoryIsOpen(!isCategoryOpen)}
            >
              <BiCategory />
              <li className="text-sm flex flex-row justify-between items-center w-full">
                <div className="text-sm">Category</div>
                <div className="pr-6">
                  <MdKeyboardArrowDown
                    className={
                      isCategoryOpen ? "rotate-180" : "transition duration-500"
                    }
                  />
                </div>
              </li>
            </div>
            <div
              className={`${
                isCategoryOpen
                  ? "max-h-[1000px] transition-all duration-700 ease-in-out"
                  : "max-h-0 overflow-hidden"
              } bg-[#a8822a] mr-4 rounded-xl`}
            >
              <ul className="flex flex-col space-y-2 delay-300">
                <a
                  href="/admin/category"
                  className="flex flex-row gap-2 items-center py-4 pl-4"
                >
                  <IoPulseOutline />
                  <li className="text-sm">Category</li>
                </a>
                <a
                  href="/admin/category-general-data"
                  className="flex flex-row gap-2 items-center py-4 pl-4"
                >
                  <IoPulseOutline />
                  <li className="text-sm">Category General Data</li>
                </a>
              </ul>
            </div>
          </div>
          <a
            href="/admin/product"
            className={`flex flex-row gap-2 items-center py-4 pl-4 rounded-l-full relative ${
              pathname === "/admin/product" || pathname === "/admin/add-product" ? "bg-admin text-primary" : ""
            }`}
          >
            <FiShoppingBag />
            <li className="text-sm">Product</li>
          </a>
          <a
            href="/admin/transaction"
            className={`flex flex-row gap-2 items-center py-4 pl-4 rounded-l-full relative ${
              pathname === "/admin/transaction" ? "bg-admin text-primary" : ""
            }`}
          >
            <GrTransaction />
            <li className="text-sm">Transaction</li>
          </a>
          <a href="" className="flex flex-row gap-2 items-center py-4 pl-4">
            <IoLogOutOutline />
            <li className="text-sm">Logout</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
