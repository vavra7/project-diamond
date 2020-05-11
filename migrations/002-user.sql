-- Up
CREATE TABLE user (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	email TEXT,
	first_name TEXT,
	last_name TEXT,
	password TEXT
);

-- Down
DROP TABLE user;