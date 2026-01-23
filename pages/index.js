import { useRef, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import WorkExperienceCard from "../components/WorkExperienceCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Typed from "typed.js";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const typedElement = useRef(null);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleProjectsScroll = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ['Software Engineer', 'Backend Developer', 'FullStack Developer', 'Data Engineer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleProjectsScroll={handleProjectsScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10 flex flex-col tablet:flex-row items-center justify-center gap-8">
          <div className="mt-5 flex-1">
            <h1
              ref={textOne}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              And I Am A <span ref={typedElement}></span>
            </h1>
            <Socials className="mt-2 laptop:mt-5" />
          </div>

          <div className="home-img order-first tablet:order-last">
            <img src="/images/New Photo.png" alt="Nahome Kifle" />
          </div>
        </div>
        
        {/* Work Experience Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Work</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            <WorkExperienceCard
              title="Software Engineer I"
              company="American Express"
              description="Worked on a backend team building internal services that automate data delivery for analytics and engineering users. Focused on REST APIs, microservices, and containerized deployments to improve reliability and reduce manual processing time."
            />
            <WorkExperienceCard
              title="Database Manager Intern"
              company="VCU Health Hub"
              description="Built data ingestion and visualization systems to automate intake and reporting for community health programs. Integrated Google Forms with a Flask/PostgreSQL backend and delivered dashboards used for monthly operational decision-making."
            />
            <WorkExperienceCard
              title="Software Engineering Intern"
              company="VCU Hospital"
              description="Developed and optimized full-stack applications supporting healthcare workflows. Built performant data retrieval services and load-tested a GPT-powered search feature to ensure low-latency responses under concurrent usage."
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectsRef}>
          <h1 className="text-2xl text-bold">Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About</h1>
          <p className="tablet:m-10 mt-5 opacity-40 text-xl w-full laptop:w-3/5">
            I&apos;m a software engineer early in my career, focused on growing in ways that truly matter to me. I care deeply about building systems that have real impact and writing code that improves how people work and interact with technology.
            <br /><br />
            I value being guided and mentored as I continue to learn, and I hope that when it&apos;s my turn to lead, I can leave a positive and lasting impact wherever I work. I believe that while the work we do is important, the people we support, learn from, and influence along the way matter even more—and that, ultimately, your work speaks through the lives you touch.
          </p>
        </div>
        <Footer contactRef={contactRef} />
      </div>
    </div>
  );
}
