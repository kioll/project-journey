import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="container-section" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4">Contact</Badge>
        <h2 className="section-title">Get In Touch</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:enzo.cuoc@efrei.net"
              className="flex flex-col items-center p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Mail className="h-8 w-8 mb-2 text-accent" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-gray-600">enzo.cuoc@efrei.net</span>
            </a>
            <a
              href="tel:+33665588634"
              className="flex flex-col items-center p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Phone className="h-8 w-8 mb-2 text-accent" />
              <span className="font-medium">Phone</span>
              <span className="text-sm text-gray-600">+33 6 65 58 86 34</span>
            </a>
            <a
              href="https://linkedin.com/in/enzo-cuoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Linkedin className="h-8 w-8 mb-2 text-accent" />
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-gray-600">enzo-cuoc</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;