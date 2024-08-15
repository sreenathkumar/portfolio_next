import { getMics } from "@/actions/sanityQueries";
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";

async function Home() {
  const mics = await getMics();
  //console.log(mics);


  return (
    <>

      <Hero />
      <About photo={mics[0]?.photo} />
      <Expertise />
      <FeaturedProjects />
      <AllProjects />
      <Contact />
    </>
  );
}

export default Home;