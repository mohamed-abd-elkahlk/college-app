import { createPost } from "../action";

const page = () => {
  // const update = createPost.bind(null, "matrix");
  return (
    <div>
      <h1 className="bg-black text-white text-2xl">new Post</h1>
      <form action={createPost} className="flex flex-col gap-3 ">
        <input type="text" name="title" placeholder="title" required />
        <input type="text" name="tags" placeholder="tags" required />

        <input type="text" name="facility" placeholder="facility" required />
        <input
          type="number"
          max={4}
          min={1}
          name="team"
          placeholder="team"
          required
        />
        <input type="file" name="image" placeholder="post image" />
        <input
          type="file"
          name="attachments"
          placeholder="attachments"
          multiple
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default page;
