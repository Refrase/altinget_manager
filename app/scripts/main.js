$( document ).ready( function() {

	$.getJSON("https://spreadsheets.google.com/feeds/list/1CMsEUxS1vsr0FdU32XoJUG07iIdoATsZLsm59Azd7hM/od6/public/values?alt=json", function( data ) {
		console.log( data.feed.entry )

		var politikerData = data.feed.entry;
		var politikerListe = $( '.politiker__liste' );

		for( var i = 0; i < politikerData.length; i++ ) {
			var politiker = politikerData[i].title.$t;

			politiker = politiker.replace('*', ''); // Fjern første stjerne
			politiker = politiker.replace('*', ''); // Fjern anden stjerne

			politiker = politiker.split(')')[0];  // Fjern alt fra ')'
			politiker += ')'; // Tilføj ')' igen

			var politikerHtml = '<tr class="liste__politiker">';
			politikerHtml += '<td class="liste__politiker__tilfoj">+</td>';
			politikerHtml += '<td><a href="politiker_info.html">' + politiker + '</a></td>';
			politikerHtml += '<td class="liste__politiker__pris">x kr.</td></tr>'

			politikerListe.append( politikerHtml );
		}
	});

	$( '.fb_overlay__clickbox' ).on( 'click', function() {
		$( '.fb_overlay' ).hide();
	});

});
