import EventForm from "@/components/shared/EventForm";
import { getDonationRequestById } from "@/lib/actions/DonationRequest.actions";
import { auth } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateRequest = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const post = await getDonationRequestById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5">
        <h3 className="wrapper h3-bold text-center sm:text-left md:py-10">
          faire une demande de fonds
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} post={post} postId={id} type={"Update"} />
      </div>
    </>
  );
};

export default UpdateRequest;
