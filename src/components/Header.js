const Header = (props) => {

    const isLoggedIn = !!props.username; // ispred dvostruki usklicnik - osigurava boolean tip podatka
    return (
        <> {/* prazan react fragment, služi isto kao i div ali manje opterećuje DOM */}
            {isLoggedIn &&
                <>
                    <div id="header-title">
                        <h1 className="title">Čavrljaonica</h1>
                        <p className="subtitle">Đes ba {props.username}?</p>
                    </div>

                    <div id="header-options">
                        {/* <button className="button is-info">Postavke</button>
                        <button className="button is-info">Profil</button> */}
                        <button className="button is-warning" onClick={props.handleLogout}>Odjava</button>
                    </div>
                </>
            }

            {!isLoggedIn &&
                <div id="header-title">
                    <h1 className="title">Čavrljaonica</h1>
                    <p className="subtitle">Internet je za komunikaciju!</p>
                </div>
            }
        </>
    );
}

export default Header;
