FEND P5_1: Neighborhood Map Project
==============================
Instructions for Use and Interaction
------------------------------------
1.GitHub repository:
<https://github.com/rtkirby>.
* Open the index.html file with a web browser to see and interact with API Google map.
* There are several ways to get information about the boringly dull red map markers.
* Clicking a map marker will open an information window for the location, click the 'X' to close the window.
* Clicking one of the street names across the top of the screen will produce the same result.
* Typing a unique combination of any letters from a street name in the input box will result in a display of the matching information box.
* The information box presents some autobiographical information as well as several hyperlinks to Wikipedia articles about my interests at the time.

Additional Notes
----------------
* Five locations are identified
* Five markers are placed with DROP animation using the Geocoder API to set each location from its address.
* Each marker has a click handler to toggle the marker's bounce animation.
* Each marker has a title which displays the street address when the mouse hovers over the marker.
* The street name of each location is displayed in a list across the top of the page.
* Mousing over the street name in the list highlights the name and activates the marker's bounce animation.
* Clicking on the street name opens its marker's information window.
* Type any letter(s) of a street name in search box to filter down to a targeted street name.
* Clicking on a marker will start it bouncing and display an info window
* IIFE used in addListeners() and wikiRequests() for looping through markers (jshint doesn't care for IFEEs)
* Google Map failure is detected by the value of the myMap variable

References
----------
* Udacity Frontend Web Developer lessons
* Web: [Knockout](http://knockoutjs.com)
* Web: [JQuery & Ajax](http://api.jquery.com/jquery.ajax/)
* Web: [MediaWiki action API](https://www.mediawiki.org/wiki/API%3aMain_page)
* Web: [Bootstrap Tutorial](http://www.w3schools.com/bootstrap/)
* Book: [Javascript & JQuery Interactive front-end web development](Jon Duckett, Public Library)
* Online Tutorial: [Lynda, Javascript for web designers](Lynda.com)
