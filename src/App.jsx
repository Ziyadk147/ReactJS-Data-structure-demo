import Startscreen from "./Pages/Startscreen/Startscreen.jsx";
import {useState} from "react";
import Stackpage from "./Pages/Stackpage/Stackpage.jsx";
import Navbar from "./Pages/Navbar/Navbar.jsx";

export default function App(){
    const [selectedPage , setSelectedPage] = useState()
    function handleClick(value) {
        setSelectedPage(value);
        console.log(value)
    }
    return (
        <div className={" bg-gradient-to-l from-[#000000] via-[#1E1E1E] to-[#1E1E1E] h-screen justify-center items-center flex flex-col "}>
            {!selectedPage  && (

                <Startscreen onClick={handleClick} />

            ) }
            {selectedPage === "stack"  && (
                <>
                    <Navbar onclick={handleClick} />
                    <Stackpage onClick={handleClick} />

                </>

            ) }
            {selectedPage === "queue"  && (
                <Startscreen onClick={handleClick} />

            ) }
            {selectedPage === "linkedlist"  && (
                <Startscreen onClick={handleClick} />

            ) }


        </div>
    )
}