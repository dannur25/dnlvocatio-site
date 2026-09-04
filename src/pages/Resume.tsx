import Footer from "@/components/Footer";

const Resume = () => {
  const experiences = [
    {
      company: "Gjensidige Forsikring",
      roles: [
        {
          title: "Analytics Engineer",
          period: "Dec 2025 - Present",
          description:
            "Working as the lead Analytics Engineer, responsible for modeling the data foundation for the Workforce Management (WFM) project.",
        },
        {
          title: "Data Analyst",
          period: "2024 - Dec 2025",
          description:
            "I've been involved in AI, automation, and web analytics initiatives in the Claims division. Working on building and maintaining ETL pipelines through dbt-models and visualizing in Power BI. Focused on customer experience and insight development.",
        },
      ],
    },
    {
      company: "Movability",
      roles: [
        {
          title: "Consulting Intern",
          period: "2022 - 2024",
          description:
            "Responsible for bookkeeping and preparation of accounts, and research on various topics regarding mobility.",
        },
      ],
    },
    {
      company: "SAS Institute",
      roles: [
        {
          title: "Business Analyst Intern",
          period: "Aug 2023 - Oct 2023",
          description:
            "Worked in a team analyzing business data for a telecom client to deliver actionable insights that optimized operations. Built end-to-end analytics solutions using SAS, including data transformation, modeling, and visualization.",
        },
      ],
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
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative border-l-2 border-accent pl-6 pb-2">
                <h3 className="text-xl font-semibold text-foreground mb-5">{exp.company}</h3>
                <div className="space-y-6">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="relative">
                      {/* Marker sits on the company line to mark each role change */}
                      <span className="absolute left-[-1.875rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <p className="text-accent font-medium">{role.title}</p>
                        <span className="text-sm text-muted-foreground">{role.period}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                    </div>
                  ))}
                </div>
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
