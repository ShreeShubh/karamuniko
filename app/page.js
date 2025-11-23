import HeroBanner from '../components/Home/HeroBanner/HeroBanner'
import MediaCoverage from '../components/Home/MediaCoverage/MediaCoverage'
import MuseumHighlights from '../components/Home/MuseumHighlights/MuseumHighlights'
import TreasuresOfNature from '../components/Home/TreasuresOfNature/TreasuresOfNature'
import VisitMuseum from '../components/Home/VisitMuseum/VisitMuseum'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <MuseumHighlights />
      <VisitMuseum heading="Visit the Museum" />
      <TreasuresOfNature />
      <VisitMuseum heading="Welcome to the Museum Shop" />
      <MediaCoverage />
    </div>
  )
}
