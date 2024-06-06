import CategoryFilter from "@/components/shared/CategoryFilter";
import Collections from "@/components/shared/Collections";
import Search from "@/components/shared/Search";
import { getAllDonationRequests } from "@/lib/actions/DonationRequest.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const page = async ( { searchParams}: SearchParamProps ) => {
  const page= Number(searchParams?.page)|| 1;
  const searchText = (searchParams?.query as string) || ''; 
  const category= (searchParams?.category as string) || '';
  
  const DonationRequestPosts = await getAllDonationRequests({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  //console.log(DonationRequestPosts);
  return (
    <>
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">AID <br /> Help People in need </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
      <Collections
        data={DonationRequestPosts?.data}
        emptyTitle="Pas d'article"
        emptyStateSubText="revenez bientot"
        CollectionType="all_Announcements"
        limit={6}
        page={1}
        totalPages={2}
      />
     </section>
    </>
  );
};

export default page;
 