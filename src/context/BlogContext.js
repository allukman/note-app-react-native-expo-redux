import CreateDataContext from "./CreateDataContext";
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case  'get_notes':
      return action.payload;
    case 'delete_note':
      return state.filter((notes) => notes.id !== action.payload);
    case 'edit_note':
      return state.map( notes => {
        return notes.id === action.payload.id ? action.payload : notes;
      });
    default:
      return state;
  }
};

const getNotes = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/notes');

    dispatch({ type: 'get_notes', payload: response.data })
  }
}

const addNote = () => {
  return async (title, content, backgroundColor, callback) => {
    await jsonServer.post('/notes', { title, content, backgroundColor });

    if (callback) {
      callback()
    }
  };
};

const deleteNote = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/notes/${id}`);

    dispatch({ type: "delete_note", payload: id });
  };
};

const editNote = (dispatch) => {
  return async (id, title, content, backgroundColor,callback) => {
    await jsonServer.put(`/notes/${id}`, {title, content, backgroundColor} )

    dispatch({type: 'edit_note', payload: { id, title, content }});
    callback();
    if (callback) {
      callback()
    }
  }
}

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addNote, deleteNote, editNote, getNotes },
  []
);
