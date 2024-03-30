import ResourcesCard from "@/components/shared/ResourcesCard";
import connectMongo from "@/lib/db";
import Resources from "@/models/resources";

const page = async () => {
  await connectMongo();
  const news = await Resources.find({});
  console.log(news);

  return (
    <div className="mt-20 px-6 py-12">
      <h2 className="text-center text-3xl font-bold">News</h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ResourcesCard data={news} />
        <ResourcesCard data={news} />
        <ResourcesCard data={news} />
        <ResourcesCard data={news} />
        <ResourcesCard data={news} />
      </div>
    </div>
  );
};
export default page;
