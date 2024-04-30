"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface ProductInformationProps {
  form: any;
}

const ProductInformation: FC<ProductInformationProps> = ({ form }) => {
  const [productName, setProductName] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 70) {
      setProductName(inputValue);
      setCharacterCount(inputValue.length);
    }
  };
  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Product Information</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="space-y-8">
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              SKU (Stock Keeping Unit){" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Use a unique SKU code if you want to mark your product.
            </div>
          </div>
          <div className="w-[70%]">
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Input SKU" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Product Name{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Include min. 40 characters to make it more attractive and easy for
              buyers to find, consisting of product type, brand, and information
              such as color, material, or type.
            </div>
          </div>
          <div className="w-[70%]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Product Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              className={`text-end text-secondary text-xs mt-2 ${
                characterCount === 70 ? "text-red-500" : ""
              }`}
            >
              Maximum character {characterCount}/70
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Category{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
          </div>
          <div className="w-[70%]">
            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-white">
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Product Type{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
          </div>
          <div className="w-[70%]">
            <FormField
              control={form.control}
              name="product_type"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-white">
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
