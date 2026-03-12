import '../style/style.css'
import { useEffect, useState } from 'react';

const CarteUtilisateur = () => {

    const [user, setUser] = useState({ Nom: "Johnny", Age: "28", Mail: "Sins@gmail.com" })
    const [isModified, setIsModified] = useState(false)
    const [userModified, setUserModified] = useState({})

    const handleChange = (e) => {


        let newUser = { ...user }

        newUser.Nom = e.target.name === "Nom" ? e.target.value : newUser.Nom
        newUser.Age = e.target.name === "Age" ? e.target.value : newUser.Age
        newUser.Mail = e.target.name === "Mail" ? e.target.value : newUser.Mail

        setUser(newUser)

    }

    {
        if (isModified == false) {
            return <>

                <div class="card" >

                    <li>Nom: {user.Nom}</li>
                    <li>Age: {user.Age}</li>
                    <li>Mail: {user.Mail}</li>
                    <button onClick={() => { setIsModified(true), setUserModified(user) }}>Modifier</button>
                </div>
            </>
        } else if (isModified == true) {
            return <>
                <div class="card" >

                    <input name="Nom" placeholder='Nom' type="text" value={user.Nom} onChange={handleChange} />
                    <input name="Age" placeholder='Age' type="number" value={user.Age} onChange={handleChange} />
                    <input name="Mail" placeholder='Mail' type="mail" value={user.Mail} onChange={handleChange} />
                    <button onClick={() => { setIsModified(false) }}>Sauvegarder</button>
                    <button onClick={() => { setIsModified(false), setUser(userModified) }}>Annuler</button>

                </div>
            </>
        }
    }
}
export default CarteUtilisateur;