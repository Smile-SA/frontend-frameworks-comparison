import type { PageLoad } from './$types';

import type { IData } from '../../types/data';

export const prerender = true;

export const load: PageLoad<IData> = async ({ fetch }) => {
	const [cards, openSources, solutions, technologies, diff] = await Promise.all([
		fetch('http://localhost:3333/cards').then((r) => r.json()),
		fetch('http://localhost:3333/opensource').then((r) => r.json()),
		fetch('http://localhost:3333/solutions').then((r) => r.json()),
		fetch('http://localhost:3333/technologies').then((r) => r.json()),
		new Promise((resolve) => {
			let start = performance.now();
			for (let i = 0; i < 100_000; i++) {
				for (let j = 0; j < 100_000; j++) {
					if (i % 2 === 0) {
						start += j;
					} else {
						start -= j;
					}
				}
			}
			resolve(Math.round(performance.now() - start));
		})
	]);

	const data: IData = {
		cards,
		diff: diff as number,
		openSources,
		solutions,
		technologies
	};
	return data;
};
