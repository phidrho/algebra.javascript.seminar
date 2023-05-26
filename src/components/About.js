const About = () => {
    return (
        <>
            <section className="hero is-success">
                <div className="hero-body">
                    <p className="title is-spaced">
                        Završni rad na Algebrinom tečaju za Front-End developera
                    </p>
                    <p className="subtitle">
                        Pokrivene tehnologije: <strong>HTML, CSS, JavaScript, Git, Razvojno okruženje, ReactJS</strong>
                    </p>
                </div>
            </section>
            <br />
            <p>Aplikacija <strong>Čavrljaonica</strong> je izrađena pomoću skupa tzv. "Front-End" mrežnih tehnologija što znači da se izvodi gotovo u potpunosti na korisničkom računalu. Komunikacija sa poslužiteljem (Scaledrone servis) koristi se samo za potrebe slanja i primanja tekstualnog sadržaja poruka što minimalizira opterećenje servera te omogućava brzo izvođenje i ugodan rad čak i na sporoj vezi pristupa Internetu.</p>
            <br />
            <p>Naziv <strong>Čavrljaonica</strong> odabran je po tradicionalnom domišljatom hrvatskom nazivlju proizvoda (kao što je npr. voćni sok -&gt; <i>Voćko</i>, auto gume -&gt; <i>auto gumko</i>), a dolazi od riječi "čavrljati" što ima značenje, prema <a href="https://hjp.znanje.hr/index.php?show=search_by_id&id=f1thWxA%3D&keyword=%C4%8Davrljati">Hrvatskom jezičnom portalu</a>: <strong><em>ugodno neobvezno razgovarati, provoditi vrijeme u ležernu razgovoru</em></strong>.</p>
            <br />
            <p>Autor ove predivne, iznimno korisne i nadasve praktične aplikacije je polaznik Algebrinog tečaja Vedran Stojnović.</p>
            <br />
            <section className="hero is-warning">
                <div className="hero-body" >
                    <p className="title">
                        Upute za korištenje:
                    </p>
                </div>
            </section>
            <br />
            <section className="hero is-warning">
                <div className="hero-body" >
                    <p className="subtitle">
                        Početna stranica - prijava u aplikaciju
                    </p>
                </div>
            </section>
            <br />
            <div className="content is-normal">
                <p>Na početnoj stranici (pogledaj interaktivni okvir ispod) vidimo naslovnicu sa okvirom za prijavu u kojem možemo odabrati željeno korisničko ime za sebe. Nakon unosa željenog korisničkog imena u za to predviđen okvir potrebno je kliknuti na gumb "Prijava" za pokretanje aplikacije.</p>
                <div style={{ border: "3px solid", margin: "auto", width: "40%", minWidth: "700px" }} >
                    <embed className="" src="/algebra.javascript.seminar/login" style={{ width: "100%", height: "600px" }}></embed>
                </div>
                <div style={{ margin: "auto", width: "40%", minWidth: "700px" }}>
                <strong><em><small><figcaption>Hmm... mogu li se možda s ovim iznad ulogirati u aplikaciju unutar aplikacije, unutar aplikacije, unutar aplikacije...???</figcaption></small></em></strong>
                </div>
            </div>
            <section className="hero is-warning">
                <div className="hero-body" >
                    <p className="subtitle">
                        Podstranica za dopisivanje - <em>chat tj. čavrljanje</em>
                    </p>
                </div>
            </section>
            <br />
            <div className="content is-normal">
                <p>Na stranici za dopisivanje imamo tri ključna elementa/okvira (ulogiraj se na interaktivnom okviru iznad za vizualni prikaz):</p>
                <ul>
                    <li>Okvir za razgovor (glavni - središnji dio aplikacije) sa poljem za unos poruka pri dnu zaslona i tipkom pošalji.</li>
                    <li>Okvir za navigaciju (lijeva strana aplikacije) - prikazuje ikone za navigaciju na podstranice</li>
                    <li>Tipka za odjavu (u gornjem desnom uglu - na zaglavlju aplikacije) pritiskom na tipku korisnik se odjavljuje iz aplikacije i brišu se sve poruke</li>
                </ul>
            </div>
            <section className="hero is-warning">
                <div className="hero-body" >
                    <p className="subtitle">
                        Podstranica "O aplikaciji"
                    </p>
                </div>
            </section>
            <br />
            <div className="content is-normal">
                <p>Upravo se nalazite na ovoj podstranici. Ovdje možete pročitati o aplikaciji, načinu korištenja i autoru.</p>
            </div>
            <section className="hero is-info">
                <div className="hero-body">
                    <p className="title">
                        Ukratko o korištenim tehnologijama
                    </p>
                </div>
            </section>
            <br />
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary">
                                <p className="title">HTML</p>
                                <p className="subtitle">Pojačano-teksnim označivačkim jezikom (<em>engl. Hyper-Text Markup Language</em>) je definiran sadržaj te je tematski strukturiran i semantički opisan pomoću<br/><em>&lt;HTML&gt;</em>tagova<em>&lt;/HTML&gt;</em>.</p>
                            </article>
                            <article className="tile is-child notification is-warning">
                                <p className="title">CSS</p>
                                <p className="subtitle">CSS-om je definiran vizualni izgled mrežne stranice do najsitnijeg detalja! Za pomoć je korištena <strong>Bulma CSS biblioteka</strong> kaskadnih stilskih predložaka.</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">

                            <p className="title">JavaScript</p>
                            <p className="subtitle">Programski jezik "Boli glava"...</p>
                            <div className="content">
                                <p>Ovaj nadasve nezgodan programski jezik smo koristili za stvaranje funkcionalne funkcije koja poziva bezimenu funkciju koja će nam vratiti funkciju koja poziva bezimenu funkciju.</p><p>Sve to smo isprogramirali korištenjem EcmaScript6 standarda u <em>Arrow</em> stilu.</p>
                                <strong><pre>&gt; console.log(<br/>    ('b' + 'a' + + 'a' + 'a')<br/>    .toLowerCase();<br />  );<br />&lt; 'banana'</pre></strong>
                            </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                        <p className="title">Git</p>
                                <p className="subtitle">Predivan softver za praćenje i upravljanje verzijama tekstualnih dokumenata, kreiran od autora, gospodina čovjeka: <a href="https://en.wikipedia.org/wiki/Linus_Torvalds">Linusa T.!</a></p><code>git status</code><br/><code>git commit -m <strong>"ispravljen bug, nastala nova dva!"</strong></code><br /> <code>git push</code>
                                <figure className="image is-5by3">
                                    <img src="//git-scm.com/images/logos/downloads/Git-Logo-White.svg" alt="Git logotip"/>
                                </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                        <div className="content">
                            <p className="title">ReactJS</p>
                            <p className="subtitle">Reaktivna biblioteka za izradu jednostraničnih (<em>engl. singlepage</em>) mrežnih aplikacija</p>
                            <div className="content">
                                Sučelje ove, a tako i svake druge mrežne stranice izrađene pomoću ReactJS-a ima tzv. <strong>reaktivnu arhitekturu</strong>, a koja se sastoji od sljedećih elemenata:
                                <ul>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>komponente</li>
                                    <li>...</li>
                                    <li>komponente</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <p style={{color: "rgb(245, 245, 245)"}}>Čestitam! Pronašli ste skriveno Uskršnje jaje!</p>
        </>
    );
}

export default About;
