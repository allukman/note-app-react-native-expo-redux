import { createSlice } from "@reduxjs/toolkit";
import jsonServer from "../../../api/jsonServer";

export const noteSlice = createSlice({
    name: 'note',
    initialState: [],
    reducers: {
        setNotes: (state, action) => {
            return action.payload;
        },
        deleteNote: (state, action) => {
            return state.filter((note) => note.id !== action.payload)
        },
        editNote: (state, action) => { 
            return state.map((note) =>
                note.id === action.payload.id ? action.payload : note
            )
        },
    },
});

export const { setNotes, deleteNote, editNote } = noteSlice.actions;

export const getNotes = () => async (dispatch) => {
    const response = await jsonServer.get('/notes');
    dispatch(setNotes(response.data));
}

export const addNote = (title, content, backgroundColor, callback) => async (
    dispatch
  ) => {
    await jsonServer.post('/notes', { title, content, backgroundColor });
    if (callback) {
      callback();
    }
  };
  
  export const removeNote = (id) => async (dispatch) => {
    await jsonServer.delete(`/notes/${id}`);
    dispatch(deleteNote(id));
  };
  
  export const updateNote = (id, title, content, backgroundColor, callback) => async (
    dispatch
  ) => {
    await jsonServer.put(`/notes/${id}`, { title, content, backgroundColor });
    dispatch(editNote({
      id,
      title,
      content,
      backgroundColor
    }));
    if (callback) {
      callback();
    }
  };
  
  export default noteSlice.reducer;