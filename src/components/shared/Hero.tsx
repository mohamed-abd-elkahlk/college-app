const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/images/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex-center flex-col text-center p-6"
    >
      <h1 className="text-4xl font-bold p-3">
        Empower the Next Generation to Become a Good Teacher at Their Major
      </h1>
      <p className="text-md font-semibold">
        Shape Young Minds: Your Teaching Journey Starts at Faculty of Education
      </p>
    </section>
  );
};

export default Hero;
