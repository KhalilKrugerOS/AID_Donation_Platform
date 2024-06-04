import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { createDonationFromResponse, UpdateDonationParams, DonationSucceeded } from "@/lib/actions/DonationSucceeded";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log("Event", event?.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created
    if (event?.type=="charge.updated")
      {
        console.log(
          await createDonationFromResponse(res),
          
         );
         await DonationSucceeded(await createDonationFromResponse(res));
      };
     
    return NextResponse.json({ status: "sucess", event: event.type, response: res });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}



/*"************************************",
      
      String(timeString), // time
      res ?.data?.object?.id,
      res?.data?.object?.amount/100, // amount
      res?.id,
      res?.type, // type
      res ?.data?.object?.billing_details?.email, // email
     
      //res ?.data?.object?.billing_details?.email,
      
      JSON.stringify(res), // payment info
      
      
      String(dateTime), // date
      res?.data?.object?.receipt_email, // email
      res?.data?.object?.receipt_url, // url
      JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
      JSON.stringify(res?.data?.object?.billing_details), // Billing details
      res?.data?.object?.currency // Currency*/