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
            <p className="max-w-xl my-2 py-6 text-[0.85rem] font-light tracking-tighter ">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <img className="lg:max-w-90" src={profilePic} alt="Dwiki K.F." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero