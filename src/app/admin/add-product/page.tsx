import React, { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import AddPhotoProduct from "@/components/organism/AddPhotoProduct";

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-primary">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/product">Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#707070]">
                  Add Product
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
        <div className="text-secondary_text font-semibold">Add Product</div>
        <div className="space-y-5">
          <div className="flex flex-row gap-2">
            <div className="bg-white rounded-lg w-[80%] p-4">
                <AddPhotoProduct />
            </div>
            <div className="bg-[#F3EDCB] border-[#f3e386] rounded-lg w-[20%]">
              asd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
