function Produkt({nazwa, cena, dostepny}){
    return(
        <div className="karta">
        <h2>Nazwa: {nazwa}</h2>
        <p>Cena: {cena}</p>
        {dostepny ? <p style={{color: "green"}}>Dostępny</p> : <p style={{color: "red"}}>Niedostępny</p>}
        {cena > 1000 && <p className="drogi">Drogi</p>}
        </div>
    )
}

export default Produkt