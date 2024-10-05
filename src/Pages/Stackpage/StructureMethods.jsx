import {motion} from "framer-motion";
import AnimatedButtonList from "./AnimatedButtonList.jsx";

export default function StructureMethods() {

    function handleClick(value){
        console.log(value)
    }
    const buttonList = {
        pop : {text:"pop" , onClick : handleClick},
        push : {text:"push" , onClick : handleClick},
        peek : {text:"peek" , onClick : handleClick}
    }
    return (
        <AnimatedButtonList buttonList={buttonList} / >

    )
}



