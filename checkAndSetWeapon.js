// Simple version if you only use one weapon:
global ___ = setWeapon( THE_WEAPON_YOU_WANT );

/// Equips the specified weapon if it isn't already.
function checkAndSetWeapon( weapon ) {
  if( getWeapon() != weapon ) {
    setWeapon( weapon );
  }
}
