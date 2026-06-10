import './App.css'
import Sekcja from './Sekcja'
import { Nowosc, Promocja } from './etykiety'
import Wizytowka from './Wizytowka'
import Produkt from './Produkt'
import Punkty from './ProfilGracza'
import Zakladki from './Zakladki'
import Studenci from './Studenci'
import Formularz from './Formularz'
import Kalkulator from './Kalkulator'

function App() {
  return (
    <div className="strona">
      <header className="hero">
        <p className="hero-eyebrow">React · INF.04</p>
        <h1>Ćwiczenia z Reacta</h1>
        <p className="hero-podtytul">
          Zbiór moich ćwiczeń z podstaw React — komponenty, props, stan, listy i formularze.
        </p>
        <div className="hero-meta">
          <span>Autor: Dawid</span>
          <span>8 ćwiczeń</span>
          <span>React + Vite</span>
        </div>
      </header>

      <main className="lista-cwiczen">
        <Sekcja numer="01" tytul="Wizytówka" opis="komponent i podstawy JSX">
          <Wizytowka />
        </Sekcja>

        <Sekcja numer="02" tytul="Etykiety" opis="kilka komponentów z jednego pliku">
          <div className="rzad-etykiet">
            <Nowosc />
            <Promocja />
          </div>
        </Sekcja>

        <Sekcja numer="03" tytul="Produkty" opis="props i renderowanie warunkowe">
          <div className="siatka">
            <Produkt nazwa="Telefon" cena={4000} dostepny={true} />
            <Produkt nazwa="Laptop" cena={2000} dostepny={false} />
            <Produkt nazwa="Tablet" cena={1000} dostepny={true} />
          </div>
        </Sekcja>

        <Sekcja numer="04" tytul="Profil gracza" opis="useState — liczba, boolean, obiekt">
          <Punkty />
        </Sekcja>

        <Sekcja numer="05" tytul="Zakładki" opis="przełączanie widoku stanem">
          <Zakladki />
        </Sekcja>

        <Sekcja numer="06" tytul="Lista studentów" opis="map, filter i klucze">
          <Studenci />
        </Sekcja>

        <Sekcja numer="07" tytul="Formularz" opis="kontrolowane pole tekstowe">
          <Formularz />
        </Sekcja>

        <Sekcja numer="08" tytul="Kalkulator napiwków" opis="formularz, obliczenia i walidacja">
          <Kalkulator />
        </Sekcja>
      </main>

      <footer className="stopka">
        <p>Ćwiczenia React — przygotowanie do egzaminu INF.04</p>
      </footer>
    </div>
  )
}

export default App
