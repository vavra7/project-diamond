-- Up
CREATE TABLE markets_day (
	ticker CHAR(6) NOT NULL,
	date DATE NOT NULL,
	open DECIMAL(18, 4) NOT NULL CHECK (open >= 0),
	high DECIMAL(18, 4) NOT NULL CHECK (high >= 0),
	low DECIMAL(18, 4) NOT NULL CHECK (low >= 0),
	close DECIMAL(18, 4) NOT NULL CHECK (close >= 0),
	volume INTEGER NOT NULL,
	CONSTRAINT record_uniqness UNIQUE(ticker, date)
);

-- Down
DROP TABLE markets_day;