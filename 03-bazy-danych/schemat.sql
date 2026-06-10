-- Przykładowa baza danych: sklep internetowy
-- INF.04 – projektowanie i tworzenie bazy danych

CREATE TABLE klienci (
    id INT PRIMARY KEY AUTO_INCREMENT,
    imie VARCHAR(50) NOT NULL,
    nazwisko VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE produkty (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nazwa VARCHAR(100) NOT NULL,
    cena DECIMAL(10,2) NOT NULL,
    stan_magazynowy INT DEFAULT 0
);

CREATE TABLE zamowienia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    klient_id INT NOT NULL,
    data_zamowienia DATE NOT NULL,
    FOREIGN KEY (klient_id) REFERENCES klienci(id)
);

CREATE TABLE pozycje_zamowienia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    zamowienie_id INT NOT NULL,
    produkt_id INT NOT NULL,
    ilosc INT NOT NULL,
    FOREIGN KEY (zamowienie_id) REFERENCES zamowienia(id),
    FOREIGN KEY (produkt_id) REFERENCES produkty(id)
);

-- Przykładowe dane
INSERT INTO klienci (imie, nazwisko, email) VALUES
('Anna', 'Kowalska', 'anna.kowalska@example.com'),
('Jan', 'Nowak', 'jan.nowak@example.com');

INSERT INTO produkty (nazwa, cena, stan_magazynowy) VALUES
('Klawiatura', 129.99, 50),
('Mysz', 79.99, 100),
('Monitor', 899.00, 20);
