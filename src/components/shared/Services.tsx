import Image from "next/image";
const Services = () => {
  return (
    <section className="grid place-items-center px-6 py-12">
      <h2 className="mb-12 text-4xl font-bold">What we offer</h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="service-card">
          <Image
            className="object-contain rounded-lg"
            src={"/assets/images/service-1.jpg"}
            alt="servece-1"
            width={420}
            height={720}
          />
          <h3 className="text-2xl font-semibold text-center">
            Exceptional Teacher Education Programs Await
          </h3>
        </div>
        <div className="service-card">
          <Image
            className="object-contain rounded-lg"
            src={"/assets/images/service-2.jpg"}
            alt="servece-2"
            width={420}
            height={720}
          />
          <h3 className="text-2xl font-semibold text-center">
            Develop Your Skills Under Experienced Educators
          </h3>
        </div>
        <div className="service-card">
          <Image
            className="object-contain rounded-lg"
            src={"/assets/images/service-3.jpg"}
            alt="servece-3"
            width={420}
            height={720}
          />
          <h3 className="text-2xl font-semibold text-center">
            Prepare for a Fulfilling Career in Education
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
