const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
	const db = await open({
		filename: './project-diamond.sqlite',
		driver: sqlite3.Database
	});

	await db.migrate({
		migrationsPath: './migrations',
		force: true
	});

	const test = await db.all('SELECT * FROM trading_instruments_daily');
	console.log(test);

	await db.close();
})();
