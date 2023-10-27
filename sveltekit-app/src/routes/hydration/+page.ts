import type { PageLoad } from './$types';

import type { IData } from '../../types/data';

export const prerender = true;

export const load: PageLoad<IData> = async ({ fetch }) => {
	const [cards, openSources, solutions, technologies] = await Promise.all([
		fetch('http://localhost:3333/cards').then((r) => r.json()),
		fetch('http://localhost:3333/opensource').then((r) => r.json()),
		fetch('http://localhost:3333/solutions').then((r) => r.json()),
		fetch('http://localhost:3333/technologies').then((r) => r.json())
	]);

	const data: IData = {
		cards,
		openSources,
		solutions,
		technologies
	};
	return data;
};
