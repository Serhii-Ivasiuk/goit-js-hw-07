import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkpup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkpup(items) {
	return items
		.map(
			({ original, preview, description }) => `
			<div class="gallery__item">
		  	<a class="gallery__link" href="${original}">
			 		<img
				  class="gallery__image"
				  src="${preview}"
				  data-source="${original}"
				  alt="${description}"
			   	/>
		   	</a>
	  	</div>
			`
		)
		.join('');
}

function onGalleryItemClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== 'IMG') return;

	const targetOriginalImageUrl = evt.target.dataset.source;

	const imageInstance = basicLightbox.create(
		`<img width="1280" height="852" src="${targetOriginalImageUrl}">`,
		{
			onShow: () => window.addEventListener('keydown', onEscapeKeydown),
			onClose: () => window.removeEventListener('keydown', onEscapeKeydown),
		}
	);

	imageInstance.show();

	function onEscapeKeydown(evt) {
		if (evt.code === 'Escape') imageInstance.close();
	}
}
