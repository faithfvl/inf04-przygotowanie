import { useState } from "react"


function Formularz(){
    const [imie, setImie] = useState("")
    return(
        <>
        <input type="text" value={imie} onChange={(e) => setImie(e.target.value)} />
        <p>Cześć, {imie}!</p>
        <p>Twoje imie ma {imie.length} znaków</p>
        </>

    )
}

export default Formularz