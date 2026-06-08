import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;
const sort_page = 15;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
    event.preventDefault();

    query = event.currentTarget.elements.searchText.value.trim();

    if (!query) {
        return;
    }

    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        if (data.hits.length === 0) {
            iziToast.error({
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
            });

            return;
        }

        totalHits = data.totalHits;

        createGallery(data.hits);

        const totalPages = Math.ceil(totalHits / sort_page);

        if (totalPages > 1) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again.',
        });
    } finally {
        hideLoader();
    }
}

async function handleLoadMore() {
    page += 1;

    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        createGallery(data.hits);

        smoothScroll();

        const totalPages = Math.ceil(totalHits / PER_PAGE);

        if (page >= totalPages) {
            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again.',
        });
    } finally {
        hideLoader();
    }
}

function smoothScroll() {
    const card = document.querySelector('.gallery-item');

    if (!card) {
        return;
    }

    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}
