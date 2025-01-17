import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="pb-20 border-b border-neutral-900">
            <motion.h1
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:0.5}}
                className="my-10 text-4xl text-center">
                Contact
            </motion.h1>
            <div className="tracking-tighter text-center">
                <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="my-4"> {CONTACT.phoneNo} </motion.p>
                <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="my-4">
                    <a href="mailto:raghavmahajan965@gmail.com"> <u> { CONTACT.email } </u> </a>
                </motion.p>
                <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="my-4"> { CONTACT.address } </motion.p>
            </div>
        </div>
    )
}

export default Contact;