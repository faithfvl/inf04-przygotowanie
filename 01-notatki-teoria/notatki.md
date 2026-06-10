# Podstawy języka – przykłady (C#)

## Zmienne i typy danych
```csharp
int wiek = 18;
double cena = 19.99;
string imie = "Anna";
bool czyZdany = true;
```

## Instrukcja warunkowa
```csharp
if (wiek >= 18)
    Console.WriteLine("Osoba pełnoletnia");
else
    Console.WriteLine("Osoba niepełnoletnia");
```

## Pętla
```csharp
for (int i = 1; i <= 5; i++)
    Console.WriteLine("Liczba: " + i);
```

## Tablica
```csharp
int[] liczby = { 4, 8, 15, 16, 23, 42 };
int suma = 0;
foreach (int l in liczby)
    suma += l;
Console.WriteLine("Suma: " + suma);
```

## Funkcja
```csharp
int Dodaj(int a, int b)
{
    return a + b;
}
```
