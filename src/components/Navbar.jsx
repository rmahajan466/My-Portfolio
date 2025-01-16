import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/raghav-mahajan-jsk777/" target="_blank"> <FaLinkedin /> </a>
            <a href="https://github.com/rmahajan466" target="_blank"> <FaGithub /> </a>
            <a href="https://x.com/rg_mhjn" target="_blank"> <FaSquareXTwitter /> </a>
            <a href="mailto:raghavmahajan965@gmail.com"> <IoMdMail /> </a>
        </div>
    </nav>
};

export default Navbar;
