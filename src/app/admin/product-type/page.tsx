import AddProductType from "@/components/atoms/AddProductType";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { IoSearch, IoTrashOutline } from "react-icons/io5";

export default function ProductTypePage() {
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
                  Product Type
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

      <div className="py-4">
        <div className="text-secondary font-semibold">Product Type</div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 mt-2">
            <AddProductType />
            <div></div>
            <div>
              <Button className="bg-white text-secondary">+</Button>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Input
              type="text"
              placeholder="Search..."
              className="w-[200px] border-none"
            />
            <div>
              <Button className="bg-white text-secondary">
                <IoSearch />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4">
        <Table>
          <TableHeader>
            <TableRow className="font-semibold text-primary_text">
              <TableHead className="w-[35%]">CATEGORY NAME</TableHead>
              <TableHead className="w-[50%]">NAME</TableHead>
              <TableHead className="w-[15%]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[0, 1].map((item) => (
              <TableRow key="1" className="bg-white rounded-xl text-[#64748b]">
                <TableCell className="w-[35%] py-1 rounded-l-xl">
                  <div className="text-[#475569]">Meja</div>
                </TableCell>
                <TableCell className="w-[50%] py-1">meja</TableCell>
                <TableCell className=" w-full rounded-r-xl py-1">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex flex-row gap-2 items-center text-[#64748b] py-4">
                      <FiCheckSquare />
                      <div>Edit</div>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[#dd5252]">
                      <IoTrashOutline />
                      <div>Delete</div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-10 flex flex-row gap-4 justify-end ">
        <Button className="text-black bg-secondary_foregound text-xs">
          Prev
        </Button>
        <Button className="text-white text-xs">1</Button>
        <Button className="text-black bg-secondary_foregound text-xs">2</Button>
        <Button className="text-black bg-secondary_foregound text-xs">3</Button>
        <Button className="text-black bg-secondary_foregound text-xs">
          Next
        </Button>
      </div>
    </div>
  );
}
