import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project.",
      link: "/work/projects/1",
    },
    {
      title: "Project 2",
      description: "Description of your second project.",
      link: "/work/projects/2",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground">← Back</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground mt-6">Projects</h1>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 border border-border rounded-md hover:bg-muted/50 transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
