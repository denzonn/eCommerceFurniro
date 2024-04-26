"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React, { FC, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {

  return (
    <div className="bg-secondary_foregound w-full h-16 -translate-y-2 relative font-semibold">
      <div className="flex flex-row justify-between items-center h-full w-full px-24">
        <div className="flex flex-row gap-2 items-center">
          <div
            className="flex flex-row items-center gap-2 relative hover:cursor-pointer"
          >
            <BsFilterLeft className="text-4xl"/> 
            <Select>
                <SelectTrigger className="bg-transparent rounded-sm outline-none border-none focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Filter " />
                </SelectTrigger>
                <SelectContent className="bg-white mt-4">
                  <SelectGroup>
                    <SelectItem value="Chair">Chair</SelectItem>
                    <SelectItem value="Table">Table</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
          </div>
          <Separator
            orientation="vertical"
            className="border border-secondary h-6 mx-4"
          />
          <div className="font-normal">Showing 1-16 of 32 results</div>
        </div>
        <div className="flex flex-row gap-6 items-center font-normal">
          <div className="flex flex-row gap-4 items-center">
            <div>Show</div>
            <div>
              <Select>
                <SelectTrigger className="bg-white rounded-sm outline-none border-none">
                  <SelectValue placeholder="16 " />
                </SelectTrigger>
                <SelectContent className="bg-white mt-4">
                  <SelectGroup>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div>Short by</div>
            <div>
              <Select>
                <SelectTrigger className="w-[180px] bg-white rounded-sm  outline-none border-none">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent className="bg-white mt-4">
                  <SelectGroup>
                    <SelectItem value="cheapest">Cheapest Price</SelectItem>
                    <SelectItem value="expensive">Most Expensive Price</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
