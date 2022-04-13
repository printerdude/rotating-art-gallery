import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Gallery(
    {galleryItems, 
    setGalleryItems, 
    responsive, 
}) {
	return (
		<div>
			Gallery
			<div>
				{galleryItems.length > 0 && (
					<AliceCarousel
						items={galleryItems}
						responsive={responsive}
						autoPlayInterval={2000}
						autoPlayDirection='rtl'
						autoPlay={true}
						fadeOutAnimation={true}
						mouseTrackingEnabled={true}
						disableAutoPlayOnAction={true}
					/>
				)}
			</div>
		</div>
	);
}

export default Gallery;