import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Groupe Jacky Perrenot",
    position: "Data Analyst",
    location: "Nogent-sur-Marne, Île-de-France",
    period: "November 2023 – April 2024",
    responsibilities: [
      "Cleaned data and developed quality assurance processes to ensure data integrity",
      "Produced and maintained dynamic KPIs using Power BI for performance tracking",
      "Implemented a comprehensive data analysis architecture",
      "Managed SQL databases for efficient data storage and retrieval",
      "Developed detailed technical reports for stakeholders",
    ],
  },
  {
    company: "Self-Employed",
    position: "Reseller",
    period: "2020 – 2023",
    responsibilities: [
      "Managed purchase, resale, and inventory of high-demand footwear",
      "Developed and implemented strategic pricing strategies",
      "Oversaw all operational aspects including stock management",
      "Built and maintained a loyal customer base",
    ],
  },
  {
    company: "Darty",
    position: "Salesperson",
    location: "Villiers en Bière",
    period: "December 2021 – January 2022",
    responsibilities: [
      "Provided exceptional customer service and sales advice",
      "Managed point-of-sale operations and processed transactions",
      "Developed strong interpersonal and problem-solving skills",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="container-section" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">Career</Badge>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 animate-on-scroll">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  {exp.location && <p>{exp.location}</p>}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;