const Header = (props) => {

    const isLoggedIn = !!props.username; // ispred dvostruki usklicnik - osigurava boolean tip podatka
    return (
        <>
            {isLoggedIn &&
                <div className="App-header">
                    <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
                    <h1>Vedranova aplikacija za brbljanje putem Interneta! - {props.username}</h1>
                    {/* prazan div ispod služi za flex pozicioniranje elemenata na headeru - 3 elementa na punu širinu ekrana tj. lijevo sredina desno - (tipka sidebar + naslov + prazan div) */}
                    <div></div>
                </div>
            }
            {!isLoggedIn && <div className="App-header">
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
