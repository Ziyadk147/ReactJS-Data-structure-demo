import Node from "./Node.jsx";

export default function LinkedList({ linkedList , isExample }) {
    return (
        <div className={"flex w-full lg:flex-row flex-col justify-center"}>
            {isExample ? (
                <>
                    <Node isHead={true} isExample={true} />
                    <Node isExample={true}/>
                    <Node isLastElem={true} isExample={true} />
                </>
            ) : (
                <>
                    <Node isHead={true} />
                    {linkedList && linkedList.map((item, index) => (
                        <Node
                            key={item.id || index}
                            data={item.data}
                        />
                    ))}
                    <Node isLastElem={true} />
                </>
            )}
        </div>
    );
}
