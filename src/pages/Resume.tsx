import Footer from "@/components/Footer";

const Resume = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Gjensidige Forsikring",
      period: "2024 - Present",
      description:
        "I've been involved in AI, automation, and web analytics initiatives in the Claims division. Working on building and maintaining ETL pipelines through dbt-models and visualizing in Power BI. Currently focused on customer experience and insight development.",
    },
    {
      title: "Consulting Intern",
      company: "Movability",
      period: "2022 - 2024",
      description:
        "Responsible for bookkeeping and preparation of accounts, and research on various topics regarding mobility.",
    },
    {
      title: "Business Analyst Intern",
      company: "SAS Institute",
      period: "Aug 2023 - Oct 2023",
      description:
        "Worked in a team analyzing business data for a telecom client to deliver actionable insights that optimized operations. Built end-to-end analytics solutions using SAS, including data transformation, modeling, and visualization.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Business Analytics",
      school: "BI Norwegian Business School",
      period: "2022 - 2024",
      description:
        "Thesis on predicting tax avoidance using a CETR-based model with social network characteristics. Grade: A",
    },
    {
      degree: "Bachelor of Science in Economics and Leadership",
      school: "University of Southeastern-Norway",
      period: "2019 - 2022",
      description:
        "Specialized in finance. Thesis on Strategic Analysis. Winner of the award for best bachelor thesis. Grade: A",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Resume</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Bio</h2>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>I'm a data analyst at a large Nordic insurance company. I am passionate about leveraging data to solve complex business problems and drive strategic decision-making.</p>
            <p>I hold a Master of Science in Business Analytics from BI Norwegian Business School, where I wrote my thesis on predicting tax avoidance using a CETR-based model while incorporating social network characteristics.</p>
            <p>My top 5 CliftonStrengths are Context, Relator, Discipline, Achiever and Consistency.</p>
            <p>When I'm not analyzing data, I enjoy cycling, photography, video games, and exploring new technologies.</p>
        </div>
        </section>

        <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "SQL",
            "dbt",
            "Azure Databricks",
            "Python",
            "Power BI",
            "R",
            "Statistics",
            "ETL",
          ].map((s) => (
            <span key={s} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">
              {s}
            </span>
          ))}
        </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Education</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-accent font-medium mb-3">{edu.school}</p>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
