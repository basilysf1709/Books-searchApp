import React from 'react'
import { motion } from "framer-motion";
import './App.css'

const Home = () => {


    return (
        <div className="home-container">
            <motion.div 
                className="box"

                animate={{
                    rotate: 270,
                    opacity: 1
                }}
                initial={{ 
                    rotate: 0,
                    opacity: 0.5
                }}
                transition={{
                    type: "spring",
                    duration: 1, 
                    stiffness: 60
                }}
            >
            </motion.div>
        </div>
    )
}

export default Home
