import '../style/style.css'
import { useEffect, useState } from 'react';
const ContactFormCorrect = () => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [nameError, setNameError] = useState("")
    const [mailError, setMailError] = useState("")
    const [messageError, setMessageError] = useState("")
    const [successSubmit, setSuccessSubmit] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == "") {
            setNameError("Le champ Name doit être renseigné");
        } else {
            setNameError("")
        }

        if (!mail.includes("@")) {
            setMailError("L'email doit contenir un @");

        } else {
            setMailError("")
        }

        if (message.length < 10) {
            setMessageError("Le message doit faire plus de 10 caractères")
        } else {
            setMessageError("")
        }


        if (name != "" && mail.includes("@") && message.length >= 10) {
            setSuccessSubmit("Message envoyé !")
            setMail("")
            setName("")
            setMessage("")

        } else {
            setSuccessSubmit("")
        }



    }




    return <>
        <form onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "400px",
                margin: "40px auto",
                padding: "20px",
                backgroundColor: "#111",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(255,255,255,0.05)"
            }}>

            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #333",
                    backgroundColor: "#000",
                    color: "white",
                    outline: "none"
                }}
            />
            <span style={{ backgroundColor: "red", color: "white", width: "100%", textAlign: "center" }}>{nameError}</span>

            <input
                type="text"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #333",
                    backgroundColor: "#000",
                    color: "white",
                    outline: "none"
                }}
            />
            <span style={{ backgroundColor: "red", color: "white", width: "100%", textAlign: "center" }}>{mailError}</span>



            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #333",
                    backgroundColor: "#000",
                    color: "white",
                    minHeight: "120px",
                    resize: "none",
                    outline: "none"

                }}
                cols={50}
                rows={10}

            />
            <span style={{ backgroundColor: "red", color: "white", width: "100%", textAlign: "center" }}>{messageError}</span>

            <input
                type="submit"
                value="Envoyer"
                style={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "0.2s"
                }}
            />
            <span style={{ backgroundColor: "green", color: "white", width: "100%", textAlign: "center" }}>{successSubmit}</span>

        </form>
    </>
}

export default ContactFormCorrect