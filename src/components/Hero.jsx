import Picture from "../components/Picture"
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/kevinRushProfile.png"

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Dwiki Kautsar Fahmi</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-transparent text-3xl">
              Junior Frontend Developer
            </span>
            <p className="myP-tighter-light">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 lg:py-8">
          <Picture sourceImage={profilePic} altImage="Profile Dwiki K.F."/>
        </div>
      </div>
    </div>
  )
}

export default Hero