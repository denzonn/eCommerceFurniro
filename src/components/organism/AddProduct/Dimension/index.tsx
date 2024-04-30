"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FC, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CKEditor from "@/components/atoms/CKEditor";

interface DimensionProductProps {
  form: any;
}

const DimensionProduct: FC<DimensionProductProps> = ({ form }) => {
  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Dimension & Warranty</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="space-y-8">
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Dimension{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Optimize your product's dimensions effortlessly! Customize width,
              height, depth, and weight for a tailored experience.
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-4 gap-4">
            <div className="flex flex-row items-center">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Width"
                        className="rounded-r-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-[#475569] bg-[#f1f5f9] p-[9px] border rounded-r-md text-sm">
                cm
              </div>
            </div>
            <div className="flex flex-row items-center">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Height"
                        className="rounded-r-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-[#475569] bg-[#f1f5f9] p-[9px] border rounded-r-md text-sm">
                cm
              </div>
            </div>
            <div className="flex flex-row items-center">
              <FormField
                control={form.control}
                name="depth"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Depth"
                        className="rounded-r-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-[#475569] bg-[#f1f5f9] p-[9px] border rounded-r-md text-sm">
                cm
              </div>
            </div>
            <div className="flex flex-row items-center">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Weight"
                        className="rounded-r-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-[#475569] bg-[#f1f5f9] p-[9px] border rounded-r-md text-sm">
                cm
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm text-secondary_text">
            Warranty{" "}
            <Badge className="bg-slate-200 text-slate-600">Required</Badge>
          </div>
          <div className="text-xs mt-2 text-secondary">
            Elevate trust with warranty options! Secure your purchase with peace
            of mind. Discover our warranty offerings today.
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Warranty Summary
            </div>
          </div>
          <div className="w-[70%]">
            s
            <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Warranty Service Type
            </div>
          </div>
          <div className="w-[70%]">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Covered in Warranty
            </div>
          </div>
          <div className="w-[70%]">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Not Covered in Warranty
            </div>
          </div>
          <div className="w-[70%]">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Domestic Warranty
            </div>
          </div>
          <div className="w-[70%]">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionProduct;
