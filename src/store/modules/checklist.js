import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    checklist: {
        chk1Text: ""
    }
}
export const patchChecklistThunk = createAsyncThunk(
    "patch",
    async (payload, api) => {
        console.log(payload, api);
        try {
            const data = await axios.patch("http://localhost:3001/checklist?postId=6f-s9ewv0n", payload)
            return data
            // return api.fulfillWithValue(data.data)
        } catch(err) {
            return api.rejectWithValue(err)
        }
    } 
)

export const checklistSlice = createSlice({
    name: "checklists",
    initialState: { list: [{ id: '3423423423t6sd', chkchk: 0 }] },
    reducers: {
        editChecklist: (state, action) => {
            const {idx: idx, currentValue} = action.payload;
            const newState={...state.checklist, "chkText": currentValue, idx: idx};
            
            // console.log(newState);

            state.checklist = newState;
        },
        patchChecklist: (state, action) => {
        }
    },
    extraReducers: (builder) => {
        builder.addCase(patchChecklistThunk.fulfilled, (state, action) => {
            const newList = state.list.map((el) => {
                return el.id === action.payload.id ? action.payload : el;
            })
            state.list = newList;
        })
    }
})

export const { editChecklist } = checklistSlice.actions;
export default checklistSlice.reducer;