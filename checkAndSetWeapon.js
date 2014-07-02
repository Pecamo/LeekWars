//Checks if the weapon is already equipped and equips it if not
function checkAndSetWeapon(weapon) {
	if (getWeapon() != weapon) {
		setWeapon(weapon);
	}
}