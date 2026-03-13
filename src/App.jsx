import { useState } from 'react'
import './App.css'
// import Exo1 from './pages/Exo1';
// import Exo2 from './pages/Exo2';
// import Exo3 from './pages/Exo3';
// import Exo4 from './pages/Exo4';
// import Exo5 from './pages/Exo5';
// import CompteurAmeliore from './pages/CompteurAmeliore';
// import ToDo from './pages/ToDo';
//  import CarteUtilisateur from './pages/CarteUtilisateur';
//  import Galerie from './pages/Galerie';
// import Chronometre from './pages/Chronometre';
// import Buttons from './pages/Buttons';
// import ContactForm from './pages/ContactForm';
import ContactFormCorrect from './pages/ContactFormCorrect';








function App() {
  // variable, setVariable
  const [compteur, setCompteur] = useState(0);
  // compteur = 0
  // function setCompteur (newValue){
  // compteur = newValues;
  // }
  return (
    <>
      {/* <h1>Hello tout le monde !</h1> */}
      {/* if(compteur > 0){
      {compteur}
      }else{
      "Compteur is NULL";
    } */}
      {/* <p>{compteur > 0 ? compteur : "Compteur is NULL"}</p> */}
      {/* () => {} est une fonction fléchée */}
      {/* Equivalent de function(){} */}
      {/* <button onClick={()=>{setCompteur(compteur + 1)}}>Incrémenter</button> */}
      {/* <button onClick={()=>{setCompteur(compteur - 1)}}>Décrémenter</button> */}
      {/* <Calculatrice/>  */}
      {/* Equivaut à <Calculatrice></Calculatrice> */}
      {/* <Exo1/>  */}
      {/* <Exo2/> */}
      {/* <Exo3/> */}
      {/* <Exo4/> */}      
      {/* <Exo5/>       */}
      {/* <CompteurAmeliore/> */}
      {/* <ToDo/> */}
      {/* <CarteUtilisateur/> */}
      {/* <Galerie/> */}
      {/* <Buttons/> */}
      {/* <Chronometre/> */}
      {/* <ContactForm/> */}
      <ContactFormCorrect/>
    </>
  )
}

export default App
