import Layout from "@/components/layout";
import { mqState } from "@/lib/atom";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import { useInView } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSetRecoilState } from "recoil";

interface SectionProps {
  children: React.ReactNode;
}

export interface BoxProps {
  isInView?: boolean;
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const [windowSize, setWindowSize] = useState(0);
  const setScreenSize = useSetRecoilState(mqState);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  }, []);

  useEffect(() => {
    switch (true) {
      case windowSize >= 1279:
        setScreenSize("xl");
        break;
      case windowSize >= 1023:
        setScreenSize("lg");
        break;
      case windowSize >= 767:
        setScreenSize("md");
        break;
      case windowSize >= 639:
        setScreenSize("sm");
        break;
    }
  }, [windowSize]);

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
