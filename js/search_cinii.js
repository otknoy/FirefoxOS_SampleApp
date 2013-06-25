function insertCinii(query) {
    $('ul#articles > li').remove();

    $.ajaxSetup({async: false});
    $.getJSON('http://pipes.yahoo.com/pipes/pipe.run', {
    	_id: '3c9e7b26317fa3c1f8db93713a432484',
    	_render: 'json',
    	query: query
    }, function(json) {
	var articles = json.value.items;
	for (var i = 0; i < articles.length; i++) {
	    var $h3 = $('<h3>').text(articles[i].title);
	    var $li = $('<li>').append($h3);
	    
	    $('#articles').append($li.append($h3));
	}
	$('#articles').listview('refresh');
    });
    $.ajaxSetup({async: true});
}
