import FadeInImage from "@/components/FadeInImage";
import { Link } from "react-router-dom";

const Fishing = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="px-6 py-12">
        <Link to="/life" className="text-sm text-muted-foreground hover:text-foreground">← Back</Link>
        <div className="space-y-12 mt-6">
          <FadeInImage src="/fishing/fish_ring.jpg" alt="Fishing 1" caption="Fish ring." fit="contain" preserve />
          <FadeInImage src="/fishing/fixing_boat.jpg" alt="Fishing 2" caption="12 hour work days in scorching heat to fix the engine. Pure determination." fit="contain" preserve />
          <FadeInImage src="/fishing/boating_life.jpg" alt="Fishing 3" caption="The hard work paid off. Amazing moment out in the fjord." fit="contain" preserve />
          <FadeInImage src="/fishing/fishing_with_brothers.jpg" alt="Fishing 4" caption="Took the homies out for some fishing." fit="contain" preserve />
        </div>
      </main>
    </div>
  );
};

export default Fishing;
