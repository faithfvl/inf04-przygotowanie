function Sekcja({ numer, tytul, opis, children }) {
  return (
    <section className="sekcja">
      <div className="sekcja-rail">
        <span className="sekcja-numer">{numer}</span>
      </div>
      <div className="sekcja-body">
        <header className="sekcja-naglowek">
          <h2>{tytul}</h2>
          {opis && <p className="sekcja-opis">{opis}</p>}
        </header>
        <div className="sekcja-demo">{children}</div>
      </div>
    </section>
  )
}

export default Sekcja
