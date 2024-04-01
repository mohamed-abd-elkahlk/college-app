import { IUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProfileButton = ({ user }: { user: IUser }) => {
  return (
    <div className="flex-center gap-6">
      <div>
        <Link href={`/profile/${user._id}`}>
          <Image
            alt="profile"
            src={user.image || "/assets/images/profile.png"}
            width={70}
            height={70}
            className="object-contain rounded-full"
          />
        </Link>
      </div>
      {user.role === "admin" && (
        <div className="flex gap-3">
          <Button>
            <Link href={`/profile/${user._id}`}>Profile</Link>
          </Button>
          <Button>
            <Link href={`/dashboard`}>Dashboard</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
