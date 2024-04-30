import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface DescriptionProductProps {
  form: any
}

const DescriptionProduct: FC<DescriptionProductProps> = ({form}) => {
  return (
    <div className="border p-4 rounded-md">
      <div className="text-primary_text font-medium">Product Description</div>
      <Separator className="my-4 bg-slate-100" />
      <div className="space-y-8">
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Short Description{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Craft compelling product narratives! Condense key features and
              benefits into a captivating short description. Let's captivate
              your audience in seconds.
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-4 gap-4">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className=" w-[30%]">
            <div className="font-semibold text-sm text-secondary_text">
              Detail Description{" "}
              <Badge className="bg-slate-200 text-slate-600">Required</Badge>
            </div>
            <div className="text-xs mt-2 text-secondary">
              Make sure the product description provides a detailed explanation
              of your product so that it is easy to understand and find your
              product.
              <br />
              <br />
              It is recommended not to enter info on mobile numbers, e-mails,
              etc. into the product description to protect your personal data.
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-4 gap-4">
            s
            {/* <CKEditor form={form} name={'warranty_summary'} editorLoaded={true}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionProduct;
