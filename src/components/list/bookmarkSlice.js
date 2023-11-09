import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookmarkList: [
		
	],
};

const bookmarkSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		addbookmarkList: (state, { payload: item }) => {
			const targetItem = state.bookmarkList.find(bookmark => bookmark.id === item.id);
			if (targetItem) {
				return;
			} else {
				state.bookmarkList.push(item);
			}
		},
		removebookmarkList: (state, { payload: id }) => {
			const newbookmarkList = state.bookmarkList.filter(bookmark => bookmark.id !== id);
			state.bookmarkList = newbookmarkList;
		},
	}
});

export const { addbookmarkList, removebookmarkList } = bookmarkSlice.actions;

export const selectBookmarkList = state => state.bookmark.bookmarkList;

export default bookmarkSlice.reducer;