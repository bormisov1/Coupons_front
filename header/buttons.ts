export class MenuButton {
	href: string;
	text: string;
 	whatStatusFor: number; // 1 -- unauthorized, 2 -- usual user
};

export const menuButtons: MenuButton[] = [
	{
		href: '/login'
		, text: 'Login'
		, whatStatusFor: 1
	}, {
		href: '/emitents'
		, text: 'Emitents'
		, whatStatusFor: 2
	}, {
		href: '/coupons'
		, text: 'Coupons'
		, whatStatusFor: 2
	}, {
		href: '/login'
		, text: 'Logout'
		, whatStatusFor: 2
	}
];