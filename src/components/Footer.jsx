import {LINKS} from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <motion.span
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                        className="text-l sm:text-center">
                        © 2025 Raghav Mahajan. All Rights Reserved.
                    </motion.span>
                    <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className="flex gap-3 mt-4 text-2xl sm:justify-center sm:mt-0">
                        <a href={LINKS.linkedin} target="_blank"> <FaLinkedin /> </a>
                        <a href={LINKS.github} target="_blank"> <FaGithub /> </a>
                        <a href={LINKS.twitter} target="_blank"> <FaSquareXTwitter /> </a>
                        <a href= { LINKS.mail }> <IoMdMail /> </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;