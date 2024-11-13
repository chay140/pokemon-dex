import { configureStore } from "@reduxjs/toolkit";
import pokemonSelectorSlice from "../slices/PokemonSelectorSlice";

// RTK store
const store = configureStore({
    reducer: {
       pokemonSelector: pokemonSelectorSlice,
    }
});

export default store;