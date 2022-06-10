import { motion } from "framer-motion"
import React from 'react'
import Navbar from './components/navbar/Navbar'
import TodoList from './components/todo/TodoList'
import Footer from './components/footer/Footer'

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      
      <motion.div 
      
        animate={{ 
          scale: 1,
          opacity: 1,
        }}
        initial={{ 
          scale: 0,
          opacity: 0,
        }}
        transition={{ 
        ease: "backIn",
        duration: 5,
        }}
        className='todo-app'>
           
        <TodoList />      
      </motion.div>      
            
      <Footer />
    </>
  );
}

export default App;