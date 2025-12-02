import Navbar from "./components/navbar";
import About from "./pages/about";
import Cover from "./pages/cover";
import Creator from "./pages/creator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Creator />
    </>
  );
}
