import '../style/style.css'
import { useEffect, useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [missAd, setMissAd] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [tooShort, setTooShort] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();

        if (name == "") {
            setNameError(true)
        } else if (mail == "") {
            setMailError(true)
        } else if (message == "") {
            setMessageError(true)
        } else if (message.length < 10) {
            setTooShort(true)
        } else if (!mail.includes("@")) {
            setMissAd(true)
        } else if (name.trim() != "" && mail != "" && message != "" && missAd == false && tooShort == false) {

            console.log("Formulaire envoyé");
            alert("Message Envoyé!")
            setMail("")
            setName("")
            setMessage("")



        }
    }

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setName(value)
    }
    const handleChangeMail = (e) => {
        const { name, value } = e.target;
        setMail(value)
    }
    const handleChangeMessage = (e) => {
        const { name, value } = e.target;
        setMessage(value)

    }







    return <>


        <form onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "320px",
                padding: "25px",
                borderRadius: "10px",
                backgroundColor: "#281919",
                boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                color: "white",
                fontFamily: "Arial, sans-serif"
            }}
        >


            <input
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    backgroundColor: "#000",
                    color: "white",
                    fontSize: "14px"
                }}
                type="text"
                name="name"
                placeholder="Votre nom"
                onChange={handleChangeName}
            />
            <p style={{ display: !nameError && "none" }}>Veuillez indiquer votre nom</p>
            <input
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    backgroundColor: "#000",
                    color: "white",
                    fontSize: "14px"
                }}
                type="text"
                name="mail"
                placeholder="Votre email"
                onChange={handleChangeMail}
            />
            <p style={{ display: !mailError && "none" }}>Veuillez indiquer votre mail</p>
            <p style={{ display: !missAd && "none" }}>Veuillez indiquer une adresse mail valide</p>
            <textarea
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    backgroundColor: "#000",
                    color: "white",
                    fontSize: "14px",
                    resize: "none"
                }}
                name="message"
                placeholder="Votre message"
                rows="5"
                onChange={handleChangeMessage}
            />
            <p style={{ display: !messageError && "none" }}>Veuillez entrer un message</p>
            <p style={{ display: !tooShort && "none" }}>Votre message doit faire au moins 10 caractères</p>
            <input
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#4da3ff",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
                type="submit"
                value="Envoyer"
            />
        </form>





    </>;
}

export default ContactForm;