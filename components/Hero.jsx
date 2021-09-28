import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gray-100 py-32 bg-hero-image bg-cover text-white">
      <div className="container space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold font-serif uppercase">
          Wake up your
          <br />
          taste buds
        </h1>
        <p className="font-light text-xl md:text-2xl">
          Rain or shine, it’s time to dine
        </p>

        <button className="py-3 px-4  uppercase font-semibold text-sm tracking-wider	transition font-serif hover:text-white hover:bg-black bg-white text-black border border-black">
          <Link href="/menu">
            <a>Our Menu</a>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
