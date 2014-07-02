// Computes the threat, from 0 to 1, from an enemy
function getThreat(enemy) {
	// * 1.0 to use floats
	return (getForce(enemy) * 1.0) / (getLife(enemy) * 1.0);
}

// Gets the preferred target, given a shield threshold (absolute shield); targets with a higher shield will be ignored
function getTarget(shieldThreshold) {
	var target = null;
	var foundTarget = false;
	var minShield = 1000000;
	var maxThreat = -1;
	for (var enemy in getAliveEnemies()) {
		var shield = getAbsoluteShield(enemy);
		var threat = getThreat(enemy);
		if (shield <= shieldThreshold) {
			foundTarget = true;
			if (maxThreat < threat) {
				target = enemy;
				maxThreat = threat;
			}
		} else if (!foundTarget && shield < minShield) {
			target = enemy;
		}
		minShield = min(minShield, shield);
	}
	return target;
}