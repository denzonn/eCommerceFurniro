"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FC, useEffect, useState } from "react";

interface ProductTagsProps {
  form: any;
  name: string;
}

const ProductTags: FC<ProductTagsProps> = ({ form, name }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const newTag = tagInput.trim();
      if (newTag !== "") {
        setTags([...tags, newTag]);
        form.setValue(name, [...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
    form.setValue(name, updatedTags);
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Tags</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="space-y-8">
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Tags{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Enhance discoverability with tags! Amplify your product's
              visibility and reach. Let's tag your way to success.
            </div>
          </div>
          <div className="w-[70%]">
            <div className="flex flex-row gap-2">
              <div className="w-[60%]">
                <Input
                  placeholder="Enter Tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="w-[40%]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-block mr-2 mb-2 bg-gray-200 px-4 py-1 rounded-md relative text-secondary_text"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-1 text-sm text-white bg-red-500 w-4 h-4 rounded-full absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 flex flex-row items-center justify-center"
                      onClick={() => handleRemoveTag(index)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
