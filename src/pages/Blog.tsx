import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Statistical Significance in A/B Testing",
      date: "2024-03-15",
      readTime: "8 min read",
      excerpt: "A deep dive into how to properly interpret p-values and confidence intervals when running experiments. Learn why statistical significance doesn't always mean practical significance.",
      tags: ["Statistics", "A/B Testing", "Analytics"]
    },
    {
      title: "Building Efficient ETL Pipelines with Python",
      date: "2024-02-28",
      readTime: "12 min read",
      excerpt: "Best practices for extracting, transforming, and loading data at scale. Covers pandas optimization techniques and automation strategies.",
      tags: ["Python", "ETL", "Data Engineering"]
    },
    {
      title: "Data Visualization Best Practices",
      date: "2024-02-10",
      readTime: "6 min read",
      excerpt: "How to create compelling visualizations that tell a story. Tips for choosing the right chart types and avoiding common pitfalls.",
      tags: ["Visualization", "Tableau", "Power BI"]
    },
    {
      title: "SQL Query Optimization Techniques",
      date: "2024-01-22",
      readTime: "10 min read",
      excerpt: "Common query performance issues and how to fix them. Learn about indexes, query plans, and writing efficient joins.",
      tags: ["SQL", "Database", "Performance"]
    },
    {
      title: "Introduction to Predictive Analytics",
      date: "2024-01-05",
      readTime: "15 min read",
      excerpt: "Getting started with machine learning for business forecasting. An overview of regression models and time series analysis.",
      tags: ["Machine Learning", "Forecasting", "Python"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-foreground">Portfolio</span>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/blog" className="text-sm text-foreground font-medium transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Insights on data analysis, visualization, and everything in between.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-foreground hover:text-accent transition-colors cursor-pointer">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Button variant="outline" className="border-border hover:bg-secondary">
                Read More
              </Button>
            </article>
          ))}
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

export default Blog;
