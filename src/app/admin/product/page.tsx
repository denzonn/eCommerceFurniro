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

export default function ProductPage() {
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
                  Product
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
        <div className="text-secondary font-semibold">Products</div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 mt-2">
            <a href="/admin/add-product" className="text-white bg-primary py-2 px-3 rounded-md">Add New Product</a>
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
              <TableHead className="w-[15%]">IMAGE</TableHead>
              <TableHead className="w-[20%]">CATEGORY</TableHead>
              <TableHead className="w-[30%]">PRODUCT NAME</TableHead>
              <TableHead className="w-[20%]">PRODUCT PRICE</TableHead>
              <TableHead className="w-[15%]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[0, 1].map((item) => (
              <TableRow key="1" className="bg-white rounded-xl text-[#64748b]">
                <TableCell className="font-medium w-[15%]  rounded-l-xl py-1">
                  <div className="flex flex-row relative">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 p-[2px] bg-white rounded-full">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute top-1/2 left-5 -translate-y-1/2 p-[2px] bg-white rounded-full">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 p-[2px] bg-white rounded-full">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="w-[20%] py-1">
                  <div className="text-[#475569]">Meja</div>
                </TableCell>
                <TableCell className="w-[30%] py-1">
                  <div className="text-[#475569] flex flex-col gap-1">
                    <div className="text-black">Meja Aesthertic</div>
                    <div className="text-xs">Tags : Bagus, Keren</div>
                  </div>
                </TableCell>
                <TableCell className="w-[20%] py-1">
                  <div className="text-[#475569]">Rp. 750.000</div>
                </TableCell>
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
        <Button className="text-black bg-secondary_foregound text-xs">Prev</Button>
        <Button className="text-white text-xs">1</Button>
        <Button className="text-black bg-secondary_foregound text-xs">2</Button>
        <Button className="text-black bg-secondary_foregound text-xs">3</Button>
        <Button className="text-black bg-secondary_foregound text-xs">Next</Button>
      </div>
    </div>
  );
}
