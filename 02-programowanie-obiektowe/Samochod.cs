// Przykładowa klasa demonstrująca podstawy programowania obiektowego (OOP)
using System;

namespace PrzykladyOOP
{
    // Klasa bazowa
    public class Pojazd
    {
        // Pola (hermetyzacja - prywatne)
        private string marka;
        private int predkosc;

        // Właściwość (property)
        public string Marka
        {
            get { return marka; }
            set { marka = value; }
        }

        // Konstruktor
        public Pojazd(string marka)
        {
            this.marka = marka;
            this.predkosc = 0;
        }

        // Metoda
        public void Przyspiesz(int o)
        {
            predkosc += o;
            Console.WriteLine($"{marka} jedzie {predkosc} km/h");
        }
    }

    // Klasa pochodna (dziedziczenie)
    public class Samochod : Pojazd
    {
        public int LiczbaDrzwi { get; set; }

        public Samochod(string marka, int liczbaDrzwi) : base(marka)
        {
            LiczbaDrzwi = liczbaDrzwi;
        }
    }

    class Program
    {
        static void Main()
        {
            Samochod auto = new Samochod("Toyota", 5);
            auto.Przyspiesz(50);
            Console.WriteLine($"Liczba drzwi: {auto.LiczbaDrzwi}");
        }
    }
}
