import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import SubMenu from "../components/SubMenu";
import OtherDescription from "../components/OtherDescription";
import Dinein from "../components/Dinein";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <SubMenu />
      <OtherDescription />
      <Dinein />
    </>
  );
}
