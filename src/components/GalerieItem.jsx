const GalerieItem = ({title,url,isSelected,onSelect}) => {


    return <>
    
    <h3>{title}</h3>
    <img src={url}  onClick={onSelect}
    style={{border: isSelected && "3px solid red"}}></img>

    </>
}
 
export default GalerieItem;