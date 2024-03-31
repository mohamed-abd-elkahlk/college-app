import Content from "@/components/shared/Content";
import { Button } from "@/components/ui/button";
import connectMongo from "@/lib/db";
import { verifyToken } from "@/lib/utils";
import User from "@/models/user";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  await connectMongo();
  const user = await User.findById(params.id);
  const jwtCookies = cookies().get("jwt")?.value as unknown as string;
  let cuurntUserId;
  if (jwtCookies) {
    cuurntUserId = verifyToken(jwtCookies)?.sub;
  }

  if (!cuurntUserId) {
    return (
      <div className="grid place-items-center h-screen">
        <div className="flex-center gap-6 flex-col">
          <h1 className="text-3xl font-semibold">
            BAD AUTH:"your token expried or your are not sgined in please log in
            to see the users info"
          </h1>
          <Link href={"/portal/auth"}>
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <section className="mt-20 px-12 py-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            alt="profile-image"
            src={user?.image || "/assets/images/profile.png"}
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h3>
              {user?.first_name} {user?.last_name}
            </h3>
            <p>{user?.email}</p>
            <div className="flex gap-3 justify-around">
              <p>Saved {user?.saved.length}</p>
              <p>Resources {user?.resources.length}</p>
              {user.role === "admin" && <p>Resources {user?.news.length}</p>}
            </div>
          </div>
        </div>
        {params.id === cuurntUserId ? (
          <Link href={`/profile/${cuurntUserId}/edit`}>
            <Button>Edit Profile</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="flex-center py-12">
        <Content
          news={user.news}
          resources={user.resources}
          saved={user.saved}
        />
      </div>
    </section>
  );
};

export default page;
