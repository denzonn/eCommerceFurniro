import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddProductTypeProps {}

const AddProductType: FC<AddProductTypeProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white">Add New Product Type</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Add New Product Type</DialogTitle>
          <DialogDescription>
            Expand your product lineup effortlessly! Add a new product type and
            diversify your offerings. Let's elevate your store's versatility
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4 ">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username">Name</Label>
            <Input
              name="name"
              className="col-span-3"
              placeholder="Enter Product Type Name"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="text-white" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductType;
