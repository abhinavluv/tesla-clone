import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ['Model S', 'Model Y', 'Model 3', 'Model X'],
};

// this will manipulate state, add or remove, it will have actions
const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
});

// this will fetch cars from state using slice created above
export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
