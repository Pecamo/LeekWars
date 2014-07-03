/// --------------- ///
/// Enemy targeting ///
/// --------------- ///

/// Computes the threat, from 0 to 1, from an enemy
function getThreat( enemy ) {
  return ( getForce( enemy ) * 1.0 ) / ( getTotalLife( enemy ) * 1.0 );
}

/// Gets the most threatening target that has a shield lower than the specified threshold,
/// or the target with the smallest shield if no targets have such a shield
function getTarget( shieldThreshold ) {
  if( getEnemiesCount() === 1 ) {
    return getEnemies()[0];
  }

  var target = null;
  var foundTarget = false;
  var minShield = 1000000;
  var maxThreat = -1;
  for( var enemy in getAliveEnemies() ) {
    var shield = getAbsoluteShield( enemy );
	var threat = getThreat( enemy );
    if( shield <= shieldThreshold ) {
	  foundTarget = true;
	  if( maxThreat < threat ) {    
	    target = enemy;
		maxThreat = threat;
	  }
	} else if( !foundTarget && shield < minShield ) {
	  target = enemy;
	}
	minShield = min( minShield, shield );
  }
  return target;
}
