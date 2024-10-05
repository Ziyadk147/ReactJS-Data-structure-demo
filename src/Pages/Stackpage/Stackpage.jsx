import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Stack from "../../Components/Stack/Stack.jsx";

export default function Stackpage() {
    const [triggerChange , setTriggerChange] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTriggerChange(true)
        } , 2000)
        return () => {
            clearTimeout(timer)
        }
    }, []);
    return (
        <>
            {!triggerChange && (
                <motion.div
                    initial={{y: -1000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className={"flex justify-center items-center h-screen"}
                >
                    <h1 className="text-4xl font-bold text-stone-100">Stack Data-Structure</h1>

                </motion.div>
            )}
            {triggerChange && (
                <div className={"flex lg:flex-row flex-col justify-center items-center w-full h-screen"}>
                    <Stack/>

                </div>

            )}

        </>

    )
}