import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    "SQL", "dbt", "Azure Databricks", "Python",
    "Power BI", "R", "Statistics", "ETL"
  ];

  const experiences = [
    {
      title: "Data Analyst",
      company: "Gjensidige Forsikring",
      period: "2024 - Present",
      description: "I've been involved in AI, automation, and web analytics initiatives in the Claims division. Working on building and maintaining ETL pipelines through dbt-models and visualizing in Power BI. Currently focused on customer experience and insight development."
    },
    {
      title: "Consulting Intern",
      company: "Movability",
      period: "2022 - 2024",
      description: "Responsible for bookkeeping and preparation of accounts, and research on various topics regarding mobility."
    },
    {
      title: "Business Analyst Intern",
      company: "SAS Institute",
      period: "Aug 2023 - Oct 2023",
      description: "Worked in a team analyzing business data for a telecom client to deliver actionable insights that optimized operations. Built end-to-end analytics solutions using SAS, including data transformation, modeling, and visualization."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Business Analytics",
      school: "BI Norwegian Business School",
      period: "2022 - 2024",
      description: "Thesis on predicting tax avoidance using a CETR-based model with social network characteristics. Grade: A"
    },
    {
      degree: "Bachelor of Science in Economics and Leadership",
      school: "University of Southeastern-Norway",
      period: "2019 - 2022",
      description: "Specialized in finance. Thesis on Strategic Analysis. Winner of the award for best bachelor thesis. Grade: A"
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
            Daniel Nursen
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Data Analyst
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Transforming complex data into actionable insights. 
            Specialized in data visualization, statistical analysis, and driving data-informed business decisions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a data analyst at a large Nordic insurance company. 
            I am passionate about leveraging data to solve complex business problems and drive strategic decision-making.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I hold a Master of Science in Business Analytics from BI Norwegian Business School, where I wrote my thesis on predicting tax avoidance using a CETR-based model while incorporating social network characteristics.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My top 5 CliftonStrengths are Context, Relator, Discipline, Achiever and Consistency.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            When I'm not analyzing data, I enjoy cycling, photography, video games, and exploring new technologies.
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
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-3">{edu.school}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
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

            <a href="https://github.com/dannur25" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline" className="border-border hover:bg-secondary" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Daniel Nursen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
