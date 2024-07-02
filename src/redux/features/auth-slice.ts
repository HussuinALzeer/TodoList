import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define your card type
type Card = {
    cardid: number;
    text: string;
    date: string;
    stat: string;
};

// Define initial state
const initialState: Card[] = [
    {
        cardid: 1,
        text: "i want to learn how to swim",
        date: "04.06.2024",
        stat: "working on it"
    },
    {
        cardid: 0,
        text: "i want to read a new book",
        date: "01.05.2023",
        stat: "done"
    }
];

// Create slice
const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addcard: (state, action: PayloadAction<Card>) => {
            state.unshift(action.payload); // Mutating state directly here, not recommended
        },
        removeEntity: (state, action: PayloadAction<number>) => {
            const idToRemove = action.payload;
            return state.filter((card) => card.cardid !== idToRemove);
        }
    }
});

// Export actions and reducer
export const { addcard, removeEntity } = cardsSlice.actions;
export default cardsSlice.reducer;
