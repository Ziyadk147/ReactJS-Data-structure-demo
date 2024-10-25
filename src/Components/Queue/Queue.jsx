import {AnimatePresence, motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Queue({Queue}){
    return (
        <div className={"flex flex-row"}>
            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 2}}
                className={"flex flex-col justify-center items-center "}
            >

                <>
                    <div className="border-amber-100 border-2 lg:w-96 w-80 h-52 flex  flex-row">

                        <AnimatePresence>
                            {/* eslint-disable-next-line react/prop-types */}
                            <div className="flex-grow"></div>

                            {Queue.map((queueItem) => (
                                <motion.div
                                    key={queueItem}  // Use a unique identifier as key
                                    initial={{x: 50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -50, opacity: 0}}  // Exit animation: down + fade out
                                    transition={{duration: 0.5}}
                                    className="w-24 rounded-xl bg-red-500 flex justify-center items-center m-2"
                                >
                                    <h1 className="text-center">{queueItem}</h1>

                                </motion.div>

                            ))}

                        </AnimatePresence>
                    </div>
                    <h1 className={"font-bold text-stone-100 text-3xl mt-5"}>Queue</h1>

                </>

            </motion.div>
        </div>
    )
}