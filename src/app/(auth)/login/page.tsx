"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof loginFormSchema>) => {
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });

    router.push("/admin/dashboard");
  };

  return (
    <div className="w-full h-screen relative">
      <img
        src="/images/hero.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-20 right-16 px-8 pt-16 pb-8 w-[40vw] bg-primary_foregound rounded-xl">
        <div className="text-5xl font-bold text-primary tracking-wide leading-tight">
          Log In
        </div>
        <div className="mt-2 font-medium">
          Seamless shopping awaits! Login for exclusive deals and personalized
          picks. Let's shop smarter together.
        </div>
        <div className="mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter Your Email"
                          className="border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter Your Password"
                          className="border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="text-white px-10 py-6 mt-8 w-full">
                Sign In
              </Button>
              <div className="mt-2 text-center text-sm">
                Don't have an Account ?{" "}
                <a href="/register" className="font-semibold">
                  Register
                </a>{" "}
                Now
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
