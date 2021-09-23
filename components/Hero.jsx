function Hero() {
  return (
    <section className="bg-gray-100 py-32 bg-hero-image bg-cover text-white">
      <div className="container space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold font-serif">
          LOCAL BURGERS
          <br />
          DONE RIGHT
        </h1>
        <p className="font-light text-xl md:text-2xl">
          Join us for your next meal. We get the juices flowing
        </p>
        <button className="py-3 px-4  uppercase font-semibold text-sm tracking-wider	transition font-serif text-white bg-black hover:bg-white hover:text-black border border-black">
          Our Menu
        </button>
      </div>
    </section>
  );
}

export default Hero;
