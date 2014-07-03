/// ---------
/// Constants
/// ---------
//
// A few constants for various uses on LeekWars.
// 
// Highest required level : 1
// Highest required cores : 1

// Contains the four corner cells
global corners = [0,17,595,612];

// Each contains all cells of an edge
global northEdges = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
global southEdges = [612,611,610,609,608,607,606,605,604,603,602,601,600,599,598,597,596,595];
global eastEdges = [17,52,87,122,157,192,227,262,297,332,367,402,437,472,507,542,577,612];
global westEdges = [595,35,70,105,140,175,210,245,280,315,350,385,420,455,490,525,560,0];

// Contains all edges cells
global edges = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,52,87,122,157,192,227,262,297,332,
367,402,437,472,507,542,577,612,611,610,609,608,607,606,605,604,603,602,601,600,599,598,597,
596,595,35,70,105,140,175,210,245,280,315,350,385,420,455,490,525,560];

// Get a chip name by its id
global chipName = [];
chipName[34] = "CHIP_ADRENALINE";
chipName[20] = "CHIP_ARMOR";
chipName[ 1] = "CHIP_BANDAGE";
chipName[ 2] = "CHIP_CURE";
chipName[26] = "CHIP_DOPING";
chipName[ 3] = "CHIP_DRIP";
chipName[10] = "CHIP_FLAME";
chipName[ 7] = "CHIP_FLASH";
chipName[23] = "CHIP_FORTRESS";
chipName[19] = "CHIP_HELMET";
chipName[15] = "CHIP_ICE";
chipName[17] = "CHIP_ICEBERG";
chipName[30] = "CHIP_LEATHER_BOOTS";
chipName[36] = "CHIP_LIBERATION";
chipName[ 8] = "CHIP_LIGHTNING";
chipName[11] = "CHIP_METEORITE";
chipName[33] = "CHIP_MOTIVATION";
chipName[12] = "CHIP_PEBBLE";
chipName[24] = "CHIP_PROTEIN";
chipName[35] = "CHIP_RAGE";
chipName[22] = "CHIP_RAMPART";
chipName[29] = "CHIP_REFLEXES";
chipName[ 4] = "CHIP_RESURRECTION";
chipName[13] = "CHIP_ROCK";
chipName[14] = "CHIP_ROCKFALL";
chipName[32] = "CHIP_SEVEN_LEAGUE_BOOTS";
chipName[18] = "CHIP_SHIELD";
chipName[ 6] = "CHIP_SHOCK";
chipName[ 9] = "CHIP_SPARK";
chipName[16] = "CHIP_STALACTITE";
chipName[25] = "CHIP_STEROID";
chipName[27] = "CHIP_STRETCHING";
chipName[ 5] = "CHIP_VACCINE";
chipName[21] = "CHIP_WALL";
chipName[28] = "CHIP_WARM_UP";
chipName[31] = "CHIP_WINGED_BOOTS";

// Get a weapon name by its id
global weaponName = [];
weaponName[ 9] = "WEAPON_DESTROYER";
weaponName[ 3] = "WEAPON_DOUBLE_GUN";
weaponName[11] = "WEAPON_ELECTRISOR";
weaponName[ 8] = "WEAPON_FLAME_THROWER";
weaponName[10] = "WEAPON_GAZOR";
weaponName[ 7] = "WEAPON_GRENADE_LAUNCHER";
weaponName[ 6] = "WEAPON_LASER";
weaponName[ 2] = "WEAPON_MACHINE_GUN";
weaponName[ 5] = "WEAPON_MAGNUM";
weaponName[12] = "WEAPON_M_LASER";
weaponName[ 1] = "WEAPON_PISTOL";
weaponName[ 4] = "WEAPON_SHOTGUN";