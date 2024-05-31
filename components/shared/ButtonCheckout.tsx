"use client";
import { IPost } from "@/lib/database/models/post.model";
import { SignIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const ButtonCheckout = ({ post }: { post: any }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId;
  const hasFinished = new Date(post.endDate) < new Date();

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
          <SignIn></SignIn>
        </>
      )}
    </div>
  );
};

export default ButtonCheckout;
