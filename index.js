import psList from 'ps-list';
import process from 'process';

const search = process.argv[2] || "node";

const run = async () => {
	const list = await psList();
	const count = list.filter(proc => proc.name.toLowerCase().includes(search.toLowerCase())).length;
	console.log(`${count} processes containing "${search}" found`);
}

setInterval(run, 1000);
