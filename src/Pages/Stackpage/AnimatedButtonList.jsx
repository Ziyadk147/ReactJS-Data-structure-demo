import {motion} from "framer-motion";
import Button from "../../Components/Button/Button.jsx";

export default  function AnimatedButtonList({buttonList , listStyle , listItemStyle}) {
    return (
        <motion.ul
            initial={{y: 1000, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2}}
            className={listStyle}
        >
            {/*flex lg:flex-col flex-row my-6 px-6*/}
            <li className={listItemStyle}>

                <Button></Button>
            </li>
            {buttonList && buttonList.map( (button , buttonIndex) => (
                <li className={listStyle ?? "flex flex-row px-2  py-2"} key={buttonIndex}>
                    <Button onClick={button.onClick}>
                        {button.text}
                    </Button>
                </li>
            ) )}

            {/*<li className={"flex flex-row px-2 py-2"}>*/}
            {/*    <button className={"rounded-3xl bg-yellow-500 w-28 font-bold h-14"}*/}
            {/*            onClick={() => {*/}
            {/*                onClick("pop")*/}
            {/*                }}*/}
            {/*    >*/}
            {/*        POP*/}
            {/*    </button>*/}
            {/*</li>*/}
            {/*<li className={"flex flex-row px-2 py-2"}>*/}
            {/*    <button className={"rounded-3xl bg-yellow-500 w-28 font-bold h-14"}*/}
            {/*            onClick={() => {*/}
            {/*                onClick("peek")*/}
            {/*            }}*/}
            {/*    >*/}
            {/*        Peek*/}
            {/*    </button>*/}
            {/*</li>*/}

        </motion.ul>

    )
}