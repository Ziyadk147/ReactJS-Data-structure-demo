import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Node from "../../Components/LinkedList/Node.jsx";
import LinkedList from "../../Components/LinkedList/LinkedList.jsx";

export default function LinkedListPage(){
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
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className={"flex lg:flex-row flex-col  justify-center items-center  h-screen"}
                >
                    <h1 className="text-4xl font-bold text-stone-100">Linked List Data Structure</h1>

                </motion.div>
            )}
            {triggerChange && (
                <>
                    <div className={"flex lg:flex-row flex-col justify-center items-center w-screen h-screen"}>
                        <LinkedList />
                        {/*<Stack Stack={stackArray}/>*/}
                        {/*<AnimatedButtonList buttonList={buttonList}/>*/}
                        {/*<AnimatedDescription>{stackText}</AnimatedDescription>*/}

                    </div>

                    {/*<div className={"flex lg:flex-row flex-col justify-center items-center w-full h-auto"}>*/}
                    {/*    <Codeblock></Codeblock>*/}

                    {/*</div>*/}

                </>
            )
            }


        </>

    )

}