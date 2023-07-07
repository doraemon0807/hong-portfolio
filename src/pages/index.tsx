import Layout from "@/components/layout";
import { cls } from "@/lib/utils";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface sectionProps {
  children: React.ReactNode;
}

function Section({ children }: sectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cls(
        "transition-all duration-1000",
        isInView ? "opacity-1" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      <Section>
        <Home />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
}
