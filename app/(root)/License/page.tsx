import License from "@/components/License/License";

const page = async ({ params, searchParams }: any) => {
  return <License params={params} searchParams={searchParams} />;
};

export default page;
