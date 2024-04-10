import NewsCard from "@/components/shared/NewsCard";
import { Button } from "@/components/ui/button";
import connectMongo from "@/lib/db";
import Post from "@/models/news";
import Link from "next/link";

const page = async () => {
  await connectMongo();
  const news = await Post.find({});

  return (
    <section className="flex flex-col px-12 mt-20 md:px-20 ">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4">
        {news.map((newsData) => (
          <NewsCard data={newsData} place="Dashboard" />
        ))}
      </div>
      <Link className="ml-auto p-3 mb-12" href={"/dashboard/new/news"}>
        <Button>Create new Post</Button>
      </Link>
    </section>
  );
};

export default page;
