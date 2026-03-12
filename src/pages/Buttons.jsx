import ButtonComponent from "../components/ButtonComponents";
import '../style/style.css'

const Buttons = () => {
    return <>
        <ButtonComponent title={"toto"} onclick={() => {console.log("Je suis Toto!")}} />
        <ButtonComponent title={"tata"} onclick={() => {console.log("Je suis Tata !")}} />
        <ButtonComponent title={"Bernard"} styles={{fontSize:"1.5rem"}}/>
        <ButtonComponent title={"Gerard"} styles={{backgroundColor:"red"}}/>

    </>
}

export default Buttons;