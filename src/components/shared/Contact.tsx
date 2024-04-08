"use client";

import ContactForm from "../forms/ContactForm";

const Contact = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center p-3">
        Send us Your Feedback
      </h2>
      <div className="flex items-center justify-center mt-12">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
