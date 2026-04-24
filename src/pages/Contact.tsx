import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Contact</h1>
        

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:dnlvocatio@gmail.com" className="inline-block">
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              dnlvocatio@gmail.com
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/danielnursen" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
