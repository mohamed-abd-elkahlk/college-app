import Resources from "@/models/resources";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const resources = await Resources.findById(params.id);
  return (
    <section className="mt-20 grid place-items-center p-6 h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold">{resources.title}</h1>
        <p className="text-md font-medium">{resources.desc}</p>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3">
          {resources.attachments.map((attch: any) => (
            <Link href={attch.link_to_file} target="_blank">
              <Image
                src={
                  attch.link_to_file.match("pdf")
                    ? "/assets/icons/pdf.svg"
                    : attch.link_to_file
                }
                alt="file image"
                height={120}
                width={120}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
