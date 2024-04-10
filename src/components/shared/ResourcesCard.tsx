import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { multiFormatDateString } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ResourcesCard = ({ data, place }: any) => {
  return (
    <div
      className="border shadow-slate-600 shadow-lg rounded-lg p-3"
      key={data._id}
    >
      <Card>
        <CardHeader>
          <CardTitle className="py-3 text-center">{data.title}</CardTitle>
          <CardDescription className="text-center">{data.desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={"/assets/icons/pdf.svg"}
            alt="pdf"
            width={120}
            height={120}
            className="m-auto"
          />
        </CardContent>
        <CardFooter className="flex flex-col">
          {place === "Dashboard" ? (
            <div className="flex gap-3 justify-around w-full">
              <Button>Edit</Button>
              <Button className="bg-red-600">Delete</Button>
            </div>
          ) : (
            <Link href={`/academics/resources/${data?._id}`}>
              <Button>Read more</Button>
            </Link>
          )}
          <p className="p-3">{multiFormatDateString(data.createdAt)}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResourcesCard;
