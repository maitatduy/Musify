import ArtistSection from "./ArtistSection";
import CategorySection from "./CategorySection";
import FeaturedSection from "./FeaturedSection";

export default function HomePage() {
  return (
    <>
      {/* Featured Playlist */}
      <FeaturedSection />
      {/* Categories Section */}
      <CategorySection />
      {/* Artist Section */}
      <ArtistSection />
    </>
  );
}
