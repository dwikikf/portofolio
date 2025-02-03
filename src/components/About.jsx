import aboutPic from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="lg:max-w-90 rounded-2xl" src={aboutPic} alt="About Dwiki K.F" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl my-2 py-6 text-[0.9rem] font-light tracking-tighter">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About