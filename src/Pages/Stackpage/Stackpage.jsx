import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Stack from "../../Components/Stack/Stack.jsx";
import AnimatedButtonList from "../../Components/AnimatedButtonList/AnimatedButtonList.jsx";
import AnimatedDescription from "../../Components/AnimatedDescription/AnimatedDescription.jsx";
import 'prismjs/themes/prism-tomorrow.css'; // or any theme you prefer
import Prism from 'prismjs'
import { ToastContainer, toast } from 'react-toastify';

export default function Stackpage({onClick}) {

    const [triggerChange , setTriggerChange] = useState(false);
    const [stackArray , setStackArray ] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTriggerChange(true)
        } , 2000)
        return () => {
            clearTimeout(timer)
        }
    }, []);

    useEffect(() => {
        Prism.highlightAll()
    }, []);

    function handleClick(value){
        if(value === "push"){
            if(stackArray.length <= 4){
                setStackArray((prevState) => [...prevState , prevState.length + 1])
            }
            else{
                toast('Stack is Full')
            }
        }
        else if(value === "pop"){
            if(stackArray.length > 0){
                setStackArray( ( prevState ) => prevState.slice(0 , -1) )
            }
            else{
                toast("Stack is Empty")
            }
        }

    }
    const buttonList = [

         {text:"push" , onClick: handleClick},
         {text:"pop" , onClick: handleClick},
         // {text:"peek" , onClick: handleClick},

    ]
    const stackText = "What is a Stack?\n" +
        "A Stack is a collection of elements that follows the Last In, First Out (LIFO) principle. \n" +
        "This means that the last element added to the stack is the first one to be removed.\n" +
        "You can imagine a stack like a pile of books: you can only remove or add a book from the top of the pile.\n"
    return (
        <>

            {!triggerChange && (
                <motion.div
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className={"flex lg:flex-row flex-col  justify-center items-center  h-screen"}
                >
                    <h1 className="text-4xl font-bold text-stone-100">Stack Data-Structure</h1>

                </motion.div>
            )}
            {triggerChange && (
                <>
                    <div className={"flex lg:flex-row flex-col justify-center items-center w-screen "}>

                        <Stack Stack={stackArray}/>
                        <AnimatedButtonList buttonList={buttonList}/>
                        <AnimatedDescription>{stackText}</AnimatedDescription>

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