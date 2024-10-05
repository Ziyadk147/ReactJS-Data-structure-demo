
export default function Navbar({onclick}){
    return (
        <div className={"flex flex-row  justify-start"}>
            <button className={"font-bold text-2xl mx-10 py-10 text-stone-100"} onClick={() => onclick("")}>
                Go Back
            </button>
        </div>
    )
}