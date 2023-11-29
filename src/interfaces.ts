export interface IBook {
	id: number;
	idcode: string;
	title: string;
}

export interface ICart {
	language: string;
	items: IBook[];
	title: string;
}

export const nullCart = {
	language: "",
	title: "",
	items: [],
};
