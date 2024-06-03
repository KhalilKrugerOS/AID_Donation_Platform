import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "../ui/button";
import { IPost } from "@/lib/database/models/post.model";
import { checkoutDonation } from "@/lib/actions/donation.actions";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ post, userId }: { post: IPost; userId: string }) => {
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

  const onCheckout = async () => {
    const donation = {
      postTitle: post.title,
      postId: post._id,
      amountNeeded: post.amountNeeded,
      donatorId: userId,
    };

    await checkoutDonation(donation);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        Donate
      </Button>
    </form>
  );
};

export default Checkout;
