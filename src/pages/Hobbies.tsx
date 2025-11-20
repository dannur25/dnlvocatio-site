import { Link } from "react-router-dom";

const Hobbies = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Hobbies</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/hobbies/cycling" className="block">
            <div className="w-full h-56 bg-muted rounded-md overflow-hidden mb-3 flex items-center justify-center"> 
              <img src="/cycling/happy_selfie.jpg" alt="Cycling" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cycling</h3>
            <p className="text-muted-foreground text-sm">because I like speed.</p>
          </Link>

          <Link to="/hobbies/travel" className="block">
            <div className="w-full h-56 bg-muted rounded-md overflow-hidden mb-3 flex items-center justify-center"> 
              <img src="/travel/rolls_royce_cullinan.jpg" alt="Travel" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Travel</h3>
            <p className="text-muted-foreground text-sm">because I like escaping.</p>
          </Link>

          <Link to="/hobbies/running" className="block">
            <div className="w-full h-56 bg-muted rounded-md overflow-hidden mb-3 flex items-center justify-center"> 
              <img src="/running/half_marathon.jpg" alt="Running" className="w-full h-full object-cover object-[center_5%]" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Running</h3>
            <p className="text-muted-foreground text-sm">because I like challenges.</p>
          </Link>

          <Link to="/hobbies/fishing" className="block">
            <div className="w-full h-56 bg-muted rounded-md overflow-hidden mb-3 flex items-center justify-center"> 
              <img src="/fishing/boating_life.jpg" alt="Fishing" className="w-full h-full object-cover object-[center_60%]" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Fishing</h3>
            <p className="text-muted-foreground text-sm">because I like peace.</p>
          </Link>

          <Link to="/hobbies/reading" className="block">
            <div className="w-full h-56 bg-muted rounded-md overflow-hidden mb-3 flex items-center justify-center"> 
              <img src="/reading/reading_book.jpg" alt="Reading" className="w-full h-full object-cover object-[center_40%]" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Reading</h3>
            <p className="text-muted-foreground text-sm">because I like inspiration.</p>
          </Link>
        </div>
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
