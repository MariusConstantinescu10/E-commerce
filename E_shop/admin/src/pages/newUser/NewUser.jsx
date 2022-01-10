import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">Client nou</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="newUserItem">
                    <label>Nume complet</label>
                    <input type="text" placeholder="nume complet" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                </div>
                <div className="newUserItem">
                    <label>Parola</label>
                    <input type="password" placeholder="parola" />
                </div>
                <div className="newUserItem">
                    <label>Telefon</label>
                    <input type="text" placeholder="telefon" />
                </div>
                <div className="newUserItem">
                    <label>Adresa</label>
                    <input type="text" placeholder="adresa" />
                </div>
                <div className="newUserItem">
                    <label>Gen</label>
                    <div className="newUserGender">
                        <input type="radio" name="gen" id="masculin" value="masculin" />
                        <label for="masculin">Masculin</label>
                        <input type="radio" name="gen" id="feminin" value="feminin" />
                        <label for="feminin">Feminin</label>
                        <input type="radio" name="gen" id="prefer sa nu raspund" value="prefer sa nu raspund" />
                        <label for="prefer sa nu raspund">Prefer sa nu raspund</label>
                    </div>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
