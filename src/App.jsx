import Startscreen from "./Pages/Startscreen/Startscreen.jsx";
import {useState} from "react";
import Stackpage from "./Pages/Stackpage/Stackpage.jsx";
import Navbar from "./Pages/Navbar/Navbar.jsx";
import QueuePage from "./Pages/QueuePage/QueuePage.jsx";
import LinkedListPage from "./Pages/LinkedLIst/LinkedListPage.jsx";
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
    const [selectedPage , setSelectedPage] = useState()
    function handleClick(value) {
        setSelectedPage(value);
        console.log(value)
    }
    return (
        <div className={" bg-gradient-to-l from-[#000000] via-[#1E1E1E] to-[#1E1E1E] lg:h-screen lg:p-0 p-20 justify-center items-center flex flex-col h-fit"}>
            <ToastContainer theme="dark" progressClassName={'bg-yellow-500'}/>
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
                <>
                    <Navbar onclick={handleClick} />
                    <QueuePage onClick={handleClick} />
                </>
            //TODO://descriptions for terminologies
            ) }
            {selectedPage === "linkedlist"  && (
                <>
                    <Navbar onclick={handleClick} />
                    <LinkedListPage />
                </>

            ) }


        </div>
    )
}