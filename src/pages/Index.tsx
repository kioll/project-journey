import { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";

const projects = [
  {
    title: "TenTrack - Tennis Analysis Project",
    description: "Developed a sophisticated machine learning model using Python and YOLO for tennis match analysis, implementing advanced computer vision techniques for real-time tracking.",
    technologies: ["Python", "YOLO", "Computer Vision", "Machine Learning", "Data Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/votre-username/tentrack",
  },
  {
    title: "Master Camp Project",
    description: "Led a team response to a complex data science call for proposals, utilizing comprehensive Python data science stack for advanced analysis.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Project Management"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/votre-username/master-camp",
  },
];

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="container-section min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-accent">Portfolio Enzo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Data Science Student | Business Analyst
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="container-section" id="projects">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;