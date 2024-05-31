import Collections from "@/components/shared/Collections";
import { getAllDonationRequests } from "@/lib/actions/DonationRequest.actions";
import React from "react";

const page = async () => {
  const getDonationRequests = await getAllDonationRequests({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  console.log(getDonationRequests);
  return (
    <>
      <Collections
        data={[]}
        emptyTitle="No Announcement"
        emptyStateSubText="revenez bientot"
        CollectionType="all_Announcements"
        limit={6}
        page={1}
        totalPages={2}
      />
    </>
  );
};

export default page;
