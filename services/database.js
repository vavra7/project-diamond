import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export function dbConnect() {
	return open({
		filename: './project-diamond.sqlite',
		driver: sqlite3.Database
	});
}
