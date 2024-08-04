import { getMics } from "@/api/queries";
import Header from "./components/Header";

async function Home() {
  const mics = await getMics();

  return (
    <>
      <Header logo={mics[0]?.logo} menus={mics[0]?.menu_items} />
    </>
  );
}

export default Home;