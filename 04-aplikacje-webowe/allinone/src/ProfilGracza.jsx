import { useState } from "react"

function Punkty(){
    const [stan, setStan] = useState(false)
    const [liczba, setLiczba] = useState(0)
    const [gracz, setGracz] = useState({nick: "Anon", poziom: 1})
    return(
        <>
        <h3>Aktualna liczba punktów: {liczba}</h3>
        <button onClick={() => setLiczba(liczba + 10)}>+10 punktów</button>

        {stan ? <h3 style={{color: "green"}}>Aktywny</h3> : <h3 style={{color: "red"}}>Nieaktywny</h3>}
        <button onClick={() => setStan(!stan)}>Zmień stan</button>

        <h3>Gracz: {gracz.nick}</h3>
        <p>Poziom: {gracz.poziom}</p>
        <button onClick={() => setGracz({...gracz ,poziom: gracz.poziom + 1})}>Awansuj</button>
        </>
    )
}

export default Punkty