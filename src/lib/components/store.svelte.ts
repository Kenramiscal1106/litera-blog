export const nav = $state({
	menuOpen: false,
	hasScrollIndicator: false,
	openMenu() {
		this.menuOpen = true;
	},
	closeMenu() {
		this.menuOpen = false;
	},
	enableScrollIndicator() {
		this.hasScrollIndicator = true
	},
	disableScrollIndicator() {
		this.hasScrollIndicator = false
	}
});

export const modal = $state({
	open: false,
	openModal() {
		this.open = true;
	},
	closeModal() {
		this.open = false;
	}
});
