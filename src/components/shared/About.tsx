import Image from "next/image";

const About = () => {
  return (
    <section className="flex-center text-center md:text-start gap-6 px-6 py-12 bg-gray-200 md:flex-col">
      <h2 className="mb-12 text-4xl font-bold">About</h2>
      <div className="flex-center gap-6 ">
        <p className=" text-xl font-medium leading-10">
          <span className="text-4xl font-semibold">our vision</span> <br /> We
          strive and do everything in our power to provide our dear students
          with modern programs so that they can graduate and be able to keep
          pace with the modern labor market. We teach them modern teaching
          methods so that they can keep pace with modern developments.
        </p>
        <Image
          src={"/assets/images/about.jpg"}
          alt="about"
          width={500}
          height={620}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default About;
