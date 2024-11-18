import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="container-section" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4">About</Badge>
        <h2 className="section-title">Summary</h2>
        <div className="animate-on-scroll">
          <Card className="p-6 text-left">
            <p className="text-lg leading-relaxed mb-4">
              Seeking a 6-month internship in the field of data science to leverage my strong analytical skills, programming proficiency, and theoretical knowledge gained through my Master's studies at Efrei Paris.
            </p>
            <p className="text-lg leading-relaxed">
              Eager to apply my expertise in data analysis, machine learning, and data visualization to contribute to real-world projects and gain practical experience in a professional data science environment.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Hard Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "Office", "HTML/CSS", "Javascript"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Team Player", "Communication", "Adaptability", "Problem-Solving"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">French (Native)</Badge>
                    <Badge variant="secondary">English (TOEIC: 970)</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;