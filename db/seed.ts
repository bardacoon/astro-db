import { db, Block } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Block).values([
		{slug: 'test', html: 'htmlllll', css: '', js: ''}
	])
}
