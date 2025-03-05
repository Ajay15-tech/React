import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate("/products");
        } else {
            alert("Invalid credentials. Please enter email and password.");
        }
    };

    return ( <
        div className = "page" >
        <
        h1 > Login < /h1> <
        form onSubmit = { handleLogin } >
        <
        input type = "email"
        placeholder = "Enter Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        required /
        >
        <
        input type = "password"
        placeholder = "Enter Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        button type = "submit" > Login < /button> <
        /form> <
        /div>
    );
}

export default Login;