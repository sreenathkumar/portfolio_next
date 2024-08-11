import { getMics } from "@/api/queries";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import FeaturedProjects from "./components/FeaturedProjects";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

async function Home() {
  const mics = await getMics();
  //console.log(mics);


  return (
    <>
      <Header logo={mics[0]?.logo} menus={mics[0]?.menu_items} />
      <Hero />
      <About photo={mics[0]?.photo} />
      <Expertise />
      <FeaturedProjects />
      <AllProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;