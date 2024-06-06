import { Button } from "@/components/ui/button";
import {
  getDonationsByRequest,
  getDonationsByUser,
} from "@/lib/actions/donation.actions";
import { IDonation } from "@/lib/database/models/donation.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Collections from "@/components/shared/Collections";
import Image from "next/image";
import {
  getDonationRequestById,
  getEventsByUser,
} from "@/lib/actions/DonationRequest.actions";
import { getUserById } from "@/lib/actions/user.actions";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const donationsPage = Number(searchParams?.donationsPage) || 1;
  const postsPage = Number(searchParams?.postsPage) || 1;

  const my_donations = await getDonationsByUser({
    userId,
    page: donationsPage,
  });
  const loginUser = await getUserById(userId);
  const donationPosts =
    my_donations?.data.map((donation: IDonation) => donation.post) || [];
  // console.log("donation posts\n");
  // console.log(donationPosts);
  // console.log("\n\n");

  const organizedFunds = await getEventsByUser({
    userId,
    page: postsPage,
  });

  return (
    <>
      {/* My donations */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Donations :💛</h3>
          <Button
            asChild
            size="lg"
            className="button hidden sm:flex"
            disabled={loginUser.donatedMoney < 100}
          >
            <Link href="/License">
              Claim your certificate{" "}
              <Image
                style={{ marginLeft: "0.3rem" }}
                src="/assets/images/network-1-svgrepo-com.svg"
                alt="arrow right"
                width={20}
                height={20}
              />
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collections
          data={donationPosts}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubText="No worries - plenty of exciting events to explore!"
          CollectionType="my_donations"
          limit={3}
          page={postsPage}
          urlParamName="ordersPage"
          totalPages={my_donations?.totalPages}
        />
      </section>

      {/* funds Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Fundraising Organized
          </h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/announcements/create">
              Create new Fundraizing Call
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collections
          data={organizedFunds?.data}
          emptyTitle="No Funds have been created yet"
          emptyStateSubText="Go create some now"
          CollectionType="all_Donations"
          limit={3}
          page={postsPage}
          urlParamName="eventsPage"
          totalPages={organizedFunds?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
