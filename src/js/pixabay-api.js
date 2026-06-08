import axios from 'axios';

const API_KEY = "56179959-a7008e00e45022e107cf5162b";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15,
        },
    });

    return response.data;
}