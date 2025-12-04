import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Content from "./pages/content";
import Cover from "./pages/cover";
import Creator from "./pages/creator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Creator />
      <Content />
      <Footer />
    </>
  );
}
