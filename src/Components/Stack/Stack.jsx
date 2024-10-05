import {AnimatePresence, motion} from "framer-motion";

export default function Stack({Stack}){
    return (
        <div className={"flex flex-col"}>
            <motion.div
                initial={{y: -1000, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 2}}
                className={"flex flex-col justify-center items-center h-full w-full"}
            >

                <>
                    <div className="border-amber-100 border-2 w-80 h-96 flex  flex-col-reverse ">

                        <AnimatePresence>
                            {Stack.map((stackItem) => (
                                <motion.div
                                    key={stackItem}  // Use a unique identifier as key
                                    initial={{y: -10, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: 10, opacity: 0}}  // Exit animation: down + fade out
                                    transition={{duration: 0.5}}
                                    className="h-24 rounded-xl bg-red-500 flex justify-center items-center m-2"
                                >
                                    <h1 className="text-center">{stackItem}</h1>

                                </motion.div>

                            ))}
                            <div className="flex-grow"></div>

                        </AnimatePresence>
                    </div>
                    <h1 className={"font-bold text-stone-100 text-3xl mt-5"}>Stack</h1>

                </>

            </motion.div>

        </div>

    )
}