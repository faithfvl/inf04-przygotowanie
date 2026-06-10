# INF.04 — Notatki do egzaminu teoretycznego

> Opracowane na podstawie bazy 630 pytań. Skupiają się na **faktach, które wracają w kółko** w różnych sformułowaniach. Jeśli zapamiętasz to, co tu jest, masz pokryte zdecydowaną większość pytań tekstowych.

---

## Jak czytać te notatki

Gwiazdki = jak często temat pojawia się w bazie:
- ⭐⭐⭐ = ogromna liczba pytań, ucz się tego najpierw
- ⭐⭐ = sporo pytań
- ⭐ = pojedyncze, ale łatwe punkty do zgarnięcia

Strategia na kilka godzin: leć od góry do dołu. Sekcje ⭐⭐⭐ i ⭐⭐ to ~75% egzaminu.

---

## MAPA TEMATÓW (od najważniejszego)

1. Programowanie obiektowe ⭐⭐⭐ (zdecydowanie najwięcej pytań)
2. Podstawy programowania + typy danych ⭐⭐⭐
3. Algorytmy i złożoność obliczeniowa ⭐⭐⭐
4. Frameworki / aplikacje web ⭐⭐⭐
5. Testowanie ⭐⭐
6. Zarządzanie projektami ⭐⭐
7. BHP i pierwsza pomoc ⭐⭐
8. Struktury danych ⭐⭐
9. Systemy liczbowe (liczalne!) ⭐⭐
10. Bezpieczeństwo ⭐⭐
11. Narzędzia: kompilator/interpreter/IDE/Git ⭐⭐
12. Aplikacje mobilne ⭐⭐
13. Aplikacje desktopowe ⭐⭐
14. Wyjątki ⭐
15. Wzorce projektowe ⭐
16. Prawo i licencje ⭐
17. Sprzęt, sieci, systemy informatyczne ⭐
18. Komunikacja / kompetencje miękkie ⭐
19. WCAG, normy ⭐

---

## 1. PROGRAMOWANIE OBIEKTOWE ⭐⭐⭐

**To jest serce egzaminu.** Pytania o filary OOP wracają dziesiątki razy w różnych słowach.

### Cztery filary
- **Hermetyzacja (enkapsulacja)** = ukrywanie szczegółów implementacji / ukrywanie składowych klasy tak, by były dostępne tylko metodom tej klasy lub funkcjom zaprzyjaźnionym. Realizowana przez **modyfikatory dostępu**.
- **Dziedziczenie** = klasa pochodna przejmuje pola i metody klasy bazowej. Stosowane, gdy potrzebna jest klasa bardziej specjalistyczna niż już istniejąca.
- **Polimorfizm** = jedna metoda działa różnie zależnie od klasy. W C++ realizowany przez **funkcje wirtualne (virtual)** — przy wywołaniu metody zwalnia programistę z obowiązku sprawdzania, którą klasę pochodną obsługuje.
- **Abstrakcja**.

### Podstawowe pojęcia (UCZ SIĘ NA PAMIĘĆ)
- **Klasa** = **typ danych** (NIE zmienna, NIE instrukcja, NIE wskaźnik!)
- **Obiekt** = **instancja klasy**
- **Pole** = „zmienna klasy", przechowuje dane opisujące **stan obiektu**
- **Metoda** = „funkcja klasy"
- Odpowiedniki programowania strukturalnego w obiektowym: zmienne→**pola**, funkcje→**metody**
- Program obiektowy jest sterowany przez **zbiór instancji klas współpracujących ze sobą**

### Konstruktory i destruktory
- **Konstruktor** = ma **tę samą nazwę co klasa**, **nie zwraca wartości**, **inicjalizuje obiekt** przy tworzeniu
- **Destruktor** = **usuwa obiekt i zwalnia zasoby** (tu wpisujesz np. `cout << "Obiekt usunięty"`)
- **Konstruktor kopiujący** = tworzy nowy obiekt jako **dokładną kopię** innego; wywoływany automatycznie przy kopiowaniu obiektu

### Modyfikatory dostępu (PEWNIAK)
- **public** = dostęp z **dowolnego miejsca** w programie (przez `obiekt.pole`)
- **private** = dostęp **tylko z metod tej klasy**
- **protected** = dostęp z tej klasy **oraz klas pochodnych** (dziedziczących), ale NIE z funkcji zewnętrznej
- **static** = składnik należy do **klasy**, nie do obiektu

### Składnik statyczny
- Wspólny dla **wszystkich obiektów** klasy (np. licznik instancji)
- Można zainicjować **przed utworzeniem obiektu**
- Deklaracja: poprzedzić słowem `static`

### Klasy abstrakcyjne i metody wirtualne
- **Klasa abstrakcyjna** = podstawa dla innych klas, **NIE można utworzyć jej instancji** (to zabronione działanie). Może zawierać metody zdefiniowane i czysto wirtualne.
- **Metoda wirtualna** = może być **przesłonięta** w klasie pochodnej; umożliwia **dynamiczne wiązanie** w czasie wykonania
- **Metoda abstrakcyjna** = **nie jest zaimplementowana w klasie bazowej** (implementuje się ją w pochodnych)
- Słowo `virtual` w C++/C# stosuje się **do metod klasy** (nie do pól, nie do konstruktorów)
- Modyfikator `abstract` przy metodzie = w klasie pochodnej **trzeba ją zaimplementować**

### Klasy / funkcje zaprzyjaźnione
- **Funkcja zaprzyjaźniona** = zdefiniowana **poza klasą**, ale ma **dostęp do prywatnych i chronionych** składowych
- **Klasa zaprzyjaźniona** = ma dostęp do prywatnych i chronionych składowych innej klasy

### Pozostałe
- **Interfejs** ≈ jest podobny do **klasy abstrakcyjnej**
- **Przesłanianie (przeciążanie) metody** = ta sama nazwa w klasie bazowej i pochodnej, ale **inna implementacja** w pochodnej
- **Wstrzykiwanie zależności (Dependency Injection)** = przekazywanie zależności do klasy **przez konstruktor**
- Dziedziczenie w **C#/Java/Python = z 1 klasy** (pojedyncze). C++ pozwala na wielokrotne.
- **Getter** = pobiera pole, **setter** = ustawia prywatne pole
- **Refleksja** = mechanizm pozwalający programowi czytać informacje o samym sobie
- Klasa pochodna **dziedziczy pola i metody** klasy bazowej; w klasie bazowej umieszczamy pola **wspólne dla wszystkich** pochodnych

---

## 2. PODSTAWY PROGRAMOWANIA + TYPY DANYCH ⭐⭐⭐

### Typy danych — podział
- **Proste**: int, char, bool, float, double
- **Złożone (rekordowe)**: **class, struct, union** (zapamiętaj tę trójkę!), tablica (array)
- **array** to typ **złożony**

### Konkretne typy
- **bool** = wartości logiczne **true / false** (NIC innego — to wraca 3 razy)
- **char** = pojedynczy **znak**; **string** = **ciąg znaków**
- Typy całkowite (**stałoprzecinkowe**): **int, short, long**
- Typy rzeczywiste (**zmiennoprzecinkowe**): **float, double**
- **Stałoprzecinkowe** = liczby całkowite; **zmiennoprzecinkowe** = z częściami dziesiętnymi
- **decimal** (C#) = precyzyjne przechowywanie liczb ułamkowych
- **DECIMAL** (SQL/MySQL, definiuje się cyfry przed i po przecinku) = zapis **stałoprzecinkowy**
- **unsigned char** (C++) = zakres **0–255**
- **union** (C) = przechowuje **jedną wartość** naraz; **struct** = wiele jednocześnie
- **Tablica asocjacyjna** = pary **klucz–wartość** (w Pythonie słownik / `dict`)
- **Tablica postrzępiona** (C#) = dwuwymiarowa, gdzie każda podtablica ma **inny rozmiar**
- Deklaracja `int matrix[3][3]` = tablica dwuwymiarowa
- Tablica jednowymiarowa = wiele wartości pod **różnymi indeksami**

### Deklaracja zmiennej
- = **określenie typu i nazwy** zmiennej w kodzie
- `int liczba;` = poprawna deklaracja całkowitej w C++
- `string name = "Jan";` = poprawna deklaracja łańcuchowej w C++

### Operatory
- `=` przypisanie, `==` **porównanie** (równość)
- `!` negacja logiczna → **`!5` w C++ = 0** (bo 5 to prawda, negacja prawdy = fałsz = 0)
- `&` = adres zmiennej (C++) / bitowe AND
- `*` = wskaźnik / mnożenie
- `|` = **bitowe LUB** (OR)
- `&&` logiczne AND, `||` logiczne OR
- Python: `in` = sprawdzanie **przynależności** elementu do listy

### Warunki logiczne (często są pytania-pułapki)
- Liczba dwucyfrowa dodatnia podzielna przez 4: **`(x > 9 && x < 100) && (x % 4 == 0)`**
- Reszta z dzielenia = operator **`%`** (modulo)
- Uwaga na `&&` vs `||` i na `%` vs `/` w odpowiedziach — to typowy trick

### Wskaźniki i pamięć (C/C++)
- **Wskaźnik** = zmienna przechowująca **adres pamięci**
- Dynamiczna alokacja: **`new` / `delete[]`** (C++), **`malloc` / `free`** (C)
- Przekazanie **przez referencję** (`&`) vs **przez wartość** — jeśli funkcja nie zmienia wartości na zewnątrz, prawdopodobnie argument przekazano **przez wartość**

### Pliki
- Nagłówek do pracy z plikami w C++: **`<fstream>`**
- Podstawowe operacje na plikach: **otwieranie, zapisywanie, odczytywanie, zamykanie**

### Komentarze (różne języki)
- Python: jednoliniowy **`#`**
- Java/C++: jednoliniowy `//`, wieloliniowy **`/* ... */`**

### Pozostałe
- **Operacja wejścia** = przekazywanie danych do programu z zewnętrznego źródła
- Dzielenie programu na funkcje (metody) ułatwia **debugowanie i ponowne użycie** kodu
- Paradygmat kładący nacisk na dziedziczenie i polimorfizm = **obiektowy**
- Plik źródłowy C# = **`.cs`**
- Typ wyliczeniowy **enum**, klasa, struktura = sposoby definiowania własnych typów w C++

---

## 3. ALGORYTMY I ZŁOŻONOŚĆ ⭐⭐⭐

### Sortowania (PEWNIAKI)
| Algorytm | Złożoność średnia | Cechy |
|---|---|---|
| Bąbelkowe | **O(n²)** | dwie pętle; **optymalne dla tablicy już posortowanej rosnąco** |
| Przez wybór / wstawianie | O(n²) | proste |
| **Szybkie (QuickSort)** | **O(n log n)** | metoda **dziel i zwyciężaj**; złożoność **zależy od wyboru elementu rozdzielającego (pivota)**; **niestabilny** |
| Przez scalanie (merge) | O(n log n) | dziel i zwyciężaj |

- **Niestabilny algorytm sortowania = sortowanie szybkie (QuickSort)**
- Sortowanie bąbelkowe potrzebuje **dwóch pętli** (zagnieżdżonych)
- Dla dużych zbiorów (>100 elem.) najszybsze: **merge / quicksort** (O(n log n))

### Wyszukiwanie
- **Wyszukiwanie binarne** = wymaga tablicy **posortowanej**, złożoność **O(log n)**, da się iteracyjnie i rekurencyjnie
- **Jump search** = tablica posortowana, podział na **bloki** i wyszukiwanie liniowe w jednym bloku
- Wyszukiwanie **z wartownikiem** = wstawić wartownika **na końcu** przeszukiwanego zbioru

### Złożoność obliczeniowa
- **O(1)** = stała
- **O(n)** = liniowa
- **O(log n)** = logarytmiczna
- **O(n²)** = kwadratowa (np. bąbelkowe)
- Mniejsza złożoność = szybszy algorytm; przy wyborze najszybszego patrz na najniższy rząd

### Rekurencja
- = funkcja **wywołuje samą siebie**
- Wymaga **warunku stopu** (inaczej nieskończona rekurencja)
- Klasyczne przykłady: **liczby Fibonacciego**, QuickSort
- Bardziej efektywna niż iteracja, gdy problem **naturalnie dzieli się na mniejsze podproblemy**

### Strategie / typy
- **Dziel i zwyciężaj** = podział na mniejsze podproblemy aż staną się trywialne (quicksort, merge, wyszukiwanie binarne)
- **Heurystyczne** = problemy przybliżone, których nie da się opisać dokładnie (**pogoda, rozpoznawanie wirusów**)
- **Algorytm Euklidesa** = wyznaczanie **NWD (Największy Wspólny Dzielnik)**
- **Algorytm Dijkstry** = **najkrótsza droga w grafie**
- **BFS** (wszerz) używa **kolejki**; **DFS** (w głąb) używa **stosu**

### Reprezentacja algorytmu
- Sposoby: **pseudokod, schemat blokowy, opis słowny** (każdy z nich)
- Schemat blokowy: blok **start/stop = elipsa**
- Pseudokod jest **zrozumiały dla osób nieznających programowania**

---

## 4. FRAMEWORKI I APLIKACJE WEB ⭐⭐⭐

### Język → framework (UCZ SIĘ NA PAMIĘĆ — wraca bardzo często)
| Framework | Język | Zastosowanie |
|---|---|---|
| **Django** | **Python** | back-end |
| **ASP.NET Core** | **C#** | back-end / web |
| **Angular** | **TypeScript** | front-end |
| **React.js** | JavaScript (komponenty) | front-end |
| **Node.js** | JavaScript | serwer, przetwarzanie **asynchroniczne** |
| **WPF** | C# | desktop (Windows) |
| **Qt** | C++ | desktop |
| **Xamarin / React Native** | C# / JS | mobile cross-platform |

- **Front-end**: Angular, React, Vue
- **Back-end**: Django, Node.js, ASP.NET Core
- Frameworki/biblioteki typowo webowe: **ASP.NET Core, Django, Angular, React.js, Node.js**
- IDE do Pythona z Django = **PyCharm**; do Javy web = **Eclipse**

### Różnica framework vs biblioteka
- **Framework** = **narzuca architekturę / dostarcza szkielet** aplikacji (platforma programistyczna z komponentami i metodyką)
- **Biblioteka** = zbiór funkcji, które programista wykorzystuje wedle uznania

### Web — pojęcia
- **REST API** wymienia dane w formacie **JSON**
- Metody HTTP: **GET** (pobieranie), **POST** (wysyłanie), **PUT** (**aktualizacja**), HEAD
- **Sesje** = stan użytkownika po stronie **serwera**
- **Ciasteczka (cookies)** = dane w **przeglądarce** użytkownika (preferencje: język, motyw; dane statystyczne); **NIE** przechowuj tam haseł
- **SPA** = **Single-Page Application**
- **ORM** = **Object Relational Mapping**
- **MVC** = **Model-View-Controller**
- **MVVM** = Model-View-ViewModel → **rozdziela interfejs użytkownika i logikę aplikacji**
  - widok w MVVM = obsługa interakcji użytkownika + tworzenie UI
- **Promises (obietnice)** w JS = obsługa kodu **asynchronicznego**
- **Po stronie back-end**: obsługa **bazy danych**, logika
- **Po stronie front-end**: walidacja formularzy w czasie rzeczywistym, obsługa zdarzeń kontrolek
- **Dane z serwera do front-endu**: format **JSON** / metoda POST / jQuery

### JavaScript / biblioteki
- **jQuery** ≈ odpowiednik **Lodash**; ułatwia **manipulację DOM** i obsługę zdarzeń
- `.toggleClass()` = **naprzemienne** dodawanie/usuwanie klasy
- **Bootstrap** = framework **CSS** (wygląd aplikacji)
- Import komponentu z Reacta: **`import { Component } from "react"`**
- Domyślne porty: **React = localhost:3000**, **Angular = localhost:4200**

### Narzędzia web
- **Postman** = testowanie **REST API**
- **Selenium** = automatyczne testowanie aplikacji **webowych**
- **Chrome DevTools** = debugowanie aplikacji webowych (błędy React/Angular śledzi się w **konsoli przeglądarki**)
- **e-commerce** = sklep internetowy (np. **PrestaShop**)

### WCAG 2.0 (dostępność stron)
- 4 zasady: **Percepcyjna, Operacyjna, Zrozumiała, Solidna** (POUR / POZS)
- **AAA** = **najwyższy** poziom dostępności
- **Percepcja** dotyczy m.in. **przedstawienia komponentów interfejsu** (alternatywy tekstowe dla obrazów)
- Dla niewidomych = **czytnik ekranu (screen reader)**

---

## 5. TESTOWANIE ⭐⭐

### Rodzaje testów (PEWNIAKI)
- **Jednostkowe** = pojedyncze moduły/funkcje; przeprowadzane **podczas tworzenia kodu**
- **Integracyjne** = błędy w **interfejsach między modułami / systemami**
- **Funkcjonalne** = zgodność działania z założeniami, **poprawność wyświetlanych elementów** (logowanie, przyciski, formularze)
- **Niefunkcjonalne** = **wydajność, bezpieczeństwo, użyteczność** (np. wydajność pod obciążeniem)
- **Wydajnościowe** = ang. **performance testing**
- **Obciążeniowe** = odporność na **duże obciążenie**
- **Użyteczności** = z perspektywy **użytkownika końcowego**
- **Interfejsu** = poprawność elementów graficznych i interakcji

### Metodyki i procesy
- **TDD (Test Driven Development)** = **testy pisze się PRZED kodem** testowanym
- Fazy testu jednostkowego (kolejność): **arrange → act → assert** (AAA)
- **Automatyzacja testów** = narzędzia/skrypty wykonujące testy **bez ingerencji człowieka**

### Narzędzia i dokumenty
- **Selenium** = web; **Postman** = API; **JIRA / Bugzilla** = śledzenie/raportowanie błędów
- **IEEE 829-1998**: dokument **Test Log** = które przypadki użyto, kto i czy się powiodły
- Scenariusz testowy zawiera: **kroki testowe, oczekiwane wyniki, warunki wstępne**
- **Testy Beta** (Google Play) = wykonywane przez **grupę docelowych użytkowników**

### Debugowanie
- **Debugowanie** = wyszukiwanie i usuwanie błędów
- **Debugger** = podgląd wartości zmiennych w danym momencie, analiza krok po kroku
- Po znalezieniu błędu: **poprawić i ponownie przetestować**

---

## 6. ZARZĄDZANIE PROJEKTAMI ⭐⭐

### Metodyki (UCZ SIĘ RÓŻNIC)
- **Agile (zwinna)** = dekompozycja na części projektowane i testowane w **krótkich cyklach**; **elastyczne reagowanie na zmiany**; iteracyjne przyrosty. Optymalna, gdy wymagania **nie są znane na początku / mogą się zmieniać**.
- **Scrum** = **product backlog**, sprinty
- **Kanban** = **wizualizacja pracy w toku**, transparentność, **minimalizacja marnotrawstwa**
- **Waterfall (kaskadowy)** = fazy **sekwencyjnie**, jedna po drugiej, **bez powrotu**; testowanie po ukończeniu fazy
- **Spiralny** = zawiera etap **analizy ryzyka**
- **Prototypowy** = niekompletna wersja systemu do **uzyskania opinii** użytkownika

### Dokumenty i narzędzia
- **Diagram Gantta** = **harmonogram zadań**, oś czasu, **planowanie i zarządzanie** projektem
- **Product backlog** = spis funkcjonalności wg **priorytetów** (Scrum)
- **Jira** = planowanie/monitorowanie/raportowanie + śledzenie błędów; **Trello** = tablice kanban; **Bugzilla** = śledzenie błędów
- Harmonogram projektu zawiera: **etapy, ramy czasowe, zasoby, zadania**

### Cykl życia projektu (KOLEJNOŚĆ)
**Analiza wymagań → projektowanie → implementacja → testowanie → wdrożenie**
- **Pierwszy etap tworzenia aplikacji = analiza wymagań klienta**
- **Analiza** = określenie wymagań użytkownika, opis wymagań funkcjonalnych i niefunkcjonalnych
- **Implementacja** = integracja i testowanie wszystkich modułów
- Architektura **modularna** ułatwia przyszłe modyfikacje
- Architektura **klient-serwer**: dane przetwarzane na **serwerze** (centralnie), klient wysyła żądania i odbiera odpowiedzi

---

## 7. BHP I PIERWSZA POMOC ⭐⭐

### Pierwsza pomoc (PEWNIAKI)
- **Resuscytacja krążeniowo-oddechowa = 30 uciśnięć : 2 oddechy** (wraca kilka razy)
- **Pozycja boczna bezpieczna** = poszkodowany **nieprzytomny, ale ODDYCHA**
- Numer alarmowy w Polsce = **112**
- **Pierwsza czynność** przy ocenie poszkodowanego = **zapewnić sobie bezpieczeństwo**
- Silny krwotok = **opatrunek uciskowy + unieść kończynę** powyżej poziomu serca
- Zawał serca = **ból w klatce promieniujący do lewej ręki**

### Zagrożenia i choroby
- Kategorie zagrożeń: **fizyczne, chemiczne, biologiczne, psychofizyczne**
- Czynnik **psychofizyczny** = **stres i monotonia**
- Czynnik **fizyczny** = np. **promieniowanie UV**, hałas
- Długotrwały hałas → **uszkodzenie słuchu i zmęczenie**
- **Zespół cieśni kanału nadgarstka** = ból/drętwienie **1–3 palca ręki** (od myszy/klawiatury)
- Inne: zespół suchego oka, dyskopatia, kifoza

### Ochrona i normy biurowe
- **Środki ochrony ZBIOROWEJ** (dla grupy): **ekran akustyczny, barierki, panele wygłuszające**
- **Środki ochrony INDYWIDUALNEJ** (NIE zbiorowej): **okulary ochronne, zatyczki do uszu, kask**; gaśnica NIE jest środkiem ochrony zbiorowej
- Minimalne oświetlenie stanowiska biurowego = **500 lx**
- Hałas w biurze nie może przekraczać **55 dB**
- Fotele/biurka **regulowane** chronią kręgosłup; **filtry przeciwodblaskowe** chronią wzrok

### Definicje prawne
- **Ryzyko zawodowe** = **prawdopodobieństwo wystąpienia niepożądanych zdarzeń** związanych z pracą, powodujących straty/skutki zdrowotne
- **Wypadek przy pracy** = nagłe zdarzenie związane z pracą, powodujące uraz lub śmierć (np. **uraz w drodze do pracy**)
- **Choroba zawodowa** = spowodowana warunkami pracy
- Ergonomia: krzesło, którego **oparcie zapewnia lordozę w odcinku lędźwiowym**

---

## 8. STRUKTURY DANYCH ⭐⭐

- **Stos** = **LIFO** (Last In First Out); dostęp tylko do **ostatnio dodanego** elementu → idealny do **cofania operacji (undo)** i **odwracania kolejności**
- **Kolejka** = **FIFO** (First In First Out); idealna do **bufora drukarki** (najstarsze zadanie wychodzi pierwsze)
- **Lista** = lepsza niż tablica, gdy liczba elementów **dynamicznie się zmienia**
- **Tablica** = lepsza, gdy potrzebny **dostęp przez indeks** / znamy rozmiar
- **Zbiór (Set)** = przechowuje **niepowtarzające się** elementy
- **Mapa / HashMap** = **szybki dostęp przez klucz** (para klucz-wartość)
- **Iterator** = służy do **przechodzenia przez elementy** kolekcji
- **ObservableCollection** (C#) = informuje UI o dodaniu/usunięciu/zmianie elementu
- Projektując strukturę danych, bierz pod uwagę **sposób alokacji pamięci** i złożoność przetwarzania

---

## 9. SYSTEMY LICZBOWE ⭐⭐ (TO SIĘ LICZY — ZGARNIJ PUNKTY!)

### Metody konwersji
**HEX → DEC**: każdą cyfrę pomnóż przez 16^pozycja (od prawej, od 0). A=10, B=11, C=12, D=13, E=14, F=15.
- `1AF` = 1×256 + 10×16 + 15 = **431**
- `255` (dec) = **FF** (hex)

**HEX → BIN**: każda cyfra hex = 4 bity.
- `A4` = A(1010) 4(0100) = **10100100**
- `A` = 1010, `4` = 0100, `F` = 1111, `1` = 0001

**BIN → DEC**:
- `1010` = 8+0+2+0 = **10**

**Dodawanie binarne** (jak dziesiętne, ale przeniesienie przy 2):
- `1011 + 110` = **10001**
- `1101 + 1001` = **10110**

**AND bitowe** (1 tylko gdy oba 1):
- `1010 AND 1100` = **1000**

**Kod uzupełnieniowy do dwóch (U2)** = reprezentacja liczb **ujemnych** w binarnym.
- `-5` na 8 bitach: 5 = 00000101 → neguj bity (11111010) → +1 = **11111011**

### RGB → HEX (kolory)
Każda składowa (0–255) → 2 cyfry hex.
- `RGB(152, 251, 152)` → 152=98, 251=FB → **98FB98**
- `#AA41FF` → AA=170, 41=65, FF=255 → **170, 65, 255**

### Jednostki
- **1 TB = 1024 GB**
- **1 MB = 1024 KB**
- (potęgi 1024, nie 1000)

### Narzędzia
- Do konwersji BIN/DEC/HEX = **kalkulator programisty / systemowy**

---

## 10. BEZPIECZEŃSTWO ⭐⭐

### Ataki
- **XSS** = wstrzykiwanie **własnego kodu do strony**
- **SQL Injection** = wstrzykiwanie kodu SQL
- **DDoS** = **zasypywanie serwera** dużą liczbą zapytań (przeciążenie)
- **Phishing** = fałszywe strony/wiadomości → **kradzież danych osobowych**
- **Man-in-the-Middle**

### Złośliwe oprogramowanie (malware)
- **Wirus, robak (worm), trojan** = klasyka
- **Keylogger / Spyware** = działa **w tle**, przechwytuje hasła/dane
- **Ransomware** = **blokuje dostęp do danych**, żąda **okupu**
- **Rootkit** = daje hakerowi **uprawnienia administracyjne bez wiedzy** ofiary
- **Adware** = wyświetla reklamy

### Szyfrowanie i skróty
- **Symetryczne** = **ten sam klucz** do szyfrowania i deszyfrowania (np. **AES, DES**)
- **Asymetryczne** = **różne klucze** (np. **RSA**)
- **Funkcja skrótu (hash)** = **nieodwracalna**, daje wartość o **stałym rozmiarze** (np. **MD5**). Wynik = „hash".
- **MD5** = jednokierunkowa funkcja haszująca

### Ochrona
- **Firewall** = zarządzanie ruchem sieciowym, **blokowanie nieautoryzowanego dostępu**
- **Program antywirusowy** = ochrona przed wirusami
- **SSL** = certyfikaty na stronach transakcyjnych
- Bezpieczeństwo: silne unikalne hasła, **2FA (uwierzytelnianie dwuskładnikowe)**, nie klikać podejrzanych linków
- Karta płatnicza online = **wirtualne karty / jednorazowe kody**

---

## 11. NARZĘDZIA: KOMPILATOR / INTERPRETER / IDE / GIT ⭐⭐

### Kompilator vs interpreter vs debugger (PEWNIAK)
- **Kompilator** = tłumaczy **cały kod źródłowy PRZED uruchomieniem** → tworzy **plik wykonywalny**; sprawdza błędy składniowe
- **Interpreter** = wykonuje skrypt **instrukcja po instrukcji** w czasie działania, na bieżąco
- **Debugger** = analiza błędów **w czasie wykonania**, podgląd zmiennych krok po kroku
- **C++ MUSI być skompilowany** do kodu maszynowego konkretnej architektury (Java/PHP/Perl — nie)

### Biblioteki
- **Statyczna** = **dołączana do pliku wykonywalnego podczas kompilacji**
- **Dynamiczna** = **ładowana podczas działania** programu
- **Biblioteka** = zestaw **funkcji i klas** do wykorzystania w programach

### IDE
- **IDE = Integrated Development Environment**; zawiera **kompilator, edytor kodu, debugger**
- Język → IDE: **C# → Visual Studio**; **Java → Eclipse / NetBeans / IntelliJ IDEA**; **Python → PyCharm**; **iOS → XCode**; **Android → Android Studio**
- **RAD (Rapid Application Development)** = **szybkie prototypowanie** dzięki **wizualnym narzędziom**, mało kodowania
- Środowisko natywne dla C# desktop / WPF = **MS Visual Studio**

### Git (system kontroli wersji)
- **git commit** = zapis zmian w **lokalnym** repozytorium
- **git push** = wysłanie zmian
- **git pull** = **pobranie zmian zdalnych + połączenie** z lokalnym
- **git clone** = utworzenie **lokalnej kopii** istniejącego repozytorium
- **git merge** = **łączenie** zmian z różnych gałęzi
- **git reset --soft** = cofnięte zmiany lądują na **stage**
- **.gitignore** = lista plików/katalogów **ignorowanych** przez git
- **Git** = system kontroli wersji (Trello/Jira/Bugzilla — NIE)

---

## 12. APLIKACJE MOBILNE ⭐⭐

### System → język → środowisko (UCZ SIĘ)
- **Android** = język **Java** (i Kotlin); środowisko **Android Studio**
- **iOS** = język **Swift** (i Objective-C); środowisko **XCode**
- **Cross-platform w C#** = **Xamarin** (alternatywa: React Native)
- W Android Studio można programować w **Javie** (NIE Swift/Objective-C)
- **Swift** = aplikacje na **iOS**; natywny system dla Swifta = **iOS**

### Pojęcia
- **XAML** = projektowanie graficznego interfejsu (C#)
- Jednostka układu UI = **dp**
- Zdarzenie **dotknięcia palcem** = **tapped**; zmiana wartości kontrolki = **ValueChanged**
- **Activity** (Android) = klasa do interakcji z użytkownikiem
- **SharedPreferences** = przechowywanie danych użytkownika (Android)
- **Navigation Drawer** = nawigacja między ekranami
- Publikacja: **konsola Google Play** / **iTunes Connect** (potrzebne konto programisty)
- Warianty grafiki: **iOS = przyrostki @2x, @3x**; **Android = foldery drawable-hdpi, -xhdpi, -xxhdpi**
- Przygotowanie do publikacji = **dostosowanie do wymagań platformy i przepisów sklepu**

---

## 13. APLIKACJE DESKTOPOWE ⭐⭐

- **WPF** (C#, Windows) i **Qt** (C++) = frameworki desktopowe
- **WPF** = Windows Presentation Foundation, narzędzie = **Visual Studio**
- Java desktop = **NetBeans**
- **Okno modalne** = **blokuje** aplikację, trzeba je **zamknąć**, by wrócić; nie pozwala obsłużyć zdarzeń innych okien
- **Okno niemodalne** = **NIE blokuje**, może zostać otwarte przez cały czas (np. okno ustawień)
- Kontrolki: **Button, MenuItem** (element menu), pole tekstowe (Entry/TextBox)
- Zdarzenia: **click**, **blur** = kliknięcie **nieaktywnego** okna/kontrolki, **focus**
- **TextBox** (WPF) / **JTextField** (Swing) = pole tekstowe
- Pole tekstowe = wprowadzanie danych tekstowych; pasek menu = nawigacja między sekcjami

---

## 14. WYJĄTKI ⭐

- Bloki: **try** (kod) → **catch** (**reakcja na wyjątek / obsługa**) → opcjonalnie **finally**
- **throw** = **zgłasza** wyjątek (do przechwycenia przez catch)
- C++ używa: **try i catch** (oraz throw). NIE: except/finally/handle/raise.
- **Nieprzechwycony wyjątek** → program **kończy działanie z błędem**
- Własny wyjątek w C++ = klasa **dziedzicząca po `std::exception`**
- Obsługiwalne wyjątkiem: np. **dzielenie przez zero**
- Java: **`ArrayIndexOutOfBoundsException`** = odwołanie do indeksu **≥ rozmiar tablicy**

---

## 15. WZORCE PROJEKTOWE ⭐

- **Strukturalne**: **Fasada, Kompozyt, Dekorator, Adapter**
- **Kreacyjne**: **Singleton, Fabryka abstrakcyjna, Prototyp**
- **Behawioralne**: **Obserwator, Metoda szablonowa, Strategia**
- **Fasada** = **uproszczenie interfejsu** do złożonego systemu
- **Kompozyt** = obsługa obiektów i ich grup **jednolicie** (struktury drzewiaste)
- **Metoda szablonowa** = szkielet algorytmu, szczegóły w **podklasach**
- **Obserwator** = **powiadamianie** obiektów o zmianie stanu innych (przydatny w web)
- **Singleton** = jedna instancja

---

## 16. PRAWO I LICENCJE ⭐

- **Autorskie prawa OSOBISTE** = **niezbywalne i nieograniczone w czasie** (NIE wygasają)
- **Autorskie prawa MAJĄTKOWE** = wygasają **70 lat po śmierci autora** (UE)
- **GNU GPL** = pozwala **swobodnie modyfikować i rozpowszechniać** kod źródłowy
- Inne licencje: OEM, shareware, freeware, open source, **Creative Commons**
- **GDPR (RODO)** = ochrona danych osobowych w **UE**
- **Znaki towarowe** = **własność przemysłowa**
- Naruszenie prawa autorskiego → **grzywna lub kara więzienia**
- Naruszenie: **publikowanie cudzego filmu bez zgody**

---

## 17. SPRZĘT, SIECI, SYSTEMY INFORMATYCZNE ⭐

### Sprzęt
- Szybkość **procesora** = **częstotliwość taktowania**
- Szybkość **dysku HDD** = **prędkość obrotowa (RPM)**
- **RAM** = **tymczasowe** przechowywanie danych i instrukcji dla procesora
- Gaming: najlepszy RAM = **DDR5**; najszybszy dysk = **SSD NVMe** (PCIe)
- **ISA** = **zestaw instrukcji**, które procesor potrafi wykonać
- **FPU** = jednostka operacji **zmiennoprzecinkowych** (ALU = całkowitych)
- Etapy przetwarzania rozkazu (kolejność): **Fetch (pobranie) → Decode → Execute → Write Back**
- **Northbridge (mostek północny)** = łączy procesor z RAM

### Sieci
- Topologie: **gwiazda**, **magistrala** (wszystko **jednym kablem**), **pierścień**, **siatka** (**każdy z każdym**)
- **TCP/IP = 4 warstwy**
- **TCP** = **niezawodne** przesyłanie danych
- Sieć **synchroniczna** = transmisja w **ustalonych odstępach** czasu; **asynchroniczna** = **nieciągła, bez synchronizacji zegarów**
- Przepustowość: 500 MB / 10 s = 50 MB/s = **400 Mbps** (×8)
- **Wysyłanie danych** (upload) = z komputera lokalnego na serwer

### Systemy informatyczne
- **System informatyczny** = zespół **ludzi, procedur, oprogramowania i sprzętu** do przetwarzania danych
- **Chmura obliczeniowa** = dane na **zdalnych serwerach dostawcy**
- **NoSQL** = dane **hierarchiczne i nienormalizowane**
- Sklep internetowy → system **e-commerce**
- Procedura składowana MS SQL: **`CREATE PROCEDURE nazwa`**
- Serwer aplikacyjny = **obsługa logiki aplikacji**

### Normy
- **PN** = krajowa (Polska)
- **ISO** = międzynarodowa
- **EN** = europejska
- **IEC** = międzynarodowa elektrotechniczna

---

## 18. KOMUNIKACJA / KOMPETENCJE MIĘKKIE ⭐

- Cechy dobrego negocjatora = **intuicja, cierpliwość, asertywność, opanowanie**
- **Parafraza** (aktywne słuchanie) = „**Jeśli dobrze zrozumiałam, chodzi o...**"
- Przekaz **werbalny** = **mówienie**; **niewerbalny** = mimika, gesty, postawa ciała
- Praca w grupie: **NIE** wolno **dbać wyłącznie o własny interes**
- Reguła **zaangażowania i konsekwencji** (Cialdini) = **doprowadzanie spraw do końca**
- **SMART**: **Ambitny** = cel wymagający wysiłku, stanowiący wyzwanie
- Komunikatory audio-video: **Microsoft Teams**
- Netykieta: **unikać pisania WIELKIMI literami**

---

# ❗ PYTANIA Z GRAFIKĄ — DO ZROBIENIA OSOBNO

Te pytania wymagają obrazka/kodu/diagramu i nie da się ich opracować z samego tekstu. Zapamiętane numery (wrócimy do nich, jak prześlesz screeny):

**600–631:** 619, 617, 614, 610, 590, 588, 586, 585, 582, 580, 578, 574, 573, 572, 566, 565, 564, 562, 558, 556, 554

**100–217:** 217, 212, 208, 204, 203, 202, 200, 199, 198, 195, 194, 191, 189, 187, 186, 184, 182, 181, 180, 179, 177, 174, 172, 168, 167, 165, 164, 161, 159, 158, 157, 155, 153, 152, 151, 150, 149, 148, 147, 143, 141, 140, 126, 125, 124, 123, 118, 116, 114, 113, 110, 101, 100

**1–98:** 98, 96, 95, 92, 91, 90, 88, 86, 84, 82, 81, 80, 78, 77, 76, 74, 73, 72, 71, 68, 67, 66, 65, 63, 62, 60, 57, 54, 53, 51, 50, 48, 47, 46, 45, 43, 42, 37, 33, 31, 27, 26, 23, 22, 20, 17, 16, 14, 11, 10, 9, 7, 6, 3

**Łącznie ~131 pytań z grafiką** (z 630). Reszta (~499) to pytania tekstowe, w większości pokryte tymi notatkami.

---

## ⚡ Ostatnia powtórka 15 minut przed egzaminem

- Klasa = typ danych. Obiekt = instancja. Pole = zmienna klasy. Metoda = funkcja klasy.
- private (tylko klasa) / protected (klasa + pochodne) / public (wszędzie) / static (klasa, nie obiekt)
- Hermetyzacja = ukrywanie. Dziedziczenie = przejmowanie cech. Polimorfizm = różne działanie (virtual).
- Klasy abstrakcyjnej NIE można instancjonować.
- QuickSort = O(n log n), niestabilny, dziel i zwyciężaj. Bąbelkowe = O(n²).
- Wyszukiwanie binarne wymaga posortowanej tablicy.
- Stos = LIFO (undo). Kolejka = FIFO (drukarka).
- REST = JSON. PUT = aktualizacja. Sesje = serwer, ciasteczka = przeglądarka.
- Django=Python, Angular=TypeScript, React=JS, ASP.NET=C#, WPF=C#, Qt=C++.
- Android=Java, iOS=Swift, cross-platform C#=Xamarin.
- Kompilator = całość przed startem. Interpreter = instrukcja po instrukcji.
- try/catch/throw. Nieprzechwycony wyjątek = błąd i koniec programu.
- Resuscytacja 30:2. Pozycja boczna = nieprzytomny, oddycha. Alarm = 112.
- Prawa osobiste = wieczne. Majątkowe = 70 lat po śmierci.
- 1 TB = 1024 GB. U2 = liczby ujemne. !5 = 0.
- Czytaj treść do końca — uważaj na „NIE", „z wyjątkiem", „nieprawidłowe".
