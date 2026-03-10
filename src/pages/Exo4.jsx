import '../style/style.css'
import { useEffect, useState } from 'react';

const Exo4 = () => {

    const citations = ["“Que la force soit avec toi.” -Obi-Wan Kenobi", "“Je suis ton père.” – Dark Vador",
        "« Au secours Obi-Wan Kenobi. Vous êtes mon seul espoir. » – Princesse Leia", "« Fais-le ou ne le fais pas, il n’y a pas d’essai. » – Yoda",
        "« Telle est la voie. » – Din Djarin", " « Ce ne sont pas les droïdes que vous recherchez. » – Obi-Wan Kenobi",
        "« Ne sous-estime jamais le pouvoir du côté obscur. » – Dark Vador",
        "« Utilise la force, Luke. » -Obi-Wan Kenobi",
        "« Les Sith sont les porteurs de la paix. » – Anakin Skywalker",
        "« Je suis un Jedi, comme mon père avant moi. » – Luke Skywalker", "« L’empathie est le chemin vers la paix. » – Padmé Amidala",
        "« La rébellion est le début de la liberté. » – Bail Organa",
        "« Il y a toujours une chance. » – Qui-Gon Jinn",
        "« Fais ce que tu dois faire. » – Anakin Skywalker",
        "« Soyez courageux et ne regardez pas en arrière. N’abandonnez pas.» – Rey Skywalker", "« Seul un Sith pense en termes absolus. » -Obi-Wan Kenobi",
        "« La peur est le chemin vers le côté obscur. » – Yoda",
        "« À quoi bon avoir peur ? » – Padmé Amidala",
        "« La peur mène à la colère, la colère mène à la haine, la haine mène à la souffrance. » – Yoda",
        "« Les Jedi ne recherchent pas l’aventure, ni l’excitation. » – Qui-Gon Jinn", "« Il n’y a rien de plus dangereux qu’un Jedi. » – Comte Dooku",
        "« La force est ce qui nous donne la vie. Elle nous entoure et nous pénètre. C’est l’énergie. » – Qui-Gon Jinn",
        "« Il y a toujours un maître et un apprenti. » – Dark Bane",
        "« La foi en vos amis peut vous sortir des ténèbres. » – Luke Skywalker",
        "« Faites ce que vous devez faire, pas ce que vous aimeriez faire. » -Obi-Wan Kenobi", "« L’échec est le meilleur professeur. » – Yoda",
        "« La guerre ne fait pas tout. La paix et la liberté sont également importantes. » – Padmé Amidala",
        "« Rien n’est impossible à la Force. » – Mace Windu",
        "« Il y a toujours un plus gros poisson. » – Qui-Gon Jinn",
        "« Nous ne sommes pas seulement nos peurs. » – Rey Skywalker"]

    const [random, setRandom] = useState("")

    return <>

        <button onClick={() => { setRandom(citations[Math.floor(Math.random() * citations.length)]) }}>Générer une citation</button>
        <h3 style={{ cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(random), alert("Citation copiée") }}>{random}</h3>

        {random != "" &&
            <button onClick={() => { alert("Vous avez liké cette citation") }}
            >J'aime</button>
        }
    </>



}
export default Exo4;