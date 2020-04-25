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

	const people = await db.all('SELECT * FROM person');
	console.log(people);

	await db.close();
})();
