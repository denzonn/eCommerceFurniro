"use client";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categoryFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CustomUpload from "@/components/organism/CustomUpload";

interface AddCategoryProps {}

const AddCategory: FC<AddCategoryProps> = () => {
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof categoryFormSchema>) => {
    try {
      const body = {
        ...val,
      }

      await fetch('')
    } catch (error) {
      
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white">Add New Category</Button>
      </DialogTrigger>
      <Form {...form}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogDescription>
              Expand your horizons! Add a new category and explore endless
              possibilities. Let's redefine your shopping experience together.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="flex flex-col gap-4 py-4 ">
              <div className="flex flex-col gap-4">
                <Label htmlFor="name">Category Name</Label>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter Category Name"
                          className="col-span-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="username">Category Photo</Label>
                
                <CustomUpload form={form} name="photo"/>
              </div>
            </div>
            <DialogFooter>
              <Button className="text-white" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
};

export default AddCategory;
