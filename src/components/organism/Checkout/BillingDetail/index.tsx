"use client";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema } from "@/lib/form-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface BillingDetailProps {}

const BillingDetail: FC<BillingDetailProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
  });

  return (
    <div className="py-20 px-32">
      <div className="text-4xl font-semibold">Billing details</div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Form {...form}>
            <form action="">
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="">First Name</label>
                    <Input
                      className="mt-2"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Last Name</label>
                    <Input
                      className="mt-2"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <label htmlFor="">Company Name (Optional)</label>
                  <Input
                    className="mt-2"
                    placeholder="Enter Your Company Name"
                  />
                </div>
                <div className="mt-8">
                  <label htmlFor="">Country / Region</label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectItem value="Indonesia">Indonesia</SelectItem>
                        <SelectItem value="Malaysia">Malaysia</SelectItem>
                        <SelectItem value="Singapore">Singapore</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-8">
                  <label htmlFor="">Province</label>
                  <Input className="mt-2" placeholder="Enter Your Province " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">Town / City</label>
                  <Input className="mt-2" placeholder="Enter Your City " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">Street address</label>
                  <Input className="mt-2" placeholder="Enter Your Address " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">ZIP code</label>
                  <Input className="mt-2" placeholder="Enter Your ZIP Code " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">Phone</label>
                  <Input className="mt-2" placeholder="Enter Your Phone " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">Email</label>
                  <Input className="mt-2" placeholder="Enter Your Email " />
                </div>
                <div className="mt-8">
                  <label htmlFor="">(Optional)</label>
                  <Input
                    className="mt-2"
                    placeholder="Additional Information"
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="px-12">
          <div className="flex flex-row justify-between gap-4 font-medium text-2xl">
            <div>Product</div>
            <div>Subtotal</div>
          </div>
          <div className="space-y-3 mt-4">
            {[0, 1, 2].map((item, index) => (
              <div className="flex flex-row justify-between gap-4 font-light">
                <div className="flex flex-row gap-2">
                  <div className="text-secondary">Asgaard sofa</div>
                  <div>x 1</div>
                </div>
                <div>Rp. 250.000</div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between gap-4 mt-8">
            <div>Total</div>
            <div className="font-semibold text-2xl text-primary">
              Rp. 750.000
            </div>
          </div>

          <Separator className="bg-[#D9D9D9] my-8" />

          <div>
            <RadioGroup defaultValue={paymentMethod} className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="bank"
                  id="r1"
                  onClick={() => setPaymentMethod("bank")}
                />
                <Label htmlFor="r1" className="text-md">
                  Direct Bank Transfer
                </Label>
              </div>
              {paymentMethod === "bank" ? (
                <div className="text-sm text-secondary">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </div>
              ) : (
                <div className="hidden"></div>
              )}
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="cod"
                  id="r2"
                  onClick={() => setPaymentMethod("cod")}
                />
                <Label htmlFor="r2" className="text-md">
                  Cash On Delivery
                </Label>
              </div>
              {paymentMethod === "cod" ? (
                <div className="text-sm text-secondary">
                  Convenience at your doorstep! Enjoy hassle-free shopping with
                  Payment on Delivery (COD). Shop now, pay later, and embrace
                  seamless transactions.
                </div>
              ) : (
                <div className="hidden"></div>
              )}
            </RadioGroup>
          </div>

          <div className="mt-6 text-sm">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b>privacy policy</b>.
          </div>

          <div className="mt-8">
            <Button className="w-full text-white text-lg py-3">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
