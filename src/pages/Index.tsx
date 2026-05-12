import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import MajorArcana from "@/components/MajorArcana"

const Index = () => {
  return (
    <div className="bg-[#0a0010]">
      <ShaderBackground>
        <Header />
        <div className="min-h-screen relative">
          <HeroContent />
          <PulsingCircle />
        </div>
      </ShaderBackground>
      <MajorArcana />
    </div>
  )
}

export default Index