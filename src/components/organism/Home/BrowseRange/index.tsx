import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { FC } from "react";

const image = [
    {
        "image": '/images/browse1.png',
        "title": "Dining",
    },
    {
        "image": '/images/browse2.png',
        "title": "Living",
    },
    {
        "image": '/images/browse3.png',
        "title": "Bedroom",
    },
]

interface BrowseRangeProps {}

const BrowseRange: FC<BrowseRangeProps> = () => {
  return (
    <div className="pt-20 pb-10">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary_text">
          Browse The Range
        </div>
        <div className="text-secondary_text_foregound">
          Explore the Range: Unveiling our latest collection.{" "}
        </div>
      </div>
      <div className="px-36 w-full pt-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {image.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none shadow-none">
                      <img src={item.image} alt="" className="w-full h-[480px] object-cover rounded-lg"/>
                      <div className="text-center text-primary_text text-xl font-bold mt-6">{item.title}</div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default BrowseRange;
