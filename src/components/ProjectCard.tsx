import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="project-card group">
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
      >
        Voir sur GitHub →
      </a>
    </Card>
  );
};

export default ProjectCard;