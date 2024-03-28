import NewsForm from "@/components/shared/NewsForm";

const page = () => {
  return (
    <section className="flex flex-col items-center  h-screen mt-20">
      <h2 className="text-2xl font-semibold">
        Create a new news right now with simble stebs
      </h2>
      <NewsForm action="Create" />
    </section>
  );
};
export default page;
