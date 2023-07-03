import Layout from "@/components/layout";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Projects from "@/pages/projects";

export default function Index() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
