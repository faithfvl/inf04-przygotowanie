import { useState } from "react"

function Zakladki(){
    const [aktywna, setAktywna] = useState("opis")
    return(

        <>
        <button onClick={() => setAktywna("opis")}>Opis</button>
        {aktywna === "opis" && <span>Tutaj będzie opis</span>}
        <button onClick={() => setAktywna("specyfikacja")}>Specyfikacja</button>
        {aktywna === "specyfikacja" && <span>Tutaj będzie specyfikacja</span>}
        <button onClick={() => setAktywna("opinie")}>Opinie</button>
        {aktywna === "opinie" && <span>Tutaj będą opinie</span>}
        </>
    )
}


export default Zakladki