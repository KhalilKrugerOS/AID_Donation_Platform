import { IPost } from "@/lib/database/models/post.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  post: IPost | any;
  hasOrderLink?: boolean;
  hideAmount?: boolean;
};

const Card = ({ post, hasOrderLink, hideAmount }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isPostAuthor = post.Fundraiser_organisation._id.toString() === userId;
  return (
    <div className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/announcements/${post._id}`}
        style={{ backgroundImage: `url(${post.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
      />
      {/* is post creator */}
      {/* {isPostAuthor && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/announcements/${post._id}/update`}>
            <Image
              src={"/assets/icons/edit.svg"}
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <DeleteConfirmation postId={post._id.toString()} />
        </div>
      )} */}
      <Link
        href={`/announcements/${post._id}`}
        className="flex min-h-[150px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {post.amountNeeded} TND
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-gray-500/10 px-4 py-1 text-gray-500 line-clamp-1 ">
            {post.category.name}
          </p>
        </div>
        <p className="p-medium-18 text-gray-500">
          {formatDateTime(post.startDate).dateTime}
        </p>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {post.title}
        </p>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600 ">
            {post.Fundraiser_organisation.firstName}{" "}
            {post.Fundraiser_organisation.lastName}
          </p>
          {hasOrderLink && (
            <Link href={`/order?postId/${post._id}`} className="flex gap-2">
              <p className="text-primary-500">details de paiments</p>
              <Image
                src={"/assets/icons/arrow.svg"}
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
