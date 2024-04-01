"use client";
import ContactForm from "@/components/shared/ContactForm";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center p-12 mt-20">
      <div className="flex-center flex-col">
        <h3 className="text-3xl font-semibold mb-8">Contact us </h3>
        <p className="text-center text-lg font-medium mb-8">
          If you have any problem, have comments, or see any errors while using
          our website, please contact us
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default page;
