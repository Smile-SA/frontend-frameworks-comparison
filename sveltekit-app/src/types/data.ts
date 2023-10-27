import type { ICard } from './cards';
import type { IOpenSource } from './openSource';
import type { ISolution } from './tabs';

export interface IData {
	cards: ICard[];
	diff?: number;
	openSources: IOpenSource[];
	solutions: ISolution[];
	technologies: ISolution[];
}
