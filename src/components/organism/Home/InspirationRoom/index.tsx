import React, { FC } from "react";

interface InspirationRoomProps {}

const InspirationRoom: FC<InspirationRoomProps> = () => {
  return (
    <div className="py-10">
      <div className="w-full bg-[#FCF8F3] p-8 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 my-auto">
            <div className="px-10 ">
              <div className="text-4xl font-bold leading-tight">
                50+ Beautiful rooms inspiration
              </div>
              <div className="mt-2 text-[#616161]">
                Unlock Inspiration: Dive into 50+ Beautiful Rooms for your next
                design adventure.
              </div>
              <div className="mt-10">
                <a href="" className="bg-primary text-white px-10 py-3 rounded-sm">
                    Explore More
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 my-auto">
            <img
              src="/images/homeInspiration.png"
              alt=""
              className="w-full h-[580px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationRoom;
