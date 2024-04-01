import NewsForm from "@/components/shared/NewsForm";
import SideNav from "@/components/shared/SideNav";

const page = () => {
  return (
    <section className="flex flex-1 mt-20">
      <div className="flex-center flex-col m-auto">
        <h2 className="text-2xl font-semibold">
          Create a new news right now with simble stebs
        </h2>
        <NewsForm action="Create" />
      </div>
    </section>
  );
};
export default page;
