const About = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          I'm someone who enjoys understanding how things work — whether in data, people, or the world around me. My interests sit at the intersection of analysis, problem-solving, and thoughtful design. I like building structured solutions, learning new tools, and creating things that are useful, clear, and well-crafted.
        </p>

        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Outside of work, I tend to dive into a mix of reading, technology, and projects that help me grow in depth rather than speed. This site is where I share some of that journey.
        </p>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Daniel Nursen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
