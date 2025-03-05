import "./Dashboard.css";

function Dashboard({ onLogout }) {
    return ( <
        div className = "dashboard-container" >
        <
        h1 > Welcome to Dashboard < /h1> <
        p > You are successfully logged in . < /p> <
        button onClick = { onLogout } > Logout < /button> <
        /div>
    );
}

export default Dashboard;