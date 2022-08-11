import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checklist: {
        chk1Text: ""
    }
}

export const checklistSlice = createSlice({
    name: "checklists",
    initialState,
    reducers: {
        editChecklist: (state, action) => {
            const {currentValue, name} = action.payload;
            const currText = name + "Text"
            const newState = {...state.checklist, [name]: 0, [currText]: currentValue};

            state.checklist = newState;
        }
    }
})

export const { editChecklist } = checklistSlice.actions;
export default checklistSlice.reducer;