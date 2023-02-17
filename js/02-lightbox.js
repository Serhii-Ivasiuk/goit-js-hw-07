import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkpup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkpup(items) {
	return items
		.map(
			({ original, preview, description }) => `
				  <li>
						<a class="gallery__item" href="${original}">
				    	<img class="gallery__image" src="${preview}" alt="${description}" />
				  	</a>
					</li>
				`
		)
		.join('');
}

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});
