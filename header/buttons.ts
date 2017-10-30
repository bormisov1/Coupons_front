export class MenuButton {
	href: string;
	text: string;
	//inner: boolean; // displayed when authenticated
	whatStatusFor: number;
};

export const menuButtons: MenuButton[] = [
	{
		href: '/login'
		, text: 'Login'
		//, inner: false
		, whatStatusFor: 1
	}, {
		href: '/login'
		, text: 'Logout'
		//, inner: true
		, whatStatusFor: 2
	}
];