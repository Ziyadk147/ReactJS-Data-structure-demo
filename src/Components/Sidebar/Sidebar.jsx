import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Sidebar({ buttonList }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Bottom Bar */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 transition-all duration-300 ${
                    isOpen ? 'h-auto' : 'h-12'
                }`}
            >
                <div className="flex items-center justify-between">
                    <button
                        onClick={toggleBar}
                        className="text-yellow-500 text-2xl focus:outline-none"
                    >
                        {isOpen ? '▼' : '▲'}
                    </button>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-xl font-bold ${
                            isOpen ? 'block' : 'hidden'
                        } text-yellow-500`}
                    >
                        Functions
                    </motion.h1>
                </div>
                {isOpen && (
                    <motion.ul
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-evenly mt-4 flex-wrap"
                    >
                        {buttonList &&
                            buttonList.map((item, index) => (
                                <li key={index} className="flex-1 p-2 text-center">
                                    <button
                                        onClick={() => item.onClick(item.text)}
                                        className="w-full text-stone-900 font-bold text-lg rounded-2xl bg-yellow-500 hover:bg-gray-800 hover:text-stone-100 p-3"
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                    </motion.ul>
                )}
            </div>
        </>
    );
}
