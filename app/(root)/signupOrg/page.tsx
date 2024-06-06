import SignupSelection from "@/components/shared/SignupSelection";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  console.log("userId : ", userId);
  return (
    <SignupSelection userId={userId} />
  )
}

export default page