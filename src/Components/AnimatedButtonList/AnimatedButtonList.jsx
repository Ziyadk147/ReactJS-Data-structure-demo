import {motion} from "framer-motion";
import Button from "../Button/Button.jsx";

export default  function AnimatedButtonList({buttonList , listStyle , listItemStyle}) {
    return (
        <motion.ul
            initial={{y: 1000, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2}}
            className={listStyle ?? "flex lg:flex-col flex-row my-6 px-6"}
        >
            {buttonList && buttonList.map( (button , buttonIndex) => (
                <li className={listStyle ?? "flex flex-col lg:px-3 px-1 py-2"} key={buttonIndex}>
                    <Button onClick={() => button.onClick(button.text)}>
                        {button.text}
                    </Button>
                </li>
            ) )}

        </motion.ul>

    )
}