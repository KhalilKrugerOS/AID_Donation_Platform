import { IPost } from "@/lib/database/models/post.model";
import React from "react";

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
  return <div></div>;
};

export default Collections;
