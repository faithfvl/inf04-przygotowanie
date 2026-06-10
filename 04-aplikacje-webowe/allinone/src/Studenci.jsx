import { useState } from "react"

function Studenci(){
    const uczniowie = [
        {id: 1, imie: "Jan", ocena: 5},
        {id: 2, imie: "Piotr", ocena: 3},
        {id: 3, imie: "Magda", ocena: 6},
        {id: 4, imie: "Adam", ocena: 2}
    ]

    const [zdani, setZdani] = useState(false)
    const widoczni = zdani ? uczniowie.filter(u => u.ocena >= 3) : uczniowie

    return(
        <>
        <h2>Uczniowie</h2>
        <ul>
            {widoczni.map((u) => <li key={u.id}>{u.imie}, {u.ocena}</li>)}
        </ul>
            <button onClick={() => setZdani(!zdani)}>{zdani ? "Pokaż wszystkich uczniów" : "Pokaż tylko zdających"}</button>
            <h3>Zdało {uczniowie.filter(u => u.ocena >= 3).length} uczniów</h3>
            </>
    )
}

export default Studenci
