"use client";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const subject = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const from_name = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.send(
        "service_5lvklgd",
        "template_oczs035",
        {
          subject: subject?.current?.value,
          phone: phone?.current?.value,
          email: email?.current?.value,
          from_name: from_name?.current?.value,
          message: message?.current?.value,
        },
        { publicKey: "jAVPURYqF213Ibz98" }
      );
      toast({
        title: "Your email has been sented",
        description: "we will call back you as soon as posspoeil",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
    //     publicKey: "YOUR_PUBLIC_KEY",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };
  return (
    <section className="flex flex-col items-center justify-center p-12 mt-20">
      <div className="flex-center flex-col">
        <h3 className="text-3xl font-semibold mb-8">Contact us </h3>
        <p className="text-center text-lg font-medium mb-8">
          If you have any problem, have comments, or see any errors while using
          our website, please contact us
        </p>
      </div>

      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={sendEmail}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={from_name}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5 flex gap-6">
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                ref={email}
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div>
              {" "}
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone number
              </label>
              <input
                type="text"
                ref={phone}
                name="phone-number"
                placeholder="+20 1147018091"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              ref={subject}
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              ref={message}
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            ></textarea>
          </div>
          <div>
            <input
              disabled={loading}
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none cursor-pointer"
              value={"submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
