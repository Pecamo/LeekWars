/// -----------------
/// BasicCalculations
/// -----------------
//
// A few constants for various uses on LeekWars.
// 
// Highest required level : 1
// Highest required cores : 1

/*
 * Calculates the raw damages inflicted by an attack, taking Force into account
 *
 * Level : 1
 * Cores : 1
 */
function calcPower(damage, force) {
  return damage*(1+force/100);
}

/*
 * Calculates the net damages inflicted by an attack, taking attacker's Force
 * and defender's Shields into account
 *
 * Level : 1
 * Cores : 1
 */
function calcDamage(damage, enemyAbsoluteShield, enemyRelativeShield) {
  return max(0, (damage*(100-enemyRelativeShield)/100)-enemyAbsoluteShield);
}

/*
 * Calculates the total amount of Absolute Shield, taking Agility into account
 *
 * Level : 1
 * Cores : 1
 */
function calcAbsoluteShield(shield, agility) {
  return shield*(1+agility/100);
}

/*
 * Calculates the total amount of Relative Shield, taking Agility into account
 *
 * Level : 1
 * Cores : 1
 */
function calcRelativeShield(shield, agility) {
  return shield+agility/50;
}

/*
 * Calculates the total amount of health restored by a heal, taking Agility
 * into account
 *
 * Level : 1
 * Cores : 1
 */
function calcHeal(damage, agility) {
  return damage*(1+agility/100);
}

/*
 * Calculates the mean damage inflicted by an attack 
 *
 * Level : 1
 * Cores : 1
 */
function meanDamages(min, max) {
  return (min, max)/2;
}