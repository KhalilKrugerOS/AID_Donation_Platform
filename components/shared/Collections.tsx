import { IPost } from "@/lib/database/models/post.model";
import React from "react";
import Card from "./Card";

type CollectionProps = {
  data: IPost[];
  emptyTitle: string;
  CollectionType?: "all_Announcements" | "all_Donations" | "my_donations";
  emptyStateSubText: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};
const Collections = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages = 0,
  CollectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <div className="min-h-full">
      {data?.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((post) => {
              const hasOrderLink = CollectionType === "all_Announcements";
              const hideAmount = CollectionType === "my_donations";
              return (
                <li key={post._id} className="flex justify-center">
                  <Card
                    post={post}
                    hasOrderLink={hasOrderLink}
                    hideAmount={hideAmount}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-gray-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubText}</p>
        </div>
      )}
    </div>
  );
};

export default Collections;
