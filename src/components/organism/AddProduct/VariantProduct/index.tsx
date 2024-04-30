"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FC, useState } from "react";

interface VariantProductProps {
  form: any;
}

const VariantProduct: FC<VariantProductProps> = ({ form }) => {
  const [inputs, setInputs] = useState<string[]>([]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Product Variant</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="space-y-8">
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Variant Product{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Add the types of variants
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-2 gap-4 items-center">
            {inputs.map((color, index) => (
              <div key={index} className="flex flex-row gap-2">
                <div className="w-[15%]">
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="color"
                            className="bg-white rounded-lg p-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row items-center w-[50%]">
                  <div className="text-[#475569] bg-[#f1f5f9] p-[9px] border rounded-l-md text-sm">
                    Rp
                  </div>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Price"
                            className="rounded-l-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[30%]">
                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" placeholder="Stock" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
            <div>
              <Button
                type="button"
                className="bg-white border text-secondary"
                onClick={handleAddInput}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantProduct;
