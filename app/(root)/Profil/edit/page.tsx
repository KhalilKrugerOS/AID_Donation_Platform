import Profile from "@/components/Forms/Profile";
import { getUserById } from "@/lib/actions/user.actions";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";

const EditProfile = async ({ params }: ParamsProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  console.log("userId" + userId);
  if (!userId) return <div>User not found or not authenticated</div>;

  const userResponse = await getUserById(userId);
  const mongoUser = userResponse?.user;

  return (
    <>
      <h1 className="h1-bold text-dark100_light900 ">Edit Profile</h1>

      <div className="mt-9">
        <Profile
          userId={userId}
          user={JSON.stringify(mongoUser)} // ? <- Pass in this way (with stringify) because it is a client component and it not accept complex object from MongoDB
        />
      </div>
    </>
  );
};
export default EditProfile;
