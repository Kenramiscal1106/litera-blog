export const nav = $state({
  menuOpen: false,
  openMenu () {
    this.menuOpen = true
  },
  closeMenu () {
    this.menuOpen = false
  }
})