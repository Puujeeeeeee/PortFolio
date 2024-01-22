import Head from "@/component/Head";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Skilss from "@/component/Skilss";
import Experience from "@/component/Experience";
import Work from "@/component/Work";
import Contact from "@/component/GetInTouch";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[1440px] min-w-md:[320px]:items-center ">
        <Head></Head>
        <Hero></Hero>
        <About></About>
        <Skilss></Skilss>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}
