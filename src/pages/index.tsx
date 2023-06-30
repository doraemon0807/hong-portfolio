import Layout from "@/components/layout";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Projects from "@/pages/project";

export default function Index() {
  return (
    <Layout seoTitle="Home">
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
