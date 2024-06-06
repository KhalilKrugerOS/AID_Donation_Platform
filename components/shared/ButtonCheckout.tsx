"use client";
import { IPost } from "@/lib/database/models/post.model";
import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const ButtonCheckout = ({ post }: { post: any }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasFinished = new Date(post.endDate) > new Date();
  console.log(hasFinished);

  return (
    <div className="flex items-center gap-3">
      {hasFinished ? (
        <p className="p-2 text-red-400">la délai a passé pour ce fond</p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-full" size={"lg"}>
              <Link href={"/sign-in"}></Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout post={post} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default ButtonCheckout;
