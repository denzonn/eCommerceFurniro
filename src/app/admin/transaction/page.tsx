import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { LuPackage, LuWallet } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function TransactionPage() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-primary">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#707070]">
                  Transaction
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Admin</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator className="bg-[#cfcfcf] my-6" />

      <div className="text-secondary_text font-semibold">History Transaction</div>
      <div className="flex flex-row gap-4">
        <div className="w-[12%] p-4 bg-primary rounded-xl text-white mt-4">
            <ul className="flex flex-col space-y-6">
                <div className="flex flex-row gap-2 text-sm items-center px-3 py-2 rounded-md bg-[#d6d6d652]">
                    <div><LuWallet className="text-base"/></div>
                    <div>Unpaid</div>
                </div>
                <div className="flex flex-row gap-2 text-sm items-center px-3 py-2 rounded-md">
                    <div><LuPackage className="text-base" /></div>
                    <div>Packed</div>
                </div>
                <div className="flex flex-row gap-2 text-sm items-center px-3 py-2 rounded-md">
                    <div><LiaShippingFastSolid className="text-base" /></div>
                    <div>Ship</div>
                </div>
                <div className="flex flex-row gap-2 text-sm items-center px-3 py-2 rounded-md">
                    <div><IoCheckmarkDoneCircleSharp className="text-base" /></div>
                    <div>Done</div>
                </div>
            </ul>
        </div>
        <div className="w-[88%]">
            
        </div>
      </div>
    </div>
  );
}
