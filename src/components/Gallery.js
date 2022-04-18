import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Gallery({ galleryItems, responsive }) {

	return (
		<div id='gallery-container'>
			{galleryItems.length > 0 && (
				<AliceCarousel
					items={galleryItems}
					responsive={responsive}
					autoPlayInterval={3300}
					autoPlayDirection='ltr'
					autoPlay={true}
					fadeOutAnimation={true}
					mouseTrackingEnabled={true}
					disableAutoPlayOnAction={true}
					infinite={true}
					autoHeight={true}
				/>
			)}
		</div>
	);
}

export default Gallery;
