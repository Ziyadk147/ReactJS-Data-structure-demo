import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import LinkedList from "../../Components/LinkedList/LinkedList.jsx";
import {useState} from "react";

export default function LinkedListInteractive(){

    const [list , setList] = useState([]);
    function handleClick(text){
        if(list.length <= 2) {
            if (text === "insert at End") {
                setList((prevList) => [...prevList, {data: "Element"}])
            } else if (text === "insert at beginning") {
                setList((prevList) => [{data: "ElementBegin"}, ...prevList])
            }
        }
        if (text === "remove at beginning"){
                setList( (prevList) => prevList.slice(1))
        }
        else if (text === "remove at end"){
                setList((prevList) => prevList.slice(0, prevList.length - 1));
        }


    }

    const buttonList = [

        {text:"insert at End" , onClick: handleClick},
        {text:"insert at beginning" , onClick: handleClick},
        {text:"remove at beginning" , onClick: handleClick},
        {text:"remove at end" , onClick: handleClick},
        // {text:"peek" , onClick: handleClick},

    ]
    const listData = [

    ]
    return (
        <div className={"flex flex-row w-screen p-0 h-screen"}>
            <div className={" w-fit flex flex-row"}>
                <Sidebar buttonList={buttonList}/>
            </div>
            <div className="flex w-full bg-transparent flex-row rounded-2xl">
                <LinkedList linkedList={list} />
            </div>
        </div>

    )
}