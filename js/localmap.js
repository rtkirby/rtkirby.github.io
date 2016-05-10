function wikiRequests() {
	'use strict';
	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=%query%&format=json&callback=wikiCallback';
	var thisRequest = { };
	for ( var i in myLocations ) {
		thisRequest.url = wikiUrl.replace('%query%', myLocations[i].interest);
		thisRequest.dataType = 'jsonp';
		thisRequest.success = (function(idx){return function(response) {
						myLocations[idx].wikiData = [response[1], response[3]];
						};}
					)(i);
		$.ajax(thisRequest);
	}
}
var mapLocations = ko.observableArray([
	new MapMarker(myLocations[0]),
	new MapMarker(myLocations[1]),
	new MapMarker(myLocations[2]),
	new MapMarker(myLocations[3]),
	new MapMarker(myLocations[4])
]);

function initMap() {

	myMap = new google.maps.Map(document.getElementById('map'), {
		disableDefaultUI: true,
		zoom: 8,
		center: {lat: 38.846127, lng: -105.800644}
		}
	);
	myGeocoder = new google.maps.Geocoder();
	dropMarkers();
	setTimeout(addListener, 1200);
}
function dropMarkers() {
	for ( var i in mapLocations() ) {
		addMarker(mapLocations()[i]);
	}
}
function addMarker(location) {
	myGeocoder.geocode({'address': location.addr},(function(loc){return function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			loc.marker = new google.maps.Marker({
				map: myMap,
				title: results[0].formatted_address,
				position: results[0].geometry.location,
				animation: google.maps.Animation.DROP
			});
		}
//			alert if fails to retrieve address;
		else {
			alert("Failed to retrieve address information");
		}
	};})(location));
}
var contentTemplate = '<h6>Location Information</h6>' +
		'<p id="info">I lived at %addr% while working/learning ' +
		'%grade% at %school% during %dates% with an interest in %interest%.</p>';
function buildContent(i) {
	var thisItem;
	var wikiInfo;
	var wikiDataLength;
	thisItem = contentTemplate.replace("%interest%", myLocations[i].interest);
	thisItem = thisItem.replace("%dates%", myLocations[i].date);
	thisItem = thisItem.replace("%school%", myLocations[i].school);
	thisItem = thisItem.replace("%grade%", myLocations[i].grade);
	thisItem = thisItem.replace("%addr%", mapLocations()[i].marker.title);
	if ( myLocations[i].wikiData !== null ) {
		wikiInfo = '<h6>Wikipedia Search Results for ' + myLocations[i].interest + '</h6>';
		wikiInfo += '<ul>';
		wikiDataLength = myLocations[i].wikiData[0].length;
		if ( wikiDataLength === 0 ) {
			wikiInfo += '<li>No Wikipedia matches found</li>';
		}
		for ( var entries = 0; entries < wikiDataLength; entries++ ) {
			wikiInfo += '<li><a href="' + myLocations[i].wikiData[1][entries] + '" target="_blank">';
			wikiInfo += myLocations[i].wikiData[0][entries] + '</a></li>';
		}
		wikiInfo += '</ul>';
	}
	else {
		wikiInfo = '<p>Wikipedia access failed</p>';
	}

	return thisItem + wikiInfo;
}
function listEntriesVisible() {
	myViewModel.clearQuery();
	for (  var i in mapLocations() ) {
		mapLocations()[i].visible(true);
		if ( mapLocations()[i].marker.getMap() === null ) {
			mapLocations()[i].marker.setMap(myMap);
		}
	}
}
function addListener() {
	for ( var i in mapLocations() ) {
		mapLocations()[i].marker.addListener('click', (function(j){return function(){activateMarker(j);};})(i));
		mapLocations()[i].info = new google.maps.InfoWindow({content:  buildContent(i), maxWidth: 300});
		google.maps.event.addListener(mapLocations()[i].info, 'closeclick', function(){listEntriesVisible();});
	}
}
function activateMarker(i) {
	for ( var j in mapLocations() ) {
		mapLocations()[j].info.close();
		mapLocations()[i].marker.setAnimation(null);
	}
	mapLocations()[i].marker.setAnimation(google.maps.Animation.BOUNCE);
	mapLocations()[i].info.open(myMap, mapLocations()[i].marker);
	setTimeout(function(){ mapLocations()[i].marker.setAnimation(null); }, 1250);
}
wikiRequests();
myViewModel = new AppViewModel();
ko.applyBindings(myViewModel);