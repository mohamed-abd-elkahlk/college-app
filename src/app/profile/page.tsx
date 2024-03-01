import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashbord");
  return <div>Profile</div>;
};

export default page;
