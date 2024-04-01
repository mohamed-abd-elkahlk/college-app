import { multiFormatDateString } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const NewsCard = ({ data }: any) => {
  console.log(data);

  return (
    <div
      className="border shadow-slate-600 shadow-lg rounded-lg p-3"
      key={data._id}
    >
      <Image
        src={data.image || "/assets/images/about.jpg"}
        alt="post-image"
        width={320}
        height={520}
        className="object-contain rounded-md"
      />
      <div>
        <h3 className="text-center font-semibold text-2xl p-2">{data.title}</h3>
        <hr />
        <p>{data.content}</p>
      </div>
      <hr />
      <div className="flex justify-between items-center p-3">
        <p>date {multiFormatDateString(data.createdAt)}</p>
        <Link href={`/news/${data?._id}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
