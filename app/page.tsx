import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Process from "@/components/sections/process";
import Work from "@/components/sections/work";
import Lab from "@/components/sections/lab";
import Fun from "@/components/sections/fun";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Process />
        <Work />
        <Lab />
        <Fun />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
