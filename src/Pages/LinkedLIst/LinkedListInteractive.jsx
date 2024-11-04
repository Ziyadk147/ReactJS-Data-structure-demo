import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import LinkedList from "../../Components/LinkedList/LinkedList.jsx";
import {useState} from "react";

export default function LinkedListInteractive(){

    const [list , setList] = useState({});
    function handleClick(text){
        console.log(text)
    }

    const buttonList = [

        {text:"insert at End" , onClick: handleClick},
        {text:"insert at beginning" , onClick: handleClick},
        // {text:"peek" , onClick: handleClick},

    ]
    const listData = [

    ]
    return (
        <div className={"flex flex-row w-screen p-0 h-screen"}>
            <div className={" w-96 flex flex-col"}>
                <Sidebar buttonList={buttonList}/>
            </div>
            <div className="flex w-full bg-transparent flex-row rounded-2xl">
                <LinkedList></LinkedList>
            </div>
        </div>

    )
}