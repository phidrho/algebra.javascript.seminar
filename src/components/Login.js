import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // isključuje brisanje podataka na refresh stranice tj. blokira refresh stranice
        props.onLogin(usernameText);
        navigate("/algebra.javascript.seminar/");
    }

    return (
        <main>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-6-widescreen">
                        <form onSubmit={handleSubmit} className="box">
                            <div className="field">
                                <label htmlFor="username" className="label">Unesi željeno korisničko ime:</label>
                                <div className="control">
                                    <input id="welcome-login-email" type="text" name="username" placeholder="Čončika" className="input" autoComplete={usernameText} required value={usernameText} onChange={(e) => setUsernameText(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <input type="submit" className="button is-success" value="Prijava" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>


    );

}

export default Login;
