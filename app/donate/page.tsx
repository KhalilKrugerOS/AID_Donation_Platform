import Link from "next/link";
import Donate from "@/components/Donate/Donate";
import { OrganizationProps } from "@/components/Donate/Donate";
const org: OrganizationProps = {
  name: "org",
  description:
    "We are a non-profit organization dedicated to providing aid and support to those in need. Our mission is to make a positive impact on the lives of our community members.",
  goalAmount: 20000,
  raisedAmount: 12345,
  contributors: 3454,
  Phone: "10000000",
  bankAccount: "12345678901",
  email: "org@email.com",
  image: "/assets/images/test-2.png",
};

export default function page() {
  return (
    <>
      <Donate
        name={org.name}
        description={org.description}
        goalAmount={0}
        raisedAmount={0}
        contributors={0}
        Phone={""}
        email={""}
        bankAccount={""}
        image={org.image}
      />
    </>
  );
}
