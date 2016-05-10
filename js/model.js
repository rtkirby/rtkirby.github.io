var myLocations = [
	{ name: 'Colorado Springs 1st',
	addr: '4729 Rincon Place, colorado Springs, CO 80918',
	date: '2009 - 2010',
	grade: '',
	school: 'Pikes Peak CC',
	interest: 'Motorcycles',
	wikiData: null
	},
	{ name: 'Eagle 1st',
	addr: '0301 tanager circle, Eagle, CO 81631',
	date: '2011 - 2012',
	grade: '',
	school: 'ECCA',
	interest: 'Virtual Server',
	wikiData: null
	},
	{ name: 'Eagle 2nd',
	addr: '0043 tanager circle, Eagle, CO 81631',
	date: '2012 - 2013',
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
	{ name: 'Colorado Springs 2nd',
	addr: '4729 Rincon Place, colorado Springs, CO 80918',
	date: '2014 - 2016',
	grade: '',
	school: 'Udacity',
	interest: 'Front-End Web Development',
	wikiData: null
	}
];

function MapMarker(locInfo) {
	var self = this;
	self.name = locInfo.name;
	self.addr = locInfo.addr;
	self.marker = null;
	self.info = null;
	self.select = ko.observable(false);
	self.visible = ko.observable(true);
}
var myMap = null;
var myGeocoder;
var myViewModel;