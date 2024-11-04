import { useState } from 'react';
import {motion} from "framer-motion";

export default function Sidebar({buttonList}) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`w-fit h-full bg-gray-800 rounded-2xl text-black p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                {isOpen && (

                    <motion.div
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1}}

                    >
                        <h1 className="text-2xl text-yellow-500 text-center font-bold">Functions</h1>
                        <ul className="mt-6">
                            {/* eslint-disable-next-line react/prop-types */}
                            {buttonList && buttonList.map((item) => (
                                <li className="p-4">
                                    <button
                                        onClick={() => item.onClick(item.text)}
                                        className="w-full text-left p-4 text-stone-900 font-bold text-xl rounded-2xl bg-yellow-500 hover:bg-gray-800 hover:text-stone-100">{item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>


                    </motion.div>
                )}

            </div>
            <div className="p-6 flex justify-between items-center">

                <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">
                    {isOpen ? '▼' : '▲'}
                </button>
            </div>
        </>

    );
}
