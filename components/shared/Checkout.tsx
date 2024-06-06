import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "../ui/button";
import { IPost } from "@/lib/database/models/post.model";
import { checkoutDonation } from "@/lib/actions/donation.actions";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DonateFormSchema } from "@/lib/validator";
import { Amarante } from "next/font/google";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ post, userId }: { post: IPost; userId: string }) => {
  console.log("user id is : ", userId);
  const initialValue = {
    amountDonated: "5",
  };
  const form = useForm<z.infer<typeof DonateFormSchema>>({
    resolver: zodResolver(DonateFormSchema),
    defaultValues: initialValue,
  });

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async (values: z.infer<typeof DonateFormSchema>) => {
    const donation = {
      postTitle: post.title,
      postId: post._id,
      amountDonated: Number(values.amountDonated),
      donatorId: userId,
    };

    console.log(donation);

    await checkoutDonation(donation);
  };

  return (
    <Form {...form}>
      <form
        //action={onCheckout}
        method="post"
        onSubmit={form.handleSubmit(onCheckout)}
        className="flex flex-row gap-2 px-2"
      >
        <FormField
          control={form.control}
          name="amountDonated"
          render={({ field }) => (
            <FormItem className="w-full flex flex-row">
              <FormControl className="h-72">
                <div className=" border-2 border-violet-500 flex-center w-full h-[54px] overflow-hidden rounded-xl bg-gray-50 px-4 py-2">
                  <Image
                    src="/assets/icons/dollar.svg"
                    alt="Amount Needed"
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  <Input
                    type="number"
                    step="5"
                    min={"5"}
                    placeholder="What's your amount?"
                    {...field}
                    className="p-regular-16 border-0 bg-gray-50 outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-2xl "
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          role="link"
          size="lg"
          className="button sm:w-fit rounded-xl shadow-2xl motion-safe:animate-bounce"
        >
          Donate
        </Button>
      </form>
    </Form>
  );
};

export default Checkout;
