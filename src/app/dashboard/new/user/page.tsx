"use client";

import UserForm from "@/components/shared/UserForm";

const page = () => {
  return (
    <section className="grid place-items-center h-screen mt-20 p-3">
      <UserForm action="Create" />
    </section>
  );
};

export default page;
