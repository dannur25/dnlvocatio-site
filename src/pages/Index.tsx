import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    "Python", "SQL", "Excel", "Tableau",
    "Power BI", "R", "Statistics", "Data Visualization",
    "Machine Learning", "Pandas", "NumPy", "ETL"
  ];

  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "Tech Company Inc",
      period: "2022 - Present",
      description: "Lead data-driven decision making initiatives across the organization. Built automated reporting dashboards and performed advanced statistical analysis to drive business growth."
    },
    {
      title: "Data Analyst",
      company: "Financial Services Corp",
      period: "2020 - 2022",
      description: "Analyzed customer behavior patterns and market trends to optimize marketing strategies. Created interactive visualizations and reports using Tableau and Power BI."
    },
    {
      title: "Junior Data Analyst",
      company: "Retail Analytics",
      period: "2019 - 2020",
      description: "Performed data cleaning and ETL processes. Developed SQL queries for data extraction and created Excel-based reports for stakeholders."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2015 - 2019"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-foreground">Portfolio</span>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Jane Anderson
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Data Analyst & Business Intelligence Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Transforming complex data into actionable insights. 
            Specialized in data visualization, statistical analysis, and driving data-informed business decisions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a data analyst with 5+ years of experience transforming raw data into strategic insights. 
            I specialize in uncovering patterns, building predictive models, and creating compelling visualizations that drive business outcomes.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            When I'm not analyzing data, you'll find me exploring new analytical techniques, participating in data science competitions, 
            or contributing to data-focused communities and forums.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-accent font-medium">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              jane@example.com
            </Button>
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Jane Anderson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
