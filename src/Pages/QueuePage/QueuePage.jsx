import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Queue from "../../Components/Queue/Queue.jsx";
import AnimatedButtonList from "../../Components/AnimatedButtonList/AnimatedButtonList.jsx";
import AnimatedDescription from "../../Components/AnimatedDescription/AnimatedDescription.jsx";

export default function QueuePage({onClick}){
    const [triggerChange , setTriggerChange] = useState(false);
    const [queueArray , setQueueArray ] = useState([])
    let countRef = useRef(1);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTriggerChange(true)
        } , 2000)
        return () => {
            clearTimeout(timer)
        }
    }, []);

    function handleClick(value) {
        if (value === "Enqueue") {
            setQueueArray((prevArr) => {
                if (prevArr.length < 5) {
                    return [countRef.current++, ...prevArr];
                }
                return prevArr;
            });
        } else if (value === "Dequeue") {
            setQueueArray((prevArr) => {
                if (prevArr.length > 0) {
                    countRef.current--;
                    return prevArr.slice(1);
                }
                return prevArr;
            });
        }
    }
    const buttonList =[
        {text:"Enqueue" , onClick: handleClick},
        {text:"Dequeue" , onClick: handleClick},
    ]
    const queueText = `
    
A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the first element added to the queue will be the first one to be removed. Queues are used in various real-life scenarios like waiting lines, where the first person in line is the first to be served. In programming, a queue is commonly used in scenarios like task scheduling, managing requests in servers, or implementing breadth-first search (BFS) algorithms.
    `
    return (

        <>

            {!triggerChange && (
                <motion.div
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className={"flex lg:flex-row flex-col  justify-center items-center h-screen "}
                >
                    <h1 className="text-4xl font-bold text-stone-100">Queue Data Structure</h1>

                </motion.div>
            )}
            {triggerChange && (
                <>
                    <div className={"flex lg:flex-row flex-col justify-center items-center w-screen "}>
                        <Queue Queue={queueArray}/>
                        <AnimatedButtonList buttonList={buttonList}/>
                        <AnimatedDescription>{queueText}</AnimatedDescription>

                    </div>
                </>
            )
            }


        </>

    )
}