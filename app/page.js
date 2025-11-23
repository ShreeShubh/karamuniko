import HeroBanner from '../components/Home/HeroBanner/HeroBanner'
import MediaCoverage from '../components/Home/MediaCoverage/MediaCoverage'
import MuseumHighlights from '../components/Home/MuseumHighlights/MuseumHighlights'
import Shop from '../components/Home/Shop/Shop'
import TreasuresOfNature from '../components/Home/TreasuresOfNature/TreasuresOfNature'
import VisitMuseum from '../components/Home/VisitMuseum/VisitMuseum'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <MuseumHighlights />
      <VisitMuseum heading="Visit the Museum" />
      <TreasuresOfNature />
      <Shop />
      <MediaCoverage />
    </div>
  )
}
