import { HERO_CONTENT, LINKS } from "../constants";
import profilePic from "../assets/raghavMahajanProfilePic.jpg";
import { motion } from "framer-motion";
import Button from "./Button";

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return <div className="pb-4 border-b border-neutral-900 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Raghav Mahajan
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        style={{ whiteSpace: 'pre-wrap' }}
                        className="max-w-xl py-6 my-2 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.span
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">
                            <Button ButtonText = {"My Resume"} />
                        </a>

                    </motion.span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{x:100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 1.5}}
                        src={profilePic}
                        alt="Profile Picture" />
                </div>
            </div>
        </div>
    </div>
};

export default Hero;