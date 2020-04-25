-- Up
CREATE TABLE person (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	email TEXT
);

CREATE TABLE vehicle (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	brand TEXT,
	model TEXT,
	ownerId INTEGER REFERENCES person(id)
);

INSERT INTO
	person (name, email)
VALUES
	('bruno', 'bruno@antunes.pt');

INSERT INTO
	person (name, email)
VALUES
	('jack', 'jack@antunes.pt');

INSERT INTO
	vehicle (brand, model, ownerId)
VALUES
	('audi', 'R8', 1);

INSERT INTO
	vehicle (brand, model, ownerId)
VALUES
	('audi', 'R6', 1);

INSERT INTO
	vehicle (brand, model, ownerId)
VALUES
	('mercedes', 'benz', 2);

-- Down
DROP TABLE person;
DROP TABLE vehicle;