import React from "react";
import { SearchParamProps } from "../../../../types";
import { getDonationRequestById } from "../../../../lib/actions/DonationRequest.actions";
import Image from "next/image";
import { IPost } from "@/lib/database/models/post.model";
import { formatDateTime } from "@/lib/utils";
import ButtonCheckout from "@/components/shared/ButtonCheckout";
const RequestDonationDetails = async ({ params: { id } }: SearchParamProps) => {
  // TODO: thabet mel interface sinon na7eha IPost
  console.log("id : ", id);

  const post = await getDonationRequestById(id);
  console.log("post info fetched is : from page" + post + "\n\n");
  console.log("post : ", post);
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 mid:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={post.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />
        <div className="flex w-full flex-col gap-8 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">{post.title}</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-grey-500/10 px-5 py-2 text-green-400">
                  {post.amountNeeded} TND
                </p>
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {post.category.name}
                </p>
              </div>

              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{" "}
                <span className="text-primary-500">
                  {post.Fundraiser_organisation.firstName}{" "}
                  {post.Fundraiser_organisation.lastName}
                </span>
              </p>
            </div>
          </div>

          {/* checkout */}
          <ButtonCheckout post={post} />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 md:gap-3">
              <Image
                src="/assets/icons/calendar.svg"
                alt="calendar"
                width={32}
                height={32}
              />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {" "}
                  {formatDateTime(post.startDate).dateOnly} {" - "}
                  {formatDateTime(post.startDate).timeOnly}
                </p>
                {""}
                <p>
                  {" "}
                  {formatDateTime(post.endDate).dateOnly} {" - "}
                  {formatDateTime(post.endDate).timeOnly}
                </p>
                <p>{formatDateTime(post.endDate).dateOnly} </p>
              </div>
            </div>
            <div className="p-regular-20 flex items-center gap-3">
              <Image
                src={"/assets/icons/location.svg"}
                alt="location"
                width={32}
                height={32}
              />
              <p className="p-medium-16 lg:p-regular-20">{post.location}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-gray-600">description de cas</p>
            <p className="p-medium-16 lg:p-regular-20">{post.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDonationDetails;
