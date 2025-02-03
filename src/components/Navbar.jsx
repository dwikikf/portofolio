import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex shrink-0 items-center">
      <img className="mx-2 w-10" src={ logo } alt="Logo" />
    </div>
    <div className="m-8 flex items-center justify-center text-xl gap-4">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
    </div>
    </nav>
  )
}

export default Navbar