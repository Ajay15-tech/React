<<<<<<< HEAD
import React from "react";
import DragAndDropList from "./DragAndDrop/DragAndDrop"; // Ensure the path is correct

function App() {
    return ( <
        div className = "App" >
        <
        h1 className = "text-center fs-2 p-2 my-2 bg-secondary text-white" > My Drag and Drop Project < /h1> <
        DragAndDropList / >
        <
        /div>
    );
}
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import NotFound from './NotFound';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light'); // Default to light theme

    // Toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        // Add the current theme class to the body when the component mounts or theme changes
        document.body.className = `${theme}-theme`;
    }, [theme]);

    return ( <
        Router >
        <
        div >
        <
        nav >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/about" > About < /Link></li >
        <
        li > < Link to = "/contact" > Contact < /Link></li >
        <
        li > < button onClick = { toggleTheme } > Toggle Theme < /button></li > { /* Toggle Button */ } <
        /ul> <
        /nav>

        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/post/:id"
        element = { < Post / > }
        /> <
        Route path = "*"
        element = { < NotFound / > }
        /> <
        /Routes>

        <
        footer >
        <
        p > My React Dynamic App & copy; 2025 < /p> <
        /footer> <
        /div> <
        /Router>
    );
};
>>>>>>> 89cb9cc (Dynamic-App Commit)

export default App;