import Arrow from "./Arrow.jsx";
import autoprefixer from "autoprefixer";

export default function Node({ data, address ,isHead , isLastElem }) {
    return (
        <>
            {isHead && (
                <div className={"h-auto flex lg:flex-row flex-col"}>
                    <div className="flex lg:flex-row  flex-col mx-2 justify-center items-center w-64 h-24 bg-red-500">
                        <div
                            className="flex lg:flex-col flex-row justify-center items-center lg:border-r-4 lg:border-b-0 border-r-4 h-full border-stone-700 w-full">
                            <p className="p-4">HEAD</p>
                        </div>
                        <div
                            className="flex lg:flex-col flex-row justify-center items-center  h-full  w-full">
                            <p className="p-4">Address</p>
                        </div>

                    </div>
                    <Arrow  />
                </div>

            )}
            {!isHead && (
                <div className={"h-auto flex lg:flex-row flex-col justify-center items-center"}>
                    <div className="flex lg:flex-row flex-col mx-2 justify-center items-center w-64 h-24 bg-red-500">
                        <div
                            className="flex lg:flex-col flex-row justify-center items-center  lg:border-r-4 lg:border-b-0 border-r-4 h-full  border-stone-700 w-full">
                            <p className="p-4">data</p>
                        </div>
                        <div className="flex lg:flex-col flex-row justify-center items-center   w-full">
                            <p className="p-4">address</p>
                        </div>
                    </div>

                    {!isLastElem &&
                        <Arrow/>
                    }
                    {isLastElem &&
                        <>
                            <Arrow/>

                            <div className="flex flex-row mx-2 justify-center items-center w-64 h-24 bg-red-500">
                                <div
                                    className="flex flex-col justify-center items-center border-r-4 h-full border-stone-700 w-full">
                                    <p className="p-4  text-stone-950 ">NULL</p>
                                </div>

                            </div>

                        </>
                    }
                </div>
            )}

        </>

    );
}
