import Layout from "@/components/layout";
import { cls } from "@/lib/utils";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import { useInView } from "framer-motion";
import {
  Children,
  RefObject,
  cloneElement,
  isValidElement,
  useRef,
} from "react";

interface SectionProps {
  children: React.ReactNode;
}

export interface BoxProps {
  isInView?: boolean;
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(
            child as React.ReactElement<BoxProps>,
            {
              isInView,
            } as BoxProps
          );
        }
        return child;
      })}
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
