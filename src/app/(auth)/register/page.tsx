import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/images/hero.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-20 right-16 px-8 pt-16 pb-8 w-[40vw] bg-primary_foregound rounded-xl">
        <div className="text-5xl font-bold text-primary tracking-wide leading-tight">
          Register
        </div>
        <div className="mt-2 font-medium">
        Ready to dive in? Register now for exclusive perks and speedy checkout. Let's get started!
        </div>
        <div className="mt-8">
          <div className="space-y-6">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="border-none"
            />
            <Input
              type="password"
              placeholder="Enter Your Password"
              className="border-none"
            />
          </div>
          <Button className="text-white px-10 py-6 mt-8 w-full">Buy Now</Button>
          <div className="mt-2 text-center text-sm">
            Already have an Account ?{" "}
            <a href="/login" className="font-semibold">
              Login
            </a>{" "}
            Now
          </div>
        </div>
      </div>
    </div>
  );
}
