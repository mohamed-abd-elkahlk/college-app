"use client";
import { useEffect } from "react";
import { signUp } from "../action";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const req = await fetch("/api/auth");
      const res = await req.json();
      if (res.ok) return router.push("/dashbord");
    };
    checkAuth();
  }, []);

  return (
    <div>
      <form action={signUp} className="flex flex-col gap-4">
        <input
          type="text"
          required
          name="first-name"
          className=""
          placeholder="first name"
        />
        <input
          type="text"
          required
          name="last-name"
          className=""
          placeholder="last name"
        />
        <input
          type="email"
          required
          name="email"
          className=""
          placeholder="email"
        />
        <input
          type="password"
          required
          name="password"
          className=""
          placeholder="password"
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default page;
