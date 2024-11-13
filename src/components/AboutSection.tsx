import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="container-section" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4">À propos</Badge>
        <h2 className="section-title">Développeur Passionné</h2>
        <Card className="p-6 text-left">
          <p className="text-lg leading-relaxed mb-4">
            Passionné par le développement web et les nouvelles technologies, 
            je crée des solutions innovantes et élégantes pour répondre aux besoins modernes.
          </p>
          <p className="text-lg leading-relaxed">
            Mon expertise couvre le développement front-end et back-end, 
            avec un focus particulier sur les technologies JavaScript modernes.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;