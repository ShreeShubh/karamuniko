import Founder from '../../components/About/Founder/Founder'
import GemMuseumInfo from '../../components/About/GemMuseumInfo/GemMuseumInfo'
import Journey from '../../components/About/Journey/Journey'
import { CollectionCTA, VisitCTA } from '../../components/CTAs'
import HeroBanner from '../../components/HeroBanner/HeroBanner'

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/home/bg.jpg')",
      }}
    >
      <div className="relative z-10">
        <HeroBanner url="/videos/cutting-gems.mp4" />
        <GemMuseumInfo />
        <CollectionCTA />
        <Founder />
        <VisitCTA />
        <Journey />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}
