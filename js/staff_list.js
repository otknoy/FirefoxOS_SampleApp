$(document).bind('pagebeforechange', function(e, data) {
    if (typeof data.toPage === 'string') {
	$page = $('#search_result');
	insertCinii($('#query').text());

	// $.mobile.changePage($page);
	// e.preventDefault();
    }
});

$(function() {
    $.getJSON('data/staffs.json', function(json) {
	for (var i = 0; i < json.length; i++) {
	    var $h3 = $('<h3>').text(json[i]);
	    var $a = $('<a>').attr({
		'href': '#search_result',
		'data-transition': 'slide'
	    });
	    $a.bind('click', json[i], function(event) {
		$('#query').text(event.data);
	    });
	    var $li = $('<li>').append($a.append($h3));
	    
	    $('#staff_list').append($li)
	}
	$('#staff_list').listview('refresh');
    });
});