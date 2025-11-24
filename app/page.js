import HeroBanner from '../components/Home/HeroBanner/HeroBanner'
import MediaCoverage from '../components/Home/MediaCoverage/MediaCoverage'
import MuseumHighlights from '../components/Home/MuseumHighlights/MuseumHighlights'
import MuseumIntroBanner from '../components/Home/MuseumIntroBanner/MuseumIntroBanner'
import SacredSculpture from '../components/Home/SacredSculpture/SacredSculpture'
import Shop from '../components/Home/Shop/Shop'
import TreasuresOfNature from '../components/Home/TreasuresOfNature/TreasuresOfNature'
import VisitMuseum from '../components/Home/VisitMuseum/VisitMuseum'

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/home/bg.jpg')",
      }}
    >
      <div className="relative z-10">
        <HeroBanner />
        <MuseumIntroBanner />
        <MuseumHighlights />
        <VisitMuseum heading="Visit the Museum" />
        <TreasuresOfNature />
        <Shop />
        <SacredSculpture />
        <MediaCoverage />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}
