import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="border-t-2 w-full px-24 py-16">
      <div className="grid grid-cols-3 gap-4 text-secondary font-semibold">
        <div>
          <img src="/images/logoName.png" alt="" className="h-4" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>Links</div>
          <div>Help</div>
        </div>
        <div>Newsletter</div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-secondary font-semibold mt-6 border-b-2 pb-10">
        <div>400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</div>
        <div className="grid grid-cols-2 gap-4">
            <ul className="text-black leading-10">
                <li className="mb-4"><a href="">Home</a></li>
                <li className="mb-4"><a href="">Shop</a></li>
                <li className="mb-4"><a href="">Comparison</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul className="text-black leading-10">
                <li className="mb-4"><a href="">Payment Options</a></li>
                <li className="mb-4"><a href="">Returns</a></li>
                <li><a href="">Privacy Policies</a></li>
            </ul>
        </div>
        <div className="">
            <input type="text" className="border-b-2 font-light w-1/2 text-sm" placeholder="Enter Your Email Address"/>
            <button className="border-b-2 ml-4 text-black text-sm">SUBSCRIBE</button>
        </div>
      </div>
      <div className="pt-8">
      2023 furino. All rights reverved
      </div>
    </div>
  );
};

export default Footer;
