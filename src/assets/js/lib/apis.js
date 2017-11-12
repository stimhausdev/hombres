var data = [
	{
		name: "Everett",
		location: "https://www.google.com/maps/place/Everett,+WA/@47.9573405,-122.1840618,11z",
		key: "everett"
	},
	{
		name: "Sno Valley",
		location: "https://www.google.com/maps/place/Sno+Valley+Family+Medicine/@47.7433265,-122.0002114,14.38z",
		key: "snovalley"
	},
	{
		name: "Seattle",
		location: "https://www.google.com/maps/dir/Seattle/Seattle,+WA/@47.6062042,-122.3670901,13z",
		key: "seattle"
	},
	{
		name: "Spokane",
		location: "https://www.google.com/maps/place/Spokane,+WA/@47.6728191,-117.4821893,12z",
		key: "spokane"
	},
	{
		name: "Wenatchee",
		location: "https://www.google.com/maps/place/Wenatchee,+WA+98801/@47.4281947,-120.3657812,13z",
		key: "wenatchee"
	},
	{
		name: "Tacoma",
		location: "https://www.google.com/maps/place/Tacoma,+WA/@47.2492347,-122.5268648,12z",
		key: "tacoma"
	},
	{
		name: "Olympia",
		location: "https://www.google.com/maps/place/Olympia,+WA/@47.0393281,-122.9288879,13z",
		key: "olympia"
	},
	{
		name: "La Costa",
		location: "https://www.google.com/maps/place/La+Costa/@47.7359551,-122.640293,17z",
		key: "lacosta"
	},
	{
		name: "Peninsula",
		location: "https://www.google.com/maps/place/19827+WA-305,+Poulsbo,+WA+98370/@47.7412625,-122.6414694,16z",
		key: "peninsula"
	}
];

function getGroups(response){
	return response;
};

function changeLocation(location){
	// Need to modify for production
	var url = window.location.href.split('?')[0];
	window.location.href = url + "?location=" + location;
};

function getUrlParams(){
	var urlParams = new URLSearchParams(window.location.search);
	if(urlParams.has('location')){
		return(urlParams.get('location'));
	} else {
		return "home";
	}
};

function linkHelper(url, location){
	window.location.href = url + createURI

}
$(document).ready(function(){
	var location = getUrlParams();
	var groups = getGroups(data);
	for(var i=0; i<groups.length; i++){
		$('#group_sites').append('<li><a href="http://localhost:8000/home.html?location=' + groups[i].key + '" data-location=' + groups[i].key + '>' + groups[i].name + '</a></li>');
	};
	$('.off-canvas a').on('click', function() {
		var currentGroup = $(this).data('location');
		changeLocation(currentGroup);
	  $('.off-canvas').foundation('close');
	});
});

