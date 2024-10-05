// eslint-disable-next-line react/prop-types
export default function Button({children , buttonStyle , onClick}) {

    const style = "rounded-3xl  bg-yellow-500 w-28 font-bold h-14 " + buttonStyle;
    return (
        <button className={style}
                onClick={onClick}
        >
            {children}
        </button>
    )
}