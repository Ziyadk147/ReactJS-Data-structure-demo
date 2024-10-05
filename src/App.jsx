import Startscreen from "./Pages/Startscreen/Startscreen.jsx";
import {useState} from "react";
import Stackpage from "./Pages/Stackpage/Stackpage.jsx";

export default function App(){
    const [selectedPage , setSelectedPage] = useState()
    function handleClick(value) {
        setSelectedPage(value);
    }
    return (
        <div className={" bg-gradient-to-l from-[#000000] via-[#1E1E1E] to-[#1E1E1E] "}>
            {!selectedPage  && (
                <Startscreen onClick={handleClick} />

            ) }
            {selectedPage === "stack"  && (
                <Stackpage  />

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