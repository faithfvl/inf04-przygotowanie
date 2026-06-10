# Testy jednostkowe – przykład

Test jednostkowy sprawdza, czy pojedynczy fragment kodu (np. metoda) działa poprawnie.

## Testowana metoda
```csharp
public int Dodaj(int a, int b)
{
    return a + b;
}
```

## Test (xUnit / C#)
```csharp
[Fact]
public void Dodaj_DwieLiczby_ZwracaSume()
{
    // Arrange
    var kalkulator = new Kalkulator();

    // Act
    int wynik = kalkulator.Dodaj(2, 3);

    // Assert
    Assert.Equal(5, wynik);
}
```

## Schemat AAA
Każdy test warto pisać według schematu **Arrange – Act – Assert**:
1. **Arrange** – przygotuj dane i obiekty
2. **Act** – wykonaj testowaną operację
3. **Assert** – sprawdź, czy wynik jest zgodny z oczekiwaniem
