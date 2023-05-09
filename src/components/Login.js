import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // TODO: promijeniti dizajn

const Login = (props) => {
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // isključuje brisanje podataka na refresh stranice tj. blokira refresh stranice
        props.onLogin(usernameText);
        navigate("/");
    }

    return <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="title">
                <h1>Login</h1>
            </label>
            <input id="title" type="text" placeholder="Unesi korisničko ime" required value={usernameText} onChange={(e) => setUsernameText(e.target.value)} />
            <input type="submit" className="login-btn" value="Login" />
        </form>
    </div>
}

export default Login;
