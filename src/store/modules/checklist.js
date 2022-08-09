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
            const {name:chkNum, currentValue} = action.payload;
            const newState={...state.checklist, [chkNum+"Text"]: currentValue};
            console.log(newState);

            state.checklist = newState;
        }
    }
})

export const { editChecklist } = checklistSlice.actions;
export default checklistSlice.reducer;