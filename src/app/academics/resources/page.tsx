import ResourcesCard from "@/components/shared/ResourcesCard";
import connectMongo from "@/lib/db";
import Resources from "@/models/resources";

const page = async () => {
  await connectMongo();
  const resources = await Resources.find({});

  return (
    <div className="mt-20 px-6 py-12">
      <h2 className="text-center text-3xl font-bold">Resources</h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resourcesData: any) => (
          <ResourcesCard data={resourcesData} />
        ))}
      </div>
    </div>
  );
};
export default page;
