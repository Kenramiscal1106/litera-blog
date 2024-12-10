export const nav = $state({
	menuOpen: false,
	openMenu() {
		this.menuOpen = true;
	},
	closeMenu() {
		this.menuOpen = false;
	}
});

export const modal = $state({
	open: true,
	openModal() {
		this.open = true;
	},
	closeModal() {
		this.open = false;
	}
});
