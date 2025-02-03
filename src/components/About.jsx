import Picture from "../components/Picture"
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
          <Picture sourceImage={aboutPic} altImage="About Dwiki K.F." styles="rounded-2xl "/>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center lg:justify-start">
            <p className="myP-tighter-light">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About