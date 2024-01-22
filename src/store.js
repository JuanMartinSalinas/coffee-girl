import {create} from "zustand";

export const useLanguageStore = create((set) => {
    return {
        english: true,

        changeLanguage: () => {
            set({english:!english})
        }
    }
});