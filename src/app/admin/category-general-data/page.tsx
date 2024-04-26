import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FiCheckSquare } from "react-icons/fi";
import { IoSearch, IoTrashOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import AddCategoryGeneral from "@/components/atoms/AddCategoryGeneral";

export default function CategoryGeneralDataPage() {
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
                <BreadcrumbLink href="/admin/category"  className="text-[#707070]">
                  Category
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#707070]">
                  Category General Data
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
        <div className="text-secondary font-semibold">Categories General Data</div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 mt-2">
            <AddCategoryGeneral />
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
              <TableHead className="w-[40%]">CATEGORY NAME</TableHead>
              <TableHead className="w-[40%]">CATEGORY GENERAL DATA NAME</TableHead>
              <TableHead className="w-[20%]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[0, 1].map((item) => (
              <TableRow key="1" className="bg-white rounded-xl text-[#64748b]">
                <TableCell className="w-[40%] py-1 rounded-l-xl">meja</TableCell>
                <TableCell className="w-[40%] py-1">meja</TableCell>
                <TableCell className=" w-full rounded-r-xl py-1 W-[20%]">
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
        <Button className="text-black bg-secondary_foregound text-xs">Prev</Button>
        <Button className="text-white text-xs">1</Button>
        <Button className="text-black bg-secondary_foregound text-xs">2</Button>
        <Button className="text-black bg-secondary_foregound text-xs">3</Button>
        <Button className="text-black bg-secondary_foregound text-xs">Next</Button>
      </div>
    </div>
  );
}
