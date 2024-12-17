import { motion } from "framer-motion";

export default function About() {

    const socialLinks = [
        { 
            path: '/assets/linkedin144.png', 
            link: 'https://www.linkedin.com/in/ziyad-khan-784926286/' 
        },
        { 
            path: '/assets/github150.png', 
            link: 'https://github.com/Ziyadk147' 
        },
    ];

    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen">
            <div className="flex flex-col justify-center items-center">
                {/* Text Animations */}
                <motion.h1
                    className="font-bold text-2xl mx-10 py-5 text-stone-100"
                    initial={{ opacity: 0, y: 50 }}      // Start from below and transparent
                    animate={{ opacity: 1, y: 0 }}        // Animate to visible and original position
                    transition={{ duration: 1 }}          // Animation duration
                >
                    Hello I am Ziyad (23-AI-05).
                </motion.h1>

                <motion.p
                    className="font-bold text-xl mx-10 py-5 text-stone-100"
                    initial={{ opacity: 0, y: 50 }}      // Start from below and transparent
                    animate={{ opacity: 1, y: 0 }}        // Animate to visible and original position
                    transition={{ duration: 1, delay: 0.3 }}  // Animation duration with delay for sequencing
                >
                    This is a Personal Project Created on React.JS, TailwindCSS for styling, and Framer Motion for animation.
                </motion.p>

                {/* List of social icons with entrance animation */}
                <motion.ul
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={"flex lg:flex-row flex-col mt-6"}
                >
                    {socialLinks.map((item, key) => (
                        <motion.li
                            key={key}
                            className={"flex lg:flex-col flex-row mx-2"}
                            initial={{ opacity: 0, scale: 0.8 }}   // Start from slightly smaller and transparent
                            animate={{ opacity: 1, scale: 1 }}     // Fade in and scale up to normal size
                            transition={{ delay: key * 0.3, duration: 0.5 }}  // Stagger delay based on the index
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-100 hover:text-blue-500 transition duration-300"
                            >
                                <motion.button
                                    className="flex items-center justify-center "
                                    whileHover={{ scale: 1.1 }}  // Scale up on hover
                                    whileTap={{ scale: 0.95 }}   // Scale down on tap/click
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img 
                                        src={item.path} 
                                        alt="social-icon" 
                                        className="w-20 h-20" 
                                    />
                                </motion.button>
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}
