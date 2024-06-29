
import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            const MAX_VALUE = 5;
            if (state.count >= MAX_VALUE) {
                return;
            }
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count <= 0) {
                return;
            }
            state.count -= 1;
        },
        changeValue: (state, data) => {
            if(data.payload) {
                state.count = Number(data.payload);
            } else {
                state.count = '';
            }
        }
    }
});

export const { increment, decrement, changeValue } = CounterSlice.actions;
export default CounterSlice.reducer;