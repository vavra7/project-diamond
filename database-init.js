/* eslint-disable @typescript-eslint/no-var-requires */
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
	const db = await open({
		filename: './project-diamond.sqlite',
		driver: sqlite3.Database
	});

	await db.migrate({
		migrationsPath: './migrations',
		force: false
	});

	const test = await db.get('SELECT * FROM markets_day');

	console.log(test);

	await db.close();
})();
