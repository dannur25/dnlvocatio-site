import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About</h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Man, 26.
        </p>

        <Link to="/about/resume" className="block">
          <div className="rounded-xl border border-border bg-muted p-6 md:p-8 hover:border-accent transition-colors">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Resume</h2>
            <p className="text-muted-foreground">Professional background, experience, and education.</p>
          </div>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default About;
