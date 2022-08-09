import { createSlice } from "@reduxjs/toolkit";

const today = new Date();
const mouth = today.getMonth()+1;
const date = today.getDate();
const zeroMonth = (mouth<10)?'0'+parseInt(mouth):mouth;
const zeroDate = (date<10)?'0'+parseInt(date):date;

const initialDate = `${today.getFullYear()}-${zeroMonth}-${zeroDate}`
const initialState = {
    post: {
        postId: "",
        username: "",
        createdAt: initialDate,
        title: "",
        done: 0
    }
}

const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        editPost: (state, action) => {
            const {name:keyword, currentValue} = action.payload;
            const newState={...state.post, [keyword]: currentValue};
            console.log(newState);

            state.post = newState;
        }
    }
})

export const { editPost } = postsSlice.actions;
export default postsSlice.reducer;