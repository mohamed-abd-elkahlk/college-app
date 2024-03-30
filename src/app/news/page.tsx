import NewsCard from "@/components/shared/NewsCard";
import connectMongo from "@/lib/db";
import Post from "@/models/news";

const page = async () => {
  await connectMongo();
  const news = await Post.find({});
  return (
    <div className="mt-20 px-6 py-12">
      <h2 className="text-center text-3xl font-bold">News</h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <NewsCard data={news} />
        <NewsCard data={news} />
        <NewsCard data={news} />
        <NewsCard data={news} />
        <NewsCard data={news} />
      </div>
    </div>
  );
};

export default page;
