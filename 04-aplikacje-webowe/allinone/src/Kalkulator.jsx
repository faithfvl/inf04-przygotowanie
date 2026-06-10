import { useState } from "react"

function Kalkulator() {
  const [kwota, setKwota] = useState("")
  const [napiwek, setNapiwek] = useState("")
  const [osoby, setOsoby] = useState("")
  const [wynik, setWynik] = useState(null)

  function policz(e) {
    e.preventDefault()
    const baza = Number(kwota)
    const suma = baza + (baza * Number(napiwek)) / 100
    const liczbaOsob = Number(osoby)
    setWynik({
      suma,
      naOsobe: liczbaOsob > 0 ? suma / liczbaOsob : null,
    })
  }

  return (
    <form className="formularz" onSubmit={policz}>
      <div className="pole">
        <label>Kwota rachunku (zł)</label>
        <input type="number" value={kwota} onChange={(e) => setKwota(e.target.value)} placeholder="0" />
      </div>
      <div className="pole">
        <label>Napiwek (%)</label>
        <input type="number" value={napiwek} onChange={(e) => setNapiwek(e.target.value)} placeholder="0" />
      </div>
      <div className="pole">
        <label>Liczba osób</label>
        <input type="number" value={osoby} onChange={(e) => setOsoby(e.target.value)} placeholder="1" />
      </div>
      <button className="btn" type="submit">Policz</button>

      {wynik && (
        <div className="wynik">
          <p>Razem z napiwkiem: <strong>{wynik.suma.toFixed(2)} zł</strong></p>
          <p>
            Na osobę:{" "}
            <strong>{wynik.naOsobe !== null ? `${wynik.naOsobe.toFixed(2)} zł` : "— podaj liczbę osób"}</strong>
          </p>
        </div>
      )}
    </form>
  )
}

export default Kalkulator
