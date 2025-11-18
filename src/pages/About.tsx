const About = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Man, 25.
        </p>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          simul justus et peccator.
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
