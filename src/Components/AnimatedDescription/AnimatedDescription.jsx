import {motion} from "framer-motion";

export default function AnimatedDescription({children}) {
    return (
        <motion.div
            initial={{x: 1000, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 2}}
            className={"flex flex-row h-auto py-2 lg:whitespace-pre-wrap lg:text-2xl font-bold text-md lg:w-80 text-yellow-500"}
        >
            {children}
        </motion.div>
    )
}