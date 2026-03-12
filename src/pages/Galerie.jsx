import '../style/style.css'
import { useEffect, useState } from 'react';
import GalerieItem from '../components/GalerieItem';

const Galerie = () => {

    const images = [{ id: 1, title: "Shepard", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhgX-3bd5dKxlaDMqzrntV0VE3g_aqIBUSw&s " },
    { id: 2, title: "Andromeda", url: "https://cdn2.steamgriddb.com/icon/a3ed5c9ef7dbd64b5f492b987b11c14e/32/256x256.png" },
    { id: 3, title: "N 7", url: "https://cdn.fastly.steamstatic.com/steamcommunity/public/images/apps/1328670/3557d163f4aa8f0ed88f8a26b03d7a2925595ba9.jpg " }
    ]

    const [idSelected, setIdSelected] = useState(0)
    const [selectTitle, setSelectTitle] = useState("Aucune image sélectionnée")

    const onSelect = (id, title) => {
        setIdSelected(id)
        setSelectTitle(title)

    }



    return <>
        <h1>{selectTitle}</h1>
        <div className="galerie-row">
            {images.map((element) => {
                return <GalerieItem key={element.id} onSelect={() => { onSelect(element.id, element.title) }} url={element.url} isSelected={idSelected == element.id} />

            })

            }

        </div>


    </>
}
export default Galerie;