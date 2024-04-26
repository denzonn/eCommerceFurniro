import React, { FC } from "react";
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
import { Button } from "@/components/ui/button";

interface AddCategoryProps {}

const AddCategory: FC<AddCategoryProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white">Add New Category</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Expand your horizons! Add a new category and explore endless
            possibilities. Let's redefine your shopping experience together.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4 ">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Category Name</Label>
            <Input
              name="name"
              placeholder="Enter Category Name"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username">Category Photo</Label>
            <Input
              name="photo"
              type="file"
              className="col-span-3"
              accept="image/png, image/jpeg, image/jpg"
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

export default AddCategory;
