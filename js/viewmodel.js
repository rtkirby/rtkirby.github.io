function AppViewModel() {
	'use strict';
	var self = this;
	var regex = new RegExp();
	this.mapError = ko.observable();

	if ( myMap === null ) {
		this.mapError('<h5>Failed to retrieve map</h5>');
}

	self.query = ko.observable('');
	self.search = function(value) {
		var loopcount = mapLocations().length;
		var visbits = loopcount;
		var maxbits = loopcount;
		closeInfos();
		regex.compile(value, 'i');
		for (  var i in mapLocations() ) {
			var marker = mapLocations()[i].marker;
			if ( regex.test(mapLocations()[i].name) ) {
				visbits |= ( 1 << i);
				mapLocations()[i].visible(true);
				marker.setMap(myMap);
			}
			else {
				visbits &= ~( 1 << i);
				mapLocations()[i].visible(false);
				marker.setMap(null);
			}
		}

		var bitcount = countbits(visbits, maxbits);
		if ( bitcount === 1) {
			i = findbit(visbits, maxbits);
			mapLocations()[i].info.open(myMap, mapLocations()[i].marker);
		}
	};

	self.query.subscribe(self.search);
	this.clearQuery = function() {
		self.query('');
	};

	this.listClick = function(data) {
		var dm = data.marker;
		closeInfos();
		data.marker.setAnimation(null);
		data.info.open(myMap, dm );
	};

	this.highLightOn = function(data) {
		data.marker.setAnimation(google.maps.Animation.BOUNCE);
		data.select(true);
	};

	this.highLightOff = function(data) {
		data.marker.setAnimation(null);
		data.select(false);
	};

	function countbits(bits, maxbits) {
		var bitcount = 0;
		for ( var i = 0; i < maxbits; i++ ) {
			bitcount += ( bits & ( 1 << i))? 1: 0;
		}
		return bitcount;
	}

	function findbit(bits, maxbits) {
		for ( var i = 0; i < maxbits; i++ ) {
			if ( bits & 1 ) {
				break;
			}
			bits >>= 1;
		}
		return( i );
	}

	function closeInfos() {
		for (  var i in mapLocations() ) {
			mapLocations()[i].info.close();
		}
	}
}