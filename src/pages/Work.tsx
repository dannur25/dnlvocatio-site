import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Work</h1>

        <div className="space-y-6 mb-12">
          <Link to="/work/resume" className="block">
            <div className="p-6 border border-border rounded-md hover:bg-muted/50 transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Resume</h2>
              <p className="text-muted-foreground">Professional background, experience, and education.</p>
            </div>
          </Link>

          <Link to="/work/projects" className="block">
            <div className="p-6 border border-border rounded-md hover:bg-muted/50 transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Projects</h2>
              <p className="text-muted-foreground">Selected projects and work samples.</p>
            </div>
          </Link>
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

export default Work;
