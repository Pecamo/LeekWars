/// BY SOLAL
/// ----------------------- ///
/// Weapons as chips: Items ///
/// ----------------------- ///

global WEAPON = 255;

/// Gets a cell that lets the specified item be used on the specified enemy
function __getCellToUse( item, enemy ) {
  return item === WEAPON ? getCellToUseWeapon( enemy ) : getCellToUseChip( item, enemy );
}

/// Moves towards a cell that lets the specified item be used on the specified enemy
function __moveToUse( item, enemy ) {
  return moveTowardCell( __getCellToUse( item, enemy ) );
}

/// Indicates whether the specified item can be used on the specified enemy,
/// from the current position
function __canUse( item, enemy ) {
  return item === WEAPON ? canUseWeapon( enemy ) : canUseChip( item, enemy );
}

/// Indicates whether the specified item can be used on the specified enemy,
/// moving as needed.
function __canUseWithMove( item, enemy ) {
  return getDistance( getCell( getLeek() ), __getCellToUse( item, enemy ) ) <= getMP();
}

/// Uses the specified item on the specified enemy
function __use( item, enemy ) {
  return item === WEAPON ? useWeapon( enemy ) : useChip( item, enemy );
}

/// Gets the specified item's cooldown
function __getCooldown( item ) {
  return item === WEAPON ? 0 : getChipCooldown( item );
}

/// Gets the specified item's current cooldown
function __getCurrentCooldown( item ) {
  return item === WEAPON ? 0 : getCurrentCooldown( item );
}

/// Gets the specified item's TP cost
function __getCost( item ) {
  return item === WEAPON ? getWeaponCost( getWeapon() ) : getChipCost( item );
}

/// Uses the specified item on the specified enemy as much as possible
function __attackWith( item, enemy ) {
  while( __getCurrentCooldown( item ) == 0 && 
         __canUse( item, enemy ) &&
         getTP () >= __getCost( item ) ) {
    __use( item, enemy );
  }
}
