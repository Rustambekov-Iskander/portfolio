export interface IWork {
	title: string
	link: string
	text: string
	stack: Array<string>
	images: { link: string; alt: string }[]
}

export const worksList: Record<string, IWork> = {
	getByVerto: {
		title: 'GetByVerto',
		link: 'getByVerto',
		text: `
		Многообещающий стартап маркетплейс с бартерной системой оплаты. 
		Который все еще находится на этапе разработки
		`,
		stack: [
			'Архитектура FSD',
			'NextJS',
			'Typescript',
			'Zustand',
			'React-query',
			'Framer-motion',
			'Formik / Yup',
			'tailwind',
		],
		images: [
			{
				link: '/assets/works/getByVerto/main.png',
				alt: 'main page',
			},
			{
				link: '/assets/works/getByVerto/product.png',
				alt: 'detail page',
			},
		],
	},

	game2048: {
		title: '2048',
		link: '2048',
		text: `
			2048 - это головоломка, в которой нужно объединять плитки с одинаковыми числами, 
			чтобы получить плитку с числом 2048.
		`,
		stack: ['NextJS', 'ReactJS', 'Typescript', 'styled-components'],
		images: [
			{
				link: '/assets/works/2048/2048.png',
				alt: 'main page',
			},
		],
	},
	chess: {
		title: 'Шахматы',
		link: 'chess',
		text: `
			Шахматы - это настольная игра для двух игроков, которые перемещают фигуры на доске с целью 
			захвата короля противника. Игра заканчивается, когда один из королей оказывается под угрозой 
			захвата и не может избежать захвата на следующем ходу.
		`,
		stack: ['NextJS', 'ReactJS', 'Typescript', 'styled-components'],
		images: [
			{
				link: '/assets/works/chess/chess.png',
				alt: 'main page',
			},
		],
	},
	topsShopes: {
		title: 'TopsShopes',
		link: 'topsShopes',
		text: 'TopsShopes - это интернет-площадка, где продавцы предлагают товары или услуги, а покупатели могут их купить.',
		stack: [
			'NextJS',
			'ReactJS',
			'Typescript',
			'Redux',
			'Formik / Yup',
			'Mui',
			'styled-components',
			'i18next',
		],
		images: [
			{
				link: '/assets/works/topShopes/main.png',
				alt: 'main page',
			},
			{
				link: '/assets/works/topShopes/catalog.png',
				alt: 'catalog page',
			},
			{
				link: '/assets/works/topShopes/detail.png',
				alt: 'detail page',
			},
			{
				link: '/assets/works/topShopes/admin.png',
				alt: 'admin page',
			},
		],
	},
	bank: {
		title: 'Aiyl-Bank',
		link: 'bank',
		text: `
		Веб-приложение для подсчета бюджетирования филиалов.
		Мини exel со сложной системой перетаскивания и автоматического заполнения полей как в exel на фронте
		С помощью этого приложения можно отслеживать доходы и расходы каждого филиала, определять, 
		какие из них приносят больше доходов, и какие нуждаются в большей финансовой поддержке.
		`,
		stack: [
			'NextJS',
			'ReactJS',
			'Typescript',
			'Redux',
			'Redux-wrapper',
			'Formik / Yup',
			'Mui',
			'styled-components',
		],
		images: [
			{
				link: '/assets/works/aiyl-bank/catalog.png',
				alt: 'catalog page',
			},
			{
				link: '/assets/works/aiyl-bank/detail.png',
				alt: 'detail page',
			},
			{
				link: '/assets/works/aiyl-bank/list.png',
				alt: 'list page',
			},
		],
	},
}
