"use client";
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
import AddPhotoProduct from "@/components/organism/AddProduct/AddPhotoProduct";
import ProductInformation from "@/components/organism/AddProduct/ProductInformation";
import VariantProduct from "@/components/organism/AddProduct/VariantProduct";
import DimensionProduct from "@/components/organism/AddProduct/Dimension";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addProductFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import DescriptionProduct from "@/components/organism/AddProduct/Description";
import ProductTags from "@/components/organism/AddProduct/ProductTags";

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = () => {
  const form = useForm<z.infer<typeof addProductFormSchema>>({
    resolver: zodResolver(addProductFormSchema),
  });

  const onSubmit = async(val: z.infer<typeof addProductFormSchema>) => {
    console.log(val);
  }

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
        <div className="space-y-5 mt-4">
          <div className="flex flex-row gap-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-8 w-[80%]">
                  <div className="bg-white rounded-lg p-4">
                    <AddPhotoProduct />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <ProductInformation form={form} />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <VariantProduct form={form} />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <DimensionProduct form={form} />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <DescriptionProduct form={form} />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <ProductTags form={form} name="tags"/>
                  </div>
                  <div className="flex flex-row gap-2 justify-end text-bold_text">
                    {/* <Button className="bg-transparent border-2">Cancel</Button>
                    <Button className="bg-transparent border-2">
                      Save & Add New Product
                    </Button> */}
                    <Button className="bg-primary text-white px-20">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
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
