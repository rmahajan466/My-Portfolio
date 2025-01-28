import { CP } from "../constants";
import { motion } from "framer-motion";
import Button from "./Button";

const CompetitiveProgramming = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y:-100}}
                    transition={{duration:0.5}}
                    className="my-20 text-center text-4xl">
                    Competitive Programming
            </motion.h1>
            <div>
                {CP.map((cp, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                        <motion.div
                            whileInView={{ opacity: 1, x:0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={cp.logo}
                                width={150}
                                height={150}
                                alt={cp.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:100 }}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold"> {cp.title} </h6>
                            <p className="mb-4 text-neutral-400">Rated: {cp.rank} </p>

                            {cp.link?.trim() &&
                                <a href={cp.link} target="_blank" rel="noopener noreferrer">
                                        <Button ButtonText={"Profile Link"} />
                                </a>
                            }
                            <br /> <br />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompetitiveProgramming;