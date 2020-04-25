-- Up
CREATE TABLE trading_instruments_daily (
	ticker CHAR(6),
	date DATE,
	open DECIMAL(18, 4),
	high DECIMAL(18, 4),
	low DECIMAL(18, 4),
	close DECIMAL(18, 4),
	volume INTEGER
);

INSERT INTO
	trading_instruments_daily (ticker, date, open, high, low, close, volume)
VALUES
	(
		'AAPL.US',
		substr('19840907', 1, 4) || '-' || substr('19840907', 5, 2) || '-' || substr('19840907', 7, 2),
		0.41045,
		0.41045,
		0.42657,
		0.39559,
		23979532
	);

-- Down
DROP TABLE trading_instruments_daily;