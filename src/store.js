import {create} from "zustand";

export const useFavoriteStore = create((set) => {
    return {
        favoriteBooks: [],

        addFavorites: async () => {
            set(
                {questions: [{
                    "id": "/works/OL7545594W",
                    "author": [
                        "Barclay, Florence L."
                    ],
                    "cover_id": 1788645,
                    "edition_count": 4,
                    "first_publish_year": 1908,
                    "title": "The wheels of time"
                }]}
            )
        },
        deleteFavorites: () => {
            set(state => favoriteBooks.filter(state => state.id))
        },
        
    }
});