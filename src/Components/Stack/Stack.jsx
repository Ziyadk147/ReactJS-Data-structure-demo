import {motion} from "framer-motion";

export default function Stack(){
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
                        <div className="h-24 rounded-xl bg-blue-500 flex justify-center items-center">
                            <h1 className={"text-center "}>
                                Box 1
                            </h1>
                        </div>
                        <div className="flex-grow"></div>
                    </div>
                    <h1 className={"font-bold text-stone-100 text-3xl mt-5"}>Stack</h1>

                </>

            </motion.div>

        </div>

    )
}