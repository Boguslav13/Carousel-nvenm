function SlideShow( id , step )
{
	let Sliders = document.getElementById( id ).querySelectorAll( 'div.Slide' );
	let SlidersCount = Sliders.length - 1;

	if( step == '-1' )
	{
		document.getElementById( id ).insertBefore( Sliders[ SlidersCount ] , document.getElementById( id ).childNodes[ 0 ] );
	} else {
		document.getElementById( id ).appendChild( Sliders[ 0 ] );
	}

}
