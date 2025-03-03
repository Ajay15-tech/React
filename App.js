import logo from './logo.svg';
import './App.css';

function App() {
    const handleClick = () => {
        alert("Welcome to my React App! 🚀");
    };

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > Welcome to my first React App!Let 's build something amazing. ✨</p>

        <
        button onClick = { handleClick }
        style = {
            { padding: "10px 20px", fontSize: "16px", cursor: "pointer" }
        } >
        Click Me <
        /button>

        <
        a className = "App-link"
        href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn JavaScript
        for React <
        /a> < /
        header > <
        /div>
    );
}

export default App;