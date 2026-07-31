import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <main className="text-center px-6 py-40">
        <h1 className="text-6xl font-bold mb-4 text-foreground">Daniel Nursen</h1>
        <p className="text-xl text-muted-foreground mb-8">Welcome to my personal space. A window into my life, work, and passions.</p>

        {/* Intentionally minimal landing — no buttons */}
      </main>
    </div>
  );
};

export default Index;
