import Node from "./Node.jsx";

export default function LinkedList({ linkedList, isExample }) {
    return (
        <div className={"flex w-full h-full  flex-wrap  lg:flex-row flex-col justify-center"}>
            {isExample ? (
                <>
                    <Node isHead={true} isExample={true} />
                    <Node isExample={true} />
                    <Node isLastElem={true} isExample={true} />
                </>
            ) : (
                <>
                    <Node isHead={true} />
                    {linkedList && linkedList.map((item, index) => (
                        <Node
                            key={item.id} // Use the unique id of the item as key
                            data={item.data}
                            address={item.address}
                            isNew={item.isNew} // Only pass `isNew` for animation if needed
                        />
                    ))}
                    <Node isLastElem={true} />
                </>
            )}
        </div>
    );
}
