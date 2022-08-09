import { configureStore } from '@reduxjs/toolkit';
import posts from '../modules/posts';
import comments from '../modules/comments';
import checklist from '../modules/checklist';

const store = configureStore({
    reducer: {
        posts,
        comments,
        checklist
    }
})

export default store;