import { Button } from "@/components/ui/button";
import { getDonationsByUser } from "@/lib/actions/donation.actions";
import { IDonation } from "@/lib/database/models/donation.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Collections from "@/components/shared/Collections";
import { getDonationRequestById } from "@/lib/actions/DonationRequest.actions";
import Image from "next/image";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const donationsPage = Number(searchParams?.donationsPage) || 1;
  const postsPage = Number(searchParams?.postsPage) || 1;

  const my_donations = await getDonationsByUser({
    userId,
    page: donationsPage,
  });
  const donationPosts =
    my_donations?.data.map((donation: IDonation) => donation.post) || [];
  console.log("the donation posts : " + donationPosts + "\n\n");
  console.log("donation posts\n");
  console.log(donationPosts);
  console.log("\n\n");

  const organizedEvents = await getDonationsByUser({ userId, page: postsPage });

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Donations :💛</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/announcements">
              Explore Our Community{" "}
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

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Fundraising Organized
          </h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create new Fundraizing Call</Link>
          </Button>
        </div>
      </section>

      {/* <section className="wrapper my-8">
        <Collections
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubText="Go create some now"
          CollectionType="all_Donations"
          limit={3}
          page={postsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section> */}
    </>
  );
};

export default ProfilePage;
