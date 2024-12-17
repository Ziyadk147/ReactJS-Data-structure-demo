import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import LinkedList from "../../Components/LinkedList/LinkedList.jsx";
import {useState} from "react";

export default function LinkedListInteractive(){

    const [list , setList] = useState([]);
    function handleClick(text) {
        const newNode = {
            id: Date.now(),  // Use timestamp as unique identifier
            data: list.length,  // Store the length for data (you can modify this to fit your needs)
            address: `Data ${list.length}`,  // Store address or other properties
            isNew: true,  // Flag to mark this as a new node
        };

        if (text === "insert at End") {
            setList((prevList) => [...prevList, newNode]);  // Insert at the end with newNode
        }
        else if (text === "insert at beginning") {
            setList((prevList) => [newNode, ...prevList]);  // Insert at the beginning with newNode
        }
        else if (text === "insert at middle") {
            const middleIndex = Math.floor(list.length / 2);  // Find the middle index
            setList((prevList) => [
                ...prevList.slice(0, middleIndex),  // Before middle
                newNode,  // Insert new node at the middle
                ...prevList.slice(middleIndex),  // After middle
            ]);
        }
        else if (text === "remove at beginning") {
            setList((prevList) => prevList.slice(1));  // Remove the first element
        }
        else if (text === "remove at end") {
            setList((prevList) => prevList.slice(0, prevList.length - 1));  // Remove the last element
        }
        else if (text === "remove at middle") {
            const middleIndex = Math.floor(list.length / 2);  // Find the middle index
            setList((prevList) => [
                ...prevList.slice(0, middleIndex),  // Take elements before the middle
                ...prevList.slice(middleIndex + 1),  // Take elements after the middle (skip the middle)
            ]);
        }
    }


    const buttonList = [    

        {text:"insert at End" , onClick: handleClick},
        {text:"insert at beginning" , onClick: handleClick},
        {text:"insert at middle" , onClick: handleClick},
        {text:"remove at beginning" , onClick: handleClick},
        {text:"remove at end" , onClick: handleClick},
        {text:"remove at middle" , onClick: handleClick},

    ]
    const listData = [

    ]
    return (
        <div className={"flex lg:flex-row flex-col w-screen p-0 h-full"}>
            <div className={" w-fit flex flex-row"}>
                <Sidebar buttonList={buttonList}/>
            </div>
            <div className="flex w-full bg-transparent flex-row rounded-2xl">
                <LinkedList linkedList={list} />
            </div>
        </div>

    )
}