"use client";
import { useEffect } from "react";
import { signIn } from "../action";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const req = await fetch("/api/auth");
      const res = await req.json();

      if (res.ok) {
        router.push("/dashbord");
      }
    };
    checkAuth();
  }, []);

  return (
    <div>
      <form action={signIn}>
        <input type="email" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          required
          placeholder="password"
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default page;
