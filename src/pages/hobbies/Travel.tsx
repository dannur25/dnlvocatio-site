import FadeInImage from "@/components/FadeInImage";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="px-6 py-12">
        <Link to="/hobbies" className="text-sm text-muted-foreground hover:text-foreground">← Back</Link>
        <div className="space-y-12 mt-6">
          <FadeInImage src="/travel/rolls_royce_cullinan.jpg" alt="Photography 1" caption="Absolutely beautiful Rolls Royce Cullinan." fit="contain" preserve />
          <FadeInImage src="/travel/candid_nyc.jpg" alt="Photography 2" caption="Candid with NYC in the background." fit="contain" preserve />
          <FadeInImage src="/travel/flex.jpg" alt="Photography 3" caption="Have to flex a little." fit="contain" preserve />
          <FadeInImage src="/travel/black_g_wagon.jpg" alt="Photography 4" caption="Cousin looking sharp with the black G-Wagon." fit="contain" preserve />

        </div>
      </main>
    </div>
  );
};

export default Travel;
