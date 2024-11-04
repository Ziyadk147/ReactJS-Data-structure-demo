import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Node from "../../Components/LinkedList/Node.jsx";
import LinkedList from "../../Components/LinkedList/LinkedList.jsx";
import AnimatedDescription from "../../Components/AnimatedDescription/AnimatedDescription.jsx";
import AnimatedButtonList from "../../Components/AnimatedButtonList/AnimatedButtonList.jsx";
import LinkedListInteractive from "./LinkedListInteractive.jsx";

export default function LinkedListPage(){
    const [triggerChange , setTriggerChange] = useState(false);
    const [pageChange , setPageChange] = useState("info")
    useEffect(() => {
        const timer = setTimeout(() => {
            setTriggerChange(true)
        } , 2000)
        return () => {
            clearTimeout(timer)
        }
    }, []);
    function  handlePageChange(){
        setPageChange("interactive")
    }
    const linkedListText = `A linked list is a linear data structure where elements, called nodes, are connected by pointers. Each node contains two parts: the data itself and a reference (or pointer) to the next node in the sequence. This allows for dynamic memory allocation, making it easy to add or remove nodes without needing to shift elements, as in an array. Linked lists can vary in types, including singly linked lists, where each node points to the next, and doubly linked lists, where nodes point to both the next and previous nodes. They are particularly useful for applications that require frequent modifications to the data structure.`

    const buttonList = [
        {text:"Interactive Demo" , onClick: handlePageChange},
    ]

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

            {triggerChange && pageChange === "info" && (
                <>
                    <div className={"flex lg:flex-row flex-col justify-center items-center w-screen "}>
                        <LinkedList isExample={true} />
                    </div>
                    <div className="flex flex-row justify-center mt-16 w-screen"
                    >
                        <AnimatedDescription style={"flex flex-row lg:px-0 px-10 lg:whitespace-pre-wrap lg:text-2xl font-bold text-md  lg:w-3/4 text-center text-yellow-500"} >{linkedListText}</AnimatedDescription>
                        <AnimatedButtonList buttonList={buttonList}/>

                    </div>
                </>
            )
            }
            {triggerChange && pageChange === "interactive" && (
                <LinkedListInteractive />
            )
            }



        </>

    )

}