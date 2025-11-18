const Hobbies = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Hobbies</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Cycling</h2>
          <p className="text-muted-foreground mb-4">I enjoy cycling for fitness and exploration. I like long rides and discovering new routes.</p>
          <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">Image placeholder</div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Photography</h2>
          <p className="text-muted-foreground mb-4">I take photos when traveling and while exploring the city. I focus on landscapes and moments.</p>
          <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">Image placeholder</div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Video Games</h2>
          <p className="text-muted-foreground mb-4">I play a mix of narrative and strategy games. Games are a creative outlet and a way to relax.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Exploring Technology</h2>
          <p className="text-muted-foreground mb-4">I enjoy tinkering with new tools, frameworks and small projects to learn and experiment.</p>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Daniel Nursen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hobbies;
