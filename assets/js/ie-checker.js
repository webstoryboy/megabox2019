/*!
 * IE-Checker v1.0.1
 * https://github.com/Unk/IE-Checker
 *
 * Author : Naram Kim ( a.k.a. Unknown )
 * Email : unknown@grotesq.com
 *
 * Copyright 2007-2016 The GrotesQ
 * Released under the MIT license
 *
 * Date: 2016-09-19 00:46
 */
;( function() {
	var ua = navigator.userAgent.toLowerCase();
	var latest = 14;

	function addClass( version ) {
		var classNames = '';
		classNames += ' is-ie';
		classNames += ' ie' + version;
		for( var i = version + 1; i <= latest; i++ ) {
			classNames +=  ' lt-ie' + i;
		}
		document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
	}

	if( /edge\/([0-9]{1,}[\.0-9]{0,})/.test( ua ) ) {
		ua = /edge\/([0-9]{1,}[\.0-9]{0,})/.exec( ua );
		if( ua ) {
			var version = parseInt( ua[ 1 ] );
		}

		addClass( version );
	}
	else if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
		var version = 11;
		ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
		if( ua ) {
			var version = parseInt( ua[ 1 ] );
		}
		
		addClass( version );
	}
} )();