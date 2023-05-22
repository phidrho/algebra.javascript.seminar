const Header = (props) => {

    const isLoggedIn = !!props.username; // ispred dvostruki usklicnik - osigurava boolean tip podatka
    return (
        <> {/* prazan react fragment, služi isto kao i div ali manje opterećuje DOM */}
            {isLoggedIn &&
                <div className="app-header">
                    <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
                    <h1>Vedranova aplikacija za brbljanje putem Interneta! - {props.username}</h1>
                    {/* prazan div ispod služi za flex pozicioniranje elemenata na headeru - 3 elementa na punu širinu ekrana tj. lijevo sredina desno - (tipka sidebar + naslov + prazan div) */}
                    <button onClick={props.handleLogout}>Logout</button>
                </div>
            }
            {!isLoggedIn && <div className="app-header">
                <div></div>
                <h1>Vedranova aplikacija za brbljanje putem Interneta! - neulogiran</h1>
                {/* prazan div ispod služi za flex pozicioniranje elemenata na headeru - 3 elementa na punu širinu ekrana tj. lijevo sredina desno - (tipka sidebar + naslov + prazan div) */}
                <div></div>
            </div>
            }
        </>
    );
}

export default Header;
