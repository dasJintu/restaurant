import Navbar from "../components/Navbar";
import Map from "../components/Map";

function Location() {
  return (
    <div className="container pb-12">
      <h1 className="text-center font-serif mt-24 mb-6 text-4xl font-bold text-gray-800">
        3 Locations Ready to Serve You in Pearland
      </h1>
      <p className="text-center text-lg text-gray-600 mb-24">
        Select this theme to customize and add content to this page.
      </p>
      <Map />
    </div>
  );
}
export default Location;
