-- Przykładowa baza danych: biblioteka

CREATE TABLE autorzy (
    id INT PRIMARY KEY AUTO_INCREMENT,
    imie VARCHAR(50),
    nazwisko VARCHAR(50)
);

CREATE TABLE ksiazki (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tytul VARCHAR(150) NOT NULL,
    autor_id INT,
    rok_wydania INT,
    FOREIGN KEY (autor_id) REFERENCES autorzy(id)
);
