import Image from "next/image";
import image1 from "../public/desc1.png";
import image2 from "../public/beer.png";

function Description() {
  return (
    <div className="container">
      <div className="grid sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3 my-24 md:my-36 gap-8 items-center">
        <Image
          src={image1}
          className="rounded col"
          placeholder="blur"
          alt="Picture of the author"
        />
        <div className="md:col-span-2 md:pl-20 space-y-6">
          <h2 className="text-2xl font-serif italic text-red-500">
            always expect
          </h2>
          <h1 className="text-4xl font-serif text-gray-800">
            GREAT TASTE, GOOD TIMES
          </h1>
          <p className="text-gray-600">
            Here at Grassfeed Grills we take pride in the quality of the meat
            used for each and every burger. If it’s not perfect and grilled just
            the way you ordered it, we won’t send it out. We guarantee the
            burger delivered to your table is the best burger you could have
            ordered.
          </p>
          <button className="py-3 px-4  uppercase font-semibold text-sm tracking-wider	transition font-serif text-white bg-black hover:bg-white hover:text-black border border-black">
            see our fresh ingredients
          </button>
        </div>
      </div>
      <div className="grid  sm:grid-rows-2  md:grid-rows-1 md:grid-cols-3 items-center my-24 md:my-36 gap-8">
        <div className="md:col-span-2 md:pr-20 space-y-6">
          <h2 className="text-2xl font-serif italic text-red-500">
            local craft
          </h2>
          <h1 className="text-4xl font-serif text-gray-800">BARLEY & HOPS</h1>
          <p className="text-gray-600">
            No good burger is complete without that refreshing taste of local
            Bounder craft beer. We have over 20 beers on tap, and a full bar for
            your liquior lovers. From Bud light to Whiskey, we have the liquids
            to cwinch your thrist.
          </p>
          <button className="py-3 px-4  uppercase font-semibold text-sm tracking-wider	transition font-serif text-white bg-black hover:bg-white hover:text-black border border-black">
            see our beer list
          </button>
        </div>
        <Image
          src={image2}
          className="rounded col"
          placeholder="blur"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default Description;
