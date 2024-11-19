import Arrow from "./Arrow.jsx";

export default function Node({ data, isExample, address, isHead, isLastElem }) {
    return (
        <>
            {/* Head Node */}
            {isHead && (
                <div className="h-auto flex lg:flex-row flex-col justify-center items-center">
                    <div className="flex lg:flex-row flex-col mx-2 justify-center items-center w-64 h-24 bg-red-500">
                        <div className="flex lg:flex-col flex-row justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 h-full border-stone-700 w-full">
                            <p className="p-4">HEAD</p>
                        </div>
                        <div className="flex lg:flex-col flex-row justify-center items-center h-full w-full">
                            <p className="p-4">Address</p>
                        </div>
                    </div>
                    <Arrow />
                </div>
            )}

            {/* Middle Node (not head or last element) */}
            {!isHead && !isLastElem && (
                <div className="h-auto flex lg:flex-row flex-col justify-center items-center">
                    <div className="flex lg:flex-row flex-col mx-2 justify-center items-center w-64 h-24 bg-red-500">
                        <div className="flex lg:flex-col flex-row justify-center items-center lg:border-r-4 lg:border-b-0 border-b-4 h-full border-stone-700 w-full">
                            <p className="p-4">{isExample ? "data" : data}</p>
                        </div>
                        <div className="flex lg:flex-col flex-row justify-center items-center w-full">
                            <p className="p-4">address</p>
                        </div>
                    </div>
                    {!isLastElem && <Arrow />}
                </div>
            )}

            {/* Last Node (NULL) */}
            {isLastElem && (
                <div className="h-auto flex lg:flex-row flex-col justify-center items-center">
                    <Arrow />
                    <div className="flex flex-row mx-2 justify-center items-center w-64 h-24 bg-red-500">
                        <div className="flex flex-col justify-center items-center border-r-4 h-full border-stone-700 w-full">
                            <p className="p-4 text-stone-950">NULL</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
