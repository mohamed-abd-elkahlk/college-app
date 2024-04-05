import { multiFormatDateString } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const NewsCard = ({ data, place }: { data?: any; place?: string }) => {
  return (
    <div className="shadow-slate-600 shadow-lg text-center" key={data._id}>
      <Card>
        <CardHeader>
          <CardTitle className="py-3">{data.title}</CardTitle>
          <CardDescription>
            <Image
              src={data.image || "/assets/images/about.jpg"}
              alt="post-image"
              width={320}
              height={520}
              className="object-contain rounded-md"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{data.content}</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          {place === "Dashboard" ? (
            <div className="flex gap-3 justify-around w-full">
              <Button>Edit</Button>
              <Button className="bg-red-600">Delete</Button>
            </div>
          ) : (
            <Link href={`/news/${data?._id}`}>
              <Button>Read More</Button>
            </Link>
          )}
          <p className="p-3">date {multiFormatDateString(data.createdAt)}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsCard;
