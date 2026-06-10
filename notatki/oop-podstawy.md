# Programowanie obiektowe – podstawy

## Najważniejsze pojęcia
- **Klasa** – szablon, wzór obiektu
- **Obiekt** – konkretny egzemplarz klasy
- **Pole** – zmienna należąca do obiektu
- **Metoda** – funkcja należąca do obiektu

## Cztery filary OOP
1. **Hermetyzacja (enkapsulacja)** – ukrywanie pól, dostęp przez metody/właściwości
2. **Dziedziczenie** – klasa pochodna przejmuje cechy klasy bazowej
3. **Polimorfizm** – ta sama metoda działa różnie w różnych klasach
4. **Abstrakcja** – ukrywanie szczegółów, pokazywanie tylko tego, co istotne

## Przykład
```csharp
public class Zwierze
{
    public string Imie { get; set; }
    public virtual void DajGlos() => Console.WriteLine("...");
}

public class Pies : Zwierze
{
    public override void DajGlos() => Console.WriteLine("Hau!");
}
```
