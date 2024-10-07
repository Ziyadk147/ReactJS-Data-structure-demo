import { motion } from 'framer-motion';
import {useEffect, useState} from "react";

function Startscreen({onClick}) {
    const [ triggerChange , setTrigerChange ] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTrigerChange(true);
        } , 2000)

        return () => {
            clearTimeout(timer)
        }
    }, []);
    return (
    <>
        {!triggerChange && (
                <motion.div
                    initial={{y: 0, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className="flex justify-center items-center h-screen"
                >
                    <h1 className="text-4xl font-bold text-stone-100">Welcome to Data Structure Learning Tool!</h1>
                </motion.div>
            )
        }
        {triggerChange && (
                <motion.div
                    initial={{y: -1000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className="flex flex-row  justify-center items-center h-screen "
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-stone-100 text-4xl lg:px-0 px-3">Please Select any of the following options</h1>
                        <motion.ul
                            initial={{y: 1000, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2}}
                            className={"flex lg:flex-row flex-col my-6  "}
                        >
                            <li className={"flex lg:flex-col flex-row mx-2"}>
                                <button className={"rounded-3xl  bg-yellow-500 w-full lg:m-0 my-1  px-10 font-bold h-14"}
                                        onClick={ ()  => {onClick("stack")}}

                                >
                                    Stack
                                </button>
                            </li>
                            <li className={"flex lg:flex-col flex-row mx-2"}>
                                <button className={"rounded-3xl bg-yellow-500 lg:m-0 my-1  w-full px-10 font-bold h-14"}
                                    onClick={ ()  => {onClick("queue")}}
                                >
                                    Queue
                                </button>
                            </li>
                            <li className={"flex lg:flex-col flex-row mx-2"}>
                                <button className={"rounded-3xl bg-yellow-500  w-full lg:m-0 my-1 px-10 font-bold h-14"}
                                    onClick={ ()  => {onClick("linkedlist")}}
                                >
                                    Linked List
                                </button>
                            </li>

                        </motion.ul>
                    </div>
                </motion.div>
        )
        }

    </>


    )

}

export default Startscreen;
