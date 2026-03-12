const ButtonComponent = ({title, styles, onclick}) => {



    return <>
    <button style={{backgroundColor:"darkorange",...styles }} onClick={onclick}>{title}</button>
    
    </>
}
 
export default ButtonComponent;