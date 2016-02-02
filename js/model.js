/*
 *	array that contains the data for markers and info boxes
 */

var myLocations = [
	{ name: 'Colorado Springs',
	addr: '4729 Rincon Place, colorado Springs, CO 80918',
	date: 'current',
	grade: 'Nanodegree',
	school: 'Udacity',
	interest: 'Front-End Web Developer',
	wikiData: null
	},
	{ name: 'Eagle',
	addr: '0043 tanager circle, Eagle, CO 81631',
	date: '2013 - 2015',
	grade: '',
	school: 'ECCA',
	interest: 'Virtual Server',
	wikiData: null
	},
	{ name: 'Eagle first',
	addr: '301 tanager circle, Eagle, CO 81631',
	date: '2011 - 2013',
	grade: '',
	school: 'ECCA',
	interest: 'Server Administration',
	wikiData: null
	},
	{ name: 'Edwards',
	addr: '1121 June Creek Rd, Edwards, CO 81632',
	date: '2010 - 2011',
	grade: '',
	school: 'ECCA',
	interest: 'Firewalls',
	wikiData: null
	},
	{ name: 'Colorado Springs first',
	addr: '4729 Rincon Place, colorado Springs, CO 80918',
	date: '2009 - 2010',
	grade: '',
	school: 'Pikes Peak CC',
	interest: 'Motorcycles',
	wikiData: null
	}
];

/*
 *	Define an object to facilitate KnockoutJS functionality
 */

function MapMarker(locInfo) {
	var self = this;
	self.name = locInfo.name;
	self.addr = locInfo.addr;
	self.marker = null;
	self.info = null;
	self.select = ko.observable(false);	// used to highlight <li> on mouseover
	self.visible = ko.observable(true);	// used for visibility of <li>
}

var myMap = null;
var myGeocoder;
var myViewModel;

