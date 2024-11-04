import Node from "./Node.jsx";

export default function LinkedList({ linkedList = [], isExample }) {
    return (
        <>
            {isExample ? (
                <>
                    <Node isHead={true} isExample={true} />
                    <Node isExample={true}/>
                    <Node isLastElem={true} isExample={true} />
                </>
            ) : (
                <>
                    <Node isHead={true} />
                    {linkedList.map((item, index) => (
                        <Node
                            key={item.id || index} // Assuming item has a unique 'id' property
                            data={item.data}
                        />
                    ))}
                    <Node isLastElem={true} />
                </>
            )}
        </>
    );
}
