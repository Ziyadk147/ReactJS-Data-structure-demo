import Node from "./Node.jsx";

export default  function LinkedList({data}){
    return (
        <>
            <Node isHead={true} />
            <Node />
            <Node isLastElem={true}/>
        </>
    )
}