import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Slide in my DMs.</p>

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

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Daniel Nursen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
