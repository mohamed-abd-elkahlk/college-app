import { multiFormatDateString } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const NewsCard = ({ data }: any) => {
  return (
    <div className="border shadow-slate-600 shadow-lg rounded-lg p-3">
      <Image
        src={data.image || "/assets/images/about.jpg"}
        alt="post-image"
        width={320}
        height={520}
        className="object-contain rounded-md"
      />
      <div>
        <h3 className="text-center font-semibold text-2xl p-2">News Title</h3>
        <hr />
        <p>
          news decription: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eveniet placeat dicta iusto illo quidem explicabo eos veniam
          magni neque voluptas. Expedita illum temporibus ab dolor recusandae
          architecto tempora voluptates corporis.
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center p-3">
        <p>date {multiFormatDateString(Date.now().toLocaleString())}</p>
        <Link href={`/news/${data?._Id}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
