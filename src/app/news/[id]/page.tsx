import Post from "@/models/news";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { multiFormatDateString } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const news = await Post.findById(params.id);
  console.log(news);

  return (
    <section className="grid place-items-center h-screen px-12 ">
      <div className="flex flex-col md:flex-row w-full border rounded-md p-6">
        <Image src={news.image} alt="news image" height={570} width={320} />
        <div className="w-full p-6">
          {/* {news.createdAt !== news.updatedAt && (
            <span className="ml-auto">
              last update{multiFormatDateString(news.updateAt)}
            </span>
          )} */}
          <h2 className="text-center text-3xl font-bold">{news.title}</h2>
          <p className="text-md mt-12 text-right">{news.content}</p>
          <div className=" flex justify-between mt-20">
            <ul>
              {news.tags.map((tag: string) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="">
              <span>{multiFormatDateString(news.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
