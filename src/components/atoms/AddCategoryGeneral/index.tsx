import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AddCategoryGeneralProps {}

const AddCategoryGeneral: FC<AddCategoryGeneralProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white tracking-tight">
          Add New Category General Data
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Add New Category General Data</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4 ">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Category Name</Label>
            <Select name="category_id">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
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
            <Label htmlFor="username">Category Photo</Label>
            <Input
              name="name"
              type="text"
              placeholder="Enter Category General Data Name"
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

export default AddCategoryGeneral;
