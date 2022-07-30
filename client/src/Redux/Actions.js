import { GET_ALL_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './Types'
import axios from 'axios'
import { response } from 'express'

export const getAllBooks = async (dispatch) => {
  try{
    const respone = await axios.get("http://localhost:2000/book/Get")
    dispatch({ 
      type : GET_ALL_BOOKS,
      payload : response.data.book,
    })
  } catch(error) {
    console.log('error');
  }
}

export const deleteBook = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:2000/book/Delete/${id}`);
    alert(response.data.msg);
    navigate("/store");
  } catch (error) {
    console.log("error");
  }
};

export const updateBook = (id, bookInfo, nav) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:2000/book/Update/${id}`,
      bookInfo
    );
    nav('/store')
  } catch (error) {
    console.log("error");
  }
};
export const addBook = (book, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:2000/Add/", book);
    navigate("/");
  } catch (error) {
    console.log("error");
  }
};