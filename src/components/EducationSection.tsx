import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section className="container-section" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">Education</Badge>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <Card className="p-6 animate-on-scroll">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">Master's Degree in Data Science</h3>
              <p className="text-accent font-medium">EFREI PARIS</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>2020 – 2025</p>
              <p>Paris</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Third-year engineering student specializing in Data Science and Advanced Analytics
            </p>
            <div>
              <h4 className="font-medium mb-2">Technical Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Advanced data analysis",
                  "Python",
                  "R",
                  "SQL",
                  "Machine learning",
                  "Data visualization",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Practical Experience:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Predictive analysis",
                  "NLP",
                  "Sentiment Analysis",
                  "Data cleaning",
                  "Project presentation",
                ].map((exp) => (
                  <Badge key={exp} variant="secondary">
                    {exp}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;