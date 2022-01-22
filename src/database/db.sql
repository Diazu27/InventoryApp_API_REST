
CREATE TABLE categories(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(30) NOT NULL
);

CREATE TABLE users(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(40) NOT NULL,
	LastName VARCHAR(40) NOT NULL,
	Identification VARCHAR(40) NOT NULL,
	Email VARCHAR(40) NOT NULL,
	BirthDate TIMESTAMP NOT NULL
);

CREATE TABLE products (
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	CategoryID INT NOT NULL,
	UnitMeasure VARCHAR(10) NOT NULL,
	PriceByUnit FLOAT NOT NULL,
	FOREIGN KEY (CategoryID) REFERENCES categories(Id)
);

CREATE TABLE stock(
	Id SERIAL PRIMARY KEY,
	ProductID INT NOT NULL,
	UnitsInStock FLOAT NOT NULL,
	FOREIGN KEY (ProductID) REFERENCES products(Id)
);

CREATE TABLE transactions(
	Id SERIAL PRIMARY KEY,
	UserID INT NOT NULL,
	DateOpe TIMESTAMP NOT NULL,
	Status VARCHAR(20),
	FOREIGN KEY (UserID) REFERENCES users(Id)
);


CREATE TABLE transactionsDetail(
	TransId SERIAL PRIMARY KEY,
	ProductID INT NOT NULL,
	Units FLOAT NOT NULL,
	FOREIGN KEY (ProductID) REFERENCES products(Id)
)


--Inserts
INSERT INTO categories("name") VALUES ('Lacteos'),('Carnes'), ('Vegetales'),('Frutas'),('Condimentos');

INSERT INTO products(name, categoryid, unitmeasure, pricebyunit) VALUES 
('Queso crema', 1 , 'LB', 32.00),
('Mantequilla', 1 , 'LB', 25.00),
('Pechuga Pollo', 2 , 'LB', 45.00),
('Lomo de cerdo', 2 , 'LB', 42.00),
('Papaya', 4 , 'Units', 12.00),
('Fresas', 4 , 'LB', 60.00);