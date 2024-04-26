import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";

interface ItemContactProps {}

const ItemContact: FC<ItemContactProps> = () => {
  return (
    <div className="px-24 pb-10 pt-20">
      <div className="text-center">
        <div className="font-semibold text-3xl">Get In Touch With Us</div>
        <div className="text-secondary mt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </div>
      </div>

      <div className="px-52 mt-14">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-8">
            <div className="flex flex-row gap-3">
              <div className="mt-1">
                <IoLocationSharp className="text-2xl" />
              </div>
              <div>
                <div className="text-lg font-medium">Address</div>
                <div>
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                  States
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="mt-1">
                <FaPhoneFlip className="text-xl" />
              </div>
              <div>
                <div className="text-lg font-medium">Phone</div>
                <div>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="mt-1">
                <IoTime className="text-2xl" />
              </div>
              <div>
                <div className="text-lg font-medium">Working Time</div>
                <div>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <label htmlFor="">Your Name</label>
              <Input className="mt-2" placeholder="Abc" />
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <Input className="mt-2" placeholder="Abc@def.com" />
            </div>
            <div>
              <label htmlFor="">Subject</label>
              <Input className="mt-2" placeholder="This is an optional" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <Input className="mt-2" placeholder="Hi! i’d like to ask about" />
            </div>
            <div>
              <Button className="w-1/2 text-white">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContact;
