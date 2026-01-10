import { CollectionCTA, VisitCTA } from '../../components/CTAs'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import MuseumIntroBanner from '../../components/Home/MuseumIntroBanner/MuseumIntroBanner'
import Testimonials from '../../components/Home/Testimonials/Testimonials'
import VisitorInfoCard from '../../components/Visit/VisitorInfoCard/VisitorInfoCard'
import VisitUsSection from '../../components/Visit/VisitUsSection/VisitUsSection'

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/home/bg.jpg')",
      }}
    >
      <div className="relative z-10">
        <HeroBanner url="/gem-museum-info/img01.jpg" />
        <MuseumIntroBanner />
        <VisitCTA />
        <VisitorInfoCard />
        <CollectionCTA />
        <Testimonials />
        <VisitUsSection />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}
