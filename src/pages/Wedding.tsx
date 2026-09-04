import { Link } from "react-router-dom";

// Order alternates landscape/portrait so the masonry columns stagger instead of clumping.
const photos = [
  { src: "/wedding/primephoto-175.JPG", alt: "Walking hand in hand past applauding guests, Manhattan skyline behind" },
  { src: "/wedding/primephoto-24.JPG", alt: "Buttoning the tuxedo jacket before the ceremony" },
  { src: "/wedding/primephoto-185.JPG", alt: "Portrait by the Brooklyn Bridge" },
  { src: "/wedding/primephoto-28.JPG", alt: "Close-up of the wedding band going on" },
  { src: "/wedding/primephoto-212.JPG", alt: "Walking with the Manhattan skyline behind us" },
  { src: "/wedding/primephoto-189.JPG", alt: "A kiss on the forehead with the skyline behind" },
  { src: "/wedding/primephoto-215.JPG", alt: "Standing back to back on a garden path, her hand resting on his shoulder" },
  { src: "/wedding/primephoto-259.JPG", alt: "Side by side at the altar during the ceremony" },
  { src: "/wedding/primephoto-236.JPG", alt: "She holds his face in her hand as they laugh together in the garden" },
  { src: "/wedding/primephoto-469.JPG", alt: "Seated in traditional embroidered dress at the reception" },
  { src: "/wedding/primephoto-287.JPG", alt: "Walking arm in arm back down the aisle as guests applaud" },
  { src: "/wedding/primephoto-502.JPG", alt: "Wedding photo" },
  { src: "/wedding/primephoto-364.JPG", alt: "In the ballroom before the reception" },
  { src: "/wedding/primephoto-539.JPG", alt: "First dance in traditional dress" },
];

const Wedding = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground">← Back</Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-2 text-foreground">The Wedding</h1>
          <p className="text-lg text-muted-foreground">New York, June 2026.</p>
        </div>

        <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 mt-12">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full mb-4 rounded-md bg-muted break-inside-avoid"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wedding;
