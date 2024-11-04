import {motion} from "framer-motion";

export default function AnimatedDescription({children , style}) {
    const styleClass = style ?? "flex flex-col lg:px-0 px-10 lg:whitespace-pre-wrap lg:text-2xl font-bold text-md lg:w-80 text-yellow-500"
    return (
        <motion.div
            initial={{x: 0, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 2}}
            className={styleClass}
        >
            {children}
        </motion.div>
    )
}