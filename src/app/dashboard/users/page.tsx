import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import connectMongo from "@/lib/db";
import User from "@/models/user";
import Image from "next/image";
import Link from "next/link";

async function Page() {
  await connectMongo();
  const users = await User.find({});

  return (
    <div className="p-6 mt-20 flex flex-col">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                <Image
                  src={user?.image || "/assets/images/profile.png"}
                  width={40}
                  height={40}
                  alt="profile image"
                  className="rounded-full"
                ></Image>
              </TableCell>
              <TableCell>
                {user.first_name} {user.last_name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Link href={"/dashboard/new/user"} className="ml-auto">
        <Button>Add new user</Button>
      </Link>
    </div>
  );
}

export default Page;
