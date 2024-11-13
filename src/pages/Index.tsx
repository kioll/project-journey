import { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Projet 1",
    description: "Une application web moderne utilisant React et TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/votre-username/projet-1",
  },
  {
    title: "Projet 2",
    description: "Un système de gestion avec Node.js et MongoDB",
    technologies: ["Node.js", "MongoDB", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/votre-username/projet-2",
  },
  // Ajoutez d'autres projets ici
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
      {/* Hero Section */}
      <section className="container-section min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-accent">Portfolio Enzo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Développeur Full Stack passionné par la création d'expériences web exceptionnelles
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
          >
            Voir mes projets
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container-section" id="projects">
        <div className="text-center mb-12">
          <h2 className="section-title">Mes Projets</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;