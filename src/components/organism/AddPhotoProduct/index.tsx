"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FC, useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";

interface AddPhotoProductProps {}

const AddPhotoProduct: FC<AddPhotoProductProps> = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0 && files.length <= 4) {
      const imageUrls: [] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          imageUrls.push(reader.result);

          // If all images are loaded, update the state
          if (imageUrls.length === files.length) {
            setSelectedImages(imageUrls);
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      alert('Maximal number of images is 4')
    }
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Upload Product</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="flex flex-row gap-8">
        <div className=" w-[30%]">
          <div className="font-semibold text-sm text-secondary_text">
            Product Photos{" "}
            <Badge className="bg-slate-200 text-slate-600">Required</Badge>
          </div>
          <div className="text-xs mt-2 text-secondary">
            The image format is .jpg .jpeg .png and a minimum size of 300 x 300
            pixels (For optimal images use a minimum size of 700 x 700 pixels).
          </div>
        </div>
        <div className="w-[70%] border-2 border-dashed rounded-md p-4">
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {selectedImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Selected Image ${index}`}
                  className="w-full rounded-sm hover:scale-105 transition duration-200"
                />
              ))}
            </div>
          )}
          <div className="flex justify-center mt-4">
            <div className="flex flex-row gap-2 items-center text-sm" onClick={handleClick}>
              <CiImageOn className="text-base"/> 
              <div>Upload product photo here</div>
            </div>
            <Input
              type="file"
              className="mt-4 hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
              multiple
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoProduct;
